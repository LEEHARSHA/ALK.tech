'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiInstagram, FiLinkedin, FiFacebook, FiMail, FiPhone } from 'react-icons/fi';

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/alk-solutions' },
  { label: 'Instagram', href: 'https://www.instagram.com/alksolutions' },
  { label: 'Facebook', href: 'https://www.facebook.com/alksolutions' },
  { label: 'GitHub', href: 'https://github.com/alk-solutions' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#050816]/90 py-14 text-sm text-slate-300">
      <div className="container mx-auto px-6">
        <div className="mb-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] xl:grid-cols-[1fr_0.7fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-secondary">Apex LK.Tech</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Experience premium engineering.</h2>
            <p className="mt-5 max-w-2xl leading-7 text-slate-400">
              Immersive products, scalable systems, and bespoke digital experiences for ambitious teams that demand exceptional delivery.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.12, ease: 'easeOut' }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <div>
              <p className="mb-3 font-semibold text-white">Contact</p>
              <a href="mailto:hello@alk-tech.com" className="inline-flex items-center gap-2 text-slate-300 transition hover:text-white">
                <FiMail /> hello@alk-tech.com
              </a>
              <a href="tel:+91XXXXXXXXXX" className="mt-3 inline-flex items-center gap-2 text-slate-300 transition hover:text-white">
                <FiPhone /> +91 XXXXXXXXXX
              </a>
            </div>
            <div>
              <p className="mb-3 font-semibold text-white">Follow</p>
              <div className="flex flex-wrap gap-3">
                {links.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-slate-300 transition hover:border-primary/40 hover:bg-primary/10 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-slate-500 sm:flex sm:items-center sm:justify-between">
          <p>© 2026 Apex LK.Tech. Crafted for modern digital transformation.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 sm:mt-0">
            <a href="/privacy" className="transition hover:text-white">Privacy Policy</a>
            <a href="/terms" className="transition hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
