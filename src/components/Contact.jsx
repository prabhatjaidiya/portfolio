import { motion } from 'motion/react'
import {
    FiArrowUpRight,
    FiMail,
    FiGithub,
    FiLinkedin,
} from 'react-icons/fi'

function Contact() {
    return (
        <section
            id="contact"
            className="border-t border-white/10 px-6 py-10 md:px-10"
        >

            {/* Heading */}
            <div className="mb-16 flex items-end justify-between border-b border-white/10 pb-5">

                <div>
                    <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">
                        04 — Contact
                    </p>

                    <h2 className="text-4xl font-medium tracking-tight md:text-6xl">
                        Let's Connect.
                    </h2>
                </div>

                <span className="hidden text-[10px] uppercase tracking-[0.25em] text-white/20 md:block">
                    Open to opportunities
                </span>

            </div>


            {/* Main contact */}
            <div className="grid gap-12 md:grid-cols-2 md:gap-10">

                {/* ─────────────────────────────────────
        Main CTA — 50%
    ───────────────────────────────────── */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 60,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex min-h-[50vh] flex-col justify-center"
                >
                    <p className="mb-8 max-w-md text-sm leading-7 text-white/40 md:text-base">
                        Whether you have a project, an opportunity or simply
                        want to connect, I'd be happy to hear from you.
                    </p>

                    <a
                        href="mailto:prabhatjaidiya@gmail.com"
                        className="group block"
                    >
                        <h2
                            className="
        text-[22vw]
        font-medium
        leading-[0.78]
        tracking-[-0.09em]
        transition-all
        duration-700
        group-hover:translate-x-3
        group-hover:text-white/70
        sm:text-[18vw]
        md:text-[8vw]
    "
                        >
                            SAY
                            <br />
                            HELLO.
                        </h2>

                        <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/30 transition-colors duration-300 group-hover:text-white/60">
                            <span>
                                prabhatjaidiya@gmail.com
                            </span>

                            <FiArrowUpRight
                                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                            />
                        </div>
                    </a>
                </motion.div>


                {/* ─────────────────────────────────────
        Social links — 50%
    ───────────────────────────────────── */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 60,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.15,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex min-h-[50vh] flex-col justify-center"
                >
                    <p className="mb-8 text-xs uppercase tracking-[0.2em] text-white/30">
                        Find Me Online
                    </p>

                    <div className="space-y-3">

                        {/* Email */}
                        <a
                            href="mailto:prabhatjaidiya@gmail.com"
                            className="group flex min-h-[120px] items-center justify-between border border-white/10 px-6 transition-all duration-500 hover:-translate-y-2 hover:border-white/30 hover:bg-white/[0.04] md:px-8"
                        >
                            <span className="flex items-center gap-5">
                                <FiMail className="text-2xl text-white/30 transition-colors duration-300 group-hover:text-white" />

                                <span>
                                    <span className="block text-xl font-medium text-white/70 transition-colors duration-300 group-hover:text-white">
                                        Email
                                    </span>

                                    <span className="mt-1 block text-[9px] uppercase tracking-[0.15em] text-white/25">
                                        Get in touch
                                    </span>
                                </span>
                            </span>

                            <FiArrowUpRight className="text-xl transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-2" />
                        </a>


                        {/* GitHub */}
                        <a
                            href="https://github.com/prabhatjaidiya"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex min-h-[120px] items-center justify-between border border-white/10 px-6 transition-all duration-500 hover:-translate-y-2 hover:border-white/30 hover:bg-white/[0.04] md:px-8"
                        >
                            <span className="flex items-center gap-5">
                                <FiGithub className="text-2xl text-white/30 transition-colors duration-300 group-hover:text-white" />

                                <span>
                                    <span className="block text-xl font-medium text-white/70 transition-colors duration-300 group-hover:text-white">
                                        GitHub
                                    </span>

                                    <span className="mt-1 block text-[9px] uppercase tracking-[0.15em] text-white/25">
                                        View my code
                                    </span>
                                </span>
                            </span>

                            <FiArrowUpRight className="text-xl transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-2" />
                        </a>


                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/prabhat-jaidiya-95689323a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex min-h-[120px] items-center justify-between border border-white/10 px-6 transition-all duration-500 hover:-translate-y-2 hover:border-white/30 hover:bg-white/[0.04] md:px-8"
                        >
                            <span className="flex items-center gap-5">
                                <FiLinkedin className="text-2xl text-white/30 transition-colors duration-300 group-hover:text-white" />

                                <span>
                                    <span className="block text-xl font-medium text-white/70 transition-colors duration-300 group-hover:text-white">
                                        LinkedIn
                                    </span>

                                    <span className="mt-1 block text-[9px] uppercase tracking-[0.15em] text-white/25">
                                        Connect with me
                                    </span>
                                </span>
                            </span>

                            <FiArrowUpRight className="text-xl transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-2" />
                        </a>

                    </div>
                </motion.div>

            </div>


            {/* Bottom line */}
            <div className="mt-20 border-t border-white/10 pt-5">

                <div className="flex flex-col gap-3 text-[10px] uppercase tracking-[0.2em] text-white/20 sm:flex-row sm:items-center sm:justify-between">

                    <span>
                        Let's build something meaningful.
                    </span>

                    <span>
                        Delhi, India · 2026
                    </span>

                </div>

            </div>

        </section>
    )
}

export default Contact