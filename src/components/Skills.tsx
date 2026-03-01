"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    name: "Machine Learning & CV",
    icon: "🧠",
    skills: [
      "Deep Learning",
      "CNNs",
      "YOLOv8",
      "EfficientNet",
      "SORT",
      "OpenCV",
    ],
  },
  {
    name: "Programming Languages",
    icon: "💻",
    skills: ["Python", "C++", "Java", "JavaScript", "TypeScript"],
  },
  {
    name: "AI Systems & Deployment",
    icon: "🚀",
    skills: ["ROS", "MAVROS", "PyMAVLink", "Real-time Inference", "Edge AI"],
  },
  {
    name: "Frameworks & APIs",
    icon: "⚙️",
    skills: ["FastAPI", "Flask", "Next.js", "React", "Electron.js"],
  },
  {
    name: "Medical Imaging",
    icon: "🏥",
    skills: ["DICOM", "Orthanc PACS", "Cornerstone.js", "Medical Data"],
  },
  {
    name: "Tools & Infrastructure",
    icon: "🔧",
    skills: ["Git", "Docker", "Jenkins", "Linux", "CI/CD", "DevOps"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-dark">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-accent bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                borderColor: "#3b82f6",
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-lg font-bold text-white">
                  {category.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1 bg-accent bg-opacity-10 text-accent-light text-sm rounded-full border border-accent border-opacity-30"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(59, 130, 246, 0.2)",
                      borderColor: "rgba(59, 130, 246, 0.6)",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 bg-slate-900 border border-accent border-opacity-20 rounded-lg p-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">🎓 Education</h3>
          <div>
            <p className="text-accent-light font-semibold">
              B.Tech in Information Technology
            </p>
            <p className="text-gray-300">
              Manipal Institute of Technology, Manipal
            </p>
            <p className="text-gray-400 text-sm">
              Expected Graduation: May 2026 | CGPA: 8.26/10
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mt-6 bg-slate-900 border border-accent border-opacity-20 rounded-lg p-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            🏆 Awards & Recognition
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 text-xl">⭐</span>
              <div>
                <p className="text-white font-semibold">
                  Ranked 2nd at Aerothon 2024
                </p>
                <p className="text-gray-400 text-sm">
                  Spectre UAV Project - Autonomous payload deployment
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 text-xl">📰</span>
              <div>
                <p className="text-white font-semibold">
                  IEEE Access Publication
                </p>
                <p className="text-gray-400 text-sm">
                  Blended Wing UAV with 96.3% training accuracy
                </p>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
