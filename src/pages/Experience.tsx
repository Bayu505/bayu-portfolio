import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/layout/BackButton";

const experiences = [
  {
    year: "2025 — NOW",
    role: "AI Engineer & Full Stack Developer",
    company: "Independent / Personal Projects",
    location: "Indonesia",
    description:
      "Designing and building intelligent applications that combine machine learning, computer vision, and modern web technologies.",
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "React",
      "TypeScript",
    ],
    featured: true,
  },
  {
    year: "2024 — 2025",
    role: "Full Stack Developer",
    company: "Web Development",
    location: "Indonesia",
    description:
      "Developed modern web applications with a focus on responsive interfaces, reusable components, API integration, and user experience.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "REST API",
    ],
    featured: false,
  },
  {
    year: "2023 — 2024",
    role: "Machine Learning & Computer Vision",
    company: "Academic / Research Projects",
    location: "Indonesia",
    description:
      "Explored machine learning and computer vision through image classification, semantic segmentation, dataset preparation, and deep learning experimentation.",
    technologies: [
      "Python",
      "CNN",
      "ResNet",
      "U-Net",
      "OpenCV",
    ],
    featured: false,
  },
  {
    year: "2022 — 2023",
    role: "Software Development",
    company: "Academic Projects",
    location: "Indonesia",
    description:
      "Built software projects while developing a strong foundation in programming, system design, databases, and software engineering.",
    technologies: [
      "JavaScript",
      "Python",
      "SQL",
      "Git",
    ],
    featured: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Experience() {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* ===================================================== */}
      {/* BACKGROUND GLOW */}
      {/* ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-[15%]
            top-[10%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#C6FA00]/[0.035]
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            right-[5%]
            top-[40%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-white/[0.025]
            blur-[140px]
          "
        />
      </div>

      {/* ===================================================== */}
      {/* GRID */}
      {/* ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* ===================================================== */}
      {/* TOP NAV */}
      {/* ===================================================== */}

      <header className="relative z-30 flex items-center justify-between px-6 py-6 md:px-12">
        <BackButton />
      </header>

      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section className="relative z-10 mx-auto max-w-[1400px] px-6 pb-24 pt-16 md:px-12 md:pb-32 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="text-xs font-medium uppercase tracking-[0.35em] text-[#C6FA00]">
              03 / Experience
            </span>

            <div className="h-px w-16 bg-white/10" />
          </div>

          <h1
            className="
              max-w-5xl
              text-[clamp(4rem,10vw,9rem)]
              font-black
              uppercase
              leading-[0.8]
              tracking-[-0.075em]
            "
          >
            Experience
          </h1>

          <div className="mt-10 flex max-w-2xl flex-col gap-4 md:flex-row md:items-start md:gap-8">
            <span className="mt-2 hidden h-px w-16 bg-[#C6FA00] md:block" />

            <p className="text-sm leading-7 text-zinc-500 md:text-base">
              A timeline of my journey through software development,
              artificial intelligence, and building digital experiences.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ===================================================== */}
      {/* EXPERIENCE TIMELINE */}
      {/* ===================================================== */}

      <section className="relative z-10 mx-auto max-w-[1400px] px-6 pb-32 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {/* TIMELINE LINE */}

          <div
            className="
              absolute
              bottom-0
              left-[7px]
              top-0
              w-px
              bg-gradient-to-b
              from-[#C6FA00]/50
              via-white/10
              to-transparent
              md:left-[180px]
            "
          />

          <div className="flex flex-col gap-16 md:gap-24">
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.year}-${experience.role}`}
                variants={itemVariants}
                className="group relative grid grid-cols-1 gap-8 md:grid-cols-[180px_1fr]"
              >
                {/* ================================================= */}
                {/* YEAR */}
                {/* ================================================= */}

                <div className="relative pl-8 md:pl-0">
                  <div
                    className="
                      absolute
                      -left-[1px]
                      top-1
                      flex
                      h-4
                      w-4
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-black
                      bg-zinc-800
                      md:left-[174px]
                    "
                  >
                    <div
                      className={`
                        h-1.5
                        w-1.5
                        rounded-full
                        transition-all
                        duration-500
                        ${
                          experience.featured
                            ? "bg-[#C6FA00] shadow-[0_0_12px_#C6FA00]"
                            : "bg-zinc-500 group-hover:bg-[#C6FA00]"
                        }
                      `}
                    />
                  </div>

                  <span className="text-xs font-medium tracking-[0.15em] text-zinc-600">
                    {experience.year}
                  </span>
                </div>

                {/* ================================================= */}
                {/* CARD */}
                {/* ================================================= */}

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                    p-6
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    group-hover:border-white/[0.15]
                    group-hover:bg-white/[0.04]
                    md:p-8
                  "
                >
                  {/* hover glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      h-48
                      w-48
                      rounded-full
                      bg-[#C6FA00]/[0.05]
                      opacity-0
                      blur-[80px]
                      transition-opacity
                      duration-700
                      group-hover:opacity-100
                    "
                  />

                  {/* top row */}

                  <div className="relative flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="mb-3 flex items-center gap-2">
                        {experience.featured && (
                          <span
                            className="
                              rounded-full
                              border
                              border-[#C6FA00]/20
                              bg-[#C6FA00]/10
                              px-2.5
                              py-1
                              text-[9px]
                              font-medium
                              uppercase
                              tracking-[0.2em]
                              text-[#C6FA00]
                            "
                          >
                            Current
                          </span>
                        )}

                        <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-700">
                          0{index + 1}
                        </span>
                      </div>

                      <h2
                        className="
                          text-2xl
                          font-semibold
                          tracking-[-0.03em]
                          text-white
                          md:text-3xl
                        "
                      >
                        {experience.role}
                      </h2>

                      <p className="mt-2 text-sm text-zinc-500">
                        {experience.company}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.5}
                      className="
                        text-zinc-700
                        transition-all
                        duration-500
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-[#C6FA00]
                      "
                    />
                  </div>

                  {/* divider */}

                  <div className="my-7 h-px bg-white/[0.06]" />

                  {/* description */}

                  <p className="max-w-3xl text-sm leading-7 text-zinc-500 md:text-[15px]">
                    {experience.description}
                  </p>

                  {/* metadata */}

                  <div className="mt-7 flex flex-wrap items-center gap-5">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                      <MapPin size={13} strokeWidth={1.5} />
                      {experience.location}
                    </div>

                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                      <Calendar size={13} strokeWidth={1.5} />
                      {experience.year}
                    </div>
                  </div>

                  {/* technologies */}

                  <div className="mt-7 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-full
                          border
                          border-white/[0.07]
                          bg-black/20
                          px-3
                          py-1.5
                          text-[10px]
                          tracking-[0.05em]
                          text-zinc-500
                          transition-colors
                          duration-300
                          group-hover:border-white/10
                          group-hover:text-zinc-300
                        "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ===================================================== */}
      {/* BOTTOM CTA */}
      {/* ===================================================== */}

      <section className="relative z-10 mx-auto max-w-[1400px] px-6 pb-20 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-white/[0.08]
            bg-white/[0.025]
            p-8
            md:p-12
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              h-64
              w-64
              rounded-full
              bg-[#C6FA00]/[0.04]
              blur-[100px]
            "
          />

          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#C6FA00]">
                What's next?
              </p>

              <h2
                className="
                  max-w-2xl
                  text-4xl
                  font-bold
                  tracking-[-0.05em]
                  md:text-6xl
                "
              >
                Let&apos;s build something meaningful.
              </h2>
            </div>

            <button
              onClick={() => navigate("/contact")}
              className="
                group
                flex
                w-fit
                items-center
                gap-4
                rounded-full
                border
                border-white/10
                bg-white
                px-6
                py-3.5
                text-xs
                font-semibold
                uppercase
                tracking-[0.15em]
                text-black
                transition-all
                duration-300
                hover:bg-[#C6FA00]
              "
            >
              Contact Me

              <ArrowUpRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </button>
          </div>
        </motion.div>
      </section>

      {/* ===================================================== */}
      {/* FOOTER */}
      {/* ===================================================== */}

      <footer className="relative z-10 flex flex-col gap-3 border-t border-white/[0.06] px-6 py-8 md:flex-row md:items-center md:justify-between md:px-12">
        <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-700">
          Bayu Adi Wibowo
        </span>

        <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-700">
          Experience / 2026
        </span>
      </footer>
    </main>
  );
}