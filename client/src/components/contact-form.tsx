import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { buildWhatsAppText } from "@/components/EnquiryModal";

type ServiceOption = {
  id: string;
  label: string;
};

const SERVICE_OPTIONS: ServiceOption[] = [
  { id: "websites", label: "High-Performance Business Websites" },
  { id: "ai_automation", label: "AI Systems & Automation" },
  { id: "saas_mvp_build", label: "SaaS MVP Build" },
  { id: "data_dashboards", label: "Data Dashboards & Automation" },
  { id: "not_sure", label: "Not sure yet / Need guidance" },
];

export function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceId, setServiceId] = useState<string>("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const errors: string[] = [];

    if (!fullName.trim()) errors.push("Please enter your full name.");
    if (!email.trim() || !email.includes("@") || !email.includes(".")) {
      errors.push("Please enter a valid email address.");
    }

    const normalizedPhone = phone.replace(/[^\d]/g, "");
    if (!normalizedPhone || normalizedPhone.length < 8) {
      errors.push("Please enter a valid phone number.");
    }

    if (!serviceId) {
      errors.push("Please select a service or area you&apos;re interested in.");
    }

    if (errors.length > 0) {
      setError(errors.join(" "));
      return;
    }

    setError("");

    const selected = SERVICE_OPTIONS.find((option) => option.id === serviceId);
    const effectiveServiceId = serviceId === "not_sure" ? "general" : serviceId;
    const effectiveServiceLabel =
      serviceId === "not_sure" ? "Not sure yet / Need guidance" : selected?.label || "General Enquiry";

    const text = buildWhatsAppText({
      fullName,
      email,
      phone,
      message,
      serviceId: effectiveServiceId,
      serviceLabel: effectiveServiceLabel,
      sourcePage: "/contact",
    });

    const encodedText = encodeURIComponent(text);
    const whatsappNumber = "916369126439";
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    window.open(waUrl, "_blank");

    setFullName("");
    setEmail("");
    setPhone("");
    setServiceId("");
    setMessage("");
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-7 backdrop-blur-lg shadow-2xl space-y-4">
      <div className="space-y-1">
        <h2 className="text-xl md:text-2xl font-semibold text-white">Project &amp; service enquiry</h2>
        <p className="text-sm text-white/70">
          Choose the area you&apos;re exploring and share a bit of context. Your enquiry will open directly in WhatsApp so
          we can continue the conversation there.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-full-name" className="sr-only">
              Full Name
            </label>
            <Input
              type="text"
              id="contact-full-name"
              placeholder="Full Name"
              className="bg-white/5 border-white/20"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="sr-only">
              Email
            </label>
            <Input
              type="email"
              id="contact-email"
              placeholder="Email Address"
              className="bg-white/5 border-white/20"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-phone" className="sr-only">
            Phone (WhatsApp)
          </label>
          <Input
            type="tel"
            id="contact-phone"
            placeholder="Phone number (preferably WhatsApp)"
            className="bg-white/5 border-white/20"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="contact-service" className="sr-only">
            Service of Interest
          </label>
          <Select
            value={serviceId}
            onValueChange={(value) => setServiceId(value)}
          >
            <SelectTrigger id="contact-service" className="w-full bg-white/5 border-white/20 text-white/80">
              <SelectValue placeholder="Select a service or area of interest" />
            </SelectTrigger>
            <SelectContent>
              {SERVICE_OPTIONS.map((option) => (
                <SelectItem key={option.id} value={option.id}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor="contact-message" className="sr-only">
            Project Details
          </label>
          <Textarea
            id="contact-message"
            rows={5}
            placeholder="Tell us about your project, goals, current setup, and any timelines or constraints..."
            className="bg-white/5 border-white/20"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>

        {error && <p className="text-xs text-red-400">{error}</p>}

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] text-white luxury-glow shadow-xl px-8 py-3 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 border border-white/20"
        >
          Submit Enquiry via WhatsApp
        </Button>
      </form>
    </div>
  );
}
