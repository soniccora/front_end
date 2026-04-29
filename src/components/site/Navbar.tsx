import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "How It Works", to: "/how-it-works" },
  { label: "Platform", to: "/features" },
  { label: "Technology", to: "/technology" },
  { label: "Pricing", to: "/pricing" },
  { label: "Docs", to: "/docs" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center px-6">
        {/* Logo */}
        <div className="flex flex-1 items-center">
          <Link to="/" className="group flex items-center gap-2">
            <img src="/logo.svg" alt="Soniccora Logo" className="h-12 w-auto object-contain" />
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="relative text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden flex-1 items-center justify-end gap-6 md:flex">

          <Link
            to="/product"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_24px_rgba(0,229,255,0.55)]"
          >
            Get API Access
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-surface md:hidden"
          onClick={() => setOpen((s) => !s)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                activeProps={{ className: "bg-primary/10 text-primary" }}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2">
              <Link
                to="/product"
                onClick={() => setOpen(false)}
                className="block w-full rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-primary-foreground"
              >
                Get API Access
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
