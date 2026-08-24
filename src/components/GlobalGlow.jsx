import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

function GlobalGlow() {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springX = useSpring(mouseX, {
        stiffness: 120,
        damping: 25,
    })

    const springY = useSpring(mouseY, {
        stiffness: 120,
        damping: 25,
    })

    useEffect(() => {
        const handleMouseMove = (event) => {
            mouseX.set(event.clientX)
            mouseY.set(event.clientY)
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [mouseX, mouseY])

    return (
        <>
            {/* Large glow */}
            <motion.div
                style={{
                    left: springX,
                    top: springY,
                }}
                className="pointer-events-none fixed z-0 hidden h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.10] blur-[70px] md:block"
            />

            <div className="pointer-events-none fixed left-1/2 top-1/2 z-0 hidden h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.015] blur-[120px] md:block" />

            {/* Small glow */}
            <motion.div
                style={{
                    left: springX,
                    top: springY,
                }}
                className="pointer-events-none fixed z-0 hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.12] blur-2xl md:block"
            />
        </>
    )
}

export default GlobalGlow