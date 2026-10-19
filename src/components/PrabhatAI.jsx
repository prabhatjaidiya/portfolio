function PrabhatAI() {
    const technologies = [
        'React',
        'TypeScript',
        'Node.js',
        'Express',
        'MongoDB',
        'Google Gemini',
        'Embeddings',
        'Vector Search',
        'RAG',
        'GitHub API',
        'Conversation Memory',
        'REST API',
    ]

    const features = [
        {
            number: '01',
            title: 'Knowledge Retrieval',
            description:
                'Uses embeddings, semantic search and RAG to retrieve relevant information about my skills, projects and learning journey.',
        },
        {
            number: '02',
            title: 'Conversation Memory',
            description:
                'Maintains recent conversation history to support meaningful follow-up questions and contextual interactions.',
        },
        {
            number: '03',
            title: 'Context & Guardrails',
            description:
                'Combines retrieved knowledge, system instructions, input validation and security guardrails for grounded responses.',
        },
        {
            number: '04',
            title: 'GitHub & Documents',
            description:
                'Integrates repository context and document processing to make relevant project knowledge accessible to the assistant.',
        },
    ]

    return (
        <section
            id="prabhat-ai"
            className="px-5 py-16 sm:px-6 md:px-10 md:py-24"
        >
            <div className="relative overflow-hidden border-y border-white/10 py-14 md:py-20">

                {/* Ambient background glow */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-emerald-400/[0.06] blur-[100px]"
                />

                <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-8">

                    {/* Project introduction */}
                    <div className="max-w-3xl">

                        <p className="mb-5 text-xs uppercase tracking-[0.22em] text-white/40">
                            Independent AI Project / 001
                        </p>

                        <div className="mb-6 flex flex-wrap items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="relative flex h-2 w-2"
                            >
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/40" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                            </span>

                            <span className="text-xs uppercase tracking-[0.18em] text-emerald-400">
                                Live · Deployed
                            </span>

                            <span className="text-white/20">/</span>

                            <span className="text-xs text-white/40">
                                Full-Stack + AI Engineering
                            </span>
                        </div>

                        <h2 className="text-5xl font-medium tracking-[-0.055em] sm:text-6xl md:text-8xl">
                            Prabhat
                            <span className="block text-white/35">
                                AI<span className="text-emerald-400">.</span>
                            </span>
                        </h2>

                        <p className="mt-7 max-w-2xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
                            A personal AI agent designed to represent my
                            professional background, technical skills,
                            projects and learning journey. Built end-to-end
                            with a retrieval-augmented generation (RAG)
                            pipeline, semantic search, conversation memory,
                            context-aware responses and live GitHub
                            integration. Developed, tested and deployed
                            through a 28-day AI engineering roadmap.
                        </p>

                        {/* Project completion details */}
                        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                            <div className="flex items-center gap-2">
                                <span className="text-emerald-400">
                                    <svg
                                        aria-hidden="true"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        className="h-4 w-4"
                                    >
                                        <path
                                            d="m4 10 4 4 8-8"
                                            stroke="currentColor"
                                            strokeWidth="1.7"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                                <span className="text-xs text-white/45">
                                    28/28 milestones completed
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                <span className="text-xs text-white/45">
                                    Frontend & backend deployed
                                </span>
                            </div>
                        </div>

                        {/* Technology tags */}
                        <div className="mt-7 flex flex-wrap gap-2">
                            {technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-white/10 px-3 py-2 text-xs text-white/55 transition-colors duration-300 hover:border-emerald-400/40 hover:text-emerald-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Project actions */}
                        <div className="mt-9 flex flex-wrap items-center gap-3">
                            <a
                                href="https://prabhat-ai.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Open Prabhat AI live demo"
                                className="group inline-flex items-center gap-3 bg-emerald-300 px-5 py-3.5 text-sm font-medium text-black transition-colors duration-300 hover:bg-emerald-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
                            >
                                Try Live Demo
                                <span
                                    aria-hidden="true"
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                >
                                    ↗
                                </span>
                            </a>

                            <a
                                href="https://github.com/prabhatjaidiya/prabhat-ai"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="View Prabhat AI source code on GitHub"
                                className="group inline-flex items-center gap-3 border border-white/15 px-5 py-3.5 text-sm font-medium text-white/80 transition-colors duration-300 hover:border-white/40 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
                            >
                                Explore Repository
                                <span
                                    aria-hidden="true"
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                >
                                    ↗
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Animated AI visual */}
                    <div
                        aria-hidden="true"
                        className="relative mx-auto flex h-64 w-64 shrink-0 items-center justify-center sm:h-72 sm:w-72"
                    >
                        <div className="absolute h-44 w-44 rounded-full bg-emerald-400/[0.08] blur-3xl" />

                        <div className="absolute h-60 w-60 rounded-full border border-white/[0.07]" />

                        <div className="absolute h-48 w-48 animate-[spin_24s_linear_infinite] rounded-full border border-dashed border-emerald-400/20" />

                        <div className="absolute h-36 w-36 animate-[spin_15s_linear_infinite] rounded-full border border-white/10">
                            <span className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.65)]" />
                        </div>

                        <div className="absolute h-28 w-28 animate-[spin_20s_linear_infinite_reverse] rounded-full border border-white/[0.08]">
                            <span className="absolute -left-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-white/70" />
                        </div>

                        <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-emerald-400/25 bg-[#0a0a0a]/90 shadow-[0_0_60px_rgba(52,211,153,0.10)]">
                            <div className="absolute h-12 w-12 animate-pulse rounded-full bg-emerald-400/15 blur-xl" />
                            <div className="relative h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_24px_rgba(110,231,183,0.9)]" />
                        </div>

                        <span className="absolute left-8 top-12 h-1.5 w-1.5 rounded-full bg-white/40" />
                        <span className="absolute bottom-10 right-8 h-1 w-1 rounded-full bg-emerald-300/60" />
                    </div>
                </div>

                {/* Capability highlights */}
                <div className="relative mt-16 border-t border-white/10 pt-8 md:mt-24 md:pt-10">
                    <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/35">
                                Under the hood
                            </p>

                            <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">
                                More than a chatbot.
                            </h3>
                        </div>

                        <p className="max-w-sm text-sm leading-6 text-white/40">
                            An end-to-end AI engineering project combining
                            retrieval, contextual reasoning, integrations
                            and application security.
                        </p>
                    </div>

                    <div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature) => (
                            <article
                                key={feature.number}
                                className="border-t border-white/10 py-6"
                            >
                                <span className="text-xs tabular-nums text-emerald-400/70">
                                    {feature.number}
                                </span>

                                <h4 className="mt-4 text-base font-medium text-white/85">
                                    {feature.title}
                                </h4>

                                <p className="mt-3 text-sm leading-6 text-white/45">
                                    {feature.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PrabhatAI