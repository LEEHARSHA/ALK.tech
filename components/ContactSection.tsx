'use client';

import { motion } from 'framer-motion';

const services = ['Website Development', 'Android App', 'SEO', 'AI Chatbot', 'UI/UX', 'Automation', 'Other'];

export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-white/10 bg-[#060a16] py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-secondary">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Let&apos;s begin the next premium chapter for your business.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Share your goals and we&apos;ll craft a modern solution with AI-first technology, performance, and polished interactions.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="mx-auto grid max-w-5xl gap-8 rounded-[40px] border border-white/10 bg-white/5 p-8 shadow-[0_50px_140px_rgba(0,0,0,0.24)] backdrop-blur-xl"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-white">Name</span>
              <input className="mt-3 w-full rounded-3xl border border-white/10 bg-[#050816]/80 px-4 py-4 text-white outline-none transition focus:border-primary" type="text" placeholder="Your name" required />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-white">Email</span>
              <input className="mt-3 w-full rounded-3xl border border-white/10 bg-[#050816]/80 px-4 py-4 text-white outline-none transition focus:border-primary" type="email" placeholder="you@company.com" required />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-white">Phone</span>
              <input className="mt-3 w-full rounded-3xl border border-white/10 bg-[#050816]/80 px-4 py-4 text-white outline-none transition focus:border-primary" type="tel" placeholder="+91 98765 43210" required />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-white">Business Name</span>
              <input className="mt-3 w-full rounded-3xl border border-white/10 bg-[#050816]/80 px-4 py-4 text-white outline-none transition focus:border-primary" type="text" placeholder="Company name" />
            </label>
            <label className="block lg:col-span-2">
              <span className="text-sm font-semibold text-white">Required Service</span>
              <select className="mt-3 w-full rounded-3xl border border-white/10 bg-[#050816]/80 px-4 py-4 text-white outline-none transition focus:border-primary" required>
                <option value="">Select service</option>
                {services.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </label>
            <label className="block lg:col-span-2">
              <span className="text-sm font-semibold text-white">Message</span>
              <textarea className="mt-3 h-36 w-full rounded-[28px] border border-white/10 bg-[#050816]/80 px-4 py-4 text-white outline-none transition focus:border-primary" placeholder="Tell us about your project..." required />
            </label>
          </div>
          <button className="inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-black shadow-[0_25px_80px_rgba(108,99,255,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-white/90">
            Send Request
          </button>
        </motion.form>
      </div>
    </section>
  );
}
