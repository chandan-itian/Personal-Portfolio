"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
  _gotcha: string; // Honeypot bot trap
}

interface ValidationErrors {
  name?: string[];
  email?: string[];
  company?: string[];
  message?: string[];
}

export function ContactSection() {
  const { heading, subheading, socials, location, email: directEmail } = PORTFOLIO_DATA.contact;

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    message: "",
    _gotcha: "",
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");

  const validateFrontend = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (!form.name.trim() || form.name.trim().length < 2) {
      newErrors.name = ["Please enter your name (at least 2 characters)."];
    } else if (form.name.trim().length > 100) {
      newErrors.name = ["Name must be under 100 characters."];
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim() || !emailRegex.test(form.email.trim())) {
      newErrors.email = ["Please enter a valid email address."];
    }

    if (form.company && form.company.length > 100) {
      newErrors.company = ["Company name cannot exceed 100 characters."];
    }

    if (!form.message.trim() || form.message.trim().length < 10) {
      newErrors.message = ["Message must be at least 10 characters long."];
    } else if (form.message.trim().length > 2000) {
      newErrors.message = ["Message cannot exceed 2000 characters."];
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");
    setStatusMessage("");

    if (!validateFrontend()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitStatus("success");
        setStatusMessage(
          data.message ||
            "Thank you! Your message has been sent successfully. Chandan will get back to you soon."
        );
        setForm({
          name: "",
          email: "",
          company: "",
          message: "",
          _gotcha: "",
        });
        setErrors({});
      } else {
        setSubmitStatus("error");
        setStatusMessage(
          data.message ||
            "Unable to send message right now. Please try again or reach out directly."
        );
        if (data.errors) {
          setErrors(data.errors);
        }
      }
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitStatus("error");
      setStatusMessage(
        "Network error. Please check your connection or send an email directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 scroll-mt-20 border-t border-stone-200/50"
      aria-labelledby="contact-heading"
    >
      <div className="text-center mb-12 sm:mb-16">
        <span className="font-sans-clean text-xs uppercase tracking-[0.25em] text-stone-500 font-semibold block mb-2">
          GET IN TOUCH
        </span>
        <h2
          id="contact-heading"
          className="font-handwriting text-[36px] sm:text-[46px] md:text-[50px] font-bold text-stone-900 leading-tight"
        >
          {heading}
        </h2>
        <p className="font-sans-clean text-stone-600 text-sm sm:text-base max-w-xl mx-auto mt-2">
          {subheading}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Left Column: Direct Links & Info */}
        <div className="md:col-span-5 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-300 shadow-[0_4px_16px_rgba(0,0,0,0.03)] space-y-4">
            <h3 className="font-sans-clean text-lg font-bold text-stone-900">
              Direct Channels
            </h3>
            <p className="font-sans-clean text-xs text-stone-500 leading-relaxed">
              Prefer direct outreach? You can email me or connect through any of my public profiles below.
            </p>

            <div className="space-y-3 pt-2">
              <a
                href={`mailto:${directEmail}`}
                className="flex items-center space-x-3 text-stone-700 hover:text-pink-600 transition-colors text-sm font-sans-clean group"
              >
                <div className="p-2 rounded-lg bg-[#F8CAD5]/50 group-hover:bg-[#F8CAD5] transition-colors">
                  <Mail className="w-4 h-4 text-stone-900" />
                </div>
                <div>
                  <span className="block text-xs text-stone-400 font-medium">Email</span>
                  <span className="font-medium text-stone-800">{directEmail}</span>
                </div>
              </a>

              <div className="flex items-center space-x-3 text-stone-700 text-sm font-sans-clean">
                <div className="p-2 rounded-lg bg-[#CCE7F9]/50">
                  <MapPin className="w-4 h-4 text-stone-900" />
                </div>
                <div>
                  <span className="block text-xs text-stone-400 font-medium">Location</span>
                  <span className="font-medium text-stone-800">{location}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 flex items-center space-x-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full text-xs font-sans-clean font-semibold bg-[#F5F2EB] hover:bg-stone-200 text-stone-800 transition-colors border border-stone-200"
                  aria-label={social.label}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#F5F2EB]/80 border border-stone-200 text-xs font-sans-clean text-stone-600 leading-relaxed">
            <span className="font-bold text-stone-800 block mb-1">🔒 Privacy Note:</span>
            Submissions are transmitted securely via server-side validation with rate limiting and bot spam mitigation.
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="md:col-span-7">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-300 shadow-[0_4px_16px_rgba(0,0,0,0.03)] space-y-4"
          >
            {/* Honeypot field (hidden from real users, traps bots) */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="_gotcha">Do not fill this field</label>
              <input
                id="_gotcha"
                type="text"
                name="_gotcha"
                value={form._gotcha}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Accessible Live Status Banner */}
            <div aria-live="polite" className="min-h-[1.5rem]">
              {submitStatus === "success" && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-sm flex items-start space-x-2 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Message Sent!</span>
                    <span>{statusMessage}</span>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-300 text-rose-900 text-sm flex items-start space-x-2 animate-in fade-in">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Submission Problem</span>
                    <span>{statusMessage}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block font-sans-clean text-xs font-bold uppercase tracking-wider text-stone-700 mb-1"
              >
                Full Name <span className="text-pink-600">*</span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                maxLength={100}
                placeholder="Jane Doe"
                className={`w-full px-4 py-2.5 rounded-xl border font-sans-clean text-sm bg-[#FDFBF7] text-stone-900 focus:bg-white transition-colors ${
                  errors.name ? "border-rose-400 bg-rose-50/20" : "border-stone-300"
                }`}
              />
              {errors.name && (
                <p className="font-sans-clean text-xs text-rose-600 mt-1">
                  {errors.name[0]}
                </p>
              )}
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block font-sans-clean text-xs font-bold uppercase tracking-wider text-stone-700 mb-1"
              >
                Email Address <span className="text-pink-600">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                maxLength={150}
                placeholder="jane@example.com"
                className={`w-full px-4 py-2.5 rounded-xl border font-sans-clean text-sm bg-[#FDFBF7] text-stone-900 focus:bg-white transition-colors ${
                  errors.email ? "border-rose-400 bg-rose-50/20" : "border-stone-300"
                }`}
              />
              {errors.email && (
                <p className="font-sans-clean text-xs text-rose-600 mt-1">
                  {errors.email[0]}
                </p>
              )}
            </div>

            {/* Company (Optional) */}
            <div>
              <label
                htmlFor="company"
                className="block font-sans-clean text-xs font-bold uppercase tracking-wider text-stone-700 mb-1"
              >
                Company / Organization <span className="text-stone-400 font-normal">(Optional)</span>
              </label>
              <input
                id="company"
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                maxLength={100}
                placeholder="Acme Inc."
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 font-sans-clean text-sm bg-[#FDFBF7] text-stone-900 focus:bg-white transition-colors"
              />
              {errors.company && (
                <p className="font-sans-clean text-xs text-rose-600 mt-1">
                  {errors.company[0]}
                </p>
              )}
            </div>

            {/* Message Input */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label
                  htmlFor="message"
                  className="block font-sans-clean text-xs font-bold uppercase tracking-wider text-stone-700"
                >
                  Message <span className="text-pink-600">*</span>
                </label>
                <span className="text-[11px] font-sans-clean text-stone-400">
                  {form.message.length}/2000
                </span>
              </div>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
                maxLength={2000}
                placeholder="Tell me about your idea, project, or just say hello..."
                className={`w-full px-4 py-2.5 rounded-xl border font-sans-clean text-sm bg-[#FDFBF7] text-stone-900 focus:bg-white transition-colors ${
                  errors.message ? "border-rose-400 bg-rose-50/20" : "border-stone-300"
                }`}
              />
              {errors.message && (
                <p className="font-sans-clean text-xs text-rose-600 mt-1">
                  {errors.message[0]}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-xl font-sans-clean text-sm font-semibold text-stone-900 bg-[#F8CAD5] hover:bg-[#F99EB6] active:scale-[0.99] transition-all flex items-center justify-center space-x-2 border border-stone-800 disabled:opacity-50 disabled:cursor-not-allowed shadow-xs"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-stone-900" />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 text-stone-900" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
