import { useRef } from 'react'
import {
    motion,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform,
} from 'motion/react'
import { FiArrowUpRight } from 'react-icons/fi'

const focusAreas = [
    'React',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Express',
    'MongoDB',
    'REST APIs',
    'Full-Stack Development',
    'AI',
]

const approachItems = [
    {
        number: '01',
        title: 'Understand',
        description: 'Focus on the problem, users and purpose.',
    },
    {
        number: '02',
        title: 'Build',
        description:
            'Create clean, responsive and maintainable applications.',
    },
    {
        number: '03',
        title: 'Refine',
        description: 'Test, improve and polish every detail.',
    },
]

const ease = [0.22, 1, 0.36, 1]

function About() {
    const sectionRef = useRef(null)
    const reduceMotion = useReducedMotion()

    // Track progress through the entire About section.
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    })

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    // Scroll-linked visual effects.
    const backgroundY = useTransform(
        smoothProgress,
        [0, 1],
        ['-4%', '12%']
    )

    const headlineY = useTransform(
        smoothProgress,
        [0, 0.35, 0.7, 1],
        ['0%', '-3%', '-7%', '-10%']
    )

    const headlineScale = useTransform(
        smoothProgress,
        [0, 0.45, 0.8, 1],
        [1, 0.98, 0.95, 0.93]
    )

    const headlineOpacity = useTransform(
        smoothProgress,
        [0, 0.4, 0.75, 1],
        [1, 1, 0.85, 0.55]
    )

    const introY = useTransform(
        smoothProgress,
        [0, 0.25, 0.6],
        [35, 0, -15]
    )

    const introOpacity = useTransform(
        smoothProgress,
        [0, 0.12, 0.35, 0.65],
        [0.45, 0.8, 1, 1]
    )

    const progressWidth = useTransform(
        smoothProgress,
        [0, 1],
        ['0%', '100%']
    )

    const visual = (value) => (reduceMotion ? undefined : value)

    return (
        <section
            ref={sectionRef}
            id="about"
            className="relative isolate overflow-clip border-t border-[#171714]/15 bg-[#F5F4F0] text-[#171714]"
        >
            {/* Scroll progress indicator */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 z-30 h-px bg-[#171714]/10"
            >
                <motion.div
                    className="h-full origin-left bg-[#171714]/70"
                    style={{
                        width: reduceMotion ? '100%' : progressWidth,
                    }}
                />
            </div>

            {/* Oversized moving background typography */}
            <motion.div
                aria-hidden="true"
                style={visual({ y: backgroundY })}
                className="pointer-events-none absolute right-[-0.08em] top-[18%] -z-10 select-none text-[45vw] font-medium leading-none tracking-[-0.12em] text-[#171714]/[0.035] sm:text-[34vw] lg:right-[2%] lg:text-[30rem]"
            >
                PJ
            </motion.div>

            <div className="mx-auto max-w-[1600px] px-5 py-5 sm:px-6 md:px-10 md:py-10 lg:px-12 lg:py-12">
                {/* Section label */}
                <div
                    data-reveal
                    className="mb-12 flex items-center justify-between md:mb-16"
                >
                    <p className="text-xs uppercase tracking-[0.2em] text-[#171714]/45">
                        02 — About
                    </p>

                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#171714]/35">
                        The person behind the code
                    </span>
                </div>

                {/* Main composition */}
                <div className="grid items-start gap-16 lg:grid-cols-12 lg:gap-12">
                    {/* LEFT — Sticky headline and skills */}
                    <div className="lg:col-span-7">
                        <div className="lg:sticky lg:top-[12vh]">
                            {/* Headline */}
                            <motion.div
                                style={visual({
                                    y: headlineY,
                                    scale: headlineScale,
                                    opacity: headlineOpacity,
                                })}
                                className="origin-left"
                            >
                                <h2 className="max-w-[10ch] text-[clamp(2.8rem,5.8vw,6.5rem)] font-medium leading-[0.98] tracking-[-0.065em]">
                                    <span className="block">Building ideas</span>
                                    <span className="block">into digital</span>
                                    <span className="block text-[#171714]/35">
                                        experiences.
                                    </span>
                                </h2>

                                <motion.p
                                    initial={visual({ opacity: 0, y: 16 })}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.35 }}
                                    transition={{
                                        duration: reduceMotion ? 0 : 0.7,
                                        delay: reduceMotion ? 0 : 0.35,
                                        ease,
                                    }}
                                    className="mt-6 max-w-sm text-base leading-7 text-[#171714]/55 md:text-lg md:leading-8"
                                >
                                    Frontend craft, Backend thinker. Thoughtful
                                    engineering.
                                </motion.p>
                            </motion.div>

                            {/* Supporting statement */}
                            <motion.p
                                data-reveal
                                style={visual({ y: introY, opacity: introOpacity })}
                                className="mt-8 max-w-md text-sm leading-7 text-[#171714]/60 md:text-base"
                            >
                                Building modern, responsive and scalable web
                                applications across the frontend and backend.
                            </motion.p>

                            {/* Skill collection */}
                            <div className="mt-10 border-t border-[#171714]/15 pt-7">
                                <div
                                    data-reveal
                                    className="mb-5 flex items-center justify-between gap-4"
                                >
                                    <p className="text-xs uppercase tracking-[0.2em] text-[#171714]/45">
                                        Currently Exploring
                                    </p>

                                    <span className="text-[10px] tabular-nums text-[#171714]/35">
                                        01 — 09
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {focusAreas.map((item, index) => (
                                        <motion.span
                                            key={item}
                                            data-reveal
                                            initial={visual({
                                                opacity: 0,
                                                y: 18,
                                            })}
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            viewport={{
                                                once: true,
                                                amount: 0.5,
                                            }}
                                            transition={{
                                                duration: reduceMotion
                                                    ? 0
                                                    : 0.5,
                                                delay: reduceMotion
                                                    ? 0
                                                    : (index % 5) * 0.07,
                                                ease,
                                            }}
                                            whileHover={visual({ y: -4 })}
                                            className="group inline-flex cursor-default items-center gap-2 border border-[#171714]/15 px-3 py-2 text-xs text-[#171714]/60 transition-colors duration-300 hover:border-[#171714]/50 hover:bg-[#E8E6E0] hover:text-[#171714]"
                                        >
                                            <span className="h-1 w-1 rounded-full bg-[#171714]/25 transition-colors duration-300 group-hover:bg-[#171714]" />
                                            {item}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT — Introduction and approach */}
                    <div className="lg:col-span-5 lg:pt-4">
                        <motion.div
                            initial={visual({
                                opacity: 0,
                                y: 35,
                            })}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            transition={{
                                duration: reduceMotion ? 0 : 0.85,
                                ease,
                            }}
                            className="max-w-xl"
                        >
                            {/* Introduction */}
                            <div className="relative border-l border-[#171714]/20 pl-5 sm:pl-7">
                                <span className="absolute -left-[3px] top-1 h-[5px] w-[5px] rounded-full bg-[#171714]" />

                                <p className="text-lg leading-8 text-[#171714]/85 md:text-xl md:leading-9">
                                    I'm Prabhat, a full-stack developer focused
                                    on building modern, user-friendly and
                                    scalable web applications with React,
                                    TypeScript, Node.js and MongoDB.
                                </p>
                            </div>

                            <p className="mt-7 text-sm leading-7 text-[#171714]/60 md:text-base">
                                I'm a Mathematical Science graduate from
                                Delhi University, continuously expanding my
                                skills across frontend development, backend
                                engineering, databases and AI-powered
                                applications.
                            </p>

                            {/* Section divider */}
                            <div className="my-12 flex items-center gap-4">
                                <span className="h-px flex-1 bg-[#171714]/15" />
                                <span className="text-[10px] uppercase tracking-[0.2em] text-[#171714]/35">
                                    How I work
                                </span>
                                <span className="h-px w-8 bg-[#171714]/15" />
                            </div>

                            {/* Approach heading */}
                            <div className="mb-7 flex items-end justify-between">
                                <h3 className="text-2xl font-medium tracking-[-0.04em] md:text-3xl">
                                    My Approach
                                    <span className="text-[#171714]/30">.</span>
                                </h3>

                                <span className="text-[10px] uppercase tracking-[0.15em] text-[#171714]/35">
                                    03 Steps
                                </span>
                            </div>

                            {/* Animated approach timeline */}
                            <div className="relative">
                                <motion.div
                                    aria-hidden="true"
                                    initial={{ scaleY: reduceMotion ? 1 : 0 }}
                                    whileInView={{ scaleY: 1 }}
                                    viewport={{
                                        once: true,
                                        amount: 0.2,
                                    }}
                                    transition={{
                                        duration: reduceMotion ? 0 : 1.2,
                                        ease,
                                    }}
                                    className="absolute bottom-7 left-[15px] top-5 w-px origin-top bg-[#171714]/20"
                                />

                                <div className="space-y-2">
                                    {approachItems.map((item, index) => (
                                        <motion.article
                                            key={item.number}
                                            initial={visual({
                                                opacity: 0,
                                                x: 24,
                                            })}
                                            whileInView={{
                                                opacity: 1,
                                                x: 0,
                                            }}
                                            viewport={{
                                                once: true,
                                                amount: 0.35,
                                            }}
                                            transition={{
                                                duration: reduceMotion
                                                    ? 0
                                                    : 0.65,
                                                delay: reduceMotion
                                                    ? 0
                                                    : index * 0.14,
                                                ease,
                                            }}
                                            whileHover={visual({ x: 5 })}
                                            className="group relative border-b border-[#171714]/10 py-5 pl-1 transition-colors duration-300 hover:border-[#171714]/30"
                                        >
                                            <div className="flex gap-5">
                                                <div className="relative z-10 flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-[#171714]/20 bg-[#F5F4F0] text-[10px] tabular-nums text-[#171714]/60 transition-colors duration-300 group-hover:border-[#171714] group-hover:bg-[#171714] group-hover:text-[#F5F4F0]">
                                                    {item.number}
                                                </div>

                                                <div className="min-w-0 flex-1 pt-1">
                                                    <div className="flex items-center justify-between gap-3">
                                                        <h4 className="text-base font-medium">
                                                            {item.title}
                                                        </h4>

                                                        <FiArrowUpRight
                                                            aria-hidden="true"
                                                            className="shrink-0 text-base text-[#171714]/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#171714]"
                                                        />
                                                    </div>

                                                    <p className="mt-2 max-w-sm text-sm leading-6 text-[#171714]/60">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.article>
                                    ))}
                                </div>
                            </div>

                            {/* Closing detail */}
                            <div className="mt-8 flex items-center justify-between gap-4 border-t border-[#171714]/15 pt-5">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-[#171714]/40">
                                    My Direction
                                </span>

                                <span className="text-sm font-medium text-[#171714]/75">
                                    Full-Stack + AI
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About