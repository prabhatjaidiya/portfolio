import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import bitmoji from '../assets/bitmoji.webp'

function Hero() {
    const heroRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    })

    // ─────────────────────────────────────────────
    // Title animation
    // ─────────────────────────────────────────────

    const titleY = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -220]
    )

    const titleScale = useTransform(
        scrollYProgress,
        [0, 1],
        [1, 0.82]
    )

    const titleOpacity = useTransform(
        scrollYProgress,
        [0, 0.75],
        [1, 0]
    )

    // ─────────────────────────────────────────────
    // Subtitle animation
    // ─────────────────────────────────────────────

    const subtitleY = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -140]
    )

    const subtitleOpacity = useTransform(
        scrollYProgress,
        [0, 0.7],
        [1, 0]
    )

    // ─────────────────────────────────────────────
    // Avatar animation
    // ─────────────────────────────────────────────

    const avatarY = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -300]
    )

    const avatarScale = useTransform(
        scrollYProgress,
        [0, 1],
        [1, 0.72]
    )

    const avatarRotate = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -8]
    )

    const avatarOpacity = useTransform(
        scrollYProgress,
        [0, 0.8],
        [1, 0]
    )

    return (
        <section
            ref={heroRef}
            id="home"
            className="
        relative flex min-h-screen
        items-end
        overflow-hidden
        px-5
        pb-24
        pt-28

        sm:px-6
        sm:pb-28

        lg:px-10
        lg:pb-10
    "
        >

            {/* ─────────────────────────────────────
                Bitmoji
            ───────────────────────────────────── */}

            <motion.div
                style={{
                    y: avatarY,
                    scale: avatarScale,
                    rotate: avatarRotate,
                    opacity: avatarOpacity,
                }}
                className="
    pointer-events-none
    absolute
    right-[-5%]
    top-[8%]
    z-[1]
    w-[55vw]
    max-w-[500px]

    sm:right-[-2%]
    sm:w-[50vw]

    lg:right-[2%]
    lg:top-[5%]
    lg:w-[38vw]
    lg:max-w-[650px]
"
            >
                <motion.img
                    src={bitmoji}
                    alt="Prabhat Jaidiya"
                    animate={{
                        y: [0, -12, 0],
                        rotate: [0, 1, 0, -1, 0],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="h-auto w-full"
                />
            </motion.div>


            {/* ─────────────────────────────────────
                Hero content
            ───────────────────────────────────── */}

            <div className="relative z-10 w-full">

                {/* Introduction */}
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
                        duration: 0.8,
                        delay: 0.7,
                    }}
                    className="
    hidden
    max-w-md
    text-sm
    leading-relaxed
    text-white/50

    lg:absolute
    lg:bottom-3
    lg:right-0
"
                >
                    <p className="hidden md:block">
                        Frontend developer focused on building
                        thoughtful, responsive and interactive
                        digital experiences.
                    </p>
                </motion.div>


                {/* Main typography */}
                <motion.h1
                    style={{
                        y: titleY,
                        scale: titleScale,
                        opacity: titleOpacity,
                    }}
                    className="
    relative z-10 overflow-hidden
    text-[17vw]
    font-semibold
    leading-[0.78]
    tracking-[-0.07em]

    sm:text-[15vw]

    lg:text-[13vw]
"
                >
                    {/* First name */}
                    <motion.span
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        transition={{
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="block whitespace-nowrap"
                    >
                        PRABHAT
                    </motion.span>

                    {/* Last name */}
                    <motion.span
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        transition={{
                            duration: 0.9,
                            delay: 0.12,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="block whitespace-nowrap"
                    >
                        JAIDIYA
                    </motion.span>

                    {/* Profession */}
                    <motion.div
                        style={{
                            y: subtitleY,
                            opacity: subtitleOpacity,
                        }}
                        className="mt-4 sm:mt-5 md:mt-5"
                    >
                        <p
                            className="
        whitespace-nowrap
        text-[5.8vw]
        font-medium
        leading-none
        tracking-[-0.025em]
        text-white/50

        sm:text-[5.8vw]

        lg:text-[2.5vw]
    "
                        >
                            FRONTEND DEVELOPER
                        </p>
                    </motion.div>
                </motion.h1>


                {/* Bottom information */}
                <motion.div
                    style={{
                        opacity: titleOpacity,
                    }}
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 1,
                    }}
                    className="relative z-10 mt-8 flex flex-col gap-6 border-t border-white/10 pt-5 sm:flex-row sm:items-end sm:justify-between"
                >

                    <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                            Based in Delhi, India
                        </p>

                        <p className="mt-2 text-xs text-white/20">
                            Available for frontend opportunities
                        </p>
                    </div>


                    <a
                        href="#work"
                        className="group flex w-fit items-center gap-3 text-[10px] uppercase tracking-[0.18em] sm:text-xs"
                    >
                        Explore selected work

                        <span className="transition-transform duration-300 group-hover:translate-y-1">
                            ↓
                        </span>
                    </a>

                </motion.div>

            </div>


            {/* ─────────────────────────────────────
                Scroll indicator
            ───────────────────────────────────── */}

            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 1,
                    delay: 1.5,
                }}
                className="absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 lg:block"
            >
                <motion.div
                    animate={{
                        y: [0, 8, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="flex flex-col items-center gap-3"
                >
                    <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">
                        Scroll to explore
                    </span>

                    <span className="h-10 w-px bg-white/20" />
                </motion.div>
            </motion.div>

        </section>
    )
}

export default Hero