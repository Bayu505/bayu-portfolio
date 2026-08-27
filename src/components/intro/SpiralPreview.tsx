import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ModeSwitcher from "./ModeSwitcher";     

type SpiralItem = {
  id: number;
  title: string;
  route: string;
  image: string;
};

const spiralItems: SpiralItem[] = [
  {
    id: 1,
    title: "About",
    route: "/about",
    image: "/preview/about.png",
  },
  {
    id: 2,
    title: "Projects",
    route: "/projects",
    image: "/preview/projects.png",
  },
  {
    id: 3,
    title: "Skills",
    route: "/skills",
    image: "/preview/skills.png",
  },
  {
    id: 4,
    title: "Experience",
    route: "/experience",
    image: "/preview/experience.png",
  },
  {
    id: 5,
    title: "Contact",
    route: "/contact",
    image: "/preview/contact.png",
  },
];

/*
|--------------------------------------------------------------------------
| Configuration
|--------------------------------------------------------------------------
*/

const LOOP = 3600;
const SCROLL_SPEED = 0.55;
const ROTATION_SPEED = 0.0012;
const SMOOTHING = 0.08;

function mod(value: number, divisor: number) {
  return ((value % divisor) + divisor) % divisor;
}

export default function SpiralPreview() {
  const navigate = useNavigate();

  /*
  |--------------------------------------------------------------------------
  | Virtual scroll
  |--------------------------------------------------------------------------
  */

  const scrollRef = useRef(0);
  const targetScroll = useRef(0);
  const animationRef = useRef<number | null>(null);

  const [, forceRender] = useState(0);

  /*
  |--------------------------------------------------------------------------
  | Infinite wheel animation
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      targetScroll.current += event.deltaY;
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    const animate = () => {
      const current = scrollRef.current;
      const target = targetScroll.current;

      scrollRef.current += (target - current) * SMOOTHING;

      forceRender((value) => value + 1);

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("wheel", handleWheel);

      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Keyboard navigation
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown" || event.key === "PageDown") {
        targetScroll.current += 300;
      }

      if (event.key === "ArrowUp" || event.key === "PageUp") {
        targetScroll.current -= 300;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <main className="fixed inset-0 overflow-hidden bg-black text-white">
      {/* ========================================================= */}
      {/* BACKGROUND */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.16]
            [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        />

        {/* Center glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[520px]
            w-[520px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-lime-400/[0.035]
            blur-[130px]
          "
        />

        {/* Vignette */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.65)_90%)]
          "
        />

        {/* Top fade */}

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-40
            bg-gradient-to-b
            from-black
            to-transparent
          "
        />

        {/* Bottom fade */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-40
            bg-gradient-to-t
            from-black
            to-transparent
          "
        />
      </div>

      {/* ========================================================= */}
      {/* TOP NAVIGATION */}
      {/* ========================================================= */}

      <header>
        <ModeSwitcher/>
      </header>

      {/* ========================================================= */}
      {/* MENU */}
      {/* ========================================================= */}

      <button
        type="button"
        onClick={() => navigate("/Intro")}
        className="
          absolute
          right-7
          top-7
          z-[100]
          rounded-full
          border
          border-white/[0.08]
          bg-white
          px-6
          py-2.5
          text-[11px]
          font-medium
          uppercase
          tracking-[0.12em]
          text-black
          transition
          duration-300
          hover:scale-105
          hover:bg-lime-300
          md:right-8
        "
      >
        Menu
        <span className="ml-2">↗</span>
      </button>

      {/* ========================================================= */}
      {/* LEFT DECORATION */}
      {/* ========================================================= */}

      <div
        className="
          absolute
          left-6
          top-1/2
          z-40
          hidden
          -translate-y-1/2
          md:block
        "
      >
        <div className="flex flex-col items-center gap-4">
          <span className="h-16 w-px bg-white/10" />

          <span
            className="
              [writing-mode:vertical-rl]
              text-[9px]
              uppercase
              tracking-[0.45em]
              text-white/25
            "
          >
            BETA
          </span>

          <span className="h-16 w-px bg-white/10" />
        </div>
      </div>

      {/* ========================================================= */}
      {/* SPIRAL */}
      {/* ========================================================= */}

      <div className="absolute inset-0 flex items-center justify-center">
        {spiralItems.map((item, index) => {
          /*
          |--------------------------------------------------------------------------
          | Infinite position
          |--------------------------------------------------------------------------
          */

          const normalizedScroll =
            mod(
              index * 720 + scrollRef.current * SCROLL_SPEED,
              LOOP
            );

          /*
          |--------------------------------------------------------------------------
          | Spiral angle
          |--------------------------------------------------------------------------
          */

          const angle =
            (index / spiralItems.length) * Math.PI * 2 +
            scrollRef.current * ROTATION_SPEED;

          /*
          |--------------------------------------------------------------------------
          | Radius
          |--------------------------------------------------------------------------
          */

          const radiusProgress = normalizedScroll / LOOP;

          /*
          | Keep the cards concentrated around the center
          */

          const radius =
            150 +
            Math.sin(radiusProgress * Math.PI) * 390 +
            radiusProgress * 180;

          /*
          |--------------------------------------------------------------------------
          | Position
          |--------------------------------------------------------------------------
          */

          const x = Math.cos(angle) * radius;

          const y =
            Math.sin(angle) *
            radius *
            0.58;

          /*
          |--------------------------------------------------------------------------
          | Depth
          |--------------------------------------------------------------------------
          */

          const distanceFromFocus = Math.abs(radius - 470);

          const depth =
            1 -
            Math.min(
              distanceFromFocus / 600,
              0.82
            );

          /*
          |--------------------------------------------------------------------------
          | Scale
          |--------------------------------------------------------------------------
          */

          const scale =
            0.62 +
            depth * 0.43;

          /*
          |--------------------------------------------------------------------------
          | Opacity
          |--------------------------------------------------------------------------
          */

          const opacity =
            0.22 +
            depth * 0.78;

          /*
          |--------------------------------------------------------------------------
          | Rotation
          |--------------------------------------------------------------------------
          */

          const rotate =
            Math.sin(angle) * 8;

          /*
          |--------------------------------------------------------------------------
          | Z-index
          |--------------------------------------------------------------------------
          */

          const zIndex =
            Math.round(depth * 100);

          return (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => 
                navigate(`${item.route}?mode=spiral`)
              }  
              className="
                group
                absolute
                h-[180px]
                w-[280px]
                overflow-hidden
                rounded-[20px]
                border
                border-white/[0.10]
                bg-white/[0.035]
                text-left
                shadow-[0_30px_100px_rgba(0,0,0,0.55)]
                backdrop-blur-xl
                outline-none
                transition-[border-color,box-shadow]
                duration-500
                hover:border-lime-300/40
                hover:shadow-[0_30px_100px_rgba(0,0,0,0.7)]
                focus-visible:border-lime-300
                md:h-[220px]
                md:w-[330px]
              "
              animate={{
                x,
                y,
                scale,
                rotate,
              }}
              transition={{
                type: "tween",
                duration: 0.16,
                ease: "linear",
              }}
              style={{
                zIndex,
                opacity,
              }}
            >
              {/* ================================================= */}
              {/* IMAGE */}
              {/* ================================================= */}

              <img
                src={item.image}
                alt={`${item.title} preview`}
                draggable={false}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  opacity-65
                  transition
                  duration-700
                  ease-out
                  group-hover:scale-110
                  group-hover:opacity-100
                "
              />

              {/* ================================================= */}
              {/* IMAGE OVERLAY */}
              {/* ================================================= */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-b
                  from-black/10
                  via-black/10
                  to-black/90
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-white/[0.08]
                  via-transparent
                  to-black/30
                "
              />

              {/* ================================================= */}
              {/* TOP NUMBER */}
              {/* ================================================= */}

              <div
                className="
                  absolute
                  left-5
                  top-5
                  flex
                  items-center
                  gap-2
                "
              >
                <span
                  className="
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.3em]
                    text-lime-300
                  "
                >
                  0{item.id}
                </span>

                <span className="h-px w-5 bg-white/20" />
              </div>

              {/* ================================================= */}
              {/* ARROW */}
              {/* ================================================= */}

              <span
                className="
                  absolute
                  right-5
                  top-5
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  bg-black/20
                  text-sm
                  text-white
                  opacity-0
                  backdrop-blur-md
                  transition
                  duration-300
                  group-hover:opacity-100
                  group-hover:bg-lime-300
                  group-hover:text-black
                "
              >
                ↗
              </span>

              {/* ================================================= */}
              {/* CARD CONTENT */}
              {/* ================================================= */}

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                "
              >
                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.38em]
                    text-white/40
                  "
                >
                  portfolio
                </p>

                <h2
                  className="
                    mt-1
                    text-2xl
                    font-medium
                    tracking-[-0.045em]
                    text-white
                    transition
                    duration-300
                    group-hover:text-lime-200
                  "
                >
                  {item.title}
                </h2>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* ========================================================= */}
      {/* CENTER TITLE */}
      {/* ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-20
          w-[90%]
          -translate-x-1/2
          -translate-y-1/2
          text-center
          md:w-auto
        "
      >
        <p
          className="
            mb-4
            text-[9px]
            uppercase
            tracking-[0.5em]
            text-lime-300/80
          "
        >
          Creative Portfolio
        </p>

        <h1
          className="
            text-[42px]
            font-semibold
            uppercase
            leading-[0.85]
            tracking-[-0.08em]
            text-white/[0.92]
            md:text-[76px]
          "
        >
          Bayu Adi Wibowo
          <br />
          Development Stage 
        </h1>

        <p
          className="
            mt-5
            text-[9px]
            uppercase
            tracking-[0.38em]
            text-white/25
            md:text-[10px]
          "
        >
          AI Engineer&nbsp; / &nbsp;Full Stack
        </p>
      </div>

      {/* ========================================================= */}
      {/* BOTTOM LEFT ROTATING LABEL */}
      {/* ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-85px]
          left-[-85px]
          h-[250px]
          w-[250px]
          md:bottom-[-100px]
          md:left-[-100px]
          md:h-[300px]
          md:w-[300px]
        "
      >
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            relative
            flex
            h-full
            w-full
            items-center
            justify-center
            rounded-full
            border
            border-white/[0.08]
          "
        >
          <div
            className="
              absolute
              whitespace-nowrap
              text-[9px]
              uppercase
              tracking-[0.45em]
              text-lime-300/70
            "
          >
            PORTFOLIO • 2026 • PORTFOLIO • 2026
          </div>
        </motion.div>
      </div>

      {/* ========================================================= */}
      {/* BOTTOM RIGHT STATUS */}
      {/* ========================================================= */}

      <div
        className="
          absolute
          bottom-8
          right-7
          z-30
          hidden
          items-center
          gap-3
          md:flex
        "
      >
        <span
          className="
            h-1.5
            w-1.5
            rounded-full
            bg-lime-300
            shadow-[0_0_10px_rgba(190,242,100,0.8)]
          "
        />

        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.35em]
            text-white/30
          "
        >
          System Online
        </span>
      </div>

      {/* ========================================================= */}
      {/* SCROLL HINT */}
      {/* ========================================================= */}

      <div
        className="
          absolute
          bottom-8
          left-1/2
          z-30
          -translate-x-1/2
          text-center
        "
      >
        <p
          className="
            text-[9px]
            uppercase
            tracking-[0.45em]
            text-white/25
          "
        >
          Scroll to explore
        </p>

        <motion.div
          animate={{
            y: [0, 5, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            mx-auto
            mt-3
            h-6
            w-px
            bg-gradient-to-b
            from-lime-300
            to-transparent
          "
        />
      </div>
    </main>
  );
}