import architecture3d from "@/assets/architecture-3d.svg";
import capabilityApi from "@/assets/capability-api.svg";
import capabilityVoice from "@/assets/capability-voice.svg";
import capabilityWaveform from "@/assets/capability-waveform.svg";
import capabilityWorkflow from "@/assets/capability-workflow.svg";
import dashboardPreview from "@/assets/dashboard-preview.jpg";
import heroEngine from "@/assets/hero-engine.webp";
import techGpu from "@/assets/tech-gpu.svg";

export type MediaAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Tailwind aspect-ratio class for consistent layout */
  aspect: string;
};

/**
 * Centralized image registry.
 * Every section across the site pulls from here so heroes, cards, dashboards
 * and architecture diagrams always render with the right asset, dimensions
 * and descriptive alt text.
 */
export const media = {
  // Heroes — wide cinematic
  heroEngine: {
    src: heroEngine,
    alt: "Glowing Soniccora neural audio engine core with cyan waveform halo",
    width: 1920,
    height: 1080,
    aspect: "aspect-[16/9]",
  },
  architecture: {
    src: architecture3d,
    alt: "Layered 3D diagram of the Soniccora audio architecture stack",
    width: 1600,
    height: 1000,
    aspect: "aspect-[16/10]",
  },
  // Dashboard preview — product UI
  dashboard: {
    src: dashboardPreview,
    alt: "Soniccora command-center dashboard with waveform monitor and system health widgets",
    width: 1920,
    height: 1200,
    aspect: "aspect-[16/10]",
  },
  // Capability cards — square-ish
  waveform: {
    src: capabilityWaveform,
    alt: "Animated cyan waveform representing AI audio generation",
    width: 1200,
    height: 900,
    aspect: "aspect-[4/3]",
  },
  voice: {
    src: capabilityVoice,
    alt: "Voice customization interface with tone and pitch controls",
    width: 1200,
    height: 900,
    aspect: "aspect-[4/3]",
  },
  workflow: {
    src: capabilityWorkflow,
    alt: "Audio workflow automation graph with event triggers and webhooks",
    width: 1200,
    height: 900,
    aspect: "aspect-[4/3]",
  },
  api: {
    src: capabilityApi,
    alt: "Developer API code editor showing Soniccora SDK integration",
    width: 1200,
    height: 900,
    aspect: "aspect-[4/3]",
  },
  // Infrastructure
  gpu: {
    src: techGpu,
    alt: "GPU-accelerated NVIDIA H100 inference chip rendering audio in real time",
    width: 1200,
    height: 900,
    aspect: "aspect-[4/3]",
  },
} as const satisfies Record<string, MediaAsset>;

export type MediaKey = keyof typeof media;

/**
 * Resolve a section name → asset. Lets pages declare semantic
 * section names ("hero", "diagram", "cta") without hard-coding files.
 */
export const sectionMedia = {
  technology: {
    hero: media.architecture,
    stack: media.gpu,
    cta: media.waveform,
  },
  howItWorks: {
    hero: media.heroEngine,
    input: media.voice,
    engine: media.waveform,
    output: media.workflow,
    cta: media.api,
  },
  pricing: {
    hero: media.waveform,
    cta: media.dashboard,
  },
  product: {
    hero: media.heroEngine,
    architecture: media.architecture,
    dashboard: media.dashboard,
  },
  landing: {
    hero: media.heroEngine,
    capabilities: {
      generation: media.waveform,
      voice: media.voice,
      workflow: media.workflow,
      api: media.api,
    },
    dashboard: media.dashboard,
  },
} as const;
