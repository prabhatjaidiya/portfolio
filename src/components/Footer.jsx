function Footer() {
    return (
        <footer className="border-t border-white/10 px-6 py-8 md:px-10">

            <div className="flex flex-col gap-8 md:gap-5">

                {/* Top row */}
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                    {/* Identity */}
                    <div className="flex items-center gap-4">

                        <a
                            href="#home"
                            className="text-sm font-medium tracking-[0.2em] text-white transition-opacity duration-300 hover:opacity-60"
                        >
                            PJ.
                        </a>

                        <span className="h-px w-8 bg-white/10" />

                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                            Frontend Developer
                        </p>

                    </div>


                    {/* Availability */}
                    <div className="flex items-center gap-3">

                        <span className="relative flex h-2 w-2">
                            <span className="absolute inset-0 animate-ping rounded-full bg-[#22c55e] opacity-60" />

                            <span className="relative h-2 w-2 rounded-full bg-[#22c55e]" />
                        </span>

                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                            Available for opportunities
                        </span>

                    </div>

                </div>


                {/* Bottom row */}
                <div className="flex flex-col gap-4 border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.15em] text-white/25 sm:flex-row sm:items-center sm:justify-between">

                    <p>
                        © {new Date().getFullYear()} Prabhat Jaidiya
                    </p>

                    <p>
                        Designed & Built with React
                    </p>

                    <a
                        href="#home"
                        className="group flex items-center gap-2 transition-colors duration-300 hover:text-white"
                    >
                        Back to top

                        <span className="transition-transform duration-300 group-hover:-translate-y-1">
                            ↑
                        </span>
                    </a>

                </div>


                {/* Closing statement */}
                <div className="pt-8">

                    <p className="text-[9px] uppercase tracking-[0.25em] text-white/15">
                        Building thoughtful digital experiences.
                    </p>

                </div>

            </div>

        </footer>
    )
}

export default Footer