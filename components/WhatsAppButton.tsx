'use client';

import { motion } from 'framer-motion';
import { FiMessageCircle } from 'react-icons/fi';

const WA_LINK = 'https://wa.me/91XXXXXXXXXX?text=Hello%20Apex%20LK.Tech%2C%0AI%20am%20interested%20in%20your%20services.';

export default function WhatsAppButton() {
  return (
    <motion.a
      href={WA_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Apex LK.Tech on WhatsApp"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white shadow-glow backdrop-blur-xl transition-all duration-300 hover:bg-white/15"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary shadow-[0_0_30px_rgba(108,99,255,0.16)]">
        <FiMessageCircle className="h-5 w-5" />
      </span>
      <span className="font-medium text-white">Click to Chat on WhatsApp</span>
    </motion.a>
  );
}
