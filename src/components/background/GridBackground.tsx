import Noise from "./Noise";

export default function GridBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#050505]">

      {/* Dot Grid */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            radial-gradient(rgba(255,255,255,.18) 1px, transparent 1px)
          `,
          backgroundSize: "34px 34px",

          WebkitMaskImage:
            "radial-gradient(circle at center, black 55%, transparent 100%)",

          maskImage:
            "radial-gradient(circle at center, black 55%, transparent 100%)",
        }}
      />

      {/* Huge Background Text */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          select-none
          font-black
          uppercase
          tracking-[-0.08em]
          leading-none
          text-[240px]
          text-white/[0.02]
          whitespace-nowrap
        "
      >
        CREATE
      </div>

      {/* Noise */}

      <Noise />

      {/* Vignette */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_30%,#050505_100%)]
        "
      />

      {/* Bottom Fade */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-transparent
          to-[#050505]
        "
      />

    </div>
  );
}