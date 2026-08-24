import { motion } from 'motion/react'

const journey = [
    {
        year: '2026',
        title: 'Frontend Development',
        description:
            'Building responsive and interactive web experiences using React, JavaScript, Tailwind CSS and modern frontend practices.',
    },
    {
        year: '2026',
        title: 'Project Development',
        description:
            'Developing practical projects including a weather application, e-commerce interface, todo application and movie search application.',
    },
    {
        year: 'CURRENTLY',
        title: 'Expanding Into Full Stack',
        description:
            'Learning Node.js, Express, databases and backend development to move toward full-stack application development.',
    },
]

function Experience() {
    return (
        <section
            id="experience"
            className="border-t border-white/10 px-6 py-32 md:px-10 md:py-48"
        >
            {/* Heading */}
            <div className="mb-24">
                <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">
                    03 — Experience
                </p>

                <div className="h-px w-full bg-white/10" />
            </div>

            {/* Journey */}
            <div>
                {journey.map((item, index) => (
                    <motion.article
                        key={item.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            duration: 0.7,
                            delay: index * 0.1,
                        }}
                        className="grid gap-6 border-b border-white/10 py-10 md:grid-cols-12 md:gap-10"
                    >
                        {/* Year */}
                        <div className="md:col-span-2">
                            <span className="text-xs uppercase tracking-[0.2em] text-white/30">
                                {item.year}
                            </span>
                        </div>

                        {/* Title */}
                        <div className="md:col-span-4">
                            <h3 className="text-2xl font-medium tracking-tight md:text-4xl">
                                {item.title}
                            </h3>
                        </div>

                        {/* Description */}
                        <div className="md:col-span-5 md:col-start-8">
                            <p className="max-w-lg text-sm leading-7 text-white/40 md:text-base">
                                {item.description}
                            </p>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    )
}

export default Experience