'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface CounterItem {
  label: string;
  value: number;
  suffix?: string;
}

const counters: CounterItem[] = [
  { label: 'Projects Completed', value: 182 },
  { label: 'Happy Clients', value: 74 },
  { label: 'Countries Served', value: 22 },
  { label: 'Years of Experience', value: 11, suffix: '+' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const start = performance.now();
          const duration = 1400;
          const step = (timestamp: number) => {
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * value));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-4xl font-semibold text-white sm:text-5xl">
      {count.toLocaleString()}
      {suffix && <span className="text-primary">{suffix}</span>}
    </div>
  );
}

export default function TrustSection() {
  return (
    <section id="trust" className="border-t border-white/10 bg-[#050816] py-24">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto mb-12 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-secondary">Trust & performance</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Why clients choose our engineering excellence.</h2>
          <p className="mt-4 text-slate-400">
            Real results, measurable growth, and technology built to scale with precision. Every system is designed for speed, reliability and an elevated experience.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {counters.map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.18)] backdrop-blur-xl"
            >
              <AnimatedCounter value={item.value} suffix={item.suffix} />
              <p className="mt-4 text-sm uppercase tracking-[0.35em] text-slate-400">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
