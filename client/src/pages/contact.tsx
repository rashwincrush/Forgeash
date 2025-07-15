import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--executive-navy-dark)] via-[var(--executive-navy)]/70 to-[var(--executive-navy-dark)] text-white">
      <Navigation />
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-6xl font-bold text-transparent bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] bg-clip-text">Contact Us</h1>
            <p className="mt-4 text-xl text-white/80 max-w-3xl mx-auto">Have a project in mind or just want to say hello? We'd love to hear from you.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
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
                  <label htmlFor="message" className="sr-only">Message</label>
                  <Textarea name="message" id="message" rows={5} placeholder="Your Message" className="bg-white/5 border-white/20"></Textarea>
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] text-white luxury-glow shadow-xl px-8 py-3 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 border border-white/20">
                  Submit
                </Button>
              </form>
            </div>

            <div className="space-y-8">
                <div className="flex items-start gap-6">
                    <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                        <Mail className="h-8 w-8 text-[var(--executive-sapphire)]" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">Email</h3>
                        <p className="text-white/70 text-lg">General Inquiries</p>
                        <a href="mailto:admin@ashwinai.in" className="text-lg text-[var(--executive-amethyst)] hover:underline">admin@ashwinai.in</a>
                    </div>
                </div>
                <div className="flex items-start gap-6">
                    <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                        <Phone className="h-8 w-8 text-[var(--executive-sapphire)]" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">Phone</h3>
                        <p className="text-white/70 text-lg">Mon-Fri from 9am to 5pm</p>
                        <a href="tel:9884047475" className="text-lg text-[var(--executive-amethyst)] hover:underline">+91 98840 47475</a>
                    </div>
                </div>
                <div className="flex items-start gap-6">
                    <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                        <MessageCircle className="h-8 w-8 text-[var(--executive-sapphire)]" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">WhatsApp</h3>
                        <p className="text-white/70 text-lg">Click to chat with us</p>
                        <a href="https://wa.me/919884047475" target="_blank" rel="noopener noreferrer" className="text-lg text-[var(--executive-amethyst)] hover:underline">Chat on WhatsApp</a>
                    </div>
                </div>
                <div className="flex items-start gap-6">
                    <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                        <MapPin className="h-8 w-8 text-[var(--executive-sapphire)]" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">Office</h3>
                        <p className="text-white/70 text-lg">Registered Office</p>
                        <p className="text-lg text-[var(--executive-amethyst)]">Chennai, Tamil Nadu</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
