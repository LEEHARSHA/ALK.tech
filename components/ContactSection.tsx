'use client';

import { motion } from 'framer-motion';
import { FiFacebook, FiInstagram, FiMail, FiPhone } from 'react-icons/fi';

const contactDetails = [
  {
    label: 'Contact Number',
    value: '8555948055',
    href: 'tel:+918555948055',
    icon: FiPhone,
  },
  {
    label: 'Email',
    value: 'apexlk848@gmail.com',
    href: 'mailto:apexlk848@gmail.com',
    icon: FiMail,
  },
];

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/apexlk.tech/?hl=en',
    icon: FiInstagram,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61591336542899&rdid=iMlBVIpc9tjNBNgX&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Ad1ZSLNeA%2F#',
    icon: FiFacebook,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-white/10 bg-[#060a16] py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-secondary">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Reach out directly for your next digital project.</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="mx-auto grid max-w-5xl gap-6 rounded-[40px] border border-white/10 bg-white/5 p-8 shadow-[0_50px_140px_rgba(0,0,0,0.24)] backdrop-blur-xl lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="flex flex-col gap-4">
            {contactDetails.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 rounded-[28px] border border-white/10 bg-[#050816]/70 p-5 text-left transition duration-300 hover:-translate-y-0.5 hover:border-secondary/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-lg text-secondary">
                    <Icon />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-secondary">{item.label}</p>
                    <p className="mt-1 text-lg font-semibold text-white">{item.value}</p>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="rounded-[32px] border border-white/10 bg-[#050816]/70 p-6">
            <p className="text-sm uppercase tracking-[0.35em] text-secondary">Social Media</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 transition duration-300 hover:border-secondary hover:text-white"
                  >
                    <Icon />
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
