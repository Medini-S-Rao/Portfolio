"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    name: "DiCloud",
    subtitle: "Medical Imaging Research Platform",
    description:
      "Healthcare platform enabling secure collaboration between hospitals, researchers, radiologists, and patients using medical imaging data.",
    achievements: [
      "Full-stack application: Next.js frontend + FastAPI backend with MongoDB",
      "Integrated Orthanc PACS for DICOM storage with automated anonymization",
      "Role-based access control for multiple clinical workflows",
      "Browser-based DICOM viewer using Cornerstone.js and WADO protocols",
      "REST APIs for DICOM search, metadata extraction, and retrieval",
    ],
    tags: ["Next.js", "React", "FastAPI", "MongoDB", "DICOM", "Cornerstone.js"],
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "Spectre UAV",
    subtitle: "Autonomous Vision-Guided Payload Deployment",
    description:
      "Autonomous UAV system with deep learning-driven vision-guided payload deployment.",
    achievements: [
      "YOLOv8-based object detection system for autonomous targeting",
      "±1.5 m payload drop accuracy through vision + telemetry fusion",
      "End-to-end AI system integration and deployment",
      "🏆 Ranked 2nd at Aerothon 2024",
    ],
    tags: ["YOLOv8", "Computer Vision", "ROS", "MAVROS", "Python"],
    color: "from-purple-400 to-pink-500",
    award: true,
  },
  {
    name: "Tuktuk",
    subtitle: "Location-Based Ride Sharing",
    description:
      "Backend-driven ride matching system with proximity-based optimization.",
    achievements: [
      "35% reduction in average match time",
      "Geo-spatial optimization algorithms",
      "Real-time location tracking",
    ],
    tags: ["Flask", "Flutter", "Firebase"],
    color: "from-green-400 to-emerald-500",
  },
  {
    name: "Phishing Email Detection",
    subtitle: "Real-Time Threat Detection Pipeline",
    description:
      "Advanced phishing email detection system with network analysis.",
    achievements: [
      "<2 second alert latency",
      "Flask-based detection pipeline",
      "Network traffic analysis with Snort and TShark",
      "Production-ready threat detection",
    ],
    tags: ["Flask", "Snort", "TShark", "Python", "Security"],
    color: "from-orange-400 to-red-500",
  },
];

export default function Projects() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const tukImages = ["/tuk.jpg", "/tuk1.jpg"];

  return (
    <section id="projects" className="py-20 px-4 bg-darker">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-accent bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {project.name === "Spectre UAV" && (
                <div className="absolute inset-0 rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <Image
                    src="/drpme.jpg"
                    alt="Drone Image"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
              )}

              {project.name === "DiCloud" && (
                <div className="absolute inset-0 rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <Image
                    src="/dicom.png"
                    alt="DICOM Viewer"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
              )}

              {project.name === "Tuktuk" && (
                <div className="absolute inset-0 rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <Image
                    src={tukImages[carouselIndex]}
                    alt={`Tuktuk Project ${carouselIndex + 1}`}
                    fill
                    className="object-contain rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-between px-4">
                    <button
                      onClick={() =>
                        setCarouselIndex(
                          carouselIndex === 0 ? tukImages.length - 1 : carouselIndex - 1
                        )
                      }
                      className="bg-accent hover:bg-accent-light text-white rounded-full p-2 transition-colors"
                      aria-label="Previous image"
                    >
                      ←
                    </button>
                    <button
                      onClick={() =>
                        setCarouselIndex(
                          carouselIndex === tukImages.length - 1 ? 0 : carouselIndex + 1
                        )
                      }
                      className="bg-accent hover:bg-accent-light text-white rounded-full p-2 transition-colors"
                      aria-label="Next image"
                    >
                      →
                    </button>
                  </div>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {tukImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCarouselIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          idx === carouselIndex ? "bg-accent" : "bg-gray-400"
                        }`}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div
                className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 rounded-lg blur transition-all duration-300"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${project.color})`,
                }}
              ></div>

              <motion.div
                className="relative bg-slate-900 border border-slate-800 rounded-lg p-6 h-full backdrop-blur-sm group-hover:opacity-0 transition-opacity duration-300"
                whileHover={{
                  borderColor: "#d946ef",
                  boxShadow: "0 20px 40px rgba(217, 70, 239, 0.15)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {project.name}
                    </h3>
                    <p className="text-accent-light font-semibold text-sm">
                      {project.subtitle}
                    </p>
                  </div>
                  {project.award && <span className="text-2xl">🏆</span>}
                </div>

                <p className="text-gray-300 mb-4">{project.description}</p>

                <ul className="space-y-2 mb-6">
                  {project.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-300 flex items-start gap-2"
                    >
                      <span className="text-accent-light flex-shrink-0 mt-1">
                        ◆
                      </span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-accent bg-opacity-10 text-accent-light px-3 py-1 rounded-full border border-accent border-opacity-20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
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
          <h3 className="text-2xl font-bold text-white mb-4">
            📊 Research Publication
          </h3>
          <p className="text-gray-300 mb-2">
            <a
              href="https://ieeexplore.ieee.org/document/11272055"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent hover:text-accent-light transition-colors"
            >
              Blended Wing UAV for Intelligent Surveillance
            </a>
          </p>
          <p className="text-gray-400 text-sm mb-3">
            IEEE Access, Vol. 13 | DOI: 10.1109/ACCESS.2025.3639268
          </p>
          <ul className="space-y-2">
            <li className="text-gray-300 flex items-start gap-2">
              <span className="text-accent-light">◆</span>
              <span>
                Architected deep learning-enabled UAV system for real-time human
                detection
              </span>
            </li>
            <li className="text-gray-300 flex items-start gap-2">
              <span className="text-accent-light">◆</span>
              <span>
                Trained EfficientNetB3-based CNN achieving 96.3% training
                accuracy, 94.7% validation
              </span>
            </li>
            <li className="text-gray-300 flex items-start gap-2">
              <span className="text-accent-light">◆</span>
              <span>
                Validated real-time onboard inference beyond 120m detection
                range
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
