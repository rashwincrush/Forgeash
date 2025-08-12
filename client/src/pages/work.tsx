import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
// Removed case-study button and arrow imports
import { useState } from "react";

export default function WorkPage() {
  const allProjects = [
    {
      title: "ForgeCircle - Campus-to-Career Alumni Hub",
      category: "Digital Marketing",
      description: "We executed a comprehensive digital marketing campaign for AMET University, focusing on SEO, content strategy, and social media engagement to boost online visibility and student enrollment.",
      imageUrl: "/placeholder.jpg", // (unused)
      logoSrc: "/src/assets/client-logos/AMET-removebg-preview.png",
      client: "AMET University",
      logoOnly: true
    },
    {
      title: "Digital Marketing for Maersk",
      category: "Digital Marketing",
      description: "",
      imageUrl: "/placeholder.jpg", // (unused)
      logoSrc: "/src/assets/client-logos/Maersk-removebg-preview.png",
      client: "Maersk",
      logoOnly: true
    },
    {
      title: "Jay Mahal - Elegant Marriage Hall",
      category: "Website Solutions",
      description: "A stunning, modern website for a premier marriage hall, designed to attract bookings and showcase the venue's elegance.",
      imageUrl: "/placeholder.jpg", // Replace with actual image path
      link: "https://jaymahal.in/"
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
      link: "https://routerevolution.in/#home"
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
      link: "https://bezalelinterior.com/"
    },
    {
      title: "ForgeCircle — Campus-to-Career Alumni Hub",
      category: "Web Applications",
      description: "ForgeCircle connects students with alumni mentors and career opportunities. Join our campus-to-career alumni network today.",
      imageUrl: "/placeholder.jpg", // Replace with actual image path
      client: "AMET University",
      clientLogoSrc: "/src/assets/client-logos/AMET-removebg-preview.png",
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

          <div className={`grid gap-12 md:gap-16 ${activeTab === "Website Solutions" ? "md:grid-cols-2" : ""} ${activeTab === "Digital Marketing" ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" : ""}`}>
            {filteredProjects.map((project: any, index) => {
              const isDigital = project.category.toLowerCase().includes("digital");
              const isWebsite = project.category === "Website Solutions";
              const isExternal = typeof project.link === "string" && project.link.startsWith("http");
              const host = isExternal ? new URL(project.link).hostname.replace(/^www\./, "") : "";

              const CardInner = (
                <div className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  {isDigital ? (
                    <div className="flex items-center justify-center">
                      {project.logoSrc && (
                        <img
                          src={project.logoSrc}
                          alt={`${project.client || project.title} logo`}
                          className="h-14 sm:h-20 w-auto object-contain rounded-lg bg-white p-2 shadow-md"
                        />
                      )}
                    </div>
                  ) : (
                    <div>
                      {isWebsite ? (
                        <div className="flex items-start gap-5">
                          <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--executive-amethyst)]/30 to-[var(--executive-sapphire)]/30 ring-1 ring-white/15 shadow-md">
                            <span className="text-white font-bold">{(host || project.title).charAt(0).toUpperCase()}</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between gap-3">
                              <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
                              {host && (
                                <span className="inline-flex items-center gap-2 text-sm text-white/80 bg-white/10 px-3 py-1 rounded-lg border border-white/10">
                                  {host}
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                                    <path d="M13 5h6v6h-2V8.41l-7.29 7.3-1.42-1.42 7.3-7.29H13V5z" />
                                  </svg>
                                </span>
                              )}
                            </div>
                            <p className="mt-2 text-white/75 leading-relaxed">{project.description}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/70">Website</span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <p className="text-lg font-semibold text-transparent bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] bg-clip-text mb-2">{project.category}</p>
                          <h2 className="text-4xl font-bold text-white mb-4">{project.title}</h2>
                          <p className="text-white/80 leading-relaxed">{project.description}</p>
                          {project.category === "Web Applications" && project.client && (
                            <div className="mt-4 flex items-center gap-3">
                              {project.clientLogoSrc && (
                                <img src={project.clientLogoSrc} alt={`${project.client} logo`} className="h-8 w-auto object-contain" />
                              )}
                              <p className="text-white/80"><span className="text-white/60">Client:</span> {project.client}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );

              return isExternal ? (
                <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                  {CardInner}
                </a>
              ) : (
                <div key={index}>{CardInner}</div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
