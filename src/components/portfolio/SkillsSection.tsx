"use client";

import { motion, useInView } from "framer-motion";
import { profileData } from "@/lib/portfolio-data";
import { useRef } from "react";

const skillIcons: Record<string, string> = {
  "Apache Airflow": "🔄",
  "Apache Spark": "⚡",
  "Delta Lake": "📐",
  "ETL Pipelines": "🔧",
  "Data Modeling": "🏗️",
  Trino: "🔍",
  "Apache Iceberg": "🧊",
  "Data Lake": "🌊",
  "Microsoft Azure": "☁️",
  Jenkins: "🚀",
  "CI/CD": "🔁",
  SonarQube: "📊",
  Snyk: "🛡️",
  Docker: "🐳",
  Git: "📦",
  Python: "🐍",
  SQL: "🗃️",
  PySpark: "⚡",
  Django: "🎸",
  Pytest: "✅",
  PySelenium: "🌐",
  PostgreSQL: "🐘",
  MySQL: "🐬",
  DevSecOps: "🔒",
  "CVE Analysis": "🛡️",
  "Newman (Postman CLI)": "📮",
  "API Testing": "🔌",
  "Test Harness": "🧪",
};

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
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
            Technical{" "}
            <span className="text-emerald-400">Skills</span>
          </h2>
          <div className="h-1 w-16 bg-emerald-500 rounded-full mb-10" />
        </motion.div>

        <div className="space-y-8">
          {Object.entries(profileData.skills).map(
            ([category, skills], catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={{ delay: catIndex * 0.1, duration: 0.5 }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{
                        delay: catIndex * 0.1 + skillIndex * 0.03,
                        duration: 0.3,
                      }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(16,185,129,0.15)",
                      }}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium bg-emerald-500/5 border border-emerald-500/20 text-foreground hover:border-emerald-500/50 transition-all duration-200 cursor-default flex items-center gap-1.5"
                    >
                      <span className="text-xs">
                        {skillIcons[skill] || "💡"}
                      </span>
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
