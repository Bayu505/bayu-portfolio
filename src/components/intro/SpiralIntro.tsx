import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const items = [
  {
    title: "ABOUT",
    image: "/preview/about.jpg",
    href: "/about",
    x: -380,
    y: -180,
    rotate: -14,
    depth: 0,
  },
  {
    title: "PROJECTS",
    image: "/preview/projects.jpg",
    href: "/projects",
    x: 20,
    y: -280,
    rotate: 8,
    depth: 1,
  },
  {
    title: "SKILLS",
    image: "/preview/skills.jpg",
    href: "/skills",
    x: 360,
    y: -120,
    rotate: 15,
    depth: 2,
  },
  {
    title: "EXPERIENCE",
    image: "/preview/experience.jpg",
    href: "/experience",
    x: 300,
    y: 230,
    rotate: -8,
    depth: 3,
  },
  {
    title: "CONTACT",
    image: "/preview/contact.jpg",
    href: "/contact",
    x: -40,
    y: 300,
    rotate: -13,
    depth: 4,
  },
];

export default function SpiralIntro() {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [-8, 18]
  );

  const centerY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -120]
  );

  return (
    <section
      ref={sectionRef}
      className="
        relative
        h-[320vh]
        w-full
        bg-black
        text-white
      "
    >
      {/* ================================================= */}
      {/* STICKY VIEWPORT */}
      {/* ================================================= */}

      <div
        className="
          sticky
          top-0
          h-screen
          w-full
          overflow-hidden
        "
      >
        {/* ================================================= */}
        {/* BACKGROUND GRID */}
        {/* ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-40
            [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        />

        {/* radial fade */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.7)_80%)]
          "
        />

        {/* ================================================= */}
        {/* TOP MODE INDICATOR */}
        {/* ================================================= */}

        <div
          className="
            absolute
            left-1/2
            top-10
            z-50
            flex
            -translate-x-1/2
            items-center
            gap-5
            text-sm
          "
        >
          <span className="font-medium text-white">
            spiral
          </span>

          <span
            className="
              h-2
              w-2
              rounded-full
              bg-[#C6FA00]
              shadow-[0_0_12px_rgba(198,250,0,0.7)]
            "
          />

          <span className="text-zinc-600">
            list
          </span>
        </div>

        {/* ================================================= */}
        {/* MAIN SPIRAL */}
        {/* ================================================= */}

        <motion.div
          style={{
            rotate,
            y: centerY,
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[620px]
            w-[900px]
            -translate-x-1/2
            -translate-y-1/2
          "
        >
          {/* center glow */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[320px]
              w-[320px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#C6FA00]/5
              blur-[100px]
            "
          />

          {items.map((item, index) => (
            <SpiralCard
              key={item.title}
              item={item}
              index={index}
              progress={scrollYProgress}
              onClick={() => navigate(item.href)}
            />
          ))}
        </motion.div>

        {/* ================================================= */}
        {/* CENTER TITLE */}
        {/* ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            z-20
            -translate-x-1/2
            -translate-y-1/2
            text-center
          "
        >
          <p
            className="
              mb-4
              text-[10px]
              uppercase
              tracking-[0.45em]
              text-[#C6FA00]
            "
          >
            Beta
          </p>

          <h1
            className="
              text-[54px]
              font-black
              uppercase
              leading-[0.82]
              tracking-[-0.08em]
              text-zinc-200
              md:text-[80px]
            "
          >
            Bayu Adi Wibowo
          </h1>

          <p
            className="
              mt-5
              text-xs
              uppercase
              tracking-[0.35em]
              text-zinc-600
            "
          >
            AI Engineer / Full Stack
          </p>
        </div>

        {/* ================================================= */}
        {/* LEFT LABEL */}
        {/* ================================================= */}

        <div
          className="
            absolute
            left-7
            top-1/2
            z-30
            -translate-y-1/2
          "
        >
          <div
            className="
              flex
              flex-col
              items-center
              gap-3
            "
          >
            <span className="h-14 w-px bg-zinc-800" />

            <span
              className="
                text-[9px]
                font-medium
                tracking-[0.35em]
                text-zinc-600
                [writing-mode:vertical-rl]
              "
            >
              SELECT A PROJECT
            </span>

            <span className="h-14 w-px bg-zinc-800" />
          </div>
        </div>

        {/* ================================================= */}
        {/* BOTTOM */}
        {/* ================================================= */}

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
              tracking-[0.4em]
              text-zinc-600
            "
          >
            Scroll to explore
          </p>
        </div>
      </div>
    </section>
  );
}

function SpiralCard({
  item,
  index,
  progress,
  onClick,
}: {
  item: (typeof items)[number];
  index: number;
  progress: any;
  onClick: () => void;
}) {
  const scrollX = useTransform(
    progress,
    [0, 1],
    [item.x, item.x * -0.55]
  );

  const scrollY = useTransform(
    progress,
    [0, 1],
    [item.y, item.y * 0.35]
  );

  const scrollRotate = useTransform(
    progress,
    [0, 1],
    [item.rotate, item.rotate + (index % 2 === 0 ? 18 : -18)]
  );

  const scale = useTransform(
    progress,
    [0, 0.5, 1],
    [1, 1.08, 0.92]
  );

  return (
    <motion.button
      onClick={onClick}
      style={{
        x: scrollX,
        y: scrollY,
        rotate: scrollRotate,
        scale,
      }}
      className="
        group
        absolute
        left-1/2
        top-1/2
        h-[180px]
        w-[260px]
        -translate-x-1/2
        -translate-y-1/2
        overflow-hidden
        rounded-[20px]
        border
        border-white/10
        bg-zinc-900
        text-left
        shadow-[0_30px_80px_rgba(0,0,0,0.45)]
        transition
        duration-500
        hover:z-50
        hover:border-white/30
        md:h-[220px]
        md:w-[320px]
      "
    >
      {/* image */}

      <img
        src={item.image}
        alt={item.title}
        className="
          h-full
          w-full
          object-cover
          opacity-80
          transition
          duration-700
          group-hover:scale-110
          group-hover:opacity-100
        "
      />

      {/* dark gradient */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/80
          via-black/10
          to-transparent
        "
      />

      {/* title */}

      <div className="absolute bottom-5 left-5">
        <p
          className="
            text-[10px]
            font-medium
            uppercase
            tracking-[0.3em]
            text-[#C6FA00]
          "
        >
          0{index + 1}
        </p>

        <h2
          className="
            mt-1
            text-xl
            font-bold
            tracking-[-0.04em]
            text-white
          "
        >
          {item.title}
        </h2>
      </div>

      {/* arrow */}

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
          border-white/20
          bg-black/20
          text-sm
          text-white
          opacity-0
          transition
          duration-300
          group-hover:opacity-100
        "
      >
        ↗
      </span>
    </motion.button>
  );
}