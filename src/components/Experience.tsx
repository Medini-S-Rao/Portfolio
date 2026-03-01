"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    role: "EID Intern",
    company: "GE Healthcare",
    period: "Jan 2026 - Present",
    achievements: [
      "Optimized MRI Machine parameters using Reinforcement Learning to reduce scan time and improve SNR",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    role: "Junior Software Engineer (Contract)",
    company: "Drones Tech Lab",
    period: "Aug 2025 - Dec 2025",
    achievements: [
      "Engineered AI-based co-pilot system for autonomous object detection using YOLOv8n and SORT",
      "Fine-tuned YOLOv8n on drone-specific visual data with mAP@50 evaluation",
      "Integrated perception pipeline with PyMAVLink telemetry for real-time onboard decision support",
    ],
    color: "from-purple-500 to-purple-600",
  },
  {
    role: "EID Intern",
    company: "GE HealthCare",
    period: "May 2025 - Present",
    achievements: [
      "Automated CI/CD and Continuous Testing pipelines using Jenkins and Git, reducing test feedback cycles by 30%",
      "Migrated legacy Tcl-based tooling to Python, improving observability and reducing MTTR by 50%",
    ],
    color: "from-green-500 to-green-600",
  },
  {
    role: "R&D Intern",
    company: "Drones Tech Lab",
    period: "Mar 2025 - May 2025",
    achievements: [
      "Built real-time flight telemetry prediction API using FastAPI supporting 100+ mission parameters",
      "Developed cross-platform Electron.js visualization tool reducing manual analysis time by 40%",
    ],
    color: "from-orange-500 to-orange-600",
  },
  {
    role: "Senior Member, Autonomous Drone Research",
    company: "AeroMIT",
    period: "Mar 2023 - Aug 2025",
    achievements: [
      "Engineered YOLOv8-based computer vision pipelines achieving ~85% detection accuracy",
      "Implemented vision-based tracking and path planning using OpenCV, ROS, and MAVROS",
    ],
    color: "from-red-500 to-red-600",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-gradient-dark">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-accent bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-accent-light"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div
                  className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                >
                  <motion.div
                    className="bg-slate-900 p-6 rounded-lg border border-opacity-20 border-accent"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 20px 40px rgba(217, 70, 239, 0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 bg-gradient-to-r ${exp.color} text-white`}
                    >
                      {exp.period}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-accent-light font-semibold mb-3">
                      {exp.company}
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-gray-300 text-sm flex items-start gap-2"
                        >
                          <span className="text-accent-light mt-1 flex-shrink-0">
                            →
                          </span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                <motion.div
                  className="md:w-auto flex justify-center my-6 md:my-0"
                  whileHover={{ scale: 1.2 }}
                >
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-darker shadow-lg"></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Competition Images */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-accent mb-6">🏆 AeroMIT Competitions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden border border-accent border-opacity-30 shadow-lg hover:shadow-xl hover:shadow-accent/20 transition-all duration-300">
              <div className="relative w-full h-64 bg-gradient-dark">
                <Image
                  src="/exp.jpg"
                  alt="AeroMIT Competition - Experience 1"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="bg-slate-900 border-t border-accent border-opacity-20 p-3">
                <p className="text-accent-light font-semibold text-sm">Vayurvah at NMAMIT</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border border-accent border-opacity-30 shadow-lg hover:shadow-xl hover:shadow-accent/20 transition-all duration-300">
              <div className="relative w-full h-64 bg-gradient-dark">
                <Image
                  src="/exp2.jpg"
                  alt="AeroMIT Competition - Experience 2"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="bg-slate-900 border-t border-accent border-opacity-20 p-3">
                <p className="text-accent-light font-semibold text-sm">Aerothon</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
