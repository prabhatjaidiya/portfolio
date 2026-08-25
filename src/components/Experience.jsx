import { motion } from 'motion/react'

const journey = [
    {
        year: '2026',
        title: 'Frontend Development',
        description:
            'Focused on building modern, responsive interfaces with React, JavaScript and Tailwind CSS, while developing a strong foundation in component-based architecture and frontend best practices.',
    },
    {
        year: '2026',
        title: 'Building Real-World Projects',
        description:
            'Developed practical web applications including a weather platform and personal finance dashboard, working with APIs, state management, data visualization and responsive UI development.',
    },
    {
        year: 'CURRENTLY',
        title: 'Expanding Into Full-Stack',
        description:
            'Expanding beyond frontend development by learning Node.js, Express, databases and backend architecture with the goal of building complete full-stack applications.',
    },
]

function Experience() {
    return (
        <section
            id="experience"
            className="border-t border-white/10 px-6 py-10 md:px-10"
        >

            {/* Heading */}
            <div className="mb-16 flex items-end justify-between border-b border-white/10 pb-5">

                <div>
                    <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">
                        03 — Development Journey
                    </p>

                    <h2 className="text-4xl font-medium tracking-tight md:text-6xl">
                        Experience.
                    </h2>
                </div>

                <span className="hidden text-[10px] uppercase tracking-[0.25em] text-white/20 md:block">
                    2026 — Present
                </span>

            </div>


            {/* Introduction */}
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
                    amount: 0.3,
                }}
                transition={{
                    duration: 0.7,
                }}
                className="mb-16 max-w-2xl"
            >
                <p className="text-sm leading-7 text-white/40 md:text-base">
                    My development journey is centered around continuous
                    learning, building practical applications and gradually
                    expanding from frontend development toward full-stack
                    engineering.
                </p>
            </motion.div>


            {/* Journey */}
            <div>
                {journey.map((item, index) => (
                    <motion.article
                        key={item.title}
                        initial={{
                            opacity: 0,
                            y: 50,
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
                            delay: index * 0.1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="group grid gap-6 border-b border-white/10 py-10 transition-colors duration-500 hover:border-white/25 md:grid-cols-12 md:gap-10"
                    >

                        {/* Year */}
                        <div className="md:col-span-2">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 transition-colors duration-300 group-hover:text-white/60">
                                {item.year}
                            </span>
                        </div>


                        {/* Title */}
                        <div className="md:col-span-4">
                            <div className="flex items-start gap-4">

                                <span className="mt-2 text-[9px] text-white/20">
                                    0{index + 1}
                                </span>

                                <h3 className="text-2xl font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                                    {item.title}
                                </h3>

                            </div>
                        </div>


                        {/* Description */}
                        <div className="md:col-span-5 md:col-start-8">
                            <p className="max-w-lg text-sm leading-7 text-white/40 transition-colors duration-300 group-hover:text-white/60 md:text-base">
                                {item.description}
                            </p>
                        </div>

                    </motion.article>
                ))}
            </div>


            {/* Current status */}
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
                className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between"
            >
                <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                    Current Focus
                </p>

                <p className="text-sm text-white/40">
                    Frontend Development → Full-Stack Development
                </p>
            </motion.div>

        </section>
    )
}

export default Experience