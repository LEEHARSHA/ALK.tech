'use client';

import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section id="cta" className="relative overflow-hidden border-t border-white/10 bg-[#050816] py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="rounded-[40px] border border-white/10 bg-gradient-to-br from-white/5 via-white/10 to-transparent p-12 shadow-[0_60px_140px_rgba(0,0,0,0.24)] backdrop-blur-xl"
        >
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-secondary">Final CTA</p>
              <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Ready to Transform Your Business?</h2>
              <p className="mt-5 max-w-2xl text-slate-300">
                Partner with a team that builds intelligent digital experiences designed for growth, reliability, and a premium user journey.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:items-end">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-black shadow-[0_25px_80px_rgba(108,99,255,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-white/90"
              >
                Let&apos;s Build Together
              </a>
              <a
                href="mailto:hello@alk-tech.com"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:border-secondary hover:text-secondary"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
