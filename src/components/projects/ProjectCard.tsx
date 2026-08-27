import { motion } from "framer-motion";

interface ProjectCardProps {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  href?: string;
}

export default function ProjectCard({
  number,
  title,
  description,
  technologies,
  href = "#",
}: ProjectCardProps) {
  return (
    <motion.a
      href={href}
      target={href !== "#" ? "_blank" : undefined}
      rel={href !== "#" ? "noreferrer" : undefined}
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
      }}
      className="
        group
        relative
        block
        overflow-hidden
        rounded-[28px]
        border
        border-white/[0.08]
        bg-white/[0.025]
        p-7
        backdrop-blur-xl
        transition-colors
        duration-500
        hover:border-white/[0.16]
        hover:bg-white/[0.045]
      "
    >
      {/* glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-40
          w-40
          rounded-full
          bg-[#C6FA00]/[0.06]
          blur-[80px]
          transition-opacity
          duration-500
          group-hover:opacity-100
          opacity-0
        "
      />

      <div className="relative z-10">

        {/* NUMBER */}

        <div className="mb-12 flex items-center justify-between">
          <span className="
            text-[11px]
            font-medium
            tracking-[0.3em]
            text-zinc-600
          ">
            {number}
          </span>

          <span
            className="
              text-zinc-600
              transition-all
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
              group-hover:text-[#C6FA00]
            "
          >
            ↗
          </span>
        </div>

        {/* TITLE */}

        <h3
          className="
            mb-3
            text-2xl
            font-semibold
            tracking-tight
            text-white
          "
        >
          {title}
        </h3>

        {/* DESCRIPTION */}

        <p
          className="
            mb-7
            max-w-md
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
                border-white/[0.07]
                bg-white/[0.025]
                px-3
                py-1.5
                text-[10px]
                uppercase
                tracking-[0.12em]
                text-zinc-500
              "
            >
              {technology}
            </span>
          ))}
        </div>

      </div>
    </motion.a>
  );
}