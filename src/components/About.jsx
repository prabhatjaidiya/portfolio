import { motion } from 'motion/react'

const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Tailwind CSS',
    'Git & GitHub',
    'REST APIs',
]

function About() {
    return (
        <section
            id="about"
            className="border-t border-white/10 px-6 py-32 md:px-10 md:py-48"
        >
            {/* Section heading */}
            <div className="mb-24">
                <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">
                    02 — About
                </p>

                <div className="h-px w-full bg-white/10" />
            </div>

            <div className="grid gap-16 md:grid-cols-12 md:gap-10">

                {/* Large statement */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="md:col-span-7"
                >
                    <h2 className="text-[12vw] font-medium leading-[0.85] tracking-[-0.07em] md:text-[8vw]">
                        I BUILD
                        <br />
                        DIGITAL
                        <br />
                        EXPERIENCES.
                    </h2>
                </motion.div>

                {/* About information */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="md:col-span-4 md:col-start-9"
                >
                    <p className="text-base leading-8 text-white/50 md:text-lg">
                        I'm a frontend developer focused on creating
                        modern, responsive and interactive web
                        experiences.
                    </p>

                    <p className="mt-6 text-base leading-8 text-white/50 md:text-lg">
                        I enjoy turning ideas into clean interfaces
                        and building products with React,
                        JavaScript and modern web technologies.
                    </p>

                    <p className="mt-6 text-base leading-8 text-white/50 md:text-lg">
                        I'm also studying Mathematical Science at
                        Delhi University, combining analytical
                        thinking with creative problem solving.
                    </p>

                    {/* Skills */}
                    <div className="mt-16 border-t border-white/10 pt-6">

                        <p className="mb-6 text-xs uppercase tracking-[0.2em] text-white/30">
                            Core Technologies
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="border border-white/10 px-3 py-2 text-xs text-white/50 transition-all duration-300 hover:border-white/30 hover:text-white"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    )
}

export default About