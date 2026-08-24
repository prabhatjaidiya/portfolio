import { motion } from 'motion/react'
import { FiArrowUpRight, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'

function Contact() {
    return (
        <section
            id="contact"
            className="border-t border-white/10 px-6 py-32 md:px-10 md:py-48"
        >
            {/* Heading */}
            <div className="mb-24">
                <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">
                    04 — Contact
                </p>

                <div className="h-px w-full bg-white/10" />
            </div>

            {/* Main contact */}
            <div className="grid gap-16 md:grid-cols-12 md:gap-10">

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="md:col-span-9"
                >
                    <p className="mb-8 text-sm uppercase tracking-[0.2em] text-white/30">
                        Have a project in mind?
                    </p>

                    <a
                        href="mailto:your-email@example.com"
                        className="group block"
                    >
                        <h2 className="text-[18vw] font-medium leading-[0.82] tracking-[-0.08em] transition-colors duration-500 group-hover:text-white/70 sm:text-[15vw] md:text-[10vw]">
                            LET'S
                            <br />
                            TALK.
                        </h2>
                    </a>
                </motion.div>

                {/* Social links */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="md:col-span-3 md:pt-16"
                >
                    <p className="mb-6 text-xs uppercase tracking-[0.2em] text-white/30">
                        Connect
                    </p>

                    <div className="space-y-3">

                        <a
                            href="mailto:prabhatjaidiya@gmail.com"
                            className="group flex items-center justify-between border-b border-white/10 py-4 text-sm text-white/60 transition-colors hover:text-white"
                        >
                            <span className="flex items-center gap-3">
                                <FiMail />
                                Email
                            </span>

                            <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </a>

                        <a
                            href="https://github.com/prabhatjaidiya"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between border-b border-white/10 py-4 text-sm text-white/60 transition-colors hover:text-white"
                        >
                            <span className="flex items-center gap-3">
                                <FiGithub />
                                GitHub
                            </span>

                            <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/prabhat-jaidiya-95689323a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between border-b border-white/10 py-4 text-sm text-white/60 transition-colors hover:text-white"
                        >
                            <span className="flex items-center gap-3">
                                <FiLinkedin />
                                LinkedIn
                            </span>

                            <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </a>

                    </div>
                </motion.div>

            </div>
        </section>
    )
}

export default Contact