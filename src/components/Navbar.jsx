import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const links = [
    {
        name: 'Work',
        href: '#work',
    },
    {
        name: 'About',
        href: '#about',
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
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="fixed left-0 top-0 z-50 w-full px-6 py-6 md:px-10"
            >
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={closeMenu}
                        className="relative z-[60] text-sm font-medium tracking-widest"
                    >
                        PJ.
                    </a>

                    {/* Desktop navigation */}
                    <div className="hidden items-center gap-8 text-sm md:flex">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-white/60 transition-colors hover:text-white"
                            >
                                {link.name.toUpperCase()}
                            </a>
                        ))}
                    </div>

                    {/* Desktop status */}
                    <div className="hidden items-center gap-2 text-xs text-white/60 md:flex">
                        <span className="h-2 w-2 rounded-full bg-green-400" />
                        AVAILABLE
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="relative z-[60] text-xs uppercase tracking-[0.2em] md:hidden"
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {menuOpen ? 'CLOSE' : 'MENU'}
                    </button>

                </div>
            </motion.nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-[#0a0a0a] md:hidden"
                    >
                        <motion.div
                            initial={{ y: 40 }}
                            animate={{ y: 0 }}
                            exit={{ y: 40 }}
                            transition={{ duration: 0.4 }}
                            className="flex h-full flex-col justify-between px-6 pb-10 pt-32"
                        >

                            {/* Links */}
                            <div className="flex flex-col">
                                {links.map((link, index) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={closeMenu}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: index * 0.08,
                                        }}
                                        className="border-b border-white/10 py-5 text-5xl font-medium tracking-[-0.05em]"
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                            </div>

                            {/* Status */}
                            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/40">
                                <span className="h-2 w-2 rounded-full bg-green-400" />
                                Available for opportunities
                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar