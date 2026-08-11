import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import RotatingBadge from "./RotatingBadge";
import ModeSwitcher from "./ModeSwitcher";

const menus = [
  {
    title: "ABOUT",
    image: "/preview/about.png",
    href: "/about",
  },
  {
    title: "PROJECTS",
    image: "/preview/projects.png",
    href: "/projects",
  },
  {
    title: "SKILLS",
    image: "/preview/skills.png",
    href: "/skills",
  },
  {
    title: "EXPERIENCE",
    image: "/preview/experience.png",
    href: "/experience",
  },
  {
    title: "CONTACT",
    image: "/preview/contact.png",
    href: "/contact",
  },
];

export default function Intro() {
  const [active, setActive] = useState<number | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  // =====================================================
  // MOUSE PARALLAX
  // =====================================================

  const handleMouseMove = (
    e: React.MouseEvent<HTMLElement>
  ) => {
    const x =
      (e.clientX / window.innerWidth - 0.5) * 2;

    const y =
      (e.clientY / window.innerHeight - 0.5) * 2;

    setMouse({
      x,
      y,
    });
  };

  // =====================================================
  // CLICK
  // =====================================================

  const handleClick = (index: number) => {
    if (isTransitioning) return;

    setActive(index);
    setShowPreview(true);
    setIsTransitioning(true);
  };

  return (
    <section
      className="
        relative
        flex
        h-screen
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-black
        text-whiteu
      "
      onMouseMove={handleMouseMove}
    >
      {/* ================================================= */}
      {/* FULLSCREEN PREVIEW */}
      {/* ================================================= */}

      <AnimatePresence mode="wait">
        {showPreview && active !== null && (
          <motion.div
            key={menus[active].image}
            initial={{
              opacity: 0,
              scale: 1.08,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.08,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              pointer-events-none
              absolute
              inset-0
              z-0
              overflow-hidden
            "
          >
            {/* IMAGE */}

            <motion.img
              src={menus[active].image}
              alt={menus[active].title}
              animate={{
                x: mouse.x * 18,
                y: mouse.y * 12,
                scale: isTransitioning
                  ? 1.18
                  : 1.08,
              }}
              transition={{
                x: {
                  type: "spring",
                  stiffness: 80,
                  damping: 20,
                },
                y: {
                  type: "spring",
                  stiffness: 80,
                  damping: 20,
                },
                scale: {
                  duration: isTransitioning
                    ? 0.7
                    : 8,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                brightness-[0.38]
              "
            />

            {/* DARK OVERLAY */}

            <motion.div
              animate={{
                opacity: isTransitioning
                  ? 0.85
                  : 0.45,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                absolute
                inset-0
                bg-black
              "
            />

            {/* GRADIENT */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-b
                from-black/20
                via-transparent
                to-black/70
              "
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================================================= */}
      {/* ROTATING BADGE */}
      {/* ================================================= */}
      <RotatingBadge/>

      {/* ================================================= */}
      {/* MODE SWITCH */}
      {/* ================================================= */}

      <ModeSwitcher/>

      {/* ================================================= */}
      {/* MENU */}
      {/* ================================================= */}

      <div
        className="
          relative
          z-20
          flex
          flex-col
          items-center
          leading-none
        "
        onMouseEnter={() => {
          if (!isTransitioning) {
            setShowPreview(true);
          }
        }}
        onMouseLeave={() => {
          if (!isTransitioning) {
            setShowPreview(false);
            setActive(null);
          }
        }}
      >
        {menus.map((menu, index) => (
          <motion.div
            key={menu.title}
            animate={{
              opacity:
                active === null || active === index
                  ? 1
                  : 0.35,
            }}
            whileHover={{
              scale: 1.03,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <Link
              to={`${menu.href}?mode=list`}
              state={{fromMode: "list"}}
              onMouseEnter={() => {
                if (!isTransitioning) {
                  setActive(index);
                  setShowPreview(true);
                }
              }}
              onClick={() => {
                handleClick(index);
              }}
              className={`
                block
                cursor-pointer
                select-none
                font-black
                uppercase
                tracking-[-0.08em]
                text-[70px]
                md:text-[96px]
                ${
                  active === index
                    ? "text-white"
                    : "text-zinc-400"
                }
              `}
            >
              {menu.title}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* ================================================= */}
      {/* LEFT */}
      {/* ================================================= */}

      <div
        className="
          absolute
          left-12
          top-1/2
          z-30
          -translate-y-1/2
        "
      >
        <div className="-rotate-90 origin-left">
          <p className="text-xs tracking-[0.5em] text-[#C6FA00]">
            BETA
          </p>
        </div>
      </div>

      {/* ================================================= */}
      {/* BOTTOM */}
      {/* ================================================= */}

      <div
        className="
          absolute
          bottom-14
          right-14
          z-30
          text-right
        "
      >
        <p className="mb-3 text-sm tracking-[0.35em] text-zinc-400">
          BAYU ADI WIBOWO
        </p>

        <h2 className="text-5xl font-bold">
          AI Engineer &
          <br />
          Full Stack Developer
        </h2>
      </div>

      {/* ================================================= */}
      {/* PAGE TRANSITION */}
      {/* ================================================= */}

      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              pointer-events-none
              fixed
              inset-0
              z-[100]
              bg-black
            "
          />
        )}
      </AnimatePresence>
    </section>
  );
}