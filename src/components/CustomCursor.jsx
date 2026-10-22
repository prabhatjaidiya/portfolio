import { useEffect, useState } from 'react'
import {
    motion,
    useMotionValue,
    useSpring,
} from 'motion/react'

function CustomCursor() {
    const mouseX = useMotionValue(-100)
    const mouseY = useMotionValue(-100)

    const x = useSpring(mouseX, {
        stiffness: 500,
        damping: 35,
        mass: 0.4,
    })

    const y = useSpring(mouseY, {
        stiffness: 500,
        damping: 35,
        mass: 0.4,
    })

    const [isHovering, setIsHovering] = useState(false)
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const handleMouseMove = (event) => {
            mouseX.set(event.clientX)
            mouseY.set(event.clientY)
        }

        const handleMouseOver = (event) => {
            setIsHovering(
                Boolean(event.target.closest('[data-cursor="view"]'))
            )
        }

        const updateTheme = () => {
            const sections = [
                ...document.querySelectorAll(
                    '#home, #work, #skills, #about, #contact'
                ),
            ]

            const current = sections.find((section) => {
                const rect = section.getBoundingClientRect()
                const middle = window.innerHeight * 0.5

                return rect.top <= middle && rect.bottom > middle
            })

            if (current) {
                setIsDark(
                    ['home', 'about', 'contact'].includes(current.id)
                )
            }
        }

        window.addEventListener('mousemove', handleMouseMove, {
            passive: true,
        })
        document.addEventListener('mouseover', handleMouseOver)
        window.addEventListener('scroll', updateTheme, {
            passive: true,
        })

        updateTheme()

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseover', handleMouseOver)
            window.removeEventListener('scroll', updateTheme)
        }
    }, [mouseX, mouseY])

    return (
        <motion.div
            style={{
                x,
                y,
                translateX: '-50%',
                translateY: '-50%',
            }}
            animate={{
                scale: isHovering ? 1 : 0.45,
            }}
            transition={{
                scale: {
                    type: 'spring',
                    stiffness: 350,
                    damping: 25,
                },
            }}
            className={`pointer-events-none fixed left-0 top-0 z-[9998] hidden h-16 w-16 items-center justify-center rounded-full border text-[9px] uppercase tracking-[0.15em] backdrop-blur-sm md:flex ${
                isDark
                    ? 'border-white/40 bg-white/10 text-white'
                    : 'border-black/25 bg-black/[0.06] text-[#171714]'
            }`}
        >
            <span
                className={`transition-opacity duration-200 ${
                    isHovering ? 'opacity-100' : 'opacity-0'
                }`}
            >
                View
            </span>
        </motion.div>
    )
}

export default CustomCursor