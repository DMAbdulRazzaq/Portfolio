"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Github, Linkedin } from "./Icons";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={itemVariants} className="mb-4 inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>Available for Internships</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">D M Abdul Razzaq</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-semibold text-foreground/80 mb-6"
          >
            AI & ML Engineering Student <br className="hidden md:block" />
            <span className="text-foreground/60">+ Full Stack Developer</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/70 mb-10 max-w-2xl leading-relaxed"
          >
            Based in Bengaluru, India. I specialize in building next-generation web applications
            and integrating deep learning models to solve real-world problems.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="#projects"
              className="flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              <span>View Work</span>
              <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center space-x-6 text-foreground/60">
            <a href="https://github.com/DMAbdulRazzaq" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/dmabdulrazzaq" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:dmdabdulrazzaq@gmail.com" className="hover:text-primary transition-colors">
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
