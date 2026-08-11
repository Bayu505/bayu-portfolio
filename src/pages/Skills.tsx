import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiJupyter,
  SiAnaconda,
} from "react-icons/si";
import BackButton from "../components/layout/BackButton";

const skillGroups = [
  {
    number: "01",
    title: "AI / MACHINE LEARNING",
    description:
      "Building intelligent systems through machine learning, deep learning, and computer vision.",
    skills: [
      {
        name: "Python",
        level: "Advanced",
        description:
          "Primary language for machine learning, data processing, experimentation, and AI development.",
      },
      {
        name: "TensorFlow",
        level: "Advanced",
        description:
          "Deep learning framework used for building and training neural network models.",
      },
      {
        name: "PyTorch",
        level: "Intermediate",
        description:
          "Deep learning framework for experimentation and computer vision workflows.",
      },
      {
        name: "Computer Vision",
        level: "Advanced",
        description:
          "Image processing, classification, segmentation, and visual understanding.",
      },
      {
        name: "CNN",
        level: "Advanced",
        description:
          "Convolutional neural networks for image-based machine learning problems.",
      },
      {
        name: "ResNet / U-Net",
        level: "Advanced",
        description:
          "Deep learning architectures used for image classification and semantic segmentation.",
      },
    ],
  },
  {
    number: "02",
    title: "FRONTEND",
    description:
      "Creating modern interfaces focused on interaction, performance, and visual experience.",
    skills: [
      {
        name: "React",
        level: "Advanced",
        description:
          "Component-based frontend development for interactive web applications.",
      },
      {
        name: "TypeScript",
        level: "Advanced",
        description:
          "Type-safe development for scalable and maintainable frontend applications.",
      },
      {
        name: "Tailwind CSS",
        level: "Advanced",
        description:
          "Utility-first styling for rapidly building responsive interfaces.",
      },
      {
        name: "Framer Motion",
        level: "Intermediate",
        description:
          "Motion and interaction system used to create smooth interface transitions.",
      },
      {
        name: "Responsive UI",
        level: "Advanced",
        description:
          "Designing interfaces that adapt naturally across desktop, tablet, and mobile.",
      },
    ],
  },
  {
    number: "03",
    title: "BACKEND",
    description:
      "Designing APIs, application logic, and data flows that support modern web applications.",
    skills: [
      {
        name: "Node.js",
        level: "Intermediate",
        description:
          "JavaScript runtime for backend services and API development.",
      },
      {
        name: "REST API",
        level: "Intermediate",
        description:
          "Designing and consuming APIs for communication between applications.",
      },
      {
        name: "SQL",
        level: "Intermediate",
        description:
          "Working with relational data, queries, and application persistence.",
      },
      {
        name: "Database",
        level: "Intermediate",
        description:
          "Structuring and managing application data and relationships.",
      },
    ],
  },
  {
    number: "04",
    title: "TOOLS & WORKFLOW",
    description:
      "Tools and practices that support development, experimentation, and deployment.",
    skills: [
      {
        name: "Git",
        level: "Advanced",
        description:
          "Version control and collaboration workflow for software projects.",
      },
      {
        name: "GitHub",
        level: "Advanced",
        description:
          "Repository management, collaboration, and project versioning.",
      },
      {
        name: "VS Code",
        level: "Advanced",
        description:
          "Primary development environment for software and web development.",
      },
      {
        name: "Jupyter",
        level: "Advanced",
        description:
          "Interactive environment for data exploration and machine learning experiments.",
      },
      {
        name: "Anaconda",
        level: "Intermediate",
        description:
          "Python environment and package management for data science workflows.",
      },
    ],
  },
];

const techLogos = [
  {
    name: "Python",
    icon: SiPython,
  },
  {
    name: "TensorFlow",
    icon: SiTensorflow,
  },
  {
    name: "PyTorch",
    icon: SiPytorch,
  },
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
  },
  {
    name: "Git",
    icon: SiGit,
  },
  {
    name: "GitHub",
    icon: SiGithub,
  },
  {
    name: "Jupyter",
    icon: SiJupyter,
  },
  {
    name: "Anaconda",
    icon: SiAnaconda,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Skills() {
  const navigate = useNavigate();

  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const selectedSkill = skillGroups
    .flatMap((group) => group.skills)
    .find((skill) => skill.name === activeSkill);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <BackButton/>
      {/* ===================================================== */}
      {/* AMBIENT LIGHT */}
      {/* ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-[10%]
            top-[5%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#C6FA00]/[0.035]
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            bottom-[10%]
            right-[0%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-white/[0.025]
            blur-[150px]
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
      {/* NAVIGATION */}
      {/* ===================================================== */}

      <header
        className="
          relative
          z-30
          flex
          items-center
          justify-end
          px-6
          py-6
          md:px-12
        "
      >
        <div className="flex items-center gap-3">
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-[#C6FA00]
              shadow-[0_0_12px_#C6FA00]
            "
          />

          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-zinc-600
            "
          >
            Portfolio / Skills
          </span>
        </div>
      </header>

      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section
        className="
          relative
          z-10
          mx-auto
          max-w-[1400px]
          px-6
          pb-20
          pt-16
          md:px-12
          md:pb-28
          md:pt-24
        "
      >
        <motion.div
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
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="mb-6 flex items-center gap-4">
            <span
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.35em]
                text-[#C6FA00]
              "
            >
              04 / Skills
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
            Skills
          </h1>

          <div
            className="
              mt-10
              flex
              max-w-3xl
              flex-col
              gap-4
              md:flex-row
              md:items-start
              md:gap-8
            "
          >
            <span className="mt-2 hidden h-px w-16 bg-[#C6FA00] md:block" />

            <p className="text-sm leading-7 text-zinc-500 md:text-base">
              A collection of technologies, tools, and disciplines I use
              to turn ideas into functional digital products.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ===================================================== */}
      {/* SKILL MATRIX */}
      {/* ===================================================== */}

      <section
        className="
          relative
          z-10
          mx-auto
          max-w-[1400px]
          px-6
          pb-32
          md:px-12
        "
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-5 lg:grid-cols-2"
        >
          {skillGroups.map((group) => (
            <motion.article
              key={group.number}
              variants={itemVariants}
              className="
                group
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
                hover:border-white/[0.14]
                hover:bg-white/[0.04]
                md:p-8
              "
            >
              {/* CARD GLOW */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-56
                  w-56
                  rounded-full
                  bg-[#C6FA00]/[0.045]
                  blur-[90px]
                  transition-opacity
                  duration-700
                  group-hover:opacity-100
                "
              />

              {/* HEADER */}

              <div
                className="
                  relative
                  mb-8
                  flex
                  items-start
                  justify-between
                  gap-6
                "
              >
                <div>
                  <div
                    className="
                      mb-4
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <span
                      className="
                        text-[10px]
                        tracking-[0.25em]
                        text-[#C6FA00]
                      "
                    >
                      {group.number}
                    </span>

                    <div className="h-px w-8 bg-white/10" />
                  </div>

                  <h2
                    className="
                      text-xl
                      font-semibold
                      tracking-[-0.03em]
                      md:text-2xl
                    "
                  >
                    {group.title}
                  </h2>
                </div>

                <Sparkles
                  size={18}
                  strokeWidth={1.3}
                  className="
                    text-zinc-700
                    transition-colors
                    duration-500
                    group-hover:text-[#C6FA00]
                  "
                />
              </div>

              <p
                className="
                  relative
                  mb-8
                  max-w-xl
                  text-sm
                  leading-7
                  text-zinc-600
                "
              >
                {group.description}
              </p>

              {/* SKILLS */}

              <div className="relative space-y-2">
                {group.skills.map((skill) => {
                  const isActive =
                    activeSkill === skill.name;

                  return (
                    <button
                      key={skill.name}
                      onMouseEnter={() =>
                        setActiveSkill(skill.name)
                      }
                      onMouseLeave={() =>
                        setActiveSkill(null)
                      }
                      className={`
                        group/skill
                        relative
                        flex
                        w-full
                        items-center
                        justify-between
                        overflow-hidden
                        rounded-xl
                        border
                        px-4
                        py-3.5
                        text-left
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "border-[#C6FA00]/20 bg-[#C6FA00]/[0.055]"
                            : "border-white/[0.05] bg-black/20 hover:border-white/[0.1]"
                        }
                      `}
                    >
                      <div className="relative z-10 flex items-center gap-3">
                        <span
                          className={`
                            h-1.5
                            w-1.5
                            rounded-full
                            transition-all
                            duration-300
                            ${
                              isActive
                                ? "bg-[#C6FA00] shadow-[0_0_10px_#C6FA00]"
                                : "bg-zinc-700"
                            }
                          `}
                        />

                        <span
                          className={`
                            text-sm
                            font-medium
                            transition-colors
                            duration-300
                            ${
                              isActive
                                ? "text-white"
                                : "text-zinc-400"
                            }
                          `}
                        >
                          {skill.name}
                        </span>
                      </div>

                      <span
                        className={`
                          relative
                          z-10
                          text-[9px]
                          uppercase
                          tracking-[0.2em]
                          transition-colors
                          duration-300
                          ${
                            isActive
                              ? "text-[#C6FA00]"
                              : "text-zinc-700"
                          }
                        `}
                      >
                        {skill.level}
                      </span>

                      {/* ACTIVE LINE */}

                      <motion.div
                        initial={false}
                        animate={{
                          scaleX: isActive ? 1 : 0,
                        }}
                        transition={{
                          duration: 0.35,
                        }}
                        className="
                          absolute
                          bottom-0
                          left-0
                          h-px
                          w-full
                          origin-left
                          bg-[#C6FA00]/50
                        "
                      />
                    </button>
                  );
                })}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* ===================================================== */}
      {/* ACTIVE SKILL DETAIL */}
      {/* ===================================================== */}

      <section
        className="
          relative
          z-10
          mx-auto
          max-w-[1400px]
          px-6
          pb-32
          md:px-12
        "
      >
        <div
          className="
            relative
            min-h-[220px]
            overflow-hidden
            rounded-[32px]
            border
            border-white/[0.07]
            bg-white/[0.02]
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-64
              w-64
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#C6FA00]/[0.025]
              blur-[100px]
            "
          />

          <div className="relative flex min-h-[220px] items-center justify-center p-8 text-center">
            {selectedSkill ? (
              <motion.div
                key={selectedSkill.name}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="max-w-2xl"
              >
                <span
                  className="
                    mb-4
                    inline-block
                    text-[9px]
                    uppercase
                    tracking-[0.3em]
                    text-[#C6FA00]
                  "
                >
                  Selected Skill
                </span>

                <h3
                  className="
                    text-3xl
                    font-semibold
                    tracking-[-0.04em]
                    md:text-5xl
                  "
                >
                  {selectedSkill.name}
                </h3>

                <p
                  className="
                    mx-auto
                    mt-4
                    max-w-xl
                    text-sm
                    leading-7
                    text-zinc-500
                  "
                >
                  {selectedSkill.description}
                </p>

                <div className="mx-auto mt-6 h-px max-w-xs bg-white/[0.06]">
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width:
                        selectedSkill.level === "Advanced"
                          ? "100%"
                          : "68%",
                    }}
                    transition={{
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-px bg-[#C6FA00]"
                  />
                </div>
              </motion.div>
            ) : (
              <div>
                <Sparkles
                  size={22}
                  strokeWidth={1}
                  className="mx-auto mb-4 text-zinc-700"
                />

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.3em]
                    text-zinc-700
                  "
                >
                  Hover a skill to explore
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

            {/* ===================================================== */}
      {/* TECHNOLOGY LOGOS */}
      {/* ===================================================== */}

      <section
        className="
          relative
          z-10
          mx-auto
          max-w-[1400px]
          overflow-hidden
          border-y
          border-white/[0.06]
          px-6
          py-10
          md:px-12
          md:py-12
        "
      >
        {/* ambient glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-40
            w-[70%]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#C6FA00]/[0.025]
            blur-[100px]
          "
        />

        {/* label */}

        <div
          className="
            relative
            mb-8
            flex
            items-center
            gap-4
          "
        >
          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.35em]
              text-zinc-600
            "
          >
            Technologies
          </span>

          <div className="h-px flex-1 bg-white/[0.06]" />
        </div>

        {/* LOGOS */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            flex
            flex-wrap
            items-center
            justify-between
            gap-x-8
            gap-y-8
            md:gap-x-10
          "
        >
          {techLogos.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={tech.name}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.04,
                  duration: 0.45,
                }}
                className="
                  group
                  flex
                  items-center
                  gap-2.5
                  text-zinc-700
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                <Icon
                  size={22}
                  strokeWidth={1.5}
                  className="
                    transition-all
                    duration-300
                    group-hover:text-[#C6FA00]
                    group-hover:drop-shadow-[0_0_10px_rgba(198,250,0,0.35)]
                  "
                />

                <span
                  className="
                    hidden
                    text-xs
                    font-medium
                    tracking-[-0.01em]
                    text-zinc-700
                    transition-colors
                    duration-300
                    group-hover:text-zinc-300
                    sm:block
                  "
                >
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ===================================================== */}
      {/* CTA */}
      {/* ===================================================== */}

      <section
        className="
          relative
          z-10
          mx-auto
          max-w-[1400px]
          px-6
          pb-20
          md:px-12
        "
      >
        <motion.div
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
          }}
          transition={{
            duration: 0.7,
          }}
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

          <div
            className="
              relative
              flex
              flex-col
              justify-between
              gap-8
              md:flex-row
              md:items-end
            "
          >
            <div>
              <p
                className="
                  mb-4
                  text-[10px]
                  uppercase
                  tracking-[0.35em]
                  text-[#C6FA00]
                "
              >
                Explore the work
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
                Skills are better shown through projects.
              </h2>
            </div>

            <button
              onClick={() => navigate("/projects")}
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
              View Projects

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

      <footer
        className="
          relative
          z-10
          flex
          flex-col
          gap-3
          border-t
          border-white/[0.06]
          px-6
          py-8
          md:flex-row
          md:items-center
          md:justify-between
          md:px-12
        "
      >
        <span
          className="
            text-[10px]
            uppercase
            tracking-[0.3em]
            text-zinc-700
          "
        >
          Bayu Adi Wibowo
        </span>

        <span
          className="
            text-[10px]
            uppercase
            tracking-[0.3em]
            text-zinc-700
          "
        >
          Skills / 2026
        </span>
      </footer>
    </main>
  );
}