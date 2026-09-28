function PrabhatAI() {
    const technologies = [
        'React',
        'TypeScript',
        'Node.js',
        'Express',
        'MongoDB',
        'AI',
    ]

    return (
        <section
            id="prabhat-ai"
            className="px-5 py-10 sm:px-6 md:px-10"
        >
            <div className="relative overflow-hidden border-y border-white/10 py-16 md:py-24">

                {/* Subtle background glow */}
                <div className="pointer-events-none absolute right-[18%] top-1/2 hidden h-72 w-72 -translate-y-1/2 rounded-full bg-white/[0.025] blur-3xl lg:block" />

                <div className="relative flex flex-col justify-between gap-16 lg:flex-row lg:items-center">

                    {/* Left Content */}
                    <div className="max-w-3xl">

                        {/* Label */}
                        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">
                            Currently Building
                        </p>

                        {/* Status */}
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-400" />

                            <span className="text-xs uppercase tracking-[0.2em] text-yellow-400">
                                Coming Soon
                            </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-5xl font-medium tracking-tight md:text-7xl">
                            Prabhat AI
                        </h2>

                        {/* Description */}
                        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/50 md:text-base">
                            A personal AI assistant I'm building from the
                            ground up, combining modern full-stack engineering
                            with AI-powered experiences.
                        </p>

                        {/* Technologies */}
                        <div className="mt-8 flex flex-wrap gap-2">
                            {technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/40 transition-colors duration-300 hover:border-white/20 hover:text-white/70"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* AI Visual */}
                    <div className="relative hidden h-72 w-72 shrink-0 items-center justify-center lg:flex">

                        {/* Outer glow */}
                        <div className="absolute h-44 w-44 rounded-full bg-white/[0.035] blur-2xl" />

                        {/* Outer ring */}
                        <div className="absolute h-56 w-56 rounded-full border border-white/[0.06]" />

                        {/* Middle ring */}
                        <div className="absolute h-40 w-40 animate-[spin_20s_linear_infinite] rounded-full border border-dashed border-white/10" />

                        {/* Orbit */}
                        <div className="absolute h-32 w-32 animate-[spin_12s_linear_infinite] rounded-full border border-white/10">
                            <span className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.5)]" />
                        </div>

                        {/* AI Core */}
                        <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] shadow-[0_0_60px_rgba(255,255,255,0.08)] backdrop-blur-sm">

                            {/* Inner glow */}
                            <div className="absolute h-10 w-10 animate-pulse rounded-full bg-white/[0.08] blur-md" />

                            {/* Core */}
                            <div className="relative h-3 w-3 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.7)]" />
                        </div>

                        {/* Orbiting dots */}
                        <span className="absolute left-12 top-16 h-1.5 w-1.5 rounded-full bg-white/30" />
                        <span className="absolute bottom-14 right-12 h-1.5 w-1.5 rounded-full bg-white/20" />
                        <span className="absolute right-8 top-24 h-1 w-1 rounded-full bg-yellow-400/50" />
                    </div>

                    {/* Status */}
                    <div className="shrink-0 lg:absolute lg:bottom-0 lg:right-0">
                        <span className="inline-flex rounded-full border border-white/10 px-5 py-3 text-xs uppercase tracking-[0.15em] text-white/50 transition-colors duration-300 hover:border-white/20 hover:text-white/80">
                            In Development →
                        </span>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default PrabhatAI