import { useEffect, useState } from "react";

const sections = [
  "home",
  "about",
  "projects",
  "contact",
];

export default function ScrollIndicator() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed right-10 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center">
      {sections.map((section) => (
        <button
          key={section}
          onClick={() =>
            document
              .getElementById(section)
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className={`
            transition-all duration-500
            ${
              activeSection === section
                ? "w-10 h-[2px] bg-cyan-400 shadow-[0_0_10px_#22d3ee]"
                : "w-6 h-[1px] bg-white/20"
            }
          `}
        />
      ))}

      <div className="w-px h-40 bg-white/10 my-8" />

      <span className="rotate-90 whitespace-nowrap text-[10px] tracking-[0.4em] uppercase text-white/60">
        Keep On Scrollin'
      </span>
    </div>
  );
}