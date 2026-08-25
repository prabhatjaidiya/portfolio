import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const links = [
    {
        name: 'About',
        href: '#about',
    },
    {
        name: 'Skills',
        href: '#skills',
    },
    {
        name: 'Work',
        href: '#work',
    },
    {
        name: 'Contact',
        href: '#contact',
    },
]

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => {
        setMenuOpen(false)
    }

    return (
        <>
            {/* ─────────────────────────────────────
                Navigation
            ───────────────────────────────────── */}

            <motion.nav
                initial={{
                    opacity: 0,
                    y: -20,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="fixed left-0 top-0 z-50 w-full px-5 py-5 sm:px-6 md:px-10 md:py-6"
            >
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={closeMenu}
                        className="relative z-[60] text-sm font-medium tracking-[0.2em] transition-opacity duration-300 hover:opacity-60"
                    >
                        PJ.
                    </a>


                    {/* Desktop navigation */}
                    <div className="hidden items-center gap-8 md:flex">

                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="group relative py-2 text-[10px] uppercase tracking-[0.2em] text-white/50 transition-colors duration-300 hover:text-white"
                            >
                                {link.name}

                                {/* Animated underline */}
                                <span className="absolute bottom-0 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}

                    </div>


                    {/* Availability */}
                    <div className="hidden items-center gap-3 md:flex">

                        <span className="relative flex h-2 w-2">
                            {/* Green pulse */}
                            <span className="absolute inset-0 animate-ping rounded-full bg-[#22c55e] opacity-75" />

                            {/* Solid green dot */}
                            <span className="relative h-2 w-2 rounded-full bg-[#22c55e]" />
                        </span>

                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                            Available
                        </span>

                    </div>


                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="relative z-[60] flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 hover:text-white md:hidden"
                        aria-label={
                            menuOpen
                                ? 'Close menu'
                                : 'Open menu'
                        }
                        aria-expanded={menuOpen}
                    >
                        <span>
                            {menuOpen ? 'Close' : 'Menu'}
                        </span>

                        <span className="relative flex h-3 w-4 flex-col justify-center gap-[3px]">

                            <motion.span
                                animate={{
                                    rotate: menuOpen ? 45 : 0,
                                    y: menuOpen ? 3 : 0,
                                }}
                                transition={{
                                    duration: 0.25,
                                }}
                                className="block h-px w-full bg-white"
                            />

                            <motion.span
                                animate={{
                                    rotate: menuOpen ? -45 : 0,
                                    y: menuOpen ? -1 : 0,
                                }}
                                transition={{
                                    duration: 0.25,
                                }}
                                className="block h-px w-full bg-white"
                            />

                        </span>
                    </button>

                </div>
            </motion.nav>


            {/* ─────────────────────────────────────
                Mobile menu
            ───────────────────────────────────── */}

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                        className="fixed inset-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl md:hidden"
                    >

                        <motion.div
                            initial={{
                                y: 50,
                            }}
                            animate={{
                                y: 0,
                            }}
                            exit={{
                                y: 30,
                            }}
                            transition={{
                                duration: 0.5,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="flex h-full flex-col justify-between px-6 pb-10 pt-28"
                        >

                            {/* Mobile links */}
                            <div>

                                <p className="mb-8 text-[10px] uppercase tracking-[0.25em] text-white/25">
                                    Navigation
                                </p>

                                <div className="flex flex-col">

                                    {links.map((link, index) => (
                                        <motion.a
                                            key={link.name}
                                            href={link.href}
                                            onClick={closeMenu}
                                            initial={{
                                                opacity: 0,
                                                x: -30,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                x: 0,
                                            }}
                                            transition={{
                                                delay: 0.08 + index * 0.08,
                                                duration: 0.5,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                            className="group flex items-center justify-between border-b border-white/10 py-5"
                                        >

                                            <span className="text-5xl font-medium tracking-[-0.05em] transition-transform duration-300 group-hover:translate-x-2">
                                                {link.name}
                                            </span>

                                            <span className="text-xl text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white">
                                                ↗
                                            </span>

                                        </motion.a>
                                    ))}

                                </div>

                            </div>


                            {/* Mobile status */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                transition={{
                                    delay: 0.5,
                                }}
                                className="border-t border-white/10 pt-6"
                            >

                                <div className="flex items-center gap-3">
                                    <span className="relative block h-2 w-2">
                                        {/* Green pulse */}
                                        <span className="absolute inset-0 animate-ping rounded-full bg-[#22c55e] opacity-75" />

                                        {/* Solid green dot */}
                                        <span className="absolute inset-0 rounded-full bg-[#22c55e]" />
                                    </span>

                                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                                        Available for opportunities
                                    </span>
                                </div>

                            </motion.div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar