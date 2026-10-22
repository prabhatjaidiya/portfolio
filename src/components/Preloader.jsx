import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const STORAGE_KEY = 'portfolio-preloader-seen'

function hasSeenPreloader() {
    try {
        return sessionStorage.getItem(STORAGE_KEY) === 'true'
    } catch {
        return false
    }
}

function markPreloaderSeen() {
    try {
        sessionStorage.setItem(STORAGE_KEY, 'true')
    } catch {
        // Continue normally if storage is unavailable.
    }
}

export default function Preloader({ onComplete }) {
    const container = useRef(null)
    const content = useRef(null)
    const letters = useRef([])
    const accent = useRef(null)
    const completed = useRef(false)

    const [visible, setVisible] = useState(() => !hasSeenPreloader())

    const name = 'HELLO'

    useGSAP(
        () => {
            if (!visible) return

            completed.current = false

            const finish = () => {
                if (completed.current) return

                completed.current = true
                markPreloaderSeen()
                setVisible(false)
                onComplete?.()
            }

            const reducedMotion = window.matchMedia(
                '(prefers-reduced-motion: reduce)'
            ).matches

            if (reducedMotion) {
                finish()
                return
            }

            const timeline = gsap.timeline({
                onComplete: finish,
            })

            timeline
                // 1. Reveal letters one by one.
                .fromTo(
                    letters.current,
                    {
                        yPercent: 110,
                        opacity: 0,
                        filter: 'blur(8px)',
                        rotate: 4,
                    },
                    {
                        yPercent: 0,
                        opacity: 1,
                        filter: 'blur(0px)',
                        rotate: 0,
                        duration: 0.9,
                        stagger: 0.16,
                        ease: 'power3.out',
                    }
                )

                // 2. Supporting labels appear.
                .from(
                    '.preloader-label',
                    {
                        y: 12,
                        opacity: 0,
                        duration: 0.45,
                        stagger: 0.08,
                        ease: 'power2.out',
                    },
                    '-=0.45'
                )

                // 3. Forest-green accent sweep.
                .fromTo(
                    accent.current,
                    { scaleX: 0 },
                    {
                        scaleX: 1,
                        duration: 0.7,
                        ease: 'power3.inOut',
                    },
                    '-=0.35'
                )

                // 4. Intro content fades away.
                .to(content.current, {
                    y: -18,
                    opacity: 0,
                    duration: 0.25,
                    ease: 'power2.in',
                })

                // 5. Warm off-white curtain moves upward.
                .to(
                    container.current,
                    {
                        yPercent: -100,
                        duration: 0.9,
                        ease: 'power4.inOut',
                    },
                    '-=0.05'
                )
        },
        {
            scope: container,
            dependencies: [visible],
            revertOnUpdate: true,
        }
    )

    if (!visible) return null

    return (
        <div
            ref={container}
            className="fixed inset-0 z-[9999] overflow-hidden bg-[#f5f4f0] text-[#171714] will-change-transform"
            role="status"
            aria-label="Loading portfolio"
        >
            <div
                ref={content}
                className="absolute inset-0 flex flex-col items-center justify-center px-5"
            >
                <div className="w-full max-w-6xl">
                    {/* Top metadata */}
                    <div className="preloader-label mb-8 flex items-center justify-between gap-4 text-[9px] uppercase tracking-[0.2em] text-black/45 sm:text-[11px] sm:tracking-[0.3em]">
                        <span>Independent Developer</span>
                        <span>Delhi, India · 2026</span>
                    </div>

                    {/* Letter-by-letter typography */}
                    <h1
                        aria-label="Hello"
                        className="overflow-hidden whitespace-nowrap text-[clamp(5rem,19vw,15rem)] font-semibold leading-[0.9] tracking-[-0.095em]"
                    >
                        {name.split('').map((letter, index) => (
                            <span
                                key={`${letter}-${index}`}
                                ref={(element) => {
                                    letters.current[index] = element
                                }}
                                aria-hidden="true"
                                className="inline-block will-change-transform"
                            >
                                {letter}
                            </span>
                        ))}
                        <span className="text-[#315c46]">.</span>
                    </h1>

                    {/* Forest-green accent */}
                    <div className="mt-7 h-[2px] w-full overflow-hidden bg-black/10">
                        <div
                            ref={accent}
                            className="h-full w-full origin-left bg-[#315c46] will-change-transform"
                        />
                    </div>

                    {/* Supporting copy */}
                    <div className="mt-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                        <p className="preloader-label text-sm leading-relaxed tracking-tight text-black/60 sm:text-base">
                            I build digital
                            <br />
                            experiences.
                        </p>

                        <p className="preloader-label text-[9px] uppercase tracking-[0.16em] text-black/50 sm:text-[10px] sm:tracking-[0.22em]">
                            Design
                            <span className="text-[#315c46]"> / </span>
                            Code
                            <span className="text-[#315c46]"> / </span>
                            Experience
                        </p>
                    </div>
                </div>

                {/* Footer label */}
                <span className="preloader-label absolute bottom-6 text-[9px] uppercase tracking-[0.25em] text-black/35">
                    Crafting the digital experience
                </span>
            </div>
        </div>
    )
}