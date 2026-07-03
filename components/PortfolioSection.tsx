'use client';

import { motion } from 'framer-motion';

const portfolio = [
  {
    title: 'SehatSetu',
    subtitle: 'AI Health Assistant',
    description:
      'An intelligent AI-powered healthcare assistant that helps users understand symptoms, receive health guidance, manage wellness information, and access smart healthcare support through an intuitive conversational interface.',
    technologies: ['Next.js', 'React', 'TypeScript', 'AI', 'Node.js', 'MongoDB'],
    category: 'AI Healthcare',
  },
  {
    title: 'Fitness Species',
    subtitle: 'Smart Fitness Ecosystem',
    description:
      'A complete fitness platform connecting trainers and clients with workout planning, nutrition tracking, AI assistance, progress monitoring, and personalized fitness management.',
    technologies: ['React Native', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'AI'],
    category: 'Fitness Technology',
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="border-t border-white/10 bg-[#050816] py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-secondary">Portfolio</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Interactive projects that blend design, motion, and engineering.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Explore select case studies that demonstrate our premium approach to digital product development.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {portfolio.map((item, index) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, delay: index * 0.1, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-white/5 via-white/3 to-transparent p-6 shadow-[0_45px_120px_rgba(0,0,0,0.2)] backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(108,99,255,0.15),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(0,245,212,0.12),_transparent_28%)]" />
              <div className="relative z-10 flex h-full flex-col justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-secondary">{item.category}</p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.3em] text-secondary">{item.subtitle}</p>
                  <p className="mt-4 text-slate-300">{item.description}</p>
                </div>
                <div className="mt-6">
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((technology) => (
                      <span key={technology} className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-400">
                        {technology}
                      </span>
                    ))}
                  </div>
                  <button className="mt-6 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white transition hover:border-secondary hover:text-secondary">
                    View project
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
