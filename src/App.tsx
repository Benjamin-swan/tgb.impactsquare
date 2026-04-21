import { useEffect, useRef, useState } from "react";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import ChapterSection from "@/components/ChapterSection";
import Footer from "@/components/Footer";
import { chapters } from "@/data/chapters";
import "./index.css";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [navVisible, setNavVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((s) => sectionObserver.observe(s));

    const heroObserver = new IntersectionObserver(
      ([entry]) => setNavVisible(!entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (heroRef.current) heroObserver.observe(heroRef.current);

    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => fadeObserver.observe(el));

    return () => {
      sectionObserver.disconnect();
      heroObserver.disconnect();
      fadeObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F4EF] text-stone-900">
      <Nav visible={navVisible} activeSection={activeSection} chapters={chapters} />
      <div ref={heroRef}>
        <Hero />
      </div>
      <main>
        {chapters.map((chapter, i) => (
          <ChapterSection key={chapter.id} chapter={chapter} index={i} />
        ))}
      </main>
      <Footer />
    </div>
  );
}
