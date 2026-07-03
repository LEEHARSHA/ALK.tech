'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const faqs = [
  {
    question: 'How quickly can we start a new project?',
    answer: 'We typically begin discovery within 1–2 weeks and can move into development rapidly once the scope is defined.',
  },
  {
    question: 'Do you support post-launch maintenance?',
    answer: 'Yes. We offer ongoing support, updates, and monitoring packages so products remain secure and high performing.',
  },
  {
    question: 'Can you integrate AI into existing systems?',
    answer: 'Absolutely. We deliver tailored AI solutions that enhance workflows, automate processes, and elevate customer experiences.',
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="faq" className="border-t border-white/10 bg-[#050816] py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-secondary">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Questions about our approach and process.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Clear answers, transparent delivery, and a collaborative partnership for ambitious product work.
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((item, index) => {
            const isOpen = index === active;
            return (
              <motion.button
                key={item.question}
                onClick={() => setActive(isOpen ? -1 : index)}
                className="w-full rounded-[32px] border border-white/10 bg-white/5 p-6 text-left shadow-[0_40px_90px_rgba(0,0,0,0.18)] backdrop-blur-xl"
                initial={false}
                animate={{ backgroundColor: isOpen ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.05)' }}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-lg font-semibold text-white">{item.question}</span>
                  <FiChevronDown className={`h-5 w-5 text-secondary transition ${isOpen ? 'rotate-180' : ''}`} />
                </div>
                {isOpen && <p className="mt-4 text-slate-300">{item.answer}</p>}
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
