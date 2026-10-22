import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const links = [
    { name: 'Work', href: '#work', number: '01' },
    { name: 'Skills', href: '#skills', number: '02' },
    { name: 'About', href: '#about', number: '03' },
    { name: 'Contact', href: '#contact', number: '04' },
]

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => setMenuOpen(false)

    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const sections = document.querySelectorAll(
            '#home, #work, #skills, #about, #contact'
        )

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            {
                rootMargin: '-30% 0px -60% 0px',
            }
        )

        sections.forEach((section) => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6 sm:pt-5 md:px-10"
            >
                <div className="mx-auto flex max-w-[1600px] items-center justify-between rounded-2xl border border-black/[0.07] bg-[#f5f4f0]/90 px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.035)] backdrop-blur-xl sm:px-6 sm:py-4">

                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={closeMenu}
                        className="group flex items-center gap-3"
                        aria-label="PJ — Home"
                    >
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#171714] text-xs font-medium tracking-tight text-[#f5f4f0] transition-transform duration-300 group-hover:rotate-[-8deg]">
                            PJ
                        </span>

                        <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-[#171714] sm:block">
                            Portfolio
                        </span>
                    </a>

                    {/* Desktop links */}
                    <div className="hidden items-center gap-1 rounded-full border border-black/[0.06] bg-black/[0.025] p-1 md:flex">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`group relative rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.15em] transition-colors duration-300 ${activeSection === link.href.slice(1)
                                        ? 'bg-[#171714] text-[#f5f4f0]'
                                        : 'text-black/55 hover:bg-[#171714] hover:text-[#f5f4f0]'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Availability */}
                    <div className="hidden items-center gap-2.5 lg:flex">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/50" />
                            <span className="relative h-2 w-2 rounded-full bg-emerald-600" />
                        </span>

                        <span className="text-[9px] uppercase tracking-[0.16em] text-black/55">
                            Open to opportunities
                        </span>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="relative z-[60] flex items-center gap-3 rounded-full border border-black/10 px-4 py-2.5 text-[10px] uppercase tracking-[0.15em] text-[#171714] transition-colors duration-300 hover:bg-[#171714] hover:text-[#f5f4f0] md:hidden"
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? 'Close' : 'Menu'}

                        <span className="flex w-3 flex-col gap-[4px]">
                            <motion.span
                                animate={{
                                    rotate: menuOpen ? 45 : 0,
                                    y: menuOpen ? 3 : 0,
                                }}
                                className="block h-px w-full bg-current"
                            />
                            <motion.span
                                animate={{
                                    rotate: menuOpen ? -45 : 0,
                                    y: menuOpen ? -2 : 0,
                                }}
                                className="block h-px w-full bg-current"
                            />
                        </span>
                    </button>
                </div>
            </motion.nav>

            {/* Mobile overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-40 bg-[#f5f4f0]/[0.98] backdrop-blur-2xl md:hidden"
                    >
                        <motion.div
                            initial={{ y: 24 }}
                            animate={{ y: 0 }}
                            exit={{ y: 16 }}
                            transition={{
                                duration: 0.4,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="flex h-full flex-col justify-between overflow-y-auto px-6 pb-8 pt-28"
                        >
                            <div>
                                <p className="mb-8 text-[10px] uppercase tracking-[0.25em] text-black/40">
                                    Navigate the portfolio
                                </p>

                                <div className="flex flex-col">
                                    {links.map((link, index) => (
                                        <motion.a
                                            key={link.name}
                                            href={link.href}
                                            onClick={closeMenu}
                                            initial={{ opacity: 0, x: -16 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                delay: 0.06 * index,
                                                duration: 0.35,
                                            }}
                                            className="group flex items-center justify-between border-b border-black/10 py-5"
                                        >
                                            <div className="flex items-center gap-5">
                                                <span className="text-[10px] tracking-wider text-black/35">
                                                    {link.number}
                                                </span>

                                                <span className="text-4xl font-medium tracking-[-0.055em] text-[#171714] transition-transform duration-300 group-hover:translate-x-1 sm:text-5xl">
                                                    {link.name}
                                                </span>
                                            </div>

                                            <span className="text-lg text-black/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black">
                                                ↗
                                            </span>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-12 border-t border-black/10 pt-5">
                                <div className="flex items-center gap-2.5">
                                    <span className="h-2 w-2 rounded-full bg-emerald-600" />
                                    <span className="text-[9px] uppercase tracking-[0.18em] text-black/55">
                                        Open to Full-Stack Opportunities
                                    </span>
                                </div>

                                <p className="mt-5 text-xs text-black/35">
                                    © {new Date().getFullYear()} — PJ.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar