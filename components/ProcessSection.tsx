'use client';

import { motion } from 'framer-motion';

const steps = ['Discovery', 'Planning', 'Design', 'Development', 'Testing', 'Launch', 'Support'];

export default function ProcessSection() {
  return (
    <section id="process" className="border-t border-white/10 bg-[#060a18] py-24">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-secondary">Our process</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">A seamless journey from idea to growth.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Every phase is optimized for speed, clarity, and measurable output. Our process keeps teams aligned and delivery predictable.
          </p>
        </div>

        <div className="relative mt-16 overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-8 shadow-[0_40px_100px_rgba(0,0,0,0.18)] backdrop-blur-xl">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-secondary/70 to-transparent" />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-7">
            {steps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: 'easeOut' }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-[#050816]/90 text-xl font-semibold text-white shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
                  {index + 1}
                </div>
                <div className="mt-4 text-sm uppercase tracking-[0.35em] text-secondary/80">{step}</div>
                {index < steps.length - 1 && (
                  <div className="absolute bottom-[-18px] left-1/2 h-12 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-secondary/40 to-transparent sm:hidden" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
