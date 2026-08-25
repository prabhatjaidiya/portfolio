import { motion } from 'motion/react'

const skillGroups = [
    {
        title: 'Frontend',
        description:
            'Technologies I use to build responsive and interactive web interfaces.',
        skills: [
            {
                name: 'HTML',
                logo: '/skills/html.png',
                level: 'Core',
            },
            {
                name: 'CSS',
                logo: '/skills/css.png',
                level: 'Core',
            },
            {
                name: 'JavaScript',
                logo: '/skills/javascript.png',
                level: 'Core',
            },
            {
                name: 'React',
                logo: '/skills/react.png',
                level: 'Core',
            },
            {
                name: 'Tailwind CSS',
                logo: '/skills/tailwind.png',
                level: 'Core',
            },
        ],
    },

    {
        title: 'Tools & APIs',
        description:
            'Tools I use for development, version control and connecting applications.',
        skills: [
            {
                name: 'Git',
                logo: '/skills/git.png',
                level: 'Core',
            },
            {
                name: 'GitHub',
                logo: '/skills/github.png',
                level: 'Core',
            },
            {
                name: 'REST APIs',
                logo: '/skills/api.png',
                level: 'Core',
            },
            {
                name: 'Vite',
                logo: '/skills/vite.png',
                level: 'Core',
            },
        ],
    },

    {
        title: 'Currently Learning',
        description:
            "Technologies I'm learning as I move toward full- stack development.",
        skills: [
            {
                name: 'Node.js',
                logo: '/skills/node.png',
                level: 'Learning',
            },
            {
                name: 'Express',
                logo: '/skills/express.png',
                level: 'Learning',
            },
            {
                name: 'PostgreSQL',
                logo: '/skills/postgresql.png',
                level: 'Learning',
            },
            {
                name: 'MongoDB',
                logo: '/skills/mongodb.png',
                level: 'Learning',
            },
            {
                name: 'TypeScript',
                logo: '/skills/typescript.png',
                level: 'Learning',
            },
        ],
    },
]

function Skills() {
    return (
        <main className="relative min-h-screen bg-transparent px-6 py-10 text-white md:px-10">

            {/* Header */}
            <section
                id='skills'
                className="mb-32"
            >
                <p className="mb-6 text-xs uppercase tracking-[0.2em] text-white/40">
                    05 — Skills
                </p>

                <div className="border-t border-white/10 pt-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="max-w-6xl text-[16vw] font-medium leading-[0.78] tracking-[-0.08em] md:text-[10vw]"
                    >
                        WHAT I
                        <br />
                        WORK WITH.
                    </motion.h1>
                </div>

                <p className="mt-10 max-w-xl text-sm leading-7 text-white/40 md:text-base">
                    A collection of technologies, tools and concepts I'm
                    using to build modern web experiences and continuously
                    expand my development skills.
                </p>
            </section>

            {/* Skill groups */}
            <div className="space-y-32">
                {skillGroups.map((group, groupIndex) => (
                    <section key={group.title}>

                        {/* Group heading */}
                        <div className="mb-10 grid gap-6 border-b border-white/10 pb-6 md:grid-cols-12 md:items-end">
                            <div className="md:col-span-2">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                                    0{groupIndex + 1} / 03
                                </span>
                            </div>

                            <div className="md:col-span-5">
                                <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
                                    {group.title}
                                </h2>
                            </div>

                            <p className="text-sm leading-7 text-white/40 md:col-span-4 md:col-start-8">
                                {group.description}
                            </p>
                        </div>

                        {/* Skill cards */}
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                            {group.skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{
                                        opacity: 0,
                                        y: 40,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.2,
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.08,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    whileHover={{
                                        y: -14,
                                        scale: 1.025,
                                        transition: {
                                            duration: 0.3,
                                            ease: [0.22, 1, 0.36, 1],
                                        },
                                    }}
                                    className=" group relative flex min-h-[230px] flex-col overflow-hidden border border-white/10 bg-white/[0.015] p-5 transition-all duration-300 ease-out hover:border-white/40 hover:bg-white/[0.07] hover:shadow-[0_25px_60px_rgba(0,0,0,0.45)] md:min-h-[260px] md:p-6"
                                >
                                    {/* Card number */}
                                    <span
                                        className="absolute left-5 top-5 text-[9px] uppercase tracking-[0.2em] text-white/20 transition-all duration-300 group-hover:text-white/50"
                                    >
                                        {String(index + 1).padStart(2, '0')}
                                    </span>

                                    {/* Skill level */}
                                    <span
                                        className="absolute right-5 top-5 text-[9px] uppercase tracking-[0.15em] text-white/20 transition-all duration-300 group-hover:text-white/50"
                                    >
                                        {skill.level}
                                    </span>

                                    {/* Logo area */}
                                    <div className="relative flex flex-1 items-center justify-center">

                                        {/* Logo glow */}
                                        <div
                                            className="absolute h-28 w-28 rounded-full bg-white/[0.06] opacity-0 blur-3xl transition-all duration-500 group-hover:scale-[1.8] group-hover:opacity-100"
                                        />

                                        {/* Logo */}
                                        <motion.img
                                            src={skill.logo}
                                            alt={`${skill.name} logo`}
                                            whileHover={{
                                                scale: 1.18,
                                                y: -5,
                                                rotate: 2,
                                            }}
                                            transition={{
                                                duration: 0.35,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                            className="relative z-10 h-16 w-16 object-contain opacity-75 transition-all duration-300 group-hover:opacity-100 group-hover:drop-shadow-[0_10px_25px_rgba(255,255,255,0.18)] md:h-20 md:w-20"
                                        />
                                    </div>

                                    {/* Bottom information */}
                                    <div
                                        className="relative z-10 mt-auto border-t border-white/10 pt-4 text-center transition-colors duration-300 group-hover:border-white/25"
                                    >
                                        <h3
                                            className="text-sm font-medium tracking-tight text-white/70 transition-all duration-300 group-hover:text-white group-hover:tracking-normal"
                                        >
                                            {skill.name}
                                        </h3>

                                        <p
                                            className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/25 transition-colors duration-300 group-hover:text-white/45"
                                        >
                                            {skill.level === 'Core'
                                                ? 'Currently using'
                                                : 'Currently learning'}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </section>
                ))}
            </div>
        </main>
    )
}

export default Skills