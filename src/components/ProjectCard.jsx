import { motion } from 'motion/react'
import expenseTrackerImage from '../assets/projects/expense-tracker/desktop.png'
import jobTrackerImage from '../assets/projects/job-tracker/desktop.png'
import weatherImage from '../assets/projects/weather/desktop.webp'
import ProjectPreview from './ProjectPreview'

function ProjectCard({ project }) {
    const image =
    project.image === 'expense-tracker'
        ? expenseTrackerImage
        : project.image === 'job-tracker'
            ? jobTrackerImage
            : project.image === 'weather'
                ? weatherImage
                : null

    const isFeatured = project.number === '01'

    return (
        <motion.article
            initial={{
                opacity: 0,
                y: 60,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.15,
            }}
            transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="group min-w-0"
        >
            {/* Project preview */}
            <a
                href={project.liveUrl === '#' ? undefined : project.liveUrl}
                target={project.liveUrl === '#' ? undefined : '_blank'}
                rel={
                    project.liveUrl === '#'
                        ? undefined
                        : 'noopener noreferrer'
                }
                data-cursor="view"
                aria-label={
                    project.liveUrl === '#'
                        ? `${project.title} is currently in development`
                        : `View ${project.title} live project`
                }
                className={`
                    relative block
                    overflow-hidden
                    rounded-sm
                    bg-[#080808]
                    border border-white/10
                    transition-all duration-700
                    group-hover:border-white/20
                    ${project.liveUrl === '#' ? 'cursor-default' : ''}
                `}
            >
                {/* Image */}
                <motion.div
                    className="relative overflow-hidden"
                    whileHover={{
                        scale: 1.015,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    {image ? (
                        <img
                            src={image}
                            alt={`${project.title} project preview`}
                            className="
                                h-auto
                                w-full
                                object-contain
                                transition-transform
                                duration-1000
                                ease-[cubic-bezier(0.22,1,0.36,1)]
                                group-hover:scale-[1.04]
                            "
                        />
                    ) : (
                        <div className="aspect-[16/10]">
                            <ProjectPreview type={project.image} />
                        </div>
                    )}

                    {/* Dark hover layer */}
                    <div
                        className="
                            absolute inset-0
                            bg-black/0
                            transition-all
                            duration-700
                            group-hover:bg-black/20
                        "
                    />

                    {/* Center action */}
                    {project.liveUrl !== '#' && (
                        <div
                            className="
                                absolute inset-0
                                flex items-center justify-center
                            "
                        >
                            <span
                                className="
                                    translate-y-6
                                    scale-95
                                    border border-white/20
                                    bg-black/40
                                    px-6 py-4
                                    text-[10px]
                                    uppercase
                                    tracking-[0.2em]
                                    opacity-0
                                    backdrop-blur-md
                                    transition-all
                                    duration-700
                                    group-hover:translate-y-0
                                    group-hover:scale-100
                                    group-hover:opacity-100
                                "
                            >
                                View Project ↗
                            </span>
                        </div>
                    )}

                    {/* Top metadata */}
                    <div className="absolute left-5 right-5 top-5 flex items-start justify-between">
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] tracking-[0.15em] text-white/60">
                                {project.number}
                            </span>

                            {isFeatured && (
                                <span
                                    className="
                                        border border-white/20
                                        bg-black/40
                                        px-3 py-1
                                        text-[9px]
                                        uppercase
                                        tracking-[0.2em]
                                        text-white/60
                                        backdrop-blur-md
                                    "
                                >
                                    Featured
                                </span>
                            )}
                        </div>

                        <span
                            className={`
                                border
                                px-3 py-1
                                text-[9px]
                                uppercase
                                tracking-[0.15em]
                                backdrop-blur-md
                                ${project.status === 'LIVE'
                                    ? 'border-white/20 bg-black/40 text-white/60'
                                    : 'border-white/10 bg-black/30 text-white/30'
                                }
                            `}
                        >
                            {project.status}
                        </span>
                    </div>
                </motion.div>

            </a>


            {/* Project information */}
            <div className="mt-5 min-w-0 md:mt-6">

                {/* Category */}
                <div className="mb-3 flex min-w-0 items-center gap-3">
                    <span className="h-px w-6 shrink-0 bg-white/20" />

                    <span className="truncate text-[10px] uppercase tracking-[0.2em] text-white/40">
                        {project.category}
                    </span>
                </div>


                {/* Title */}
                <h3
                    className="
                        text-2xl
                        font-medium
                        tracking-tight
                        transition-transform
                        duration-500
                        group-hover:translate-x-1
                        sm:text-3xl
                        md:text-4xl
                    "
                >
                    {project.title}
                </h3>


                {/* Description + links */}
                <div className="mt-4 flex min-w-0 flex-col gap-5">

                    <p className="max-w-xl text-sm leading-7 text-white/40">
                        {project.description}
                    </p>


                    {/* Technologies */}
                    <div className="flex min-w-0 flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="
                                    border
                                    border-white/10
                                    px-3 py-2
                                    text-[10px]
                                    uppercase
                                    tracking-[0.08em]
                                    text-white/40
                                    transition-all
                                    duration-300
                                    hover:border-white/25
                                    hover:text-white/70
                                "
                            >
                                {tech}
                            </span>
                        ))}
                    </div>


                    {/* Buttons */}
                    <div className="flex w-full gap-2 sm:w-auto sm:max-w-sm">

                        {project.liveUrl !== '#' && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group/link
                                    flex
                                    min-w-0
                                    flex-1
                                    items-center
                                    justify-center
                                    gap-2
                                    whitespace-nowrap
                                    border
                                    border-white/20
                                    px-4 py-3
                                    text-[10px]
                                    uppercase
                                    tracking-[0.15em]
                                    transition-all
                                    duration-300
                                    hover:bg-white
                                    hover:text-black
                                    sm:flex-none
                                "
                            >
                                Live Demo

                                <span className="transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1">
                                    ↗
                                </span>
                            </a>
                        )}

                        {project.githubUrl !== '#' && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group/link
                                    flex
                                    min-w-0
                                    flex-1
                                    items-center
                                    justify-center
                                    gap-2
                                    whitespace-nowrap
                                    border
                                    border-white/10
                                    px-4 py-3
                                    text-[10px]
                                    uppercase
                                    tracking-[0.15em]
                                    text-white/50
                                    transition-all
                                    duration-300
                                    hover:border-white/30
                                    hover:text-white
                                    sm:flex-none
                                "
                            >
                                GitHub

                                <span className="transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1">
                                    ↗
                                </span>
                            </a>
                        )}

                    </div>

                </div>
            </div>
        </motion.article>
    )
}

export default ProjectCard