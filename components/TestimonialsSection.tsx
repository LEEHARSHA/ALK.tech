'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'ALK delivered a premium product faster than expected with flawless performance and polish.',
    author: 'Priya Sharma, Founder of Luma Health',
    role: 'CEO',
  },
  {
    quote: 'The AI automation they built transformed our customer journey and cut support time in half.',
    author: 'Rahul Verma, CTO of NovaCommerce',
    role: 'CTO',
  },
  {
    quote: 'Every interaction felt designed for trust and clarity. Their execution was exceptional.',
    author: 'Anika Patel, Head of Product at Atlas Finance',
    role: 'Product Lead',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="border-t border-white/10 bg-[#060a16] py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-secondary">Testimonials</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Trusted by visionary teams building the next wave of digital products.</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.08, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-[0_45px_120px_rgba(0,0,0,0.2)] backdrop-blur-xl"
            >
              <div className="absolute right-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_right,_rgba(108,99,255,0.16),_transparent_32%)] opacity-80" />
              <div className="relative z-10">
                <p className="text-xl leading-8 text-slate-200">“{item.quote}”</p>
                <p className="mt-8 text-sm uppercase tracking-[0.35em] text-secondary">{item.role}</p>
                <p className="mt-3 text-lg font-semibold text-white">{item.author}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
