"use client";

import { motion } from "framer-motion";
import { User, Code, Lightbulb, MapPin } from "lucide-react";

export function About() {
  const stats = [
    { label: "B.E. AI & ML", value: "BMSCE", desc: "Expected 2027", icon: User },
    { label: "Location", value: "Bengaluru", desc: "India", icon: MapPin },
    { label: "Coding focus", value: "Full Stack", desc: "& Deep Learning", icon: Code },
    { label: "Problem Solver", value: "Hackathons", desc: "Active Participant", icon: Lightbulb },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-lg opacity-20"></div>
              <div className="relative aspect-square md:aspect-[4/5] rounded-2xl bg-card border border-border shadow-2xl overflow-hidden glass">
                {/* Placeholder Image container */}
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/80">
                  <div className="text-center p-8">
                    <User size={64} className="mx-auto mb-4 text-primary opacity-50" />
                    <p className="text-foreground/50 text-sm">Replace this placeholder with your profile picture</p>
                    <p className="text-foreground/30 text-xs mt-2">(Use a high-quality headshot)</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-semibold mb-6">
              About Me
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Engineering the Future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">AI & Data</span>
            </h2>
            <div className="space-y-4 text-lg text-foreground/70 mb-10 leading-relaxed">
              <p>
                I am a third-year B.E. student in Artificial Intelligence & Machine Learning with hands-on experience in computer vision, deep learning, and full-stack web development.
              </p>
              <p>
                As a fast learner and strong communicator, I thrive in collaborative team environments. I bridge the gap between complex machine learning architectures and scalable, user-friendly frontend experiences.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="p-4 rounded-xl border border-border bg-card/50 glass hover:bg-card/80 transition-colors">
                  <stat.icon className="text-primary mb-3" size={24} />
                  <h3 className="font-semibold text-lg text-foreground">{stat.value}</h3>
                  <p className="text-sm text-foreground/80 font-medium">{stat.label}</p>
                  <p className="text-xs text-foreground/50 mt-1">{stat.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
