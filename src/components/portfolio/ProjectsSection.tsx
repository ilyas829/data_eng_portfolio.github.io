"use client";

import { motion, useInView } from "framer-motion";
import { profileData } from "@/lib/portfolio-data";
import { useRef, useState } from "react";
import { ExternalLink, Github, Star, ChevronDown, ChevronUp } from "lucide-react";

const projectColors = [
  {
    gradient: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/20 hover:border-emerald-500/50",
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    accent: "text-emerald-400",
  },
  {
    gradient: "from-cyan-500/20 to-blue-500/10",
    border: "border-cyan-500/20 hover:border-cyan-500/50",
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    accent: "text-cyan-400",
  },
  {
    gradient: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-500/20 hover:border-violet-500/50",
    badge: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    accent: "text-violet-400",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="py-20 sm:py-28 px-4 bg-muted/30"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            Featured{" "}
            <span className="text-emerald-400">Projects</span>
          </h2>
          <div className="h-1 w-16 bg-emerald-500 rounded-full mb-10" />
        </motion.div>

        <div className="grid gap-6">
          {profileData.projects.map((project, index) => {
            const colors = projectColors[index % projectColors.length];
            const isExpanded = expandedIdx === index;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className={`group relative overflow-hidden rounded-xl border ${colors.border} bg-card transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5`}
              >
                {/* Top gradient strip */}
                <div
                  className={`h-1 bg-gradient-to-r ${colors.gradient}`}
                />

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3
                      className={`text-xl font-bold ${colors.accent} transition-colors`}
                    >
                      {project.title}
                    </h3>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 p-2 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`px-2.5 py-1 rounded-md text-xs font-medium border ${colors.badge}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Key highlights toggle */}
                  <button
                    onClick={() =>
                      setExpandedIdx(isExpanded ? null : index)
                    }
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-emerald-400 transition-colors"
                  >
                    <Star className="h-3.5 w-3.5" />
                    Key Highlights
                    {isExpanded ? (
                      <ChevronUp className="h-3.5 w-3.5" />
                    ) : (
                      <ChevronDown className="h-3.5 w-3.5" />
                    )}
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpanded ? "auto" : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-3 space-y-2">
                      {project.highlights.map((h, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${colors.accent === "text-emerald-400" ? "bg-emerald-400" : colors.accent === "text-cyan-400" ? "bg-cyan-400" : "bg-violet-400"}`} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* View project link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`absolute bottom-0 left-0 right-0 h-0 group-hover:h-10 bg-gradient-to-r ${colors.gradient} flex items-center justify-center gap-2 text-sm font-medium transition-all duration-300 overflow-hidden`}
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  View on GitHub
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
