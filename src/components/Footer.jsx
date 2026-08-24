function Footer() {
    return (
        <footer className="border-t border-white/10 px-6 py-8 md:px-10">
            <div className="flex flex-col gap-5 text-xs uppercase tracking-[0.15em] text-white/30 md:flex-row md:items-center md:justify-between">

                <p>
                    © {new Date().getFullYear()} Prabhat Jaidiya
                </p>

                <p>
                    Designed & Built with React
                </p>

                <a
                    href="#home"
                    className="transition-colors hover:text-white"
                >
                    Back to top ↑
                </a>

            </div>
        </footer>
    )
}

export default Footer