export function Waveform({
  bars = 64,
  className = "",
}: {
  bars?: number;
  className?: string;
}) {
  return (
    <div className={`flex h-full w-full items-center justify-center gap-[3px] ${className}`}>
      {Array.from({ length: bars }).map((_, i) => {
        const h = 20 + Math.sin(i * 0.4) * 30 + Math.random() * 40;
        return (
          <span
            key={i}
            className="animate-wave w-[3px] rounded-full bg-gradient-to-t from-primary/30 via-primary to-secondary"
            style={{
              height: `${h}%`,
              animationDelay: `${i * 0.04}s`,
            }}
          />
        );
      })}
    </div>
  );
}

export function WaveformBackground() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
      viewBox="0 0 1200 400"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="wf-grad" x1="0" x2="1">
          <stop offset="0" stopColor="#00E5FF" />
          <stop offset="1" stopColor="#7B2FFF" />
        </linearGradient>
      </defs>
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M0 ${200 + i * 10} Q 150 ${100 - i * 20} 300 ${200 + i * 10} T 600 ${200 + i * 10} T 900 ${200 + i * 10} T 1200 ${200 + i * 10}`}
          fill="none"
          stroke="url(#wf-grad)"
          strokeWidth="1.2"
        />
      ))}
    </svg>
  );
}
