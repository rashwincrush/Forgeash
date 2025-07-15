import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function WorkPage() {
  const allProjects = [
    {
      title: "Digital Marketing for AMET University",
      category: "Digital Marketing",
      description: "We executed a comprehensive digital marketing campaign for AMET University, focusing on SEO, content strategy, and social media engagement to boost online visibility and student enrollment.",
      imageUrl: "/placeholder.jpg", // Replace with actual image path
      link: "/work/amet-university"
    },
    {
      title: "Digital Marketing for AMET University",
      category: "Digital Strategy & SEO",
      description: "We executed a comprehensive digital marketing campaign for AMET University, focusing on SEO, content strategy, and social media engagement to boost online visibility and student enrollment.",
      imageUrl: "/placeholder.jpg", // Replace with actual image path
      link: "/work/amet-university"
    },
    {
      title: "Jay Mahal - Elegant Marriage Hall",
      category: "Website Solutions",
      description: "A stunning, modern website for a premier marriage hall, designed to attract bookings and showcase the venue's elegance.",
      imageUrl: "/placeholder.jpg", // Replace with actual image path
      link: "https://www.jaymahal.in/"
    },
    {
      title: "PR Classes - Excellence in CMA Education",
      category: "Website Solutions",
      description: "An educational platform for aspiring accountants, providing course information, enrollment, and learning resources.",
      imageUrl: "/placeholder.jpg", // Replace with actual image path
      link: "https://prclasses.in/"
    },
    {
      title: "Route Revolution - Your Trusted Route To Success",
      category: "Website Solutions",
      description: "A logistics and courier service website with features for booking, tracking, and managing shipments.",
      imageUrl: "/placeholder.jpg", // Replace with actual image path
      link: "https://routerevolution.in/"
    },
    {
      title: "KON Sun Energy Solutions - Solar Power Made Simple",
      category: "Website Solutions",
      description: "A clean energy company's website, designed to educate customers and generate leads for solar panel installations.",
      imageUrl: "/placeholder.jpg", // Replace with actual image path
      link: "https://konsunenergy.in/"
    },
    {
      title: "Tara's Dental & Aesthetic Center",
      category: "Website Solutions",
      description: "A professional website for a dental clinic, featuring service details, appointment booking, and patient testimonials.",
      imageUrl: "/placeholder.jpg", // Replace with actual image path
      link: "https://tarasdental.in/"
    },
    {
      title: "Nalam & Co - Logistics Services",
      category: "Website Solutions",
      description: "A comprehensive logistics website offering a range of services from household shifting to corporate logistics.",
      imageUrl: "/placeholder.jpg", // Replace with actual image path
      link: "https://nalamnco.in/"
    },
    {
      title: "Bezalel Interiors | The Art of Elegant Living",
      category: "Website Solutions",
      description: "An elegant portfolio website for an interior design firm, showcasing their projects and design philosophy.",
      imageUrl: "/placeholder.jpg", // Replace with actual image path
      link: "https://www.bezalelinterior.com/"
    },
    {
      title: "AMET Alumni Portal",
      category: "Web Applications",
      description: "A comprehensive portal for university alumni to connect, network, and engage with events and opportunities.",
      imageUrl: "/placeholder.jpg", // Replace with actual image path
      link: "https://www.ametalumni.in/"
    }
  ];

  const tabs = ["Digital Marketing", "Website Solutions", "Web Applications"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const filteredProjects = allProjects.filter(project => project.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--executive-navy-dark)] via-[var(--executive-navy)]/70 to-[var(--executive-navy-dark)] text-white">
      <Navigation />
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-6xl font-bold text-transparent bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] bg-clip-text">Our Work</h1>
            <p className="mt-4 text-xl text-white/80 max-w-3xl mx-auto">We partner with ambitious brands to build exceptional digital products and experiences that drive real business results.</p>
          </div>

          <div className="mb-16 flex justify-center">
            <div className="flex items-center gap-4 p-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] text-white shadow-lg'
                      : 'text-[var(--executive-silver)] hover:bg-white/10'
                  }`}>
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-12 md:gap-16">
            {filteredProjects.map((project, index) => (
              <div key={index} className="group grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className={`relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className={`relative ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <p className="text-lg font-semibold text-transparent bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] bg-clip-text mb-2">{project.category}</p>
                  <h2 className="text-4xl font-bold text-white mb-4">{project.title}</h2>
                  <p className="text-white/80 mb-8 leading-relaxed">{project.description}</p>
                  <Button asChild className="bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] text-white luxury-glow shadow-xl px-8 py-3 rounded-xl font-semibold text-sm hover:scale-105 transition-all duration-300 border border-white/20">
                    <a href={project.link}>
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
