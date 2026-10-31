import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: "chandan-raj-portfolio",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: "1.0.0",
    features: {
      contactApi: true,
      rateLimiter: true,
      accessibilityReady: true,
    },
  });
}
