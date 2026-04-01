"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Star, Target } from "lucide-react";

export function Achievements() {
  const achievements = [
    {
      title: "Top Performer",
      organization: "Sanjay Gandhi Polytechnic",
      detail: "Diploma CGPA 9.65/10.0",
      icon: Trophy,
      color: "text-yellow-400 bg-yellow-400/10",
    },
    {
      title: "Participant",
      organization: "Cisco Data Forecasting League",
      detail: "Data Science Competition - 2026",
      icon: Target,
      color: "text-blue-400 bg-blue-400/10",
    },
    {
      title: "Participant",
      organization: "ML Matrix Hackathon",
      detail: "Smart AI Solutions - 2024",
      icon: Star,
      color: "text-purple-400 bg-purple-400/10",
    },
    {
      title: "Workshop Completed",
      organization: "Agentic AI, Phase Shift 2025",
      detail: "BMS College of Engineering",
      icon: Medal,
      color: "text-green-400 bg-green-400/10",
    },
  ];

  return (
    <section id="achievements" className="py-24 relative bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Achievements</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl border border-border/50 hover:-translate-y-2 transition-transform duration-300 group text-center flex flex-col items-center"
            >
              <div className={`p-4 rounded-full mb-6 ${item.color} group-hover:scale-110 transition-transform`}>
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm font-medium text-foreground/80 mb-2">{item.organization}</p>
              <p className="text-xs text-foreground/60">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
