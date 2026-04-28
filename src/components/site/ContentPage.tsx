import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { SectionDivider } from "@/components/site/SectionDivider";

export type ContentSection = {
  heading: string;
  body: string | React.ReactNode;
  bullets?: string[];
};

export type ContentPageProps = {
  eyebrow: string;
  title: string;
  intro: string | React.ReactNode;
  sections: ContentSection[];
  ctaTitle?: string;
  ctaText?: string;
  ctaHref?: string;
  ctaLabel?: string;
  showCTA?: boolean;
  showGetStarted?: boolean;
  getStartedHref?: string;
};

export function ContentPage({
  eyebrow,
  title,
  intro,
  sections,
  ctaTitle = "READY TO BUILD WITH SONICCORA?",
  ctaText = "Start free with 100 generations per month — no credit card required.",
  ctaHref = "/product",
  ctaLabel = "Explore the Platform",
  showCTA = true,
  showGetStarted = true,
  getStartedHref = "/contact",
}: ContentPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-16">
          <div
            className="absolute inset-0"
            style={{ background: "var(--gradient-hero)" }}
          />
          <div className="relative mx-auto max-w-4xl px-6">
            <Reveal>
              <nav className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
                <Link to="/" className="hover:text-primary">
                  HOME
                </Link>
                <ChevronRight size={12} />
                <span className="text-primary">{eyebrow}</span>
              </nav>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
                {title}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-5 max-w-2xl text-lg text-muted-foreground">
                {intro}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Sections */}
        <section className="pb-20">
          <div className="mx-auto max-w-4xl px-6">
            <div className="space-y-8">
              {sections.map((s, i) => (
                <Reveal key={s.heading} delay={i * 0.04}>
                  <article className="glass rounded-2xl p-8">
                    <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                      {s.heading}
                    </h2>
                    <div className="mt-3 text-foreground/80 leading-relaxed space-y-4">
                      {s.body}
                    </div>
                    {s.bullets && (
                      <ul className="mt-5 space-y-2">
                        {s.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2 text-sm text-foreground/85"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {showCTA && (
          <>
            <SectionDivider />

            {/* CTA */}
            <section className="py-24">
              <div className="mx-auto max-w-3xl px-6 text-center">
                <Reveal>
                  <h2 className="font-display text-3xl font-bold sm:text-4xl">
                    {ctaTitle}
                  </h2>
                  <p className="mt-3 text-muted-foreground">{ctaText}</p>
                  <div className="mt-7 flex flex-wrap justify-center gap-3">
                    {showGetStarted && (
                      <Link
                        to={getStartedHref}
                        className="inline-flex h-12 items-center gap-2 rounded-md bg-primary px-7 text-sm font-bold text-primary-foreground shadow-[0_0_30px_rgba(0,229,255,0.8)] transition-transform hover:scale-105"
                      >
                        Get Started Free <ArrowRight size={16} />
                      </Link>
                    )}
                    <Link
                      to={ctaHref as string}
                      className="inline-flex h-12 items-center gap-2 rounded-md border border-border-strong bg-surface/40 px-7 text-sm font-semibold backdrop-blur"
                    >
                      {ctaLabel}
                    </Link>
                  </div>
                </Reveal>
              </div>
            </section>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
