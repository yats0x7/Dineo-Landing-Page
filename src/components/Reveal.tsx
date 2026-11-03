"use client";

import { useEffect } from "react";

// Section entrances: every [data-reveal] rises in once as it enters the
// screen, staggered with its neighbours in the same section. Elements already
// on screen at load are shown at once, so the first screen never waits.
export default function Reveal() {
  useEffect(() => {
    const root = document.documentElement;
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    items.forEach((el) => {
      const section = el.closest("section, footer") ?? document.body;
      const siblings = Array.from(section.querySelectorAll("[data-reveal]"));
      el.style.transitionDelay = `${Math.min(siblings.indexOf(el), 5) * 75}ms`;
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("is-in");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    items.forEach((el) => !el.classList.contains("is-in") && observer.observe(el));
    root.classList.add("reveal-ready");

    return () => observer.disconnect();
  }, []);

  return null;
}
