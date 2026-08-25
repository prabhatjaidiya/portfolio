import { motion } from 'motion/react'

function About() {
    return (
        <section
            id="about"
            className="border-t border-white/10 px-6 py-10 md:px-10"
        >

            <div className="grid items-start gap-16 lg:grid-cols-12 lg:gap-10">

                {/* LEFT — Sticky statement */}
                <div className="self-start lg:sticky lg:top-20 lg:col-span-7">

                    <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">
                        02 — About
                    </p>

                    <h2 className="text-[12vw] font-medium leading-[0.85] tracking-[-0.07em] md:text-[8vw]">
                        I BUILD
                        <br />
                        DIGITAL
                        <br />
                        EXPERIENCES.
                    </h2>

                </div>


                {/* RIGHT — About content */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.15,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="md:col-span-5 lg:col-start-8"
                >
                    <div className="max-w-xl">

                        {/* Introduction */}
                        <p className="text-base leading-8 text-white/70 md:text-lg">
                            I'm a frontend developer focused on building
                            modern, responsive and interactive digital
                            experiences. I enjoy turning ideas into interfaces
                            that are clear, purposeful and engaging.
                        </p>

                        <p className="mt-7 text-base leading-8 text-white/50 md:text-lg">
                            I care about more than how an interface looks.
                            I focus on creating experiences that feel intuitive,
                            perform well and work seamlessly across different
                            screen sizes and devices.
                        </p>

                        <p className="mt-7 text-base leading-8 text-white/50 md:text-lg">
                            My primary tools are JavaScript and React. I use
                            component-based architecture, modern CSS and
                            REST APIs to build practical applications and
                            turn complex requirements into maintainable
                            interfaces.
                        </p>

                        <p className="mt-7 text-base leading-8 text-white/50 md:text-lg">
                            Through projects such as weather applications,
                            expense management systems and other interactive
                            web applications, I've developed experience with
                            API integration, state management, responsive
                            layouts and data-driven interfaces.
                        </p>

                        <p className="mt-7 text-base leading-8 text-white/50 md:text-lg">
                            I'm also studying Mathematical Science at Delhi
                            University. This background has strengthened the
                            way I approach problems — breaking complex ideas
                            into smaller parts, identifying patterns and
                            working toward practical solutions.
                        </p>

                        <p className="mt-7 text-base leading-8 text-white/50 md:text-lg">
                            I'm currently expanding my knowledge beyond the
                            frontend and learning backend technologies with
                            the goal of becoming capable of building complete,
                            scalable web applications.
                        </p>


                        {/* Development approach */}
                        <div className="mt-16 border-t border-white/10 pt-8">

                            <p className="mb-8 text-xs uppercase tracking-[0.2em] text-white/30">
                                How I Work
                            </p>

                            <div className="space-y-7">

                                <div className="flex gap-5">
                                    <span className="shrink-0 text-xs text-white/20">
                                        01
                                    </span>

                                    <div>
                                        <h3 className="mb-2 text-sm font-medium text-white/70">
                                            Understand
                                        </h3>

                                        <p className="text-sm leading-7 text-white/40">
                                            Start by understanding the problem,
                                            users and requirements before
                                            deciding how to build the solution.
                                        </p>
                                    </div>
                                </div>


                                <div className="flex gap-5">
                                    <span className="shrink-0 text-xs text-white/20">
                                        02
                                    </span>

                                    <div>
                                        <h3 className="mb-2 text-sm font-medium text-white/70">
                                            Build
                                        </h3>

                                        <p className="text-sm leading-7 text-white/40">
                                            Build clean, reusable components
                                            with a strong focus on responsive
                                            design, accessibility and usability.
                                        </p>
                                    </div>
                                </div>


                                <div className="flex gap-5">
                                    <span className="shrink-0 text-xs text-white/20">
                                        03
                                    </span>

                                    <div>
                                        <h3 className="mb-2 text-sm font-medium text-white/70">
                                            Refine
                                        </h3>

                                        <p className="text-sm leading-7 text-white/40">
                                            Test, iterate and improve the
                                            experience until the details feel
                                            intentional and the interface works
                                            as it should.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>


                        {/* Current focus */}
                        <div className="mt-16 border-t border-white/10 pt-8">

                            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-white/30">
                                Current Focus
                            </p>

                            <div className="flex flex-wrap gap-2">

                                {[
                                    'React',
                                    'JavaScript',
                                    'Frontend Architecture',
                                    'REST APIs',
                                    'Node.js',
                                    'Full-Stack Development',
                                ].map((item) => (
                                    <span
                                        key={item}
                                        className="border border-white/10 px-3 py-2 text-xs text-white/40 transition-colors duration-300 hover:border-white/30 hover:text-white"
                                    >
                                        {item}
                                    </span>
                                ))}

                            </div>

                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    )
}

export default About