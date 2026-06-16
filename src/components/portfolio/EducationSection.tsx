"use client";

import { motion, useInView } from "framer-motion";
import { profileData } from "@/lib/portfolio-data";
import { useRef } from "react";
import { GraduationCap, BookOpen } from "lucide-react";

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="education"
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
            <span className="text-emerald-400">Education</span>
          </h2>
          <div className="h-1 w-16 bg-emerald-500 rounded-full mb-10" />
        </motion.div>

        <div className="space-y-6">
          {profileData.education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }
              }
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group p-5 rounded-xl bg-card border border-border hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 shrink-0">
                  <GraduationCap className="h-5 w-5 text-emerald-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-foreground group-hover:text-emerald-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 mt-2">
                    <span className="text-xs px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                      {edu.field}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {edu.period}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Publication */}
        {profileData.publications.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8"
          >
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-emerald-400" />
              Publication
            </h3>
            {profileData.publications.map((pub) => (
              <div
                key={pub.title}
                className="p-5 rounded-xl bg-card border border-border hover:border-emerald-500/30 transition-all duration-300"
              >
                <h4 className="font-semibold text-foreground">
                  {pub.title}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {pub.description}
                </p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
