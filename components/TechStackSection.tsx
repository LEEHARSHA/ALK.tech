'use client';

import { motion } from 'framer-motion';

const techs = ['React', 'Next.js', 'Node.js', 'MongoDB', 'Firebase', 'Docker', 'AWS', 'Tailwind', 'Three.js', 'TypeScript'];

export default function TechStackSection() {
  return (
    <section id="tech" className="border-t border-white/10 bg-[#050816] py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-secondary">Tech stack</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Built with modern tools designed for scale and speed.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            We combine powerful frameworks, cloud tooling, and emerging AI technologies to create future-proof digital products.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {techs.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: index * 0.05, ease: 'easeOut' }}
              className="rounded-[28px] border border-white/10 bg-white/5 p-5 text-center text-white shadow-[0_30px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-primary/40 hover:bg-white/10"
            >
              <span className="block text-2xl font-semibold text-white">{tech}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
