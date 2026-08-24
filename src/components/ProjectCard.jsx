import { motion } from 'motion/react'
import weatherImage from '../assets/projects/weather/desktop.png'
import ProjectPreview from './ProjectPreview'

function ProjectCard({ project }) {
    const image =
        project.image === 'weather'
            ? weatherImage
            : null

    return (
        <motion.article
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="group mb-24 md:mb-32"
        >
            {/* Project image */}
            <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="view"
                className="relative block overflow-hidden rounded-sm bg-[#080b18]"
                aria-label={`View ${project.title} live project`}
            >

                {image ? (
                    <img
                        src={image}
                        alt={project.title}
                        className="h-auto w-full object-contain transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                    />
                ) : (
                    <div className="aspect-[16/9] overflow-hidden">
                        <ProjectPreview type={project.image} />
                    </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-700 group-hover:bg-black/20">
                    <span className="translate-y-8 scale-95 border border-white/20 bg-black/30 px-6 py-4 text-xs uppercase tracking-[0.2em] opacity-0 backdrop-blur-md transition-all duration-700 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
                        View Project ↗
                    </span>
                </div>

                {/* Number */}
                <div className="absolute left-6 top-6 flex items-center gap-3">
                    <span className="text-xs text-white/60">
                        {project.number}
                    </span>

                    {project.number === '01' && (
                        <span className="border border-white/20 bg-black/30 px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-white/60 backdrop-blur-md">
                            Featured
                        </span>
                    )}
                </div>

            </a>

            {/* Project information */}
            <div className="mt-5 flex flex-col gap-6 md:mt-6 md:flex-row md:items-start md:justify-between">

                <div className="max-w-2xl">

                    <div className="mb-3 flex items-center gap-3">
                        <span className="text-xs text-white/30">
                            {project.number}
                        </span>

                        <span className="h-px w-8 bg-white/20" />

                        <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                            {project.category}
                        </span>

                        <span className="text-xs uppercase tracking-[0.2em] text-white/20">
                            {project.status}
                        </span>
                    </div>

                    <h3 className="text-3xl font-medium tracking-tight md:text-5xl">
                        {project.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-white/40 md:text-base">
                        {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-6 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="border border-white/10 px-3 py-2 text-xs text-white/50 transition-colors duration-300 hover:border-white/30 hover:text-white"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                </div>

                {/* Links */}
                <div className="flex w-full gap-3 md:w-auto md:shrink-0 md:pt-12">

                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex flex-1 items-center justify-center gap-3 border border-white/20 px-4 py-3 text-xs uppercase tracking-[0.15em] transition-all duration-300 hover:bg-white hover:text-black md:flex-none md:px-5"
                    >
                        Live Demo

                        <span className="transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1">
                            ↗
                        </span>
                    </a>

                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex flex-1 items-center justify-center gap-3 border border-white/10 px-4 py-3 text-xs uppercase tracking-[0.15em] text-white/60 transition-all duration-300 hover:border-white/30 hover:text-white md:flex-none md:px-5"
                    >
                        GitHub

                        <span className="transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1">
                            ↗
                        </span>
                    </a>

                </div>

            </div>
        </motion.article>
    )
}

export default ProjectCard