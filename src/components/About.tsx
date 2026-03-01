"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-darker">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-accent bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate AI/ML engineer specializing in computer vision
                and deep learning for autonomous and healthcare systems.
                Currently pursuing B.Tech in IT at Manipal Institute of
                Technology (CGPA: 8.4).
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                With hands-on experience at GE Healthcare and Drones Tech Lab, I
                excel at building real-time perception pipelines, full-stack
                research platforms, and edge AI solutions.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                IEEE published researcher with a focus on integrating
                cutting-edge deep learning techniques into production systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="bg-slate-900 p-6 rounded-lg border border-accent border-opacity-20">
                <h3 className="text-xl font-bold text-accent mb-4">
                  Key Highlights
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-light mt-1">▹</span>
                    <span>
                      Published in IEEE Access (96.3% training accuracy on UAV
                      human detection)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-light mt-1">▹</span>
                    <span>
                      Ranked 2nd at Aerothon 2024 (Spectre UAV Project)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-light mt-1">▹</span>
                    <span>
                      Optimized CI/CD pipelines reducing test feedback by 30%
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-light mt-1">▹</span>
                    <span>
                      Built medical imaging platform used in healthcare research
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
