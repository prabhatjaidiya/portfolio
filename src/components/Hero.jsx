import { motion } from 'motion/react'

function Hero() {

    return (
        <section
            id="home"
            className="relative flex min-h-screen items-end overflow-hidden px-6 pb-10 pt-32 md:px-10"
        >
            
            <motion.div
                className="pointer-events-none fixed z-0 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.08] blur-2xl"
            />

            <div className="relative z-10 w-full">

                {/* Introduction */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="mb-8 max-w-md text-sm leading-relaxed text-white/50 md:absolute md:bottom-3 md:right-0 md:mb-0"
                >
                    <p>
                        Frontend developer focused on building
                        modern, responsive and interactive
                        digital experiences.
                    </p>
                </motion.div>

                {/* Main heading */}
                <h1 className="overflow-hidden text-[17vw] font-semibold leading-[0.82] tracking-[-0.07em] sm:text-[15vw] md:text-[13vw]">

                    <motion.span
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        transition={{
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="block"
                    >
                        FRONTEND
                    </motion.span>

                    <motion.span
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        transition={{
                            duration: 0.9,
                            delay: 0.12,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="block"
                    >
                        DEVELOPER
                    </motion.span>

                </h1>

                {/* Bottom information */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-10 flex items-end justify-between border-t border-white/10 pt-5"
                >
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                        Based in Delhi, India
                    </p>

                    <a
                        href="#work"
                        className="group flex items-center gap-3 text-xs uppercase tracking-[0.2em]"
                    >
                        Explore work

                        <span className="transition-transform duration-300 group-hover:translate-y-1">
                            ↓
                        </span>
                    </a>
                </motion.div>

            </div>
        </section>
    )
}

export default Hero