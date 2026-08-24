function ProjectPreview({ type }) {
    if (type === 'ecommerce') {
        return (
            <div className="h-full w-full bg-[#111] p-6 md:p-10">
                <div className="h-full rounded border border-white/10 bg-[#0a0a0a] p-5">

                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                        <span className="text-sm font-medium">
                            STORE.
                        </span>

                        <div className="hidden gap-5 text-[10px] uppercase tracking-widest text-white/40 sm:flex">
                            <span>Shop</span>
                            <span>Collections</span>
                            <span>About</span>
                        </div>

                        <span className="text-xs text-white/50">
                            Cart (0)
                        </span>
                    </div>

                    <div className="grid h-[calc(100%-65px)] grid-cols-2 gap-3 pt-5 md:grid-cols-4">
                        {[1, 2, 3, 4].map((item) => (
                            <div
                                key={item}
                                className="flex flex-col justify-end rounded bg-white/[0.04] p-3"
                            >
                                <div className="mb-3 flex-1 rounded bg-white/[0.04]" />

                                <p className="text-[10px] text-white/60">
                                    Product {item}
                                </p>

                                <p className="mt-1 text-[10px] text-white/30">
                                    $129
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        )
    }

    if (type === 'todo') {
        return (
            <div className="h-full w-full bg-[#101010] p-6 md:p-10">
                <div className="mx-auto h-full max-w-3xl rounded border border-white/10 bg-[#0a0a0a] p-5 md:p-8">

                    <div className="flex items-center justify-between border-b border-white/10 pb-5">
                        <div>
                            <p className="text-xs uppercase tracking-widest text-white/30">
                                Workspace
                            </p>

                            <h4 className="mt-2 text-xl font-medium">
                                My Tasks
                            </h4>
                        </div>

                        <span className="rounded border border-white/10 px-3 py-2 text-[10px] text-white/40">
                            + Add Task
                        </span>
                    </div>

                    <div className="mt-6 space-y-3">
                        {[
                            'Build portfolio',
                            'Finish weather app',
                            'Practice React',
                            'Learn Node.js',
                        ].map((task, index) => (
                            <div
                                key={task}
                                className="flex items-center gap-3 border border-white/10 p-4"
                            >
                                <span
                                    className={`h-3 w-3 rounded-full border ${index === 0
                                            ? 'border-white bg-white'
                                            : 'border-white/20'
                                        }`}
                                />

                                <span
                                    className={
                                        index === 0
                                            ? 'text-sm text-white/30 line-through'
                                            : 'text-sm text-white/60'
                                    }
                                >
                                    {task}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        )
    }

    if (type === 'movie') {
        return (
            <div className="h-full w-full bg-[#111] p-6 md:p-10">
                <div className="h-full rounded border border-white/10 bg-[#080808] p-5 md:p-8">

                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">
                            MOVIE.
                        </span>

                        <div className="flex w-1/2 items-center rounded border border-white/10 px-4 py-2">
                            <span className="text-[10px] text-white/30">
                                Search movies...
                            </span>
                        </div>
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
                        {[
                            'INTERSTELLAR',
                            'INCEPTION',
                            'DUNE',
                            'BATMAN',
                        ].map((movie) => (
                            <div
                                key={movie}
                                className="group flex aspect-[2/3] flex-col justify-end rounded bg-white/[0.04] p-3"
                            >
                                <div className="flex-1" />

                                <p className="text-[9px] tracking-wider text-white/60">
                                    {movie}
                                </p>

                                <p className="mt-1 text-[8px] text-white/30">
                                    Movie
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        )
    }

    return null
}

export default ProjectPreview