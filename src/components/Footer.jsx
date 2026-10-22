function Footer() {
    return (
        <footer className="border-t border-[#171714]/15 bg-[#F5F4F0] px-5 py-8 text-[#171714] sm:px-6 md:px-10">
            <div className="mx-auto max-w-[1600px]">
                <div className="flex flex-col gap-8 md:gap-6">
                    {/* Top row */}
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        {/* Identity */}
                        <div className="flex items-center gap-4">
                            <a
                                href="#home"
                                className="text-sm font-medium tracking-[0.2em] transition-opacity duration-300 hover:opacity-50"
                            >
                                PJ.
                            </a>

                            <span className="h-px w-8 bg-[#171714]/20" />

                            <p className="text-[10px] uppercase tracking-[0.2em] text-[#171714]/50">
                                Full-Stack Developer
                            </p>
                        </div>

                        {/* Availability */}
                        <div className="flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full border border-[#171714]/50" />

                            <span className="text-[10px] uppercase tracking-[0.15em] text-[#171714]/50 sm:tracking-[0.2em]">
                                Open to Full-Stack Opportunities
                            </span>
                        </div>
                    </div>

                    {/* Bottom row */}
                    <div className="flex flex-col gap-4 border-t border-[#171714]/15 pt-5 text-[10px] uppercase tracking-[0.15em] text-[#171714]/45 sm:flex-row sm:items-center sm:justify-between sm:tracking-[0.18em]">
                        <p>
                            © {new Date().getFullYear()} Prabhat Jaidiya
                        </p>

                        <p>
                            Designed & Built with React
                        </p>

                        <a
                            href="#home"
                            className="group flex w-fit items-center gap-2 transition-colors duration-300 hover:text-[#171714]"
                        >
                            Back to top

                            <span className="transition-transform duration-300 group-hover:-translate-y-1">
                                ↑
                            </span>
                        </a>
                    </div>

                    {/* Closing statement */}
                    <div className="border-t border-[#171714]/10 pt-6">
                        <p className="text-[9px] uppercase tracking-[0.25em] text-[#171714]/35">
                            Building thoughtful digital experiences.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer