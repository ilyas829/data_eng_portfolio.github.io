"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { profileData } from "@/lib/portfolio-data";
import ParticleBackground from "./ParticleBackground";
import { ChevronDown, Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const fullText = profileData.title;
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [fullText]);

  useEffect(() => {
    const cursor = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(cursor);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticleBackground />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-emerald-500/5 z-[1]" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Open to Opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4"
          >
            <span className="bg-gradient-to-r from-foreground via-foreground to-emerald-400 bg-clip-text text-transparent">
              {profileData.name}
            </span>
          </motion.h1>

          {/* Typed title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl font-mono text-emerald-400 mb-6 h-10"
          >
            {typedText}
            <span
              className={`ml-0.5 text-emerald-400 ${
                showCursor ? "opacity-100" : "opacity-0"
              } transition-opacity`}
            >
              |
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-muted-foreground text-base sm:text-lg mb-4 max-w-2xl mx-auto"
          >
            {profileData.tagline}
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex items-center justify-center gap-1.5 text-muted-foreground text-sm mb-8"
          >
            <MapPin className="h-4 w-4" />
            {profileData.location}
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-2.5 rounded-lg bg-foreground/5 border border-foreground/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300 text-foreground hover:text-emerald-400"
            >
              <Github className="h-4 w-4" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-2.5 rounded-lg bg-foreground/5 border border-foreground/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300 text-foreground hover:text-emerald-400"
            >
              <Linkedin className="h-4 w-4" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="group flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all duration-300 text-emerald-400"
            >
              <Mail className="h-4 w-4" />
              <span className="text-sm font-medium">Email</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="h-6 w-6 text-emerald-400/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
