import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function SmoothScroll({ children }) {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.09,
            smoothWheel: true,
            syncTouch: false,
            anchors: true,
        })

        const updateScrollTrigger = () => {
            ScrollTrigger.update()
        }

        lenis.on('scroll', updateScrollTrigger)

        const updateLenis = (time) => {
            lenis.raf(time * 1000)
        }

        gsap.ticker.add(updateLenis)
        gsap.ticker.lagSmoothing(0)

        return () => {
            lenis.off('scroll', updateScrollTrigger)
            gsap.ticker.remove(updateLenis)
            lenis.destroy()
        }
    }, [])

    return children
}

export default SmoothScroll