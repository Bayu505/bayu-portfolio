import { motion } from "framer-motion";

interface MacbookProps {
  image: string;
  title: string;
}

export default function Macbook({
  image,
  title,
}: MacbookProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
      }}
      className="relative mx-auto w-full max-w-[900px]"
    >
      {/* SCREEN */}
      <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-[#111] p-[7px] shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
        
        {/* CAMERA */}
        <div className="absolute left-1/2 top-[9px] z-20 h-[8px] w-[8px] -translate-x-1/2 rounded-full bg-black/80 ring-1 ring-white/5" />

        {/* DISPLAY */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-[12px] bg-black">
          <img
            src={image}
            alt={title}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              hover:scale-[1.025]
            "
          />

          {/* SCREEN GLARE */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />
        </div>
      </div>

      {/* MACBOOK BASE */}
      <div className="relative mx-auto h-[16px] w-[94%] rounded-b-[12px] bg-gradient-to-b from-zinc-500 to-zinc-800 shadow-[0_15px_30px_rgba(0,0,0,0.45)]">
        <div className="absolute left-1/2 top-0 h-[4px] w-[16%] -translate-x-1/2 rounded-b-full bg-zinc-950/70" />
      </div>

      {/* SHADOW */}
      <div className="absolute -bottom-8 left-1/2 -z-10 h-12 w-[70%] -translate-x-1/2 rounded-full bg-black/60 blur-2xl" />
    </motion.div>
  );
}