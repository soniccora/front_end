import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Soniccora" },
      {
        name: "description",
        content: "The Soniccora command center. Sign in to generate, monitor, and deploy audio.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: DashboardPage,
});

function DashboardPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pb-32 pt-40 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-4 py-1.5 font-mono text-[11px] tracking-[0.2em] text-primary">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          DASHBOARD · PRIVATE BETA
        </span>
        <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
          YOUR COMMAND CENTER IS{" "}
          <span className="text-primary text-glow-cyan">ALMOST READY.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          The full Soniccora dashboard — generation studio, waveform monitor, workflow builder
          and system health — opens to invited builders next. Request access and we'll email
          you the moment your seat is live.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/pricing"
            className="inline-flex h-12 items-center gap-2 rounded-md bg-primary px-7 text-sm font-bold text-primary-foreground shadow-[0_0_30px_rgba(0,229,255,0.5)]"
          >
            Request Access <ArrowRight size={16} />
          </Link>
          <Link
            to="/docs"
            className="inline-flex h-12 items-center gap-2 rounded-md border border-border-strong bg-surface/40 px-7 text-sm font-semibold backdrop-blur"
          >
            Read the Docs
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
