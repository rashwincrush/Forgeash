import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function ContactForm() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg shadow-2xl">
      <h2 className="text-3xl font-bold mb-6 text-white">Send a Message</h2>
      <form action="#" method="POST" className="space-y-6">
        <div>
          <label htmlFor="name" className="sr-only">Full Name</label>
          <Input type="text" name="name" id="name" placeholder="Full Name" className="bg-white/5 border-white/20" />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">Email</label>
          <Input type="email" name="email" id="email" placeholder="Email Address" className="bg-white/5 border-white/20" />
        </div>
        <div>
          <label htmlFor="service" className="sr-only">Service of Interest</label>
          <Select name="service">
            <SelectTrigger className="w-full bg-white/5 border-white/20 text-white/70">
              <SelectValue placeholder="Select a service of interest" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ai-implementation">Enterprise AI Implementation</SelectItem>
              <SelectItem value="saas-innovation">SaaS Platform Innovation</SelectItem>
              <SelectItem value="data-analysis">Data Analysis & Visualization</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="message" className="sr-only">Project Details</label>
          <Textarea name="message" id="message" rows={5} placeholder="Tell us about your project, goals, and any specific requirements..." className="bg-white/5 border-white/20"></Textarea>
        </div>
        <Button type="submit" className="w-full bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] text-white luxury-glow shadow-xl px-8 py-3 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 border border-white/20">
          Submit Inquiry
        </Button>
      </form>
    </div>
  );
}
