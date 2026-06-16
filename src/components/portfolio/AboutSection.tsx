"use client";

import { motion } from "framer-motion";
import { profileData } from "@/lib/portfolio-data";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 sm:py-28 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            About{" "}
            <span className="text-emerald-400">Me</span>
          </h2>
          <div className="h-1 w-16 bg-emerald-500 rounded-full mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={
              isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
            }
            transition={{ delay: 0.2, duration: 0.6 }}
            className="md:col-span-2"
          >
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
              {profileData.summary}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={
              isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
            }
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-4"
          >
            <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
              <div className="text-3xl font-bold text-emerald-400">1.5+</div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
              <div className="text-3xl font-bold text-emerald-400">99.9%</div>
              <div className="text-sm text-muted-foreground">Pipeline Uptime</div>
            </div>
            <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
              <div className="text-3xl font-bold text-emerald-400">80%</div>
              <div className="text-sm text-muted-foreground">
                Manual Work Reduced
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
