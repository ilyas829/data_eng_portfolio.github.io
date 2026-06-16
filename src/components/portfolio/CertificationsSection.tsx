"use client";

import { motion, useInView } from "framer-motion";
import { profileData } from "@/lib/portfolio-data";
import { useRef, useState } from "react";
import {
  Award,
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const certs = profileData.certifications;

  return (
    <section id="certifications" className="py-20 sm:py-28 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            <span className="text-emerald-400">Certifications</span>
          </h2>
          <div className="h-1 w-16 bg-emerald-500 rounded-full mb-10" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ y: -4, scale: 1.02 }}
              onClick={() => setSelectedCert(index)}
              className="cursor-pointer group p-5 rounded-xl bg-card border border-border hover:border-emerald-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 shrink-0">
                  <Award className="h-5 w-5 text-emerald-400" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-sm leading-snug group-hover:text-emerald-400 transition-colors line-clamp-2">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Certificate preview placeholder */}
              <div className="mt-4 relative rounded-lg overflow-hidden bg-gradient-to-br from-emerald-500/5 to-teal-500/5 border border-emerald-500/10 aspect-[16/10]">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <Award className="h-8 w-8 text-emerald-400/40 mb-2" />
                  <p className="text-xs text-emerald-400/60 font-medium">
                    {cert.issuer}
                  </p>
                  <p className="text-[10px] text-muted-foreground/50 mt-1 line-clamp-2">
                    {cert.name}
                  </p>
                </div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="h-3 w-3 text-emerald-400/60" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-card rounded-2xl border border-border p-6 max-w-lg w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-1 rounded-lg hover:bg-foreground/5 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-start gap-3 mb-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <Award className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  {certs[selectedCert].name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Issued by {certs[selectedCert].issuer}
                </p>
              </div>
            </div>

            {/* Certificate preview */}
            <div className="rounded-xl overflow-hidden bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-cyan-500/10 border border-emerald-500/20 p-8 text-center">
              <div className="border-2 border-dashed border-emerald-500/20 rounded-xl p-6">
                <Award className="h-12 w-12 text-emerald-400 mx-auto mb-3" />
                <p className="text-lg font-bold text-foreground">
                  Certificate of Completion
                </p>
                <p className="text-emerald-400 font-medium mt-1">
                  {certs[selectedCert].name}
                </p>
                <div className="h-px bg-emerald-500/20 my-4" />
                <p className="text-sm text-muted-foreground">
                  Awarded to{" "}
                  <span className="text-foreground font-semibold">
                    Ilyas Shaikh
                  </span>
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Issued by {certs[selectedCert].issuer}
                </p>
              </div>
            </div>

            {certs[selectedCert].credentialUrl !== "#" && (
              <a
                href={certs[selectedCert].credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-colors text-sm font-medium"
              >
                <ExternalLink className="h-4 w-4" />
                View Credential
              </a>
            )}

            {/* Navigation arrows */}
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={() =>
                  setSelectedCert(
                    (selectedCert - 1 + certs.length) % certs.length
                  )
                }
                className="p-2 rounded-lg hover:bg-foreground/5 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="text-xs text-muted-foreground">
                {selectedCert + 1} / {certs.length}
              </span>
              <button
                onClick={() =>
                  setSelectedCert((selectedCert + 1) % certs.length)
                }
                className="p-2 rounded-lg hover:bg-foreground/5 transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
