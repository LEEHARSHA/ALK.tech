'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const items = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      className={`fixed left-0 right-0 z-40 mx-auto w-full border-b border-white/10 transition duration-300 ${scrolled ? 'bg-[#050816]/90 backdrop-blur-2xl' : 'bg-transparent'}`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4 sm:px-10">
        <a href="#home" className="text-lg font-semibold tracking-[0.1em] text-white">
          ALK Solutions
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {items.map((item) => (
            <a key={item.href} href={item.href} className="text-sm uppercase tracking-[0.25em] text-slate-300 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
