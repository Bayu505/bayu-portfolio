import {useCallback,useEffect,useRef,useState,} from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ModeSwitcher from "./ModeSwitcher";

interface SpiralItem {id: number; title: string; route: string; image: string;}

interface ResponsiveLayout {cardWidth: number; cardStep: number; cardY: number;}

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
    image: "/preview/skills.jpg",
  },
  {
    id: 4,
    title: "Experience",
    route: "/experience",
    image: "/preview/experience.jpg",
  },
  {
    id: 5,
    title: "Contact",
    route: "/contact",
    image: "/preview/contact.png",
  },
];

/* ================================================================ */
/* CONFIGURATION                                                    */
/* ================================================================ */

const SCROLL_COOLDOWN = 650;
const SWIPE_THRESHOLD = 50;

/* ================================================================ */
/* RESPONSIVE LAYOUT                                                */
/* ================================================================ */

function getResponsiveLayout(): ResponsiveLayout {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const aspectRatio = width / height;

  /*
   * ================================================================
   * CARD WIDTH
   * ================================================================
   *
   * Card tidak hanya mengikuti viewport width.
   *
   * width  → menjaga komposisi horizontal
   * height → menjaga card tidak terlalu tinggi
   *
   * Minimum : 220px
   * Ideal   : 20.5vw
   * Maximum : 315px
   */

  const widthBasedCard = width * 0.205;
  const heightBasedCard = height * 0.44;

  let cardWidth = Math.min(
    widthBasedCard,
    heightBasedCard,
    315
  );

  cardWidth = Math.max(
    cardWidth,
    220
  );

  /*
   * Mobile
   *
   * Jangan membuat card terlalu besar
   * pada layar sempit.
   */
  if (width < 640) {
    cardWidth = Math.min(
      width * 0.68,
      height * 0.43,
      275
    );

    cardWidth = Math.max(
      cardWidth,
      220
    );
  }

  /*
   * ================================================================
   * CARD STEP
   * ================================================================
   *
   * Jarak horizontal mengikuti ukuran card.
   *
   * Card besar → jarak lebih besar
   * Card kecil → jarak lebih kecil
   */

  let cardStep = cardWidth * 1.11;

  /*
   * Ultrawide
   *
   * 21:9 / 32:9 tidak perlu membuat
   * komposisi card terlalu renggang.
   */

  if (aspectRatio >= 2.0) {
    cardStep *= 0.94;
  }

  /*
   * Pastikan jarak tidak terlalu rapat
   * atau terlalu jauh.
   */

  cardStep = Math.max(
    cardStep,
    235
  );

  cardStep = Math.min(
    cardStep,
    350
  );

  /*
   * ================================================================
   * CARD Y POSITION
   * ================================================================
   *
   * Menggunakan viewport height.
   *
   * Layar pendek  → card turun
   * Layar normal  → card di tengah
   * Layar tinggi  → card sedikit naik
   */

  let cardY = height * 0.50;

  if (height <= 600) {
    cardY = height * 0.59;
  } else if (height <= 700) {
    cardY = height * 0.56;
  } else if (height <= 800) {
    cardY = height * 0.54;
  } else if (height <= 900) {
    cardY = height * 0.51;
  } else if (height <= 1100) {
    cardY = height * 0.49;
  } else {
    cardY = height * 0.47;
  }

  /*
   * Mobile portrait
   *
   * Card sedikit lebih rendah agar header
   * tidak bertabrakan dengan card.
   */

  if (
    width < 640 &&
    height > width
  ) {
    cardY = height * 0.57;
  }

  /*
   * Layar sangat pendek
   *
   * Prioritaskan agar bagian card tetap
   * berada dalam viewport.
   */

  if (height < 650) {
    cardY = height * 0.58;
  }

  return {
    cardWidth,
    cardStep,
    cardY,
  };
}

/* ================================================================ */
/* RELATIVE INDEX                                                   */
/* ================================================================ */

function getRelativeIndex(
  index: number,
  activeIndex: number,
  total: number
) {
  let offset =
    index - activeIndex;

  if (offset > total / 2) {
    offset -= total;
  }

  if (offset < -total / 2) {
    offset += total;
  }

  return offset;
}

/* ================================================================ */
/* COMPONENT                                                        */
/* ================================================================ */

