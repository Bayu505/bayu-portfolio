import { motion } from "framer-motion";
import BackButton from "../components/layout/BackButton";

const contactLinks = [
  {
    label: "EMAIL",
    value: "bayuadiwibowo13@gmail.com",
    href: "mailto:bayuadiwibowo13@gmail.com",
  },
  {
    label: "GITHUB",
    value: "github.com/bayu505",
    href: "https://github.com/bayu505",
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/bayu-adi-wibowo",
    href: "https://www.linkedin.com/in/bayu-adi-wibowo/",
  },
];

export default function Contact() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* BACK */}
      <BackButton />

      {/* AMBIENT GLOW */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-[60%]
            top-[20%]
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-[#C6FA00]/5
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            bottom-[-200px]
            left-[-100px]
            h-[400px]
            w-[400px]
            rounded-full
            bg-white/[0.02]
            blur-[120px]
          "
        />
      </div>

      {/* GRID */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      <section className="relative z-10 mx-auto min-h-screen max-w-[1500px] px-8 py-28 md:px-14 lg:px-20">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#C6FA00]">
            05 / Contact
          </p>

          <h1
            className="
              text-[clamp(4rem,10vw,9rem)]
              font-black
              leading-[0.8]
              tracking-[-0.08em]
            "
          >
            LET'S
            <br />
            <span className="text-zinc-600">TALK.</span>
          </h1>

          <p className="mt-10 max-w-lg text-sm leading-7 text-zinc-500 md:text-base">
            Have a project, idea, or opportunity in mind?
            <br />
            Let's build something meaningful together.
          </p>
        </motion.div>

        {/* MAIN CONTACT AREA */}
        <div className="mt-24 grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
          >
            <div className="mb-10">
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-zinc-600">
                Available for
              </p>

              <h2 className="text-3xl font-semibold tracking-tight">
                New opportunities.
              </h2>
            </div>

            <div className="space-y-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
              {contactLinks.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={
                    item.href.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    item.href.startsWith("http")
                      ? "noreferrer"
                      : undefined
                  }
                  whileHover={{
                    x: 5,
                  }}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    bg-black
                    px-6
                    py-6
                    transition-colors
                    duration-300
                    hover:bg-zinc-950
                  "
                >
                  <div>
                    <p className="mb-2 text-[10px] tracking-[0.3em] text-zinc-600">
                      {item.label}
                    </p>

                    <p className="text-sm text-zinc-400 transition-colors duration-300 group-hover:text-white">
                      {item.value}
                    </p>
                  </div>

                  <span className="text-zinc-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#C6FA00]">
                    ↗
                  </span>
                </motion.a>
              ))}
            </div>

            {/* STATUS */}
            <div className="mt-8 flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C6FA00] opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C6FA00]" />
              </span>

              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                Currently available
              </p>
            </div>
          </motion.div>

          {/* RIGHT / FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/[0.025]
              p-6
              backdrop-blur-xl
              md:p-8
            "
          >
            {/* CARD GLOW */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#C6FA00]/5 blur-[100px]" />

            <div className="relative">
              <div className="mb-10">
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
                  Send a message
                </p>
              </div>

              <form className="space-y-8">
                {/* NAME */}
                <div className="group relative">
                  <label
                    htmlFor="name"
                    className="
                      mb-3
                      block
                      text-[10px]
                      uppercase
                      tracking-[0.3em]
                      text-zinc-600
                    "
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="
                      w-full
                      border-b
                      border-white/10
                      bg-transparent
                      pb-4
                      text-sm
                      text-white
                      outline-none
                      placeholder:text-zinc-700
                      transition-colors
                      duration-300
                      focus:border-[#C6FA00]/60
                    "
                  />
                </div>

                {/* EMAIL */}
                <div className="group relative">
                  <label
                    htmlFor="email"
                    className="
                      mb-3
                      block
                      text-[10px]
                      uppercase
                      tracking-[0.3em]
                      text-zinc-600
                    "
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="
                      w-full
                      border-b
                      border-white/10
                      bg-transparent
                      pb-4
                      text-sm
                      text-white
                      outline-none
                      placeholder:text-zinc-700
                      transition-colors
                      duration-300
                      focus:border-[#C6FA00]/60
                    "
                  />
                </div>

                {/* SUBJECT */}
                <div className="group relative">
                  <label
                    htmlFor="subject"
                    className="
                      mb-3
                      block
                      text-[10px]
                      uppercase
                      tracking-[0.3em]
                      text-zinc-600
                    "
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    placeholder="Project / Collaboration"
                    className="
                      w-full
                      border-b
                      border-white/10
                      bg-transparent
                      pb-4
                      text-sm
                      text-white
                      outline-none
                      placeholder:text-zinc-700
                      transition-colors
                      duration-300
                      focus:border-[#C6FA00]/60
                    "
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="message"
                    className="
                      mb-3
                      block
                      text-[10px]
                      uppercase
                      tracking-[0.3em]
                      text-zinc-600
                    "
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell me about your idea..."
                    className="
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-white/10
                      bg-black/40
                      p-4
                      text-sm
                      text-white
                      outline-none
                      placeholder:text-zinc-700
                      transition-all
                      duration-300
                      focus:border-[#C6FA00]/40
                      focus:bg-black/60
                    "
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-xl
                    bg-[#C6FA00]
                    px-6
                    py-4
                    text-sm
                    font-bold
                    text-black
                    transition-all
                    duration-300
                    hover:shadow-[0_0_40px_rgba(198,250,0,0.15)]
                  "
                >
                  <span>START A CONVERSATION</span>

                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM */}
        <div className="mt-24 border-t border-white/10 pt-6">
          <div className="flex flex-col justify-between gap-4 text-[10px] uppercase tracking-[0.25em] text-zinc-700 md:flex-row">
            <span>Bayu Adi Wibowo</span>
            <span>AI Engineer / Full Stack Developer</span>
            <span>2026</span>
          </div>
        </div>
      </section>
    </main>
  );
}