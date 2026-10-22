import { useEffect, useRef } from 'react'
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from 'motion/react'

function GlobalGlow() {
    const mouseX = useMotionValue(-200)
    const mouseY = useMotionValue(-200)

    const springX = useSpring(mouseX, {
        stiffness: 120,
        damping: 22,
        mass: 0.8,
    })

    const springY = useSpring(mouseY, {
        stiffness: 120,
        damping: 22,
        mass: 0.8,
    })

    const scaleX = useMotionValue(1)
    const scaleY = useMotionValue(1)

    const smoothScaleX = useSpring(scaleX, {
        stiffness: 150,
        damping: 16,
    })

    const smoothScaleY = useSpring(scaleY, {
        stiffness: 150,
        damping: 16,
    })

    const rotate = useMotionValue(0)
    const smoothRotate = useSpring(rotate, {
        stiffness: 100,
        damping: 20,
    })

    const previous = useRef(null)

    useEffect(() => {
        let frame

        const handleMouseMove = (event) => {
            const x = event.clientX
            const y = event.clientY

            mouseX.set(x)
            mouseY.set(y)

            if (previous.current) {
                const dx = x - previous.current.x
                const dy = y - previous.current.y
                const speed = Math.min(Math.hypot(dx, dy) / 35, 0.3)

                scaleX.set(1 + speed)
                scaleY.set(1 - speed * 0.45)

                if (Math.hypot(dx, dy) > 1) {
                    rotate.set(Math.atan2(dy, dx) * (180 / Math.PI))
                }

                cancelAnimationFrame(frame)
                frame = requestAnimationFrame(() => {
                    scaleX.set(1)
                    scaleY.set(1)
                })
            }

            previous.current = { x, y }
        }

        window.addEventListener('mousemove', handleMouseMove, {
            passive: true,
        })

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            cancelAnimationFrame(frame)
        }
    }, [mouseX, mouseY, scaleX, scaleY, rotate])

    return (
        <motion.div
            aria-hidden="true"
            style={{
                left: springX,
                top: springY,
                x: '-50%',
                y: '-50%',
                scaleX: smoothScaleX,
                scaleY: smoothScaleY,
                rotate: smoothRotate,
                transformOrigin: 'center center',
            }}
            className="pointer-events-none fixed left-0 top-0 z-[5] hidden h-32 w-32 rounded-[42%_58%_61%_39%/44%_42%_58%_56%] bg-[#292821]/[0.16] blur-[26px] md:block"
        />
    )
}

export default GlobalGlow