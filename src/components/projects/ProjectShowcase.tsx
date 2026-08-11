import { motion } from "framer-motion";
import Macbook from "./Macbook";

interface ProjectShowcaseProps {
  project: {
    number: string;
    title: string;
    description: string;
    image: string;
    category: string;
    technologies: string[];
    year: string;
    link?: string;
  };
  reverse?: boolean;
}

export default function ProjectShowcase({
  project,
  reverse = false,
}: ProjectShowcaseProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative"
    >
      {/* PROJECT NUMBER */}

      <div className="mb-8 flex items-center gap-4">
        <span className="font-mono text-xs tracking-[0.3em] text-zinc-600">
          {project.number}
        </span>

        <div className="h-px w-12 bg-zinc-800" />

        <span className="text-xs uppercase tracking-[0.25em] text-zinc-500">
          {project.category}
        </span>
      </div>

      {/* VISUAL */}

      <div className="relative">
        <Macbook
          image={project.image}
          title={project.title}
        />

        {/* GLASS CARD */}

        <motion.div
          initial={{
            opacity: 0,
            x: reverse ? -40 : 40,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            delay: 0.2,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            y: -6,
          }}
          className={`
            absolute
            z-20
            w-[340px]
            max-w-[80%]
            rounded-[24px]
            border
            border-white/[0.10]
            bg-zinc-950/70
            p-6
            shadow-[0_30px_80px_rgba(0,0,0,0.55)]
            backdrop-blur-2xl
            ${reverse
              ? "left-0 top-1/2 -translate-y-1/2"
              : "right-0 top-1/2 -translate-y-1/2"
            }
          `}
        >
          {/* TOP */}

          <div className="mb-8 flex items-center justify-between">
            <span className="rounded-full border border-[#C6FA00]/20 bg-[#C6FA00]/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#C6FA00]">
              Featured
            </span>

            <span className="font-mono text-xs text-zinc-600">
              {project.year}
            </span>
          </div>

          {/* TITLE */}

          <h2 className="mb-3 text-3xl font-black tracking-[-0.05em] text-white">
            {project.title}
          </h2>

          {/* DESCRIPTION */}

          <p className="mb-6 text-sm leading-6 text-zinc-400">
            {project.description}
          </p>

          {/* TECHNOLOGIES */}

          <div className="mb-7 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="
                  rounded-full
                  border
                  border-white/[0.08]
                  bg-white/[0.03]
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

          {/* LINK */}

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                items-center
                gap-2
                text-xs
                font-medium
                uppercase
                tracking-[0.2em]
                text-white
              "
            >
              View Project

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          )}
        </motion.div>
      </div>

      {/* MOBILE DESCRIPTION */}

      <div className="mt-10 md:hidden">
        <p className="text-sm leading-7 text-zinc-400">
          {project.description}
        </p>
      </div>
    </motion.article>
  );
}