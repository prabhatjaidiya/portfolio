import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

function CustomCursor() {
    const [position, setPosition] = useState({
        x: -100,
        y: -100,
    })

    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({
                x: event.clientX,
                y: event.clientY,
            })
        }

        const handleMouseOver = (event) => {
            const target = event.target.closest('[data-cursor="view"]')

            setIsHovering(Boolean(target))
        }

        window.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseover', handleMouseOver)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseover', handleMouseOver)
        }
    }, [])

    return (
        <motion.div
            animate={{
                x: position.x,
                y: position.y,
                scale: isHovering ? 1 : 0.45,
            }}
            transition={{
                type: 'spring',
                stiffness: 500,
                damping: 30,
                mass: 0.4,
            }}
            className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/10 text-[9px] uppercase tracking-[0.15em] text-white backdrop-blur-sm md:flex"
        >
            <span
                className={`transition-opacity duration-200 ${isHovering ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                View
            </span>
        </motion.div>
    )
}

export default CustomCursor