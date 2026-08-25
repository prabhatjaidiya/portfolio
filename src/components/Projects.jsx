import projects from '../data/projects'
import ProjectCard from './ProjectCard'

function Projects() {
    return (
        <section
            id="work"
            className="px-5 py-10 sm:px-6 md:px-10"
        >
            {/* Section heading */}
            <div className="mb-16 flex items-end justify-between border-b border-white/10 pb-5 md:mb-24">

                <div>
                    <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">
                        01 — Selected Work
                    </p>

                    <h2 className="text-4xl font-medium tracking-tight md:text-6xl">
                        Projects
                    </h2>
                </div>

                <p className="hidden text-xs uppercase tracking-[0.2em] text-white/30 md:block">
                    {projects.length} Projects
                </p>
            </div>

            {/* Projects */}
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-6">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.number}
                        project={project}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects