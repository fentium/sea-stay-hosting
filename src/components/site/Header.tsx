import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Wordmark } from "./motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Our Services" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#who-we-help", label: "Who We Help" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const light = !solid && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid || open ? "border-b bg-background/95 py-3 backdrop-blur" : "py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-10">
        <a href="#home" aria-label="Sea & Stay Hosting, back to top">
          <Wordmark light={light} />
        </a>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`text-sm transition-colors ${light ? "text-primary-foreground/85 hover:text-primary-foreground" : "text-foreground/80 hover:text-primary"}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className={`hidden rounded-sm px-5 py-2.5 text-sm font-semibold transition-colors sm:inline-block ${
              light ? "bg-primary-foreground text-primary hover:bg-sand" : "bg-primary text-primary-foreground hover:bg-accent"
            }`}
          >
            Enquire Now
          </a>
          <button
            type="button"
            className={`p-2 lg:hidden ${light ? "text-primary-foreground" : "text-primary"}`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t bg-background lg:hidden">
          <ul className="mx-auto max-w-7xl px-5 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-3 font-display text-2xl text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
