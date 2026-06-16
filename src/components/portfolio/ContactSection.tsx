"use client";

import { motion, useInView } from "framer-motion";
import { profileData } from "@/lib/portfolio-data";
import { useRef } from "react";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  ArrowUpRight,
} from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: profileData.email,
      href: `mailto:${profileData.email}`,
      color: "emerald",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "ilyas-shaikh829",
      href: profileData.linkedin,
      color: "cyan",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "ilyas829",
      href: profileData.github,
      color: "violet",
    },
    {
      icon: MapPin,
      label: "Location",
      value: profileData.location,
      href: "#",
      color: "amber",
    },
  ];

  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    emerald: {
      bg: "bg-emerald-500/10",
      text: "text-emerald-400",
      border: "border-emerald-500/20 hover:border-emerald-500/50",
    },
    cyan: {
      bg: "bg-cyan-500/10",
      text: "text-cyan-400",
      border: "border-cyan-500/20 hover:border-cyan-500/50",
    },
    violet: {
      bg: "bg-violet-500/10",
      text: "text-violet-400",
      border: "border-violet-500/20 hover:border-violet-500/50",
    },
    amber: {
      bg: "bg-amber-500/10",
      text: "text-amber-400",
      border: "border-amber-500/20 hover:border-amber-500/50",
    },
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            Get in{" "}
            <span className="text-emerald-400">Touch</span>
          </h2>
          <div className="h-1 w-16 bg-emerald-500 rounded-full mb-6" />
          <p className="text-muted-foreground mb-10 max-w-lg">
            I&apos;m actively looking for Cloud Data Engineer opportunities.
            Feel free to reach out — I&apos;d love to connect!
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {contactLinks.map((link, index) => {
            const colors = colorMap[link.color];
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -2 }}
                className={`group flex items-center gap-4 p-5 rounded-xl bg-card border ${colors.border} transition-all duration-300 hover:shadow-lg`}
              >
                <div
                  className={`p-2.5 rounded-xl ${colors.bg} border ${colors.border}`}
                >
                  <Icon className={`h-5 w-5 ${colors.text}`} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-muted-foreground">
                    {link.label}
                  </div>
                  <div className="text-sm font-medium text-foreground truncate">
                    {link.value}
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-emerald-400 transition-colors shrink-0" />
              </motion.a>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-10 text-center"
        >
          <a
            href={`mailto:${profileData.email}`}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 hover:scale-105"
          >
            <Send className="h-4 w-4" />
            Send me an Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
