import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import projects from '../data/projects'
import ProjectCard from './ProjectCard'

function Projects() {
    const sectionRef = useRef(null)
    const trackRef = useRef(null)



    useLayoutEffect(() => {
        const track = trackRef.current
        if (!track || projects.length === 0) return

        let tween
        let resizeObserver

        const ctx = gsap.context(() => {
            const firstSet = track.querySelector('.project-gallery__set')
            const secondSet = track.querySelectorAll('.project-gallery__set')[1]

            if (!firstSet || !secondSet) return

            const startAnimation = () => {
                const distance =
                    secondSet.getBoundingClientRect().left -
                    firstSet.getBoundingClientRect().left

                if (distance <= 0) return

                tween?.kill()

                gsap.set(track, { x: -distance })

                tween = gsap.to(track, {
                    x: 0,
                    duration: 16,
                    ease: 'none',
                    repeat: -1,
                })
            }

            // Wait for images and layout to settle before measuring.
            const images = [...track.querySelectorAll('img')]
            const imagePromises = images.map((img) => {
                if (img.complete) return Promise.resolve()

                return new Promise((resolve) => {
                    img.addEventListener('load', resolve, { once: true })
                    img.addEventListener('error', resolve, { once: true })
                })
            })

            Promise.all(imagePromises).then(() => {
                if (track.isConnected) startAnimation()
            })

            resizeObserver = new ResizeObserver(() => {
                // Don't restart the animation for ordinary frame updates.
                if (!tween) startAnimation()
            })

            resizeObserver.observe(firstSet)
            resizeObserver.observe(secondSet)
        }, track)

        return () => {
            resizeObserver?.disconnect()
            tween?.kill()
            ctx.revert()
        }
    }, [])

    return (
        <section
            id="work"
            ref={sectionRef}
            className="relative overflow-hidden bg-[#f5f4f0] py-20 text-[#171714] sm:py-24 md:py-28"
        >
            <header className="relative z-10 mb-12 px-5 sm:mb-16 sm:px-8 md:mb-20">
                <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
                    <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.35em] text-black/55 sm:text-xs">
                        01 — Selected Projects
                    </p>

                    <h2 className="text-4xl font-medium leading-[1.05] tracking-[-0.06em] sm:text-5xl md:text-7xl">
                        A place to display{' '}
                        <span className="font-serif italic font-normal">
                            my work.
                        </span>
                    </h2>

                    <p className="mt-5 max-w-md text-sm leading-6 text-black/55 sm:text-base">
                        Digital experiences, experiments, and
                        products built with purpose.
                    </p>

                    <div className="mt-8 flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#171714]" />
                        <span className="text-[9px] uppercase tracking-[0.25em] text-black/50 sm:text-[10px]">
                            A collection of things I’ve built
                        </span>
                    </div>
                </div>
            </header>

            {/* Infinite project slider */}
            <div className="project-gallery relative w-full overflow-hidden">
                <div ref={trackRef} className="project-gallery__track flex w-max">
                    {[0, 1].map((setIndex) => (
                        <div
                            key={setIndex}
                            className="project-gallery__set flex w-max shrink-0 items-stretch gap-5 px-2.5 sm:gap-7 sm:px-4 md:gap-8 md:px-5"
                        >
                            {projects.map((project, index) => (
                                <div
                                    key={`${setIndex}-${project.number ?? project.title}-${index}`}
                                    className="project-gallery__item w-[78vw] max-w-[330px] shrink-0 sm:w-[44vw] sm:max-w-[380px] lg:w-[31vw] lg:max-w-[420px]"
                                >
                                    <ProjectCard project={project} />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <footer className="mx-auto mt-12 flex max-w-7xl items-center justify-between border-t border-black/10 px-5 pt-5 sm:mt-16 sm:px-8 md:mt-20 md:px-10">
                <span className="text-[9px] uppercase tracking-[0.2em] text-black/45 sm:text-[10px]">
                    Selected work
                </span>

                <span className="text-[9px] uppercase tracking-[0.2em] text-black/45 sm:text-[10px]">
                    {String(projects.length).padStart(2, '0')} Projects
                </span>
            </footer>
        </section>
    )
}

export default Projects