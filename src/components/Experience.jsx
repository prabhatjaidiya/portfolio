import { motion, useReducedMotion } from 'motion/react'
import { FiArrowDownRight } from 'react-icons/fi'

const journey = [
    {
        year: '2026',
        title: 'Frontend Development',
        description:
            'Built a strong foundation in modern frontend development with React, JavaScript and Tailwind CSS, focusing on responsive interfaces, reusable components and interactive user experiences.',
        skills: ['React', 'JavaScript', 'Tailwind CSS'],
    },
    {
        year: '2026',
        title: 'Full-Stack Development',
        description:
            'Expanded into backend development with Node.js, Express, TypeScript and MongoDB, building REST APIs, authentication systems and complete full-stack applications such as Job Tracker.',
        skills: ['Node.js', 'Express', 'MongoDB'],
    },
    {
        year: 'CURRENTLY',
        title: 'Building AI-Powered Applications',
        description:
            'Currently building Prabhat AI while continuing to deepen my full-stack skills across backend architecture, databases and AI-powered application development.',
        skills: ['AI', 'RAG', 'Full-Stack'],
    },
]

const revealEase = [0.22, 1, 0.36, 1]

function Experience() {
    const reduceMotion = useReducedMotion()

    return (
        <section
            id="experience"
            className="relative isolate overflow-hidden border-t border-[#171714]/15 bg-[#F5F4F0] px-5 py-5 text-[#171714] sm:px-6 md:px-10 md:py-10"
        >
            {/* Decorative background typography */}
            <motion.div
                aria-hidden="true"
                initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, ease: revealEase }}
                className="pointer-events-none absolute right-[-1rem] top-40 -z-10 select-none text-[15rem] font-medium leading-none tracking-[-0.12em] text-[#171714]/[0.025] sm:right-0 lg:right-10 lg:top-24 lg:text-[23rem]"
            >
                03
            </motion.div>

            <div className="mx-auto max-w-[1600px]">
                {/* Section heading */}
                <div className="mb-6 flex items-end justify-between border-b border-[#171714]/15 md:mb-16">
                    <div>
                        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#171714]/45">
                            03 — Development Journey
                        </p>

                        <h2 className="text-4xl font-medium tracking-[-0.055em] md:text-6xl">
                            Experience
                            <span className="text-[#171714]/30">.</span>
                        </h2>
                    </div>

                    <span className="hidden text-[10px] uppercase tracking-[0.2em] text-[#171714]/40 md:block">
                        2026 — Present
                    </span>
                </div>

                {/* Introduction */}
                <motion.div
                    initial={
                        reduceMotion ? false : { opacity: 0, y: 24 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: revealEase }}
                    className="mb-12 max-w-2xl md:mb-16"
                >
                    <p className="text-sm leading-7 text-[#171714]/60 md:text-base md:leading-8">
                        My development journey is centered around continuous
                        learning, building real-world applications and
                        expanding across frontend, backend and AI development.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Animated timeline line */}
                    <motion.div
                        aria-hidden="true"
                        initial={{
                            scaleY: reduceMotion ? 1 : 0,
                        }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{
                            duration: reduceMotion ? 0 : 1.4,
                            ease: revealEase,
                        }}
                        className="absolute bottom-0 left-[3px] top-0 w-px origin-top bg-[#171714]/20 md:left-[calc(16.666667%-1px)]"
                    />

                    {journey.map((item, index) => (
                        <motion.article
                            key={item.title}
                            initial={
                                reduceMotion
                                    ? false
                                    : { opacity: 0, y: 28 }
                            }
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{
                                duration: 0.7,
                                delay: reduceMotion ? 0 : index * 0.12,
                                ease: revealEase,
                            }}
                            className="group relative grid gap-5 border-b border-[#171714]/15 py-9 pl-8 transition-colors duration-500 hover:border-[#171714]/40 md:grid-cols-12 md:gap-8 md:py-12 md:pl-0"
                        >
                            {/* Timeline node */}
                            <motion.span
                                aria-hidden="true"
                                initial={{
                                    scale: reduceMotion ? 1 : 0.5,
                                }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{
                                    duration: reduceMotion ? 0 : 0.4,
                                    delay: reduceMotion ? 0 : index * 0.12,
                                    ease: revealEase,
                                }}
                                className="absolute left-0 top-[2.85rem] z-10 h-[7px] w-[7px] rounded-full border border-[#171714]/60 bg-[#F5F4F0] transition-colors duration-300 group-hover:bg-[#171714] md:left-[calc(16.666667%-3px)] md:top-[3.25rem]"
                            />

                            {/* Year */}
                            <div className="md:col-span-2 md:pl-1">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-[#171714]/45 transition-colors duration-300 group-hover:text-[#171714]">
                                    {item.year}
                                </span>
                            </div>

                            {/* Milestone title */}
                            <div className="md:col-span-4">
                                <div className="flex items-start gap-4">
                                    <span className="pt-2 text-[10px] tabular-nums text-[#171714]/35">
                                        0{index + 1}
                                    </span>

                                    <h3 className="max-w-sm text-2xl font-medium tracking-[-0.04em] transition-transform duration-500 group-hover:translate-x-1 sm:text-3xl lg:text-4xl">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Description and technologies */}
                            <div className="md:col-span-5 md:col-start-8">
                                <p className="max-w-lg text-sm leading-7 text-[#171714]/60 transition-colors duration-300 group-hover:text-[#171714]/80 md:text-base">
                                    {item.description}
                                </p>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {item.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="border border-[#171714]/10 px-2.5 py-1.5 text-[10px] text-[#171714]/50 transition-colors duration-300 group-hover:border-[#171714]/20 group-hover:text-[#171714]/75"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-[#171714]/35 transition-colors duration-300 group-hover:text-[#171714]/65">
                                    <span>
                                        {index === 2
                                            ? 'In progress'
                                            : 'Milestone'}
                                    </span>

                                    <FiArrowDownRight
                                        aria-hidden="true"
                                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                                    />
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Current focus */}
                <motion.div
                    initial={
                        reduceMotion ? false : { opacity: 0, y: 20 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.7,
                        delay: reduceMotion ? 0 : 0.15,
                        ease: revealEase,
                    }}
                    className="mt-12 border-t border-[#171714]/15 pt-6 md:mt-16"
                >
                    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-[#171714]/45">
                                Current Focus
                            </p>

                            <p className="mt-2 text-sm text-[#171714]/55">
                                Continuing to learn, build and refine.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 text-sm md:gap-4">
                            <span className="font-medium">
                                Full-Stack Development
                            </span>

                            <motion.span
                                aria-hidden="true"
                                animate={
                                    reduceMotion
                                        ? undefined
                                        : { x: [0, 4, 0] }
                                }
                                transition={{
                                    duration: 1.8,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                className="text-[#171714]/40"
                            >
                                →
                            </motion.span>

                            <span className="text-[#171714]/65">
                                AI-Powered Applications
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Experience