import { useEffect } from "react";

/** Observes [data-reveal] elements and applies parallax to [data-parallax]. */
export function useSiteMotion() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const px = isMobile ? [] : Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const vh = window.innerHeight;
        px.forEach((el) => {
          const r = el.parentElement!.getBoundingClientRect();
          if (r.bottom < 0 || r.top > vh) return;
          const speed = Number(el.dataset.parallax) || 0.12;
          const offset = (r.top + r.height / 2 - vh / 2) * -speed;
          el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0) scale(1.12)`;
        });
      });
    };
    if (px.length) {
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
}

export function Wave(props: React.SVGProps<SVGSVGElement> & { "data-reveal"?: boolean | string }) {
  return (
    <svg viewBox="0 0 120 12" {...props} aria-hidden="true" fill="none">
      <path d="M0 6 C 15 0, 25 12, 40 6 S 65 0, 80 6 S 105 12, 120 6" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className={`flex flex-col leading-none ${light ? "text-primary-foreground" : "text-primary"}`}>
      <span className="font-display text-2xl tracking-tight">Sea &amp; Stay</span>
      <span className="mt-1 flex items-center gap-2">
        <Wave className={`h-2 w-6 ${light ? "text-sand" : "text-accent"}`} />
        <span className="eyebrow text-[0.55rem]">Hosting</span>
      </span>
    </span>
  );
}
