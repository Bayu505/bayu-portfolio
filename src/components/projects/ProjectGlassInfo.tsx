import { motion } from "framer-motion";

interface ProjectGlassInfoProps {
  title: string;
  description: string;
  technologies: string[];
  category: string;
}

export default function ProjectGlassInfo({
  title,
  description,
  technologies,
  category,
}: ProjectGlassInfoProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        w-full
        max-w-[360px]
        overflow-hidden
        rounded-[28px]
        border
        border-white/[0.09]
        bg-black/40
        p-7
        shadow-[0_30px_100px_rgba(0,0,0,0.45)]
        backdrop-blur-2xl
      "
    >

      {/* subtle glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-48
          w-48
          rounded-full
          bg-[#C6FA00]/[0.06]
          blur-[90px]
        "
      />

      <div className="relative z-10">

        {/* CATEGORY */}

        <p
          className="
            mb-5
            text-[10px]
            font-medium
            uppercase
            tracking-[0.3em]
            text-[#C6FA00]
          "
        >
          {category}
        </p>

        {/* TITLE */}

        <h3
          className="
            mb-4
            text-3xl
            font-semibold
            tracking-[-0.04em]
            text-white
          "
        >
          {title}
        </h3>

        {/* DESCRIPTION */}

        <p
          className="
            mb-7
            text-sm
            leading-6
            text-zinc-500
          "
        >
          {description}
        </p>

        {/* TECHNOLOGIES */}

        <div className="flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="
                rounded-full
                border
                border-white/[0.08]
                px-3
                py-1.5
                text-[10px]
                uppercase
                tracking-[0.12em]
                text-zinc-400
              "
            >
              {technology}
            </span>
          ))}
        </div>

      </div>
    </motion.div>
  );
}