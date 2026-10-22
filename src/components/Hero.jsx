import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import bitmoji from '../assets/bitmoji.png'

function Hero() {
    const heroRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    })

    const titleY = useTransform(scrollYProgress, [0, 1], [0, -180])
    const titleScale = useTransform(scrollYProgress, [0, 1], [1, 0.88])
    const titleOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

    const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -100])
    const subtitleOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

    const avatarY = useTransform(scrollYProgress, [0, 1], [0, -220])
    const avatarScale = useTransform(scrollYProgress, [0, 1], [1, 0.84])
    const avatarRotate = useTransform(scrollYProgress, [0, 1], [0, -5])
    const avatarOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0])

    return (
        <section
            ref={heroRef}
            id="home"
            className="relative xl:min-h-[100vh] flex flex-col justify-end overflow-hidden bg-[#f5f4f0] px-5 pt-28 text-[#171714] xl:px-10 xl:pb-10"
        >
            {/* Subtle forest-green ambient glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute right-[5%] top-[8%] z-0 h-56 w-56 rounded-full bg-[#315c46]/[0.10] blur-[100px] sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96"
            />

            {/* Bitmoji */}
            <motion.div
                style={{
                    y: avatarY,
                    scale: avatarScale,
                    rotate: avatarRotate,
                    opacity: avatarOpacity,
                }}
                className="
                    pointer-events-none absolute z-[1]
                    right-[-5%] top-[8%] w-[55vw] max-w-[250px]
                    sm:right-[-2%] sm:top-[7%] sm:w-[43vw] sm:max-w-[310px]
                    md:right-[1%] md:top-[5%] md:w-[35vw] md:max-w-[360px]
                    lg:right-[4%] lg:top-[3%] lg:w-[36vw] lg:max-w-[530px]
                    xl:right-[6%] xl:top-[1%] xl:w-[37vw] xl:max-w-[620px]
                "
            >
                <motion.img
                    src={bitmoji}
                    alt="Illustration of Prabhat Jaidiya"
                    animate={{
                        y: [0, -10, 0],
                        rotate: [0, 0.7, 0, -0.7, 0],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="h-auto w-full"
                />
            </motion.div>

            {/* Main content */}
            <div className="relative z-10 mx-auto w-full max-w-[1500px]">
                <motion.div
                    style={{
                        y: titleY,
                        scale: titleScale,
                        opacity: titleOpacity,
                    }}
                >
                    {/* First name */}
                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: '110%' }}
                            animate={{ y: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.15,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="
                                whitespace-nowrap font-semibold
                                text-[clamp(3.5rem,12.5vw,12rem)]
                                leading-[0.8] tracking-[-0.09em]
                                sm:text-[clamp(5rem,11vw,9rem)]
                                md:text-[clamp(5.5rem,10vw,8.5rem)]
                                lg:text-[clamp(8rem,12vw,12rem)]
                            "
                        >
                            PRABHAT
                        </motion.h1>
                    </div>

                    {/* Last name */}
                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: '110%' }}
                            animate={{ y: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.28,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="
                                whitespace-nowrap font-semibold
                                text-[clamp(3.5rem,12.5vw,12rem)]
                                leading-[0.84] tracking-[-0.09em]
                                sm:text-[clamp(5rem,11vw,9rem)]
                                md:text-[clamp(5.5rem,10vw,8.5rem)]
                                lg:text-[clamp(8rem,12vw,12rem)]
                            "
                        >
                            JAIDIYA<span className="text-[#315c46]">.</span>
                        </motion.h1>
                    </div>

                    {/* Profession */}
                    <motion.div
                        style={{
                            y: subtitleY,
                            opacity: subtitleOpacity,
                        }}
                        className="mt-3 sm:mt-4 lg:mt-5"
                    >
                        <p className="whitespace-nowrap text-[clamp(0.75rem,2.5vw,1.7rem)] font-medium leading-none tracking-[-0.025em] text-[#171714]/55">
                            FULL-STACK DEVELOPER
                        </p>
                    </motion.div>
                </motion.div>

                {/* Bottom information */}
                <motion.div
                    style={{ opacity: titleOpacity }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="relative z-10 mt-6 flex flex-col gap-5 border-t border-[#171714]/15 pt-4 sm:mt-7 sm:flex-row sm:items-end sm:justify-between sm:gap-4 sm:pt-5 lg:mt-8"
                >
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.16em] text-[#171714]/55 sm:text-xs sm:tracking-[0.2em]">
                            Based in Delhi, India
                        </p>

                        <p className="mt-2 text-xs text-[#171714]/45">
                            Building thoughtful digital experiences.
                        </p>
                    </div>

                    <a
                        href="#work"
                        className="group flex w-fit items-center gap-3 border-b border-[#171714]/25 pb-2 text-[10px] uppercase tracking-[0.14em] transition-colors duration-300 hover:border-[#315c46] sm:text-xs sm:tracking-[0.18em]"
                    >
                        Explore selected work

                        <span className="text-[#315c46] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                            ↗
                        </span>
                    </a>
                </motion.div>
            </div>

            {/* Desktop scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="pointer-events-none absolute bottom-24 right-5 hidden flex-col items-center gap-3 lg:flex lg:right-10"
            >
                <span className="text-[9px] uppercase tracking-[0.22em] text-[#171714]/45 [writing-mode:vertical-rl]">
                    Scroll to explore
                </span>

                <motion.span
                    animate={{ scaleY: [0.4, 1, 0.4] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="h-12 w-px origin-top bg-[#315c46]/65"
                />
            </motion.div>
        </section>
    )
}

export default Hero