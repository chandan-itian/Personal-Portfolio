import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

// In-memory rate limiter
const rateLimitMap = new Map<string, { count: number; firstRequest: number }>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW =
  process.env.NODE_ENV === "production" && !process.env.PLAYWRIGHT_TEST
    ? 5
    : 100;

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now - record.firstRequest > RATE_LIMIT_WINDOW_MS) {
      rateLimitMap.delete(ip);
    }
  }
}, 5 * 60 * 1000);

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your name (at least 2 characters).")
    .max(100, "Name cannot exceed 100 characters.")
    .trim(),
  email: z
    .string()
    .email("Please enter a valid email address.")
    .max(150, "Email cannot exceed 150 characters.")
    .trim(),
  company: z
    .string()
    .max(100, "Company name cannot exceed 100 characters.")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long.")
    .max(2000, "Message cannot exceed 2000 characters.")
    .trim(),
  _gotcha: z
    .string()
    .max(0, "Bot submission blocked.")
    .optional()
    .or(z.literal("")),
});

export async function POST(req: Request) {
  try {
    // 1. Parse Payload First
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, message: "Invalid request payload." },
        { status: 400 }
      );
    }

    // 2. Honeypot check for bots (trap immediately before consuming tokens)
    if (body._gotcha && String(body._gotcha).length > 0) {
      // Quietly return 200 to confuse bots
      return NextResponse.json(
        { success: true, message: "Message received." },
        { status: 200 }
      );
    }

    // 3. IP Rate Limiting
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";

    const now = Date.now();
    const clientRecord = rateLimitMap.get(ip);

    if (clientRecord) {
      if (now - clientRecord.firstRequest < RATE_LIMIT_WINDOW_MS) {
        if (clientRecord.count >= MAX_REQUESTS_PER_WINDOW) {
          return NextResponse.json(
            {
              success: false,
              message: "Too many messages sent. Please wait a few minutes before trying again.",
            },
            { status: 429, headers: { "Retry-After": "900" } }
          );
        }
        clientRecord.count += 1;
      } else {
        rateLimitMap.set(ip, { count: 1, firstRequest: now });
      }
    } else {
      rateLimitMap.set(ip, { count: 1, firstRequest: now });
    }

    // 4. Validate Fields with Zod
    const parseResult = contactSchema.safeParse(body);

    if (!parseResult.success) {
      const fieldErrors = parseResult.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          message: "Please check your input fields.",
          errors: fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, company, message } = parseResult.data;

    // 5. Email delivery handling
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || "chandan.raj@example.com";

    if (smtpHost && smtpUser && smtpPass) {
      // Production SMTP delivery
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"${name} (Portfolio Inquiry)" <${smtpUser}>`,
        replyTo: email,
        to: recipientEmail,
        subject: `[Portfolio Inquiry] From ${name}${company ? ` (${company})` : ""}`,
        text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "Not provided"}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: sans-serif; line-height: 1.6; color: #1e1e1e;">
            <h2 style="color: #d81b60;">New Portfolio Message for Chandan Raj</h2>
            <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
            <p><strong>Company:</strong> ${company || "Not specified"}</p>
            <hr style="border: 0; border-top: 1px solid #eee;" />
            <p><strong>Message:</strong></p>
            <blockquote style="background: #fdfbf7; padding: 16px; border-left: 4px solid #f48fb1; margin: 0;">
              ${message.replace(/\n/g, "<br>")}
            </blockquote>
          </div>
        `,
      });

      return NextResponse.json(
        {
          success: true,
          message: "Thank you! Your message has been sent successfully. Chandan will get back to you soon.",
          mode: "smtp",
        },
        { status: 200 }
      );
    } else {
      // Development / preview fallback mode
      console.log("-----------------------------------------");
      console.log("📨 [CONTACT FORM SUBMISSION RECEIVED]");
      console.log(`From: ${name} <${email}>`);
      console.log(`Company: ${company || "None"}`);
      console.log(`Message: ${message}`);
      console.log("Note: SMTP credentials not configured. Provide SMTP_HOST in .env.local to enable live delivery.");
      console.log("-----------------------------------------");

      return NextResponse.json(
        {
          success: true,
          message: "Thank you, " + name + "! Your message was received successfully.",
          mode: "preview",
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while sending your message. Please try again later or reach out directly via email.",
      },
      { status: 500 }
    );
  }
}
