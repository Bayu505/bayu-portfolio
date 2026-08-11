import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import BackButton from "../components/layout/BackButton";

const skills = [
  "AI / MACHINE LEARNING",
  "COMPUTER VISION",
  "DEEP LEARNING",
  "FULL STACK DEVELOPMENT",
  "UI / UX",
  "SYSTEM DESIGN",
];

const stats = [
  {
    value: "01",
    label: "AI ENGINEERING",
  },
  {
    value: "02",
    label: "COMPUTER VISION",
  },
  {
    value: "03",
    label: "FULL STACK",
  },
  {
    value: "04",
    label: "CREATIVE DEVELOPMENT",
  },
];

export default function About() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* radial glow */}
        <div
          className="
            absolute
            left-1/2
            top-[-20%]
            h-[600px]
            w-[600px]
            -translate-x-1/2
            rounded-full
            bg-[#C6FA00]/[0.04]
            blur-[140px]
          "
        />

        {/* grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        {/* bottom gradient */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[40vh]
            bg-gradient-to-t
            from-black
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          NAV / TOP BAR
      ===================================================== */}

      <header className="mx-auto flex max-w-[1500px] items-center justify-end px-6 py-8 md:px-12">

        <BackButton />

        <div className="text-xs tracking-[0.35em] text-zinc-600">
          ABOUT / 01
        </div>
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="mx-auto max-w-[1500px] px-6 pb-32 pt-20 md:px-12 md:pt-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* LEFT LABEL */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 text-xs tracking-[0.3em] text-[#C6FA00]">
              <span className="h-px w-8 bg-[#C6FA00]" />
              PROFILE
            </div>
          </motion.div>

          {/* MAIN TITLE */}

          <div className="lg:col-span-10">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                max-w-[1100px]
                text-[clamp(4rem,10vw,10rem)]
                font-black
                uppercase
                leading-[0.82]
                tracking-[-0.08em]
              "
            >
              Building
              <br />

              <span className="text-zinc-700">
                intelligent
              </span>

              <br />

              <span className="text-[#C6FA00]">
                experiences.
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.25,
                duration: 0.7,
              }}
              className="mt-14 max-w-2xl"
            >
              <p className="text-lg leading-relaxed text-zinc-400 md:text-xl">
                I&apos;m Bayu Adi Wibowo — an AI Engineer and
                Full Stack Developer focused on building digital
                products where intelligent systems meet thoughtful
                interfaces.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DIVIDER
      ===================================================== */}

      <div className="mx-auto max-w-[1500px] px-6 md:px-12">
        <div className="h-px bg-white/10" />
      </div>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="mx-auto max-w-[1500px] px-6 py-32 md:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* LABEL */}

          <div className="lg:col-span-3">
            <p className="text-xs tracking-[0.3em] text-zinc-600">
              / 01 — INTRODUCTION
            </p>
          </div>

          {/* CONTENT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <p className="text-2xl leading-relaxed tracking-tight text-zinc-200 md:text-4xl md:leading-[1.2]">
              I enjoy turning complex problems into systems
              that feel{" "}
              <span className="text-white">
                simple, fast, and intuitive.
              </span>
            </p>

            <div className="mt-10 space-y-6 text-base leading-relaxed text-zinc-500">
              <p>
                My work sits between artificial intelligence,
                software engineering, and visual design. I&apos;m
                particularly interested in computer vision,
                deep learning, and applications that transform
                data into useful experiences.
              </p>

              <p>
                Beyond the model itself, I care about the entire
                product — from architecture and interaction to
                performance and the final visual experience.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="border-y border-white/10">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.6,
              }}
              className="
                group
                relative
                border-b
                border-white/10
                p-8
                transition-colors
                hover:bg-white/[0.025]
                md:border-r
                lg:border-b-0
              "
            >
              <span className="text-xs tracking-[0.25em] text-zinc-700">
                {stat.value}
              </span>

              <p className="mt-16 text-sm font-medium tracking-[0.15em] text-zinc-400 transition-colors group-hover:text-[#C6FA00]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section className="mx-auto max-w-[1500px] px-6 py-32 md:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="text-xs tracking-[0.3em] text-zinc-600">
              / 02 — CAPABILITIES
            </p>
          </div>

          <div className="lg:col-span-9">
            <h2
              className="
                max-w-3xl
                text-4xl
                font-bold
                tracking-[-0.04em]
                md:text-6xl
              "
            >
              Where technology
              <br />
              meets{" "}
              <span className="text-zinc-600">
                creativity.
              </span>
            </h2>

            <div className="mt-16 grid grid-cols-1 border-t border-white/10 md:grid-cols-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.5,
                  }}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    border-b
                    border-white/10
                    py-7
                    pr-6
                    transition-all
                    hover:pl-3
                  "
                >
                  <span className="text-sm font-medium tracking-[0.08em] text-zinc-400 transition-colors group-hover:text-white">
                    {skill}
                  </span>

                  <span className="text-zinc-700 transition-colors group-hover:text-[#C6FA00]">
                    ↗
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-[1500px] px-6 py-32 md:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="text-xs tracking-[0.3em] text-zinc-600">
                / 03 — PHILOSOPHY
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-9"
            >
              <blockquote
                className="
                  max-w-5xl
                  text-4xl
                  font-medium
                  leading-[1.05]
                  tracking-[-0.05em]
                  md:text-7xl
                "
              >
                &ldquo;The best technology is the one that
                disappears behind the experience.&rdquo;
              </blockquote>

              <div className="mt-10 flex items-center gap-4 text-xs tracking-[0.25em] text-zinc-600">
                <span className="h-px w-10 bg-[#C6FA00]" />
                BAYU ADI WIBOWO
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="mx-auto max-w-[1500px] px-6 py-32 md:px-12">
        <motion.a
          href="/contact"
          whileHover="hover"
          className="
            group
            relative
            block
            overflow-hidden
            border
            border-white/10
            bg-white/[0.02]
            p-10
            md:p-16
          "
        >
          <div
            className="
              absolute
              inset-0
              -z-0
              bg-[#C6FA00]
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          />

          <div className="relative z-10 flex flex-col justify-between gap-12 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs tracking-[0.3em] text-zinc-600 group-hover:text-black/60">
                HAVE A PROJECT?
              </p>

              <h2 className="text-5xl font-black tracking-[-0.06em] group-hover:text-black md:text-8xl">
                LET&apos;S TALK.
              </h2>
            </div>

            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 text-2xl transition-transform duration-500 group-hover:rotate-45 group-hover:border-black/20 group-hover:text-black">
              <ArrowUpRight />
            </div>
          </div>
        </motion.a>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="mx-auto flex max-w-[1500px] flex-col justify-between gap-4 border-t border-white/10 px-6 py-8 text-xs tracking-[0.2em] text-zinc-700 md:flex-row md:px-12">
        <span>© 2026 BAYU ADI WIBOWO</span>

        <span>AI ENGINEER / FULL STACK DEVELOPER</span>
      </footer>
    </main>
  );
}