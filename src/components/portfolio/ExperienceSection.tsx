"use client";

import { motion, useInView } from "framer-motion";
import { profileData } from "@/lib/portfolio-data";
import { useRef } from "react";
import { Briefcase, ChevronRight } from "lucide-react";

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-20 sm:py-28 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            Work{" "}
            <span className="text-emerald-400">Experience</span>
          </h2>
          <div className="h-1 w-16 bg-emerald-500 rounded-full mb-10" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[18px] top-2 bottom-2 w-px bg-emerald-500/20 hidden sm:block" />

          <div className="space-y-8">
            {profileData.experience.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -30 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -30 }
                }
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative sm:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-[11px] top-2 hidden sm:block">
                  <div className="h-4 w-4 rounded-full border-2 border-emerald-500 bg-background z-10 relative">
                    <div className="absolute inset-1 rounded-full bg-emerald-500" />
                  </div>
                </div>

                <div className="group p-6 rounded-xl bg-card border border-border hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-emerald-400 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-emerald-400 font-medium text-sm">
                        <Briefcase className="h-3.5 w-3.5" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground whitespace-nowrap">
                      {exp.period}
                      <span className="text-emerald-400/60 ml-1">
                        ({exp.duration})
                      </span>
                    </div>
                  </div>

                  {exp.highlights.length > 1 && (
                    <ul className="space-y-2">
                      {exp.highlights.map((h, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <ChevronRight className="h-3.5 w-3.5 text-emerald-500 mt-1 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {exp.highlights.length === 1 && (
                    <p className="text-sm text-muted-foreground">
                      {exp.highlights[0]}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
