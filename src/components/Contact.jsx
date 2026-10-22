import { motion } from 'motion/react'
import {
    FiArrowUpRight,
    FiMail,
    FiGithub,
    FiLinkedin,
} from 'react-icons/fi'

const socialLinks = [
    {
        title: 'Email',
        subtitle: 'Get in touch',
        href: 'mailto:prabhatjaidiya@gmail.com',
        icon: FiMail,
        external: false,
    },
    {
        title: 'GitHub',
        subtitle: 'View my code',
        href: 'https://github.com/prabhatjaidiya',
        icon: FiGithub,
        external: true,
    },
    {
        title: 'LinkedIn',
        subtitle: 'Connect with me',
        href: 'https://www.linkedin.com/in/prabhat-jaidiya-95689323a/',
        icon: FiLinkedin,
        external: true,
    },
]

const revealProps = {
    initial: {
        opacity: 0,
        y: 32,
    },
    whileInView: {
        opacity: 1,
        y: 0,
    },
    viewport: {
        once: true,
        amount: 0.2,
    },
    transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
    },
}

function Contact() {
    return (
        <section
            id="contact"
            className="border-t border-[#171714]/15 bg-[#F5F4F0] px-5 py-5 text-[#171714] sm:px-6 md:px-10 md:py-10"
        >
            <div className="mx-auto max-w-[1600px]">
                {/* Heading */}
                <div className="mb-12 flex items-end justify-between border-b border-[#171714]/15 pb-6 md:mb-16">
                    <div>
                        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#171714]/45">
                            04 — Contact
                        </p>

                        <h2 className="text-4xl font-medium tracking-[-0.055em] md:text-6xl">
                            Let's Connect
                            <span className="text-[#171714]/30">.</span>
                        </h2>
                    </div>

                    <span className="hidden text-[10px] uppercase tracking-[0.2em] text-[#171714]/40 md:block">
                        Open to Full-Stack Opportunities
                    </span>
                </div>

                {/* Main contact */}
                <div className="grid gap-14 md:grid-cols-2 md:gap-10">
                    {/* Main CTA */}
                    <motion.div
                        {...revealProps}
                        className="flex flex-col justify-center"
                    >
                        <p className="mb-8 max-w-md text-sm leading-7 text-[#171714]/60 md:text-base">
                            Looking for a full-stack developer, have a
                            project in mind, or simply want to connect?
                            I'd be happy to hear from you.
                        </p>

                        <a
                            href="mailto:prabhatjaidiya@gmail.com"
                            aria-label="Send an email to Prabhat"
                            className="group block w-fit max-w-full"
                        >
                            <h3
                                className="text-[22vw] font-medium leading-[0.78] tracking-[-0.09em] transition-transform duration-700 group-hover:translate-x-2 sm:text-[18vw] md:text-[8vw]"
                            >
                                SAY
                                <br />
                                <span className="transition-colors duration-500 group-hover:text-[#171714]/55">
                                    HELLO.
                                </span>
                            </h3>

                            <div className="mt-10 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.15em] text-[#171714]/50 transition-colors duration-300 group-hover:text-[#171714] sm:text-xs sm:tracking-[0.2em]">
                                <span>prabhatjaidiya@gmail.com</span>

                                <FiArrowUpRight className="shrink-0 text-base transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                            </div>
                        </a>
                    </motion.div>

                    {/* Social links */}
                    <motion.div
                        {...revealProps}
                        transition={{
                            ...revealProps.transition,
                            delay: 0.15,
                        }}
                        className="flex flex-col justify-center"
                    >
                        <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#171714]/45">
                            Find Me Online
                        </p>

                        <div className="space-y-0">
                            {socialLinks.map((item, index) => {
                                const Icon = item.icon

                                return (
                                    <motion.a
                                        key={item.title}
                                        href={item.href}
                                        target={
                                            item.external
                                                ? '_blank'
                                                : undefined
                                        }
                                        rel={
                                            item.external
                                                ? 'noopener noreferrer'
                                                : undefined
                                        }
                                        aria-label={`${item.title}: ${item.subtitle}`}
                                        initial={{
                                            opacity: 0,
                                            y: 20,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.2,
                                        }}
                                        transition={{
                                            duration: 0.6,
                                            delay: 0.2 + index * 0.1,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="group flex min-h-[110px] items-center justify-between border-b border-[#171714]/15 px-3 transition-colors duration-300 first:border-t hover:bg-[#E8E6E0]/60 sm:px-5"
                                    >
                                        <span className="flex min-w-0 items-center gap-4 sm:gap-5">
                                            <Icon className="shrink-0 text-xl text-[#171714]/45 transition-colors duration-300 group-hover:text-[#171714] sm:text-2xl" />

                                            <span>
                                                <span className="block text-lg font-medium tracking-tight text-[#171714]/80 transition-colors duration-300 group-hover:text-[#171714] sm:text-xl">
                                                    {item.title}
                                                </span>

                                                <span className="mt-1 block text-[10px] uppercase tracking-[0.15em] text-[#171714]/45">
                                                    {item.subtitle}
                                                </span>
                                            </span>
                                        </span>

                                        <FiArrowUpRight className="ml-3 shrink-0 text-xl text-[#171714]/45 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#171714]" />
                                    </motion.a>
                                )
                            })}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom line */}
                <div className="mt-16 border-t border-[#171714]/15 pt-5 md:mt-20">
                    <div className="flex flex-col gap-3 text-[10px] uppercase tracking-[0.15em] text-[#171714]/45 sm:flex-row sm:items-center sm:justify-between sm:tracking-[0.2em]">
                        <span>Let's build something meaningful.</span>

                        <span>Delhi, India · 2026</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact