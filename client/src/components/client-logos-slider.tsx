import React, { useState } from "react";
import { LogoTooltip } from "./LogoTooltip";

const clientLogos = [
  { src: "/src/assets/client-logos/Tara-removebg-preview.png", alt: "Tara's Dental", description: "Leading dental care provider, Chennai.", link: "https://tarasdental.in/", status: "Existing Client" },
  { src: "/src/assets/client-logos/MB_logo-removebg-preview.png", alt: "Mangalabharathi Trust - MB", description: "Educational trust fostering rural development.", link: "https://nalamnco.in/", status: "Existing Client" },
  { src: "/src/assets/client-logos/Bezalellogo.png", alt: "Bezalel Interiors", description: "Award-winning interior design studio.", link: "https://bezalelinterior.com/", status: "Our Work" },
  { src: "/src/assets/client-logos/AMET-removebg-preview.png", alt: "AMET University", description: "India's premier maritime university.", link: "https://www.ametalumni.in/", status: "Existing Client" },
  { src: "/src/assets/client-logos/Maersk-removebg-preview.png", alt: "Maersk", description: "Global leader in shipping and logistics.", link: "https://konsunenergy.in/", status: "Our Work" },
  { src: "/src/assets/client-logos/PR_Classes-removebg-preview.png", alt: "PR Classes", description: "Top coaching institute for competitive exams.", link: "https://prclasses.in/", status: "Existing Client" },
  { src: "/src/assets/client-logos/Route_Revolution-removebg-preview.png", alt: "Route Revolution", description: "Innovative transport and logistics startup.", link: "https://routerevolution.in/#home", status: "Our Work" },
  // Jaymahal.in is not mapped to a logo yet; add if logo available
];

export function ClientLogosSlider() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [tooltipIdx, setTooltipIdx] = useState<number | null>(null);
  const logos = clientLogos;
  const logoCount = logos.length;
  // 3D carousel math
  const radius = 260; // px
  const angleStep = 360 / logoCount;
  // Animated rotation
  const [baseAngle, setBaseAngle] = React.useState(0);
  React.useEffect(() => {
    let frame: number;
    const animate = () => {
      setBaseAngle(a => (a + 0.18) % 360); // ~20s per full rotation
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);
  // Spotlight follows the front logo
  const spotlightIdx = Math.round(((-baseAngle + 90 + 360) % 360) / angleStep) % logoCount;

  return (
    <div className="w-full py-16 overflow-visible flex justify-center items-center relative" style={{perspective: "1200px", minHeight: 260}}>
      <div className="relative w-[600px] h-[220px] mx-auto" style={{perspective: "1200px"}}>
        <div className="absolute inset-0 z-0 pointer-events-none" style={{background: "radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, rgba(30,30,60,0.0) 70%)"}} />
        <div className="absolute inset-0 z-0 animate-glow-bg" />
        {logos.map((logo, idx) => {
          // 3D carousel positions
          const angle = angleStep * idx - 90 + baseAngle;
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * radius;
          const z = Math.sin(rad) * radius;
          // Spotlight effect
          const isSpotlight = idx === spotlightIdx;
          const isHovered = idx === hoveredIdx;
          if (logo.link) {
            return (
              <a
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={0}
                key={logo.alt}
                className="absolute left-1/2 top-1/2 logo-carousel-item group outline-none"
                style={{
                  transform: `translate(-50%, -50%) translateX(${x}px) translateZ(${z}px) scale(${isSpotlight||isHovered?1.18:1}) rotateY(${-angle}deg)`,
                  transition: "transform 0.7s cubic-bezier(.4,2,.3,1), filter 0.3s, z-index 0.2s",
                  zIndex: isSpotlight||isHovered ? 10 : 2,
                  filter: isSpotlight||isHovered ? "drop-shadow(0 8px 32px #f2c94c88) brightness(1.08)" : "grayscale(0.7) blur(0.5px)",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
                onMouseEnter={() => { setHoveredIdx(idx); setTooltipIdx(idx); }}
                onMouseLeave={() => { setHoveredIdx(null); setTooltipIdx(null); }}
                onFocus={() => { setHoveredIdx(idx); setTooltipIdx(idx); }}
                onBlur={() => { setHoveredIdx(null); setTooltipIdx(null); }}
              >
                <div className={`w-36 h-28 flex items-center justify-center mb-2 rounded-2xl border border-white/30 shadow-2xl glass-card transition-all duration-300 ${isSpotlight||isHovered ? "bg-white/80" : "bg-white/50"} group-hover:bg-white/90 group-hover:shadow-2xl`} style={{ boxShadow: isSpotlight||isHovered ? '0 10px 40px 0 #f2c94c44' : '0 6px 32px rgba(0,0,0,0.14)' }}>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`max-h-[70%] max-w-[70%] object-contain transition-all duration-300 ${isSpotlight||isHovered ? "grayscale-0" : "grayscale hover:grayscale-0"}`}
                    draggable={false}
                    style={{ filter: isSpotlight||isHovered ? "none" : "grayscale(0.7)" }}
                  />
                </div>
                <span className="block text-base font-semibold text-white/90 bg-black/50 rounded-xl px-3 py-1 mt-2 shadow-sm tracking-wide font-sans backdrop-blur-md" style={{letterSpacing: '0.01em'}}>
                  {logo.alt}
                </span>
                {tooltipIdx === idx && (
                  <LogoTooltip name={logo.alt} description={logo.description} status={logo.status} />
                )}
              </a>
            );
          } else {
            return (
              <div
                key={logo.alt}
                className="absolute left-1/2 top-1/2 logo-carousel-item group"
                style={{
                  transform: `translate(-50%, -50%) translateX(${x}px) translateZ(${z}px) scale(${isSpotlight||isHovered?1.18:1}) rotateY(${-angle}deg)`,
                  transition: "transform 0.7s cubic-bezier(.4,2,.3,1), filter 0.3s, z-index 0.2s",
                  zIndex: isSpotlight||isHovered ? 10 : 2,
                  filter: isSpotlight||isHovered ? "drop-shadow(0 8px 32px #f2c94c88) brightness(1.08)" : "grayscale(0.7) blur(0.5px)",
                  cursor: "pointer",
                }}
                onMouseEnter={() => { setHoveredIdx(idx); setTooltipIdx(idx); }}
                onMouseLeave={() => { setHoveredIdx(null); setTooltipIdx(null); }}
                onFocus={() => { setHoveredIdx(idx); setTooltipIdx(idx); }}
                onBlur={() => { setHoveredIdx(null); setTooltipIdx(null); }}
              >
                <div className={`w-36 h-28 flex items-center justify-center mb-2 rounded-2xl border border-white/30 shadow-2xl glass-card transition-all duration-300 ${isSpotlight||isHovered ? "bg-white/80" : "bg-white/50"} group-hover:bg-white/90 group-hover:shadow-2xl`} style={{ boxShadow: isSpotlight||isHovered ? '0 10px 40px 0 #f2c94c44' : '0 6px 32px rgba(0,0,0,0.14)' }}>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`max-h-[70%] max-w-[70%] object-contain transition-all duration-300 ${isSpotlight||isHovered ? "grayscale-0" : "grayscale hover:grayscale-0"}`}
                    draggable={false}
                    style={{ filter: isSpotlight||isHovered ? "none" : "grayscale(0.7)" }}
                  />
                </div>
                <span className="block text-base font-semibold text-white/90 bg-black/50 rounded-xl px-3 py-1 mt-2 shadow-sm tracking-wide font-sans backdrop-blur-md" style={{letterSpacing: '0.01em'}}>
                  {logo.alt}
                </span>
                {tooltipIdx === idx && (
                  <LogoTooltip name={logo.alt} description={logo.description} status={logo.status} />
                )}
              </div>
            );
          }
        })}
      </div>
      <style>{`
        .glass-card {
          backdrop-filter: blur(18px) saturate(1.2);
          background: linear-gradient(120deg, rgba(255,255,255,0.68) 60%, rgba(242,201,76,0.13) 100%);
          box-shadow: 0 8px 40px 0 #f2c94c22, 0 2px 8px 0 #1a56f022;
        }
        .logo-carousel-item {
          will-change: transform, filter;
        }
        .logo-carousel-item img {
          transition: filter 0.3s, transform 0.3s;
        }
        .logo-carousel-item:hover img {
          filter: none !important;
          transform: scale(1.08);
        }
        .logo-carousel-item:focus img {
          filter: none !important;
          transform: scale(1.08);
        }
        .animate-glow-bg {
          background: radial-gradient(ellipse at center, #f2c94c11 0%, #1a56f011 70%);
          filter: blur(32px);
          width: 100%; height: 100%;
          z-index: 0;
          pointer-events: none;
          animation: glow-bg 4s ease-in-out infinite alternate;
          position: absolute;
        }
        @keyframes glow-bg {
          0% { opacity: 0.6; }
          100% { opacity: 0.9; }
        }
      `}</style>
    </div>
  );
}
