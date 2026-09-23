
import { motion } from 'motion/react'

const focusAreas = [
    'React',
    'JavaScript',
    'Tailwind CSS',
    'REST APIs',
    'Node.js',
    'Full-Stack Development',
]

function About() {
    return (
        <section
            id="about"
            className="border-t border-white/10 px-6 py-24 md:px-10 lg:py-32"
        >
            <div className="mx-auto max-w-[1600px]">

                {/* Section label */}
                <p className="mb-12 text-xs uppercase tracking-[0.2em] text-white/40">
                    02 — About
                </p>

                <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">

                    {/* LEFT — Statement */}
                    <div className="lg:col-span-7">
                        <h2 className="text-[12vw] font-medium leading-[0.85] tracking-[-0.07em] md:text-[8vw] lg:text-[7vw]">
                            I BUILD
                            <br />
                            DIGITAL
                            <br />
                            <span className="text-white/30">
                                EXPERIENCES.
                            </span>
                        </h2>

                        {/* Small supporting line */}
                        <p className="mt-8 max-w-md text-sm leading-7 text-white/40 md:text-base">
                            Turning ideas into clean, responsive and
                            interactive web experiences.
                        </p>
                        {/* Current Focus */}
                        <div className="mt-10 border-t border-white/10 pt-8">
                            <p className="mb-5 text-xs uppercase tracking-[0.2em] text-white/30">
                                Currently Exploring
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {focusAreas.map((item) => (
                                    <span
                                        key={item}
                                        className="border border-white/10 px-3 py-2 text-xs text-white/50 transition-all duration-300 hover:border-violet-400/50 hover:text-violet-300"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT — Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="lg:col-span-5 lg:pt-2"
                    >
                        <div className="max-w-xl">

                            {/* Introduction */}
                            <p className="text-lg leading-8 text-white/70 md:text-xl">
                                I'm Prabhat, a frontend developer
                                passionate about building modern,
                                user-friendly digital experiences
                                with React and JavaScript.
                            </p>

                            <p className="mt-6 text-base leading-7 text-white/45">
                                I'm studying Mathematical Science
                                at Delhi University and expanding
                                my skills in backend development
                                to build complete web applications.
                            </p>

                            {/* Divider */}
                            <div className="my-10 border-t border-white/10" />

                            {/* Approach */}
                            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-white/30">
                                My Approach
                            </p>

                            <div className="space-y-5">

                                {[
                                    {
                                        number: '01',
                                        title: 'Understand',
                                        description:
                                            'Focus on the problem, users and purpose.',
                                    },
                                    {
                                        number: '02',
                                        title: 'Build',
                                        description:
                                            'Create clean, responsive and reusable interfaces.',
                                    },
                                    {
                                        number: '03',
                                        title: 'Refine',
                                        description:
                                            'Test, improve and polish every detail.',
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.number}
                                        className="group flex gap-5"
                                    >
                                        <span className="pt-1 text-xs text-white/25">
                                            {item.number}
                                        </span>

                                        <div>
                                            <h3 className="text-sm font-medium text-white/80 transition-colors group-hover:text-violet-300">
                                                {item.title}
                                            </h3>

                                            <p className="mt-1 text-sm leading-6 text-white/40">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About