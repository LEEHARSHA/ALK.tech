'use client';

import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiSearch, FiLayout, FiCpu, FiSettings, FiCloud, FiShield } from 'react-icons/fi';

const services = [
  {
    title: 'Website Development',
    description: 'Pixel-perfect frontends and robust backends engineered for conversion.',
    icon: FiCode,
  },
  {
    title: 'Android App Development',
    description: 'High-performance native experiences for premium mobile audiences.',
    icon: FiSmartphone,
  },
  {
    title: 'SEO Optimization',
    description: 'Technical SEO and performance tuning for discovery and growth.',
    icon: FiSearch,
  },
  {
    title: 'UI/UX Design',
    description: 'Luxury interfaces with intuitive journeys and unforgettable polish.',
    icon: FiLayout,
  },
  {
    title: 'AI Chatbots',
    description: 'Conversational intelligence that improves engagement and automates support.',
    icon: FiCpu,
  },
  {
    title: 'Business Automation',
    description: 'Workflow automation to reduce time, eliminate friction, and scale operations.',
    icon: FiSettings,
  },
  {
    title: 'API Integrations',
    description: 'Secure connected systems designed to accelerate product velocity.',
    icon: FiCloud,
  },
  {
    title: 'Cloud Deployment',
    description: 'Cost-efficient infrastructure with automated deployments and monitoring.',
    icon: FiShield,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden border-t border-white/10 bg-[#060b1a] py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-secondary">Services</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Every service built with clarity, performance, and craftsmanship.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            From digital products to automation, each offering is crafted to deliver measurable impact and a premium user experience.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                whileHover={{ y: -10, scale: 1.01 }}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.06, ease: 'easeOut' }}
                className="group rounded-[36px] border border-white/10 bg-[rgba(255,255,255,0.04)] p-8 shadow-[0_40px_90px_rgba(0,0,0,0.16)] backdrop-blur-xl"
              >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-white/5 text-primary shadow-[0_20px_50px_rgba(108,99,255,0.18)] transition duration-300 group-hover:bg-primary/15">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-slate-300">{service.description}</p>
                <button className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition group-hover:text-white">
                  Learn More
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
