import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
// Removed case-study button and arrow imports
import { useState, useEffect } from "react";
import { applySeo, applyBreadcrumbJsonLd } from "@/lib/seo";

export default function WorkPage() {
  useEffect(() => {
    applySeo({
      title: "Our Work – Websites, Dashboards & Digital Projects by ForgeAsh",
      description:
        "View a sample of ForgeAsh projects including high-performance websites, logistics and solar sites, alumni platforms and marketing work for clients in Chennai, Tamil Nadu and other Indian cities.",
      keywords: [
        "web development portfolio Chennai",
        "website projects Chennai",
        "ForgeAsh work",
      ],
      canonicalPath: "/work",
    });
    applyBreadcrumbJsonLd("work", [
      { name: "Home", path: "/" },
      { name: "Our Work", path: "/work" },
    ]);
  }, []);

  const allProjects = [
    {
      title: "ForgeCircle - Campus-to-Career Alumni Hub",
      category: "Digital Marketing",
      description: "We executed a comprehensive digital marketing campaign for AMET University, focusing on SEO, content strategy, and social media engagement to boost online visibility and student enrollment.",
      imageUrl: "/placeholder.jpg", // (unused)
      logoSrc: "/images/client-logos/AMET-removebg-preview.png",
      client: "AMET University",
      logoOnly: true
    },
    {
      title: "Digital Marketing for Maersk",
      category: "Digital Marketing",
      description: "",
      imageUrl: "/placeholder.jpg", // (unused)
      logoSrc: "/images/client-logos/Maersk-removebg-preview.png",
      client: "Maersk",
      logoOnly: true
    },
    {
      title: "Jay Mahal - Elegant Marriage Hall",
      category: "Website Solutions",
      description: "A bilingual (English + Tamil) marketing site for an elegant marriage hall in Thoothukudi, with a photography-driven hero, detailed amenities and capacity info, and a WhatsApp-powered booking flow.",
      imageUrl: "/placeholder.jpg", // Replace with actual image path
      link: "https://jaymahal.in/"
    },
    {
      title: "Route Revolution - Your Trusted Route To Success",
      category: "Website Solutions",
      description: "A modern logistics companion that lets customers and businesses book shipments, track parcels live via Delhivery-powered tracking, and use WhatsApp-first workflows for enquiries and collection centers.",
      imageUrl: "/placeholder.jpg", // Replace with actual image path
      link: "https://routerevolution.in/#home"
    },
    {
      title: "KON Sun Energy Solutions - Solar Power Made Simple",
      category: "Website Solutions",
      description: "A single-page React marketing site for a Tamil Nadu–based solar brand, combining clear value proposition messaging with section-based storytelling to convert visitors into consultation leads.",
      imageUrl: "/placeholder.jpg", // Replace with actual image path
      link: "https://konsunenergy.in/"
    },
    {
      title: "Aakrati Interior Studio – Bengaluru",
      category: "Website Solutions",
      description: "High-end interior studio website migrated to a clean, fast implementation that preserves the original luxury look and feel while reducing hosting and maintenance overhead.",
      imageUrl: "/placeholder.jpg", // Replace with actual image path
      link: "https://artkrati.in/"
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
      clientLogoSrc: "/images/client-logos/AMET-removebg-preview.png",
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
            <p className="mt-4 text-xl text-white/80 max-w-3xl mx-auto">We partner with ambitious brands to build exceptional digital products and experiences that drive real business results, including websites and applications for clients in Chennai and other Indian cities.</p>
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
