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
            className="relative overflow-hidden bg-[#f5f4f0] px-5 py-5 text-[#171714] sm:px-6 md:px-10 md:py-10"
        >
            <div className="relative mx-auto max-w-[1600px]">
                {/* Featured project introduction */}
                <div className="relative border-y border-[#171714]/15 py-12 md:py-12">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-[#E8E6E0] blur-[100px]"
                    />

                    <div className="relative grid items-start gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
                        <div className="max-w-3xl">
                            <p className="mb-5 text-xs uppercase tracking-[0.22em] text-[#171714]/45">
                                Featured Project / 001
                            </p>

                            <div className="mb-6 flex flex-wrap items-center gap-3">
                                <span
                                    aria-hidden="true"
                                    className="h-2 w-2 rounded-full bg-[#171714]"
                                />
                                <span className="text-xs uppercase tracking-[0.16em] text-[#171714]">
                                    Live · Deployed
                                </span>
                                <span className="text-[#171714]/25">/</span>
                                <span className="text-xs text-[#171714]/50">
                                    Full-Stack + AI Engineering
                                </span>
                            </div>

                            <h2 className="text-5xl font-medium tracking-[-0.065em] sm:text-6xl md:text-8xl">
                                Prabhat
                                <span className="block text-[#171714]/35">
                                    AI<span className="text-[#171714]">.</span>
                                </span>
                            </h2>

                            <p className="mt-7 max-w-2xl text-sm leading-7 text-[#171714]/65 sm:text-base sm:leading-8">
                                A personal AI agent designed to represent my
                                professional background, technical skills,
                                projects and learning journey. Built end-to-end
                                with a retrieval-augmented generation (RAG)
                                pipeline, semantic search, conversation memory,
                                context-aware responses and live GitHub
                                integration. Developed, tested and deployed
                                through a 28-day AI engineering roadmap.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                                <div className="flex items-center gap-2">
                                    <span className="text-[#171714]">✓</span>
                                    <span className="text-xs text-[#171714]/60">
                                        28/28 milestones completed
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#171714]" />
                                    <span className="text-xs text-[#171714]/60">
                                        Frontend & backend deployed
                                    </span>
                                </div>
                            </div>

                            {/* Technology tags */}
                            <div className="mt-7 flex flex-wrap gap-2">
                                {technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-[#171714]/15 px-3 py-2 text-xs text-[#171714]/65 transition-colors duration-300 hover:border-[#171714]/60 hover:text-[#171714]"
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
                                    className="group inline-flex items-center gap-3 bg-[#171714] px-5 py-3.5 text-sm font-medium text-[#f5f4f0] transition-colors duration-300 hover:bg-[#171714]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a36d45]"
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
                                    className="group inline-flex items-center gap-3 border border-[#171714]/20 px-5 py-3.5 text-sm font-medium text-[#171714]/80 transition-colors duration-300 hover:border-[#171714]/50 hover:bg-[#171714]/[0.04] hover:text-[#171714] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a36d45]"
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


                        {/* Project capabilities panel */}
                        <div className="w-full max-w-xl lg:ml-auto">
                            <div className="border-y border-[#171714]/15 py-6">
                                <p className="text-xs uppercase tracking-[0.2em] text-[#171714]/45">
                                    Project capabilities
                                </p>

                                <h3 className="mt-4 text-2xl font-medium tracking-tight sm:text-3xl">
                                    More than a chatbot.
                                </h3>

                                <p className="mt-3 max-w-md text-sm leading-6 text-[#171714]/60">
                                    An end-to-end AI engineering project combining retrieval,
                                    contextual reasoning, integrations and application security.
                                </p>
                            </div>

                            <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-1">
                                {features.map((feature) => (
                                    <article
                                        key={feature.number}
                                        className="group border-b border-[#171714]/15 py-5 transition-colors duration-300 hover:bg-[#E8E6E0]/60"
                                    >
                                        <div className="flex items-start gap-4 px-3">
                                            <span className="pt-1 text-xs tabular-nums text-[#171714]/45">
                                                {feature.number}
                                            </span>

                                            <div className="min-w-0 flex-1">
                                                <h4 className="text-base font-medium text-[#171714] transition-colors duration-300 group-hover:text-[#171714]/65">
                                                    {feature.title}
                                                </h4>

                                                <p className="mt-2 text-sm leading-6 text-[#171714]/60">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PrabhatAI