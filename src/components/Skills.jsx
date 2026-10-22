import { useLayoutEffect, useRef } from 'react'
import { motion } from 'motion/react'
import gsap from 'gsap'

const skillGroups = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML', logo: '/skills/html.png', level: 'Core' },
            { name: 'CSS', logo: '/skills/css.png', level: 'Core' },
            { name: 'JavaScript', logo: '/skills/javascript.png', level: 'Core' },
            { name: 'React', logo: '/skills/react.png', level: 'Core' },
            { name: 'Tailwind CSS', logo: '/skills/tailwind.png', level: 'Core' },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node.js', logo: '/skills/node.png', level: 'Core' },
            { name: 'Express', logo: '/skills/express.png', level: 'Core' },
            { name: 'TypeScript', logo: '/skills/typescript.png', level: 'Core' },
            { name: 'REST APIs', logo: '/skills/api.png', level: 'Core' },
        ],
    },
    {
        title: 'Database & APIs',
        skills: [
            { name: 'MongoDB', logo: '/skills/mongodb.png', level: 'Core' },
            { name: 'Mongoose', logo: '/skills/mongodb.png', level: 'Core' },
            { name: 'PostgreSQL', logo: '/skills/postgresql.png', level: 'Learning' },
        ],
    },
    {
        title: 'Tools & Workflow',
        skills: [
            { name: 'Git', logo: '/skills/git.png', level: 'Core' },
            { name: 'GitHub', logo: '/skills/github.png', level: 'Core' },
            { name: 'Vite', logo: '/skills/vite.png', level: 'Core' },
        ],
    },
]

const skills = [...skillGroups].reverse().flatMap((group) =>
    [...group.skills].reverse().map((skill) => ({
        ...skill,
        group: group.title,
    }))
)

function SkillCard({ skill, index }) {
    return (
        <motion.article
            whileHover={{ y: -7 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="group relative flex h-[270px] w-[225px] shrink-0 flex-col overflow-hidden border border-[#171714]/15 bg-[#EAE8E1] p-5 transition-colors duration-500 hover:border-[#171714]/35 hover:bg-[#E2DFD6] sm:h-[300px] sm:w-[255px] sm:p-6"
        >
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-[#171714]/[0.08] transition-transform duration-700 group-hover:scale-125" />

            <div className="pointer-events-none absolute -right-3 -top-3 h-16 w-16 rounded-full border border-[#171714]/[0.08]" />

            <div className="relative flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-[0.22em] text-[#171714]/45">
                    Skill / {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-[9px] uppercase tracking-[0.18em] text-[#171714]/50">
                    {skill.level}
                </span>
            </div>

            <div className="relative my-auto flex flex-col items-start">
                <div className="mb-6 flex h-[94px] w-[94px] items-center justify-center border border-[#171714]/10 bg-[#F5F4F0] transition-all duration-500 group-hover:border-[#171714]/25 group-hover:bg-[#F8F7F3] sm:h-[104px] sm:w-[104px]">
                    <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        loading="lazy"
                        className="h-12 w-12 object-contain opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100 sm:h-14 sm:w-14"
                    />
                </div>

                <p className="mb-2 text-[9px] uppercase tracking-[0.2em] text-[#171714]/45">
                    {skill.group}
                </p>

                <h3 className="text-2xl font-medium leading-tight tracking-[-0.055em] text-[#171714] sm:text-[28px]">
                    {skill.name}
                </h3>
            </div>

            <div className="relative flex items-center justify-between border-t border-[#171714]/15 pt-4">
                <span className="text-[9px] uppercase tracking-[0.18em] text-[#171714]/45">
                    {skill.level === 'Core'
                        ? 'In my toolkit'
                        : 'Currently learning'}
                </span>
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                </span>
            </div>
        </motion.article>
    )
}

export default function Skills() {
    const sectionRef = useRef(null)
    const trackRef = useRef(null)
    const firstSetRef = useRef(null)

    useLayoutEffect(() => {
        const track = trackRef.current
        const firstSet = firstSetRef.current

        if (!track || !firstSet) return

        const ctx = gsap.context(() => {
            const getDistance = () => firstSet.getBoundingClientRect().width

            const animation = gsap.to(track, {
                x: () => -getDistance(),
                duration: 34,
                ease: 'none',
                repeat: -1,
                modifiers: {
                    x: (value) => {
                        const distance = getDistance()
                        if (!distance) return '0px'

                        const current = parseFloat(value) || 0
                        return `${current % -distance}px`
                    },
                },
            })

            const refresh = () => {
                animation.invalidate()
                gsap.set(track, { x: 0 })
            }

            window.addEventListener('resize', refresh)

            return () => {
                window.removeEventListener('resize', refresh)
                animation.kill()
            }
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            id="skills"
            ref={sectionRef}
            className="relative overflow-hidden bg-[#F5F4F0] py-16 text-[#171714] sm:py-20 md:py-24"
        >
            <header className="px-5 text-center sm:px-8">
                <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#171714]/55 sm:text-xs">
                    05 — Skills & Tools
                </p>

                <h2 className="text-4xl font-medium tracking-[-0.065em] sm:text-5xl md:text-7xl">
                    What I work{' '}
                    <span className="font-serif italic font-normal">
                        with.
                    </span>
                </h2>

                <p className="mx-auto mt-4 max-w-md text-xs leading-6 text-[#171714]/55 sm:text-sm">
                    A selection of technologies in my development toolkit.
                </p>
            </header>

            <div className="relative my-10 overflow-hidden py-3 sm:my-14 md:my-16">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#F5F4F0] to-transparent sm:w-16 md:w-24" />

                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#F5F4F0] to-transparent sm:w-16 md:w-24" />

                <div
                    ref={trackRef}
                    className="flex w-max items-stretch"
                    style={{ willChange: 'transform' }}
                >
                    <div
                        ref={firstSetRef}
                        className="flex shrink-0 gap-3 pr-3 sm:gap-5 sm:pr-5 md:gap-6 md:pr-6"
                    >
                        {skills.map((skill, index) => (
                            <SkillCard
                                key={skill.name}
                                skill={skill}
                                index={index}
                            />
                        ))}
                    </div>

                    <div
                        aria-hidden="true"
                        className="flex shrink-0 gap-3 pr-3 sm:gap-5 sm:pr-5 md:gap-6 md:pr-6"
                    >
                        {skills.map((skill, index) => (
                            <SkillCard
                                key={`duplicate-${skill.name}`}
                                skill={skill}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <footer className="flex items-center justify-between border-t border-[#171714]/10 px-5 pt-4 text-[9px] uppercase tracking-[0.2em] text-[#171714]/50 sm:px-8 md:px-12">
                <span>Technologies & workflow</span>
                <span>{String(skills.length).padStart(2, '0')} Skills</span>
            </footer>
        </section>
    )
}