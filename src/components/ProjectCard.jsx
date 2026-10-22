import { motion } from 'motion/react'
import expenseTrackerImage from '../assets/projects/expense-tracker/desktop.png'
import jobTrackerImage from '../assets/projects/job-tracker/desktop.png'
import weatherImage from '../assets/projects/weather/desktop.webp'
import prabhatAIImage from '../assets/projects/prabhat-ai/desktop.png'
import ProjectPreview from './ProjectPreview'

function ProjectCard({ project }) {
    const image =
        project.image === 'expense-tracker'
            ? expenseTrackerImage
            : project.image === 'job-tracker'
                ? jobTrackerImage
                : project.image === 'weather'
                    ? weatherImage
                    : project.image === 'prabhat-ai'
                        ? prabhatAIImage
                        : null

    const isFeatured = project.number === '01'
    const isLive = project.liveUrl !== '#'
    const hasGithub = project.githubUrl !== '#'

    // Keep descriptions compact for the carousel.
    const shortDescriptions = {
        '01': 'A personal AI agent that answers questions about my background, projects, skills, and learning journey.',
        '02': 'A full-stack platform to organize job applications, track progress, and manage your job search.',
        '03': 'A personal finance dashboard to track expenses, manage budgets, and understand spending patterns.',
        '04': 'A responsive weather app delivering current conditions and forecasts for your location.',
        '05': 'A full-stack e-commerce platform with product discovery, cart, checkout, and order management.',
        '06': 'A collaborative workspace for managing projects, tasks, and team discussions in real time.',
        '07': 'A real-time messaging app with private conversations, group chats, and online presence.',
    }

    const description =
        shortDescriptions[project.number] ||
        project.description

    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="project-card group min-w-0"
        >
            {/* Project preview */}
            <div className="relative">
                <a
                    href={isLive ? project.liveUrl : undefined}
                    target={isLive ? '_blank' : undefined}
                    rel={isLive ? 'noopener noreferrer' : undefined}
                    data-cursor={isLive ? 'view' : undefined}
                    aria-label={
                        isLive
                            ? `View ${project.title} live demo`
                            : `${project.title} is not live yet`
                    }
                    className={`project-card__visual relative block overflow-hidden rounded-2xl bg-[#e8e5de] shadow-[0_12px_35px_rgba(25,22,16,0.08)] transition-shadow duration-500 group-hover:shadow-[0_20px_50px_rgba(25,22,16,0.15)] ${isLive ? 'cursor-pointer' : 'cursor-default'
                        }`}
                >
                    <motion.div
                        className="relative"
                        whileHover={{ scale: 1.025 }}
                        transition={{
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        {image ? (
                            <img
                                src={image}
                                alt={`${project.title} project preview`}
                                loading="lazy"
                                className="block h-auto w-full object-contain"
                            />
                        ) : (
                            <div className="aspect-[4/3]">
                                <ProjectPreview type={project.image} />
                            </div>
                        )}
                    </motion.div>

                    {/* Subtle image overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10 opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Project number */}
                    <div className="pointer-events-none absolute inset-x-3 top-3 flex items-center justify-between sm:inset-x-4 sm:top-4">
                        <span className="rounded-full border border-white/35 bg-black/25 px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] text-white backdrop-blur-md">
                            No. {project.number}
                        </span>

                        <span className="rounded-full border border-white/30 bg-black/25 px-3 py-1.5 text-[9px] uppercase tracking-[0.15em] text-white backdrop-blur-md">
                            {project.status}
                        </span>
                    </div>

                    {isFeatured && (
                        <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-[#f5f4f0] px-3 py-1.5 text-[9px] uppercase tracking-[0.12em] text-[#171714] sm:bottom-4 sm:left-4">
                            Featured Project
                        </span>
                    )}

                    {isLive && (
                        <span className="pointer-events-none absolute bottom-3 right-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-[#f5f4f0] text-lg text-[#171714] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:bottom-4 sm:right-4">
                            ↗
                        </span>
                    )}
                </a>
            </div>

            {/* Compact project information */}
            <div className="px-1 pb-2 pt-4 sm:pt-5">
                <h3 className="text-xl font-medium leading-tight tracking-[-0.04em] text-[#171714] sm:text-2xl md:text-3xl">
                    {project.title}
                </h3>

                <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#68645d]">
                    {description}
                </p>

                {/* Only the two project links */}
                <div className="mt-4 flex flex-wrap items-center gap-2">
                    {isLive && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-[#171714]/15 bg-[#171714] px-4 py-2.5 text-[10px] uppercase tracking-[0.1em] text-white transition-all duration-300 hover:border-[#171714] hover:bg-[#171714]/80"
                        >
                            Live Demo <span>↗</span>
                        </a>
                    )}

                    {hasGithub && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-black/15 px-4 py-2.5 text-[10px] uppercase tracking-[0.1em] text-[#393630] transition-colors duration-300 hover:border-black/40 hover:bg-black/5"
                        >
                            GitHub <span>↗</span>
                        </a>
                    )}
                </div>
            </div>
        </motion.article>
    )
}

export default ProjectCard