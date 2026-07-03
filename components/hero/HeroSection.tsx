'use client';

import { motion } from 'framer-motion';
import HeroScene from './HeroScene';
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-6 py-12 sm:px-10 lg:px-14">
      <HeroScene />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(108,99,255,0.12),_transparent_28%),radial-gradient(circle_at_15%_10%,_rgba(0,245,212,0.18),_transparent_20%),linear-gradient(180deg,_rgba(5,8,22,0.6),_rgba(5,8,22,0.96))] pointer-events-none" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 pt-20 text-white">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="flex flex-col gap-6 lg:max-w-3xl"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-secondary shadow-soft backdrop-blur-xl">
            Premium software engineering for ambitious brands
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Building the Future of Digital Business.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            We create premium websites, Android applications, AI solutions, SEO strategies, UI/UX experiences, and business automation that help companies grow.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-black shadow-[0_18px_80px_rgba(108,99,255,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90"
            >
              Get Free Consultation
              <FiArrowRight className="ml-3 h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:border-secondary hover:bg-white/10"
            >
              View Portfolio
            </a>
          </div>
        </motion.div>

        <div className="mt-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { title: 'AI Powered', value: 'Future ready systems' },
              { title: 'Scalable', value: 'Enterprise architecture' },
              { title: 'Elegant', value: 'Premium digital design' },
              { title: 'Optimized', value: 'Performance first' },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.75, ease: 'easeOut' }}
                className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.16)] backdrop-blur-xl"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{item.title}</p>
                <p className="mt-3 text-lg font-semibold text-white">{item.value}</p>
              </motion.div>
            ))}
          </div>

          <a
            href="#services"
            className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:border-secondary hover:bg-white/10"
          >
            Scroll to discover
            <FiChevronDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
