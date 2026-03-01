"use client";

import { motion } from "framer-motion";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-darker border-t border-slate-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
              Medini S Rao
            </h3>
            <p className="text-gray-400 text-sm">
              AI/ML Engineer | Computer Vision Specialist | Autonomous Systems
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <div className="flex flex-wrap gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-accent-light transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <p className="text-gray-400 text-sm mb-2">
              📧 medini98765@gmail.com
            </p>
            <p className="text-gray-400 text-sm">📞 +91 9110855168</p>
          </motion.div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Medini S Rao. Crafted with React,
            Next.js, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
