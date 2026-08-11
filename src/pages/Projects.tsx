import { motion } from "framer-motion";
import ProjectShowcase from "../components/projects/ProjectShowcase";
import { projects } from "../data/projects";
import BackButton from "../components/layout/BackButton";

export default function Projects() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      <BackButton />
      
      {/* BACKGROUND GLOW */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-300px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#C6FA00]/[0.025] blur-[140px]" />
      </div>

      {/* CONTENT */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-32 md:px-12 lg:px-20">

        {/* HEADER */}

        <motion.header
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-32 max-w-4xl"
        >
          <div className="mb-8 flex items-center gap-4">
            <span className="font-mono text-xs tracking-[0.3em] text-[#C6FA00]">
              02
            </span>

            <div className="h-px w-16 bg-zinc-800" />

            <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              Selected Work
            </span>
          </div>

          <h1 className="text-[clamp(4rem,10vw,9rem)] font-black leading-[0.82] tracking-[-0.08em]">
            PROJECTS
          </h1>

          <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-base leading-7 text-zinc-500 md:text-lg">
              A collection of digital products, experiments and
              intelligent systems built through code, design and
              curiosity.
            </p>

            <span className="font-mono text-xs tracking-[0.2em] text-zinc-700">
              2024 — 2026
            </span>
          </div>
        </motion.header>

        {/* PROJECTS */}

        <section className="space-y-40">
          {projects.map((project, index) => (
            <ProjectShowcase
              key={project.number}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}
        </section>

        {/* FOOTER */}

        <div className="mt-40 border-t border-white/[0.08] pt-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <p className="text-sm text-zinc-600">
              More experiments coming soon.
            </p>

            <span className="font-mono text-xs tracking-[0.2em] text-zinc-700">
              END OF PROJECTS
            </span>
          </div>
        </div>

      </div>
    </main>
  );
}