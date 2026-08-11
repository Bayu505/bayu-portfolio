import { motion } from "framer-motion";

export default function RotatingBadge() {
  const text =
    "SHOWREEL • 2026 • AI ENGINEER • FULL STACK • ";

  const characters = text.split("");

  return (
    <motion.div
      className="
        pointer-events-none
        absolute
        -left-20
        bottom-10
        z-10
        h-[230px]
        w-[230px]
        md:-left-16
        md:bottom-14
        md:h-[270px]
        md:w-[270px]
      "
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 22,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {/* ================================================= */}
      {/* CIRCULAR TEXT */}
      {/* ================================================= */}

      <div className="absolute inset-0">
        {characters.map((char, index) => {
          const angle = (360 / characters.length) * index;

          return (
            <span
              key={`${char}-${index}`}
              className="
                absolute
                left-1/2
                top-1/2
                text-[10px]
                font-medium
                tracking-[0.18em]
                text-zinc-400
                md:text-[11px]
              "
              style={{
                transform: `
                  rotate(${angle}deg)
                  translateY(-115px)
                `,
                transformOrigin: "0 115px",
              }}
            >
              {char}
            </span>
          );
        })}
      </div>

      {/* ================================================= */}
      {/* CENTER SHAPE */}
      {/* ================================================= */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[105px]
          w-[105px]
          -translate-x-1/2
          -translate-y-1/2
          rotate-[-18deg]
          overflow-hidden
          rounded-[24px]
          border
          border-white/10
          bg-zinc-900
          shadow-[0_0_80px_rgba(198,250,0,0.08)]
        "
      >
        <div
          className="
            absolute
            -left-8
            -top-8
            h-24
            w-24
            rounded-full
            bg-[#C6FA00]
            blur-[2px]
          "
        />

        <div
          className="
            absolute
            -right-8
            bottom-[-20px]
            h-28
            w-28
            rounded-full
            bg-purple-500/80
            blur-[8px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-10
            w-10
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-black
            shadow-[0_0_30px_rgba(198,250,0,0.3)]
          "
        />
      </div>

      {/* ================================================= */}
      {/* CENTER ARROW */}
      {/* ================================================= */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          z-10
          -translate-x-1/2
          -translate-y-1/2
          text-xl
          text-white
        "
      >
        ↗
      </div>
    </motion.div>
  );
}