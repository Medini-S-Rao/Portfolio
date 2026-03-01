"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-darker">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
            Let's Connect
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Open to part-time, contract, and remote opportunities. Let's build
            something amazing together!
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
            <motion.a
              href="mailto:medini98765@gmail.com"
              className="px-8 py-3 bg-gradient-accent text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-accent transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>✉️</span> Email Me
            </motion.a>
            <motion.a
              href="tel:+919110855168"
              className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-accent hover:text-white transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>📞</span> +91 9110855168
            </motion.a>
          </div>

          <motion.div
            className="bg-slate-900 border border-accent border-opacity-20 rounded-lg p-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Connect On Social
            </h3>
            <div className="flex gap-4 justify-center flex-wrap">
              {[
                { logo: "/linkedin.png", name: "LinkedIn", url: "https://www.linkedin.com/in/medini908/" },
                { logo: "/git.png", name: "GitHub", url: "https://github.com/Medini-S-Rao" },
                { logo: "/leet.png", name: "LeetCode", url: "https://leetcode.com/u/medini_s/" },
              ].map((social, i) => (
                <motion.div key={i} className="flex flex-col items-center gap-2">
                  <motion.a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 flex items-center justify-center bg-slate-800 rounded-lg border border-accent border-opacity-20 hover:border-accent hover:bg-accent hover:bg-opacity-10 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Image
                      src={social.logo}
                      alt={social.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain"
                    />
                  </motion.a>
                  <span className="text-xs text-gray-400">{social.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
