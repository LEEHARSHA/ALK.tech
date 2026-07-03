'use client';

import { motion } from 'framer-motion';

const advantages = [
  'Fast Delivery',
  'Premium UI/UX',
  'SEO Optimized',
  'Scalable Architecture',
  'AI Integration',
  'Affordable Pricing',
  'Latest Technologies',
  'Dedicated Support',
];

export default function WhyChooseSection() {
  return (
    <section id="why" className="relative border-t border-white/10 bg-[#050816] py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.18)] backdrop-blur-xl"
          >
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/20 to-transparent blur-3xl" />
            <div className="relative">
              <div className="mb-8 space-y-4">
                <p className="text-sm uppercase tracking-[0.35em] text-secondary">Why choose us</p>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">We design systems built for growth, speed, and future-proof reliability.</h2>
                <p className="max-w-xl text-slate-300">
                  Our team blends craftsmanship with AI-first engineering to deliver modern digital platforms that feel premium, fast, and consistent.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {advantages.slice(0, 4).map((item) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-[#0b1228]/90 p-5">
                    <p className="text-sm uppercase tracking-[0.35em] text-secondary/80">Advantage</p>
                    <p className="mt-3 text-lg font-semibold text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="grid gap-6"
          >
            <div className="group rounded-[40px] border border-white/10 bg-[rgba(255,255,255,0.05)] p-8 shadow-[0_40px_100px_rgba(0,0,0,0.2)] backdrop-blur-xl transition duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-secondary">Digitally immersive</p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">Design that feels alive.</h3>
                </div>
                <div className="h-16 w-16 rounded-3xl bg-gradient-to-br from-primary to-secondary shadow-[0_0_40px_rgba(108,99,255,0.24)]" />
              </div>
              <p className="mt-5 text-slate-300">
                Each interface is built with premium motion, comfortable interactions, and a polished structure that elevates brand perception.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {advantages.slice(4).map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-[#0a1024]/80 p-6 text-slate-300 shadow-[0_30px_60px_rgba(0,0,0,0.18)]">
                  <p className="text-sm uppercase tracking-[0.35em] text-secondary/80">Feature</p>
                  <p className="mt-3 text-lg font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
