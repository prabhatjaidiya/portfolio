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
                        {['Minimal Tee', 'Daily Pack', 'Studio Chair', 'Classic Watch'].map(
                            (product, index) => (
                                <div
                                    key={product}
                                    className="flex flex-col justify-end rounded bg-white/[0.04] p-3"
                                >
                                    <div className="mb-3 flex flex-1 items-center justify-center rounded bg-white/[0.04]">
                                        <span className="text-[9px] text-white/10">
                                            PRODUCT 0{index + 1}
                                        </span>
                                    </div>

                                    <p className="text-[10px] text-white/60">
                                        {product}
                                    </p>

                                    <p className="mt-1 text-[10px] text-white/30">
                                        $129
                                    </p>
                                </div>
                            )
                        )}
                    </div>

                </div>
            </div>
        )
    }

    if (type === 'collaboration') {
        return (
            <div className="h-full w-full bg-[#111] p-6 md:p-10">
                <div className="flex h-full overflow-hidden rounded border border-white/10 bg-[#080808]">

                    <aside className="hidden w-1/4 border-r border-white/10 p-5 md:block">
                        <p className="text-xs font-medium">
                            WORKSPACE
                        </p>

                        <div className="mt-6 space-y-3">
                            <div className="text-[10px] text-white/60">
                                General
                            </div>

                            <div className="text-[10px] text-white/30">
                                Design Team
                            </div>

                            <div className="text-[10px] text-white/30">
                                Development
                            </div>

                            <div className="text-[10px] text-white/30">
                                Marketing
                            </div>
                        </div>
                    </aside>

                    <main className="flex flex-1 flex-col">

                        <div className="border-b border-white/10 p-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-[9px] uppercase tracking-widest text-white/30">
                                        Project
                                    </p>

                                    <h4 className="mt-1 text-sm font-medium">
                                        Portfolio Launch
                                    </h4>
                                </div>

                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((user) => (
                                        <span
                                            key={user}
                                            className="flex h-7 w-7 items-center justify-center rounded-full border border-[#080808] bg-white/[0.08] text-[8px] text-white/40"
                                        >
                                            {user}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="grid flex-1 grid-cols-2 gap-3 p-5 md:grid-cols-3">
                            {[
                                ['Planning', '03'],
                                ['In Progress', '05'],
                                ['Completed', '08'],
                            ].map(([title, count]) => (
                                <div
                                    key={title}
                                    className="rounded border border-white/10 bg-white/[0.02] p-3"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-[9px] uppercase tracking-widest text-white/30">
                                            {title}
                                        </span>

                                        <span className="text-[9px] text-white/20">
                                            {count}
                                        </span>
                                    </div>

                                    <div className="mt-4 space-y-2">
                                        {[1, 2].map((task) => (
                                            <div
                                                key={task}
                                                className="rounded border border-white/10 p-3"
                                            >
                                                <div className="h-1.5 w-3/4 rounded bg-white/10" />
                                                <div className="mt-2 h-1.5 w-1/2 rounded bg-white/5" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </main>

                </div>
            </div>
        )
    }

    if (type === 'chat') {
        return (
            <div className="h-full w-full bg-[#101010] p-6 md:p-10">
                <div className="mx-auto flex h-full max-w-4xl overflow-hidden rounded border border-white/10 bg-[#080808]">

                    <aside className="hidden w-1/3 border-r border-white/10 md:block">
                        <div className="border-b border-white/10 p-5">
                            <span className="text-sm font-medium">
                                CHAT.
                            </span>
                        </div>

                        <div className="space-y-1 p-3">
                            {[
                                ['Alex Morgan', 'Are we ready to ship?'],
                                ['Development Team', 'New update deployed'],
                                ['Sarah Wilson', 'See you tomorrow'],
                            ].map(([name, message], index) => (
                                <div
                                    key={name}
                                    className={`rounded p-3 ${index === 0
                                        ? 'bg-white/[0.06]'
                                        : ''
                                        }`}
                                >
                                    <p className="text-[10px] text-white/60">
                                        {name}
                                    </p>

                                    <p className="mt-1 truncate text-[9px] text-white/25">
                                        {message}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </aside>

                    <main className="flex flex-1 flex-col">

                        <div className="border-b border-white/10 p-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-medium">
                                        Alex Morgan
                                    </p>

                                    <p className="mt-1 text-[9px] text-white/30">
                                        ● Online
                                    </p>
                                </div>

                                <span className="text-[9px] uppercase tracking-widest text-white/20">
                                    Online
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-1 flex-col justify-end gap-3 p-5">
                            <div className="max-w-[70%] rounded border border-white/10 p-3">
                                <p className="text-[9px] text-white/50">
                                    Hey! How is the project going?
                                </p>
                            </div>

                            <div className="ml-auto max-w-[70%] rounded bg-white/[0.08] p-3">
                                <p className="text-[9px] text-white/60">
                                    Almost finished. I'll send you an update soon.
                                </p>
                            </div>

                            <div className="max-w-[70%] rounded border border-white/10 p-3">
                                <p className="text-[9px] text-white/50">
                                    Perfect. Looking forward to it!
                                </p>
                            </div>
                        </div>

                        <div className="border-t border-white/10 p-4">
                            <div className="rounded border border-white/10 px-4 py-3">
                                <span className="text-[9px] text-white/20">
                                    Type a message...
                                </span>
                            </div>
                        </div>

                    </main>

                </div>
            </div>
        )
    }

    return null
}

export default ProjectPreview