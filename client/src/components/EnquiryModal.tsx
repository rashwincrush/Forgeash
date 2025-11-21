import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export type EnquiryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  serviceId: string;
  serviceLabel: string;
  sourcePage?: string;
};

type EnquiryPayload = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  serviceId: string;
  serviceLabel: string;
  sourcePage?: string;
};

function buildWhatsAppText(payload: EnquiryPayload): string {
  const {
    fullName,
    email,
    phone,
    message,
    serviceId,
    serviceLabel,
    sourcePage,
  } = payload;

  const safeName = fullName?.trim() || "Unknown";
  const safeEmail = email?.trim() || "Unknown";
  const safePhone = phone?.trim() || "Unknown";
  const safeLabel = serviceLabel?.trim() || "General Enquiry";
  const safeMessage = message?.trim() || "(no additional message yet)";
  const sourceLine = `Source page: ${sourcePage ?? window.location.pathname}`;

  if (
    serviceId === "websites" ||
    serviceId === "websites_basic" ||
    serviceId === "websites_advanced" ||
    serviceId === "websites_premium"
  ) {
    return [
      "New website enquiry via ForgeAsh site",
      "",
      `Service: ${safeLabel}`,
      "",
      `Name: ${safeName}`,
      `Email: ${safeEmail}`,
      `Phone: ${safePhone}`,
      "",
      "Client message:",
      safeMessage,
      "",
      "To help us understand your website needs:",
      "- Do you have an existing website? (If yes, share the URL)",
      "- What type of business is this for? (clinic, institute, service, etc.)",
      "- Which city/cities do you mainly target? (e.g. Chennai, Bengaluru)",
      "- Do you have content and images ready, or do you need help with that?",
      "",
      sourceLine,
    ].join("\n");
  }

  if (serviceId === "ai_automation") {
    return [
      "New AI automation enquiry via ForgeAsh site",
      "",
      `Service: ${safeLabel}`,
      "",
      `Name: ${safeName}`,
      `Email: ${safeEmail}`,
      `Phone: ${safePhone}`,
      "",
      "Client message:",
      safeMessage,
      "",
      "To help us map the right AI workflows:",
      "- What kind of business or team is this for? (industry + size)",
      "- Which processes are most manual today? (e.g. reports, approvals, data entry)",
      "- What tools do you already use? (CRM, spreadsheets, ERP, etc.)",
      "- Are you mainly looking to save time, reduce errors, or get better visibility?",
      "",
      sourceLine,
    ].join("\n");
  }

  if (serviceId === "saas_mvp_build") {
    return [
      "New SaaS MVP enquiry via ForgeAsh site",
      "",
      `Service: ${safeLabel}`,
      "",
      `Name: ${safeName}`,
      `Email: ${safeEmail}`,
      `Phone: ${safePhone}`,
      "",
      "Client message:",
      safeMessage,
      "",
      "A few quick details about your SaaS idea:",
      "- Who is your primary target user? (e.g. clinics, schools, logistics teams)",
      "- What core problem are you trying to solve?",
      "- Do you already have wireframes or is it still at idea stage?",
      "- What is your ideal launch timeline for an MVP?",
      "",
      sourceLine,
    ].join("\n");
  }

  if (serviceId === "data_dashboards") {
    return [
      "New data dashboards enquiry via ForgeAsh site",
      "",
      `Service: ${safeLabel}`,
      "",
      `Name: ${safeName}`,
      `Email: ${safeEmail}`,
      `Phone: ${safePhone}`,
      "",
      "Client message:",
      safeMessage,
      "",
      "To plan the right dashboards:",
      "- What type of organisation is this for? (clinic chain, logistics firm, school, etc.)",
      "- Which 3–5 KPIs do you want to see every day?",
      "- Where does your data live today? (spreadsheets, CRM, ERP, other tools)",
      "- How often do you currently prepare reports manually?",
      "",
      sourceLine,
    ].join("\n");
  }

  return [
    "New enquiry via ForgeAsh site",
    "",
    `Service: ${safeLabel}`,
    "",
    `Name: ${safeName}`,
    `Email: ${safeEmail}`,
    `Phone: ${safePhone}`,
    "",
    "Client message:",
    safeMessage,
    "",
    "If you can, please share:",
    "- What kind of project are you exploring? (website, AI, SaaS, dashboards)",
    "- What type of business is this for and where are you based?",
    "- Any timeline or budget range we should keep in mind?",
    "",
    sourceLine,
  ].join("\n");
}

export function EnquiryModal({
  isOpen,
  onClose,
  serviceId,
  serviceLabel,
  sourcePage,
}: EnquiryModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors: string[] = [];

    if (!fullName.trim()) errors.push("Please enter your full name.");
    if (!email.trim() || !email.includes("@") || !email.includes(".")) {
      errors.push("Please enter a valid email address.");
    }

    const normalizedPhone = phone.replace(/[^\d]/g, "");
    if (!normalizedPhone || normalizedPhone.length < 8) {
      errors.push("Please enter a valid phone number.");
    }

    if (errors.length > 0) {
      setError(errors.join(" "));
      return;
    }

    setError("");

    const text = buildWhatsAppText({
      fullName,
      email,
      phone,
      message,
      serviceId,
      serviceLabel,
      sourcePage,
    });

    const encodedText = encodeURIComponent(text);

    // TODO: In the future, send this payload to a PHP API endpoint
    // (e.g. https://cr.forgeash.in/api/save_enquiry.php)
    // so the enquiry is stored in a database before opening WhatsApp.

    const whatsappNumber = "916369126439";
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    window.open(waUrl, "_blank");

    setFullName("");
    setEmail("");
    setPhone("");
    setMessage("");

    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-lg rounded-2xl bg-slate-900/90 border border-white/15 shadow-2xl glass-card">
        <div className="px-6 pt-5 pb-4 border-b border-white/10 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-400 mb-1">
              Enquiry
            </p>
            <h2 className="text-lg font-bold text-white">Enquire about {serviceLabel}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white text-sm"
            aria-label="Close enquiry modal"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-6 pb-6 pt-2 space-y-4">
          <div>
            <label
              htmlFor="enquiry-service"
              className="block text-xs font-medium text-slate-300 mb-1"
            >
              Service
            </label>
            <div
              id="enquiry-service"
              className="text-sm text-slate-100 bg-white/5 border border-white/10 rounded-md px-3 py-2"
            >
              {serviceLabel}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="enquiry-full-name"
                className="block text-xs font-medium text-slate-300 mb-1"
              >
                Full name
              </label>
              <Input
                id="enquiry-full-name"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="bg-white/5 border-white/20 text-sm"
                placeholder="Your full name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="enquiry-email"
                className="block text-xs font-medium text-slate-300 mb-1"
              >
                Email address
              </label>
              <Input
                id="enquiry-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/5 border-white/20 text-sm"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="enquiry-phone"
              className="block text-xs font-medium text-slate-300 mb-1"
            >
              Phone number (WhatsApp)
            </label>
            <Input
              id="enquiry-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-white/5 border-white/20 text-sm"
              placeholder="Include country code if outside India"
              required
            />
          </div>

          <div>
            <label
              htmlFor="enquiry-message"
              className="block text-xs font-medium text-slate-300 mb-1"
            >
              Notes / requirements (optional)
            </label>
            <Textarea
              id="enquiry-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-white/5 border-white/20 text-sm min-h-[96px]"
              placeholder="Share any context, timelines, or specific requirements."
            />
          </div>

          {error && <p className="text-xs text-red-400 mt-1">{error}</p>}

          <div className="flex flex-col sm:flex-row justify-end gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={onClose}
              className="border-white/25 text-slate-200 hover:bg-white/10"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              size="sm"
              className="bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] text-white shadow-lg hover:brightness-110"
            >
              Submit Enquiry via WhatsApp
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export { buildWhatsAppText };

