import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Layout, BarChart, Settings, Users } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Soniccora" },
      {
        name: "description",
        content: "The Soniccora command center. Monitor and deploy your audio systems.",
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
      <main className="mx-auto max-w-7xl px-6 pb-32 pt-40">
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-4 py-1.5 font-mono text-[11px] tracking-[0.2em] text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            SYSTEM OPERATIONAL
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            COMMAND <span className="text-primary text-glow-cyan">CENTER.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Manage your programmable audio engine, monitor system health, and deploy scalable audio infrastructures.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Layout, label: "Active Workflows", value: "12", trend: "+2" },
            { icon: BarChart, label: "System Load", value: "24%", trend: "-5%" },
            { icon: Users, label: "Concurrent Streams", value: "1,204", trend: "+12%" },
            { icon: Settings, label: "API Latency", value: "42ms", trend: "Stable" },
          ].map((stat, i) => (
            <div key={i} className="rounded-xl border border-border bg-surface/30 p-6 backdrop-blur">
              <div className="flex items-center justify-between">
                <stat.icon size={20} className="text-primary" />
                <span className="text-[10px] font-bold text-primary/80">{stat.trend}</span>
              </div>
              <p className="mt-4 text-xs font-medium text-muted-foreground uppercase tracking-widest">{stat.label}</p>
              <p className="mt-1 text-2xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface/20 p-8">
            <h3 className="text-xl font-bold">Quick Generate</h3>
            <p className="mt-2 text-muted-foreground text-sm">
              Instantly trigger audio synthesis using your default parameters.
            </p>
            <div className="mt-6 h-32 rounded-lg border border-dashed border-border flex items-center justify-center">
              <p className="text-xs text-muted-foreground">Studio Interface Loading...</p>
            </div>
            <button className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-bold text-primary-foreground">
              Launch Studio
            </button>
          </div>

          <div className="rounded-2xl border border-border bg-surface/20 p-8">
            <h3 className="text-xl font-bold">Developer Resources</h3>
            <p className="mt-2 text-muted-foreground text-sm">
              Access API keys, webhooks, and SDK configuration.
            </p>
            <ul className="mt-6 space-y-4">
              {["API Documentation", "SDK Integration Guide", "Webhooks Console"].map((item) => (
                <li key={item} className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm font-medium hover:text-primary transition-colors">{item}</span>
                  <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