export default function SpiralPreview() {
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] =
    useState(0);

  const [layout, setLayout] =
    useState<ResponsiveLayout>(() =>
      getResponsiveLayout()
    );

  const wheelLocked = useRef(false);

  const touchStartX =
    useRef<number | null>(null);

  const touchStartY =
    useRef<number | null>(null);

  /* ================================================================ */
  /* NAVIGATION                                                       */
  /* ================================================================ */

  const goNext = useCallback(() => {
    setActiveIndex((current) => {
      return (
        (current + 1) %
        spiralItems.length
      );
    });
  }, []);

  const goPrevious = useCallback(() => {
    setActiveIndex((current) => {
      return (
        (current - 1 + spiralItems.length) %
        spiralItems.length
      );
    });
  }, []);

  /* ================================================================ */
  /* RESPONSIVE LAYOUT                                                */
  /* ================================================================ */

  useEffect(() => {
    const updateLayout = () => {
      setLayout(
        getResponsiveLayout()
      );
    };

    updateLayout();

    window.addEventListener(
      "resize",
      updateLayout
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateLayout
      );
    };
  }, []);

  /* ================================================================ */
  /* MOUSE WHEEL                                                      */
  /* ================================================================ */

  useEffect(() => {
    const handleWheel = (
      event: WheelEvent
    ) => {
      event.preventDefault();

      if (wheelLocked.current) {
        return;
      }

      if (
        Math.abs(event.deltaY) < 10
      ) {
        return;
      }

      wheelLocked.current = true;

      if (event.deltaY > 0) {
        goNext();
      } else {
        goPrevious();
      }

      window.setTimeout(() => {
        wheelLocked.current = false;
      }, SCROLL_COOLDOWN);
    };

    window.addEventListener(
      "wheel",
      handleWheel,
      {
        passive: false,
      }
    );

    return () => {
      window.removeEventListener(
        "wheel",
        handleWheel
      );
    };
  }, [
    goNext,
    goPrevious,
  ]);

  /* ================================================================ */
  /* TOUCH / SWIPE                                                    */
  /* ================================================================ */

  useEffect(() => {
    const handleTouchStart = (
      event: TouchEvent
    ) => {
      const touch =
        event.touches[0];

      if (!touch) {
        return;
      }

      touchStartX.current =
        touch.clientX;

      touchStartY.current =
        touch.clientY;
    };

    const handleTouchEnd = (
      event: TouchEvent
    ) => {
      if (
        touchStartX.current === null ||
        touchStartY.current === null
      ) {
        return;
      }

      const touch =
        event.changedTouches[0];

      if (!touch) {
        return;
      }

      const deltaX =
        touch.clientX -
        touchStartX.current;

      const deltaY =
        touch.clientY -
        touchStartY.current;

      /*
       * Hanya horizontal swipe.
       */

      if (
        Math.abs(deltaX) >
        Math.abs(deltaY)
      ) {
        if (
          deltaX < -SWIPE_THRESHOLD
        ) {
          goNext();
        }

        if (
          deltaX > SWIPE_THRESHOLD
        ) {
          goPrevious();
        }
      }

      touchStartX.current =
        null;

      touchStartY.current =
        null;
    };

    window.addEventListener(
      "touchstart",
      handleTouchStart,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "touchend",
      handleTouchEnd,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "touchstart",
        handleTouchStart
      );

      window.removeEventListener(
        "touchend",
        handleTouchEnd
      );
    };
  }, [
    goNext,
    goPrevious,
  ]);

  /* ================================================================ */
  /* KEYBOARD                                                         */
  /* ================================================================ */

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      const target =
        event.target as HTMLElement | null;

      /*
       * Jangan mengambil alih keyboard
       * ketika user sedang mengetik.
       */

      if (
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.tagName === "SELECT" ||
        target?.isContentEditable
      ) {
        return;
      }

      if (
        event.key === "ArrowRight" ||
        event.key === "ArrowDown" ||
        event.key === "PageDown"
      ) {
        event.preventDefault();

        goNext();

        return;
      }

      if (
        event.key === "ArrowLeft" ||
        event.key === "ArrowUp" ||
        event.key === "PageUp"
      ) {
        event.preventDefault();

        goPrevious();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    goNext,
    goPrevious,
  ]);

  /* ================================================================ */
  /* RENDER                                                           */
  /* ================================================================ */

  return (
    <main
      className="
        fixed
        inset-0
        h-[100dvh]
        w-full
        overflow-hidden
        bg-black
        text-white
        select-none
      "
    >
      {/* ============================================================ */}
      {/* BACKGROUND                                                    */}
      {/* ============================================================ */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.12]
            [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        />

        {/* Center glow */}

        <div
          className="
            absolute
            left-1/2
            top-[55%]
            h-[clamp(320px,45vw,650px)]
            w-[clamp(320px,45vw,650px)]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-lime-400/[0.025]
            blur-[clamp(100px,10vw,150px)]
          "
        />

        {/* Vignette */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.72)_100%)]
          "
        />

        {/* Top fade */}

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-[clamp(100px,14vh,190px)]
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
            h-[clamp(100px,14vh,160px)]
            bg-gradient-to-t
            from-black
            to-transparent
          "
        />
      </div>

      {/* ============================================================ */}
      {/* MODE SWITCHER                                                 */}
      {/* ============================================================ */}
        <ModeSwitcher />
      {/* ============================================================ */}
      {/* MENU                                                          */}
      {/* ============================================================ */}

      <button
        type="button"
        onClick={() =>
          navigate("/Intro")
        }
        className="
          absolute
          right-[clamp(16px,2.2vw,32px)]
          top-[clamp(16px,2.5vh,28px)]
          z-[100]
          rounded-full
          border
          border-white/[0.08]
          bg-white
          px-[clamp(14px,1.5vw,24px)]
          py-[clamp(9px,1vh,11px)]
          text-[9px]
          font-medium
          uppercase
          tracking-[0.12em]
          text-black
          transition
          duration-300
          hover:scale-105
          hover:bg-lime-300
        "
      >
        Menu

        <span className="ml-2">
          ↗
        </span>
      </button>

      {/* ============================================================ */}
      {/* MAIN HEADER                                                   */}
      {/* ============================================================ */}

      <section
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[clamp(82px,10vh,115px)]
          z-20
          flex
          w-full
          -translate-x-1/2
          flex-col
          items-center
          px-4
          text-center
        "
      >
        {/* Label */}

        <p
          className="
            !mb-0
            text-[clamp(8px,0.75vw,13px)]
            uppercase
            tracking-[0.48em]
            leading-none
            text-lime-300/80
          "
        >
          Creative Portfolio
        </p>

        {/* Name */}

        <h1
          className="
            !m-2
            text-[clamp(30px,4vw,68px)]
            font-semibold
            uppercase
            leading-[0.85]
            tracking-[-0.075em]
            text-white/[0.94]
            whitespace-nowrap
          "
        >
          Bayu Adi Wibowo
        </h1>

        {/* Subtitle */}

        <p
          className="
            !mt-2
            text-[clamp(7px,0.6vw,10px)]
            uppercase
            leading-none
            tracking-[0.38em]
            text-white/30
          "
        >
          AI Engineer&nbsp; / &nbsp;Full Stack
        </p>
      </section>

      {/* ============================================================ */}
      {/* CARD STAGE                                                    */}
      {/* ============================================================ */}

      <section
        className="
          absolute
          inset-0
          z-10
          overflow-visible
          touch-pan-y
        "
      >
        <div
          className="
            absolute
            left-0
            right-0
            h-0
            overflow-visible
          "
          style={{
            top: `${layout.cardY}px`,
          }}
        >
          {spiralItems.map(
            (item, index) => {
              const offset =
                getRelativeIndex(
                  index,
                  activeIndex,
                  spiralItems.length
                );

              const distance =
                Math.abs(offset);

              const isActive =
                offset === 0;

              /* ================================================== */
              /* HORIZONTAL POSITION                                */
              /* ================================================== */

              const x =
                offset *
                layout.cardStep;

              /* ================================================== */
              /* SCALE                                               */
              /* ================================================== */

              const scale =
                distance === 0
                  ? 1
                  : distance === 1
                  ? 0.92
                  : 0.82;

              /* ================================================== */
              /* OPACITY                                             */
              /* ================================================== */

              const opacity =
                distance === 0
                  ? 1
                  : distance === 1
                  ? 0.70
                  : 0.30;

              /* ================================================== */
              /* ROTATION                                            */
              /* ================================================== */

              const rotateY =
                offset === 0
                  ? 0
                  : offset > 0
                  ? -6
                  : 6;

              /* ================================================== */
              /* Z INDEX                                              */
              /* ================================================== */

              const zIndex =
                100 -
                distance * 10;

              return (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    if (isActive) {
                      navigate(
                        `${item.route}?mode=slide`
                      );

                      return;
                    }

                    if (offset > 0) {
                      goNext();

                      return;
                    }

                    goPrevious();
                  }}
                  className="
                    group
                    absolute
                    left-1/2
                    top-0
                    -translate-x-1/2
                    -translate-y-1/2
                    overflow-hidden
                    rounded-[clamp(18px,2vw,22px)]
                    border
                    border-white/[0.10]
                    bg-zinc-950
                    text-left
                    shadow-[0_35px_100px_rgba(0,0,0,0.65)]
                    outline-none
                    max-w-[76vw]
                  "
                  animate={{
                    x,
                    scale,
                    rotateY,
                    opacity,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 25,
                    mass: 0.8,
                  }}
                  style={{
                    zIndex,

                    width:
                      `${layout.cardWidth}px`,

                    aspectRatio:
                      "315 / 410",

                    transformStyle:
                      "preserve-3d",

                    WebkitTapHighlightColor:
                      "transparent",
                  }}
                >
                  {/* ================================================= */}
                  {/* IMAGE                                               */}
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
                      opacity-70
                      transition
                      duration-700
                      ease-out
                      group-hover:scale-105
                      group-hover:opacity-100
                    "
                  />

                  {/* ================================================= */}
                  {/* OVERLAY                                              */}
                  {/* ================================================= */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-b
                      from-black/10
                      via-black/20
                      to-black/90
                    "
                  />

                  {/* ================================================= */}
                  {/* ACTIVE GLOW                                          */}
                  {/* ================================================= */}

                  {isActive && (
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-[clamp(18px,2vw,22px)]
                        ring-1
                        ring-lime-300/30
                        shadow-[inset_0_0_80px_rgba(198,250,0,0.07)]
                      "
                    />
                  )}

                  {/* ================================================= */}
                  {/* TOP META                                             */}
                  {/* ================================================= */}

                  <div
                    className="
                      absolute
                      left-[clamp(18px,1.7vw,24px)]
                      right-[clamp(18px,1.7vw,24px)]
                      top-[clamp(18px,1.7vw,24px)]
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <div
                      className="
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

                      <span
                        className="
                          h-px
                          w-6
                          bg-white/20
                        "
                      />
                    </div>

                    <span
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/15
                        bg-black/30
                        text-sm
                        text-white
                        backdrop-blur-md
                        transition
                        duration-300
                        group-hover:border-lime-300/50
                        group-hover:bg-lime-300
                        group-hover:text-black
                      "
                    >
                      ↗
                    </span>
                  </div>

                  {/* ================================================= */}
                  {/* CONTENT                                             */}
                  {/* ================================================= */}

                  <div
                    className="
                      absolute
                      bottom-[clamp(18px,1.7vw,24px)]
                      left-[clamp(18px,1.7vw,24px)]
                      right-[clamp(18px,1.7vw,24px)]
                    "
                  >
                    <p
                      className="
                        text-[9px]
                        uppercase
                        tracking-[0.4em]
                        text-white/40
                      "
                    >
                      Portfolio
                    </p>

                    <h2
                      className="
                        mt-2
                        text-[clamp(25px,2.1vw,32px)]
                        font-medium
                        leading-none
                        tracking-[-0.05em]
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
            }
          )}
        </div>
      </section>

      {/* ============================================================ */}
      {/* SLIDE INDICATOR                                              */}
      {/* ============================================================ */}

      <div
        className="
          absolute
          bottom-[clamp(34px,5vh,70px)]
          left-1/2
          z-30
          flex
          -translate-x-1/2
          items-center
          gap-2
        "
      >
        {spiralItems.map(
          (item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() =>
                setActiveIndex(index)
              }
              aria-label={`Go to ${item.title}`}
              className="
                h-[2px]
                transition-all
                duration-500
              "
              style={{
                width:
                  index === activeIndex
                    ? "48px"
                    : "12px",

                background:
                  index === activeIndex
                    ? "rgb(190 242 100)"
                    : "rgba(255,255,255,0.20)",
              }}
            />
          )
        )}
      </div>

      {/* ============================================================ */}
      {/* SYSTEM STATUS                                                */}
      {/* ============================================================ */}

      <div
        className="
          absolute
          bottom-[clamp(34px,6vh,60px)]
          right-[clamp(18px,2.5vw,40px)]
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
            text-[8px]
            uppercase
            tracking-[0.35em]
            text-white/30
            lg:text-[9px]
          "
        >
          System Online
        </span>
      </div>

      {/* ============================================================ */}
      {/* SCROLL HINT                                                  */}
      {/* ============================================================ */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[clamp(34px,6vh,60px)]
          left-1/2
          z-30
          hidden
          -translate-x-1/2
          text-center
          md:block
        "
      >
        <p
          className="
            text-[8px]
            uppercase
            tracking-[0.4em]
            text-white/25
            lg:text-[9px]
          "
        >
          Scroll to explore
        </p>

        <motion.div
          animate={{
            y: [0, 5, 0],
            opacity: [
              0.3,
              0.8,
              0.3,
            ],
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