"use client";

import { motion } from "framer-motion";
import { Database, Code2, BrainCircuit, LayoutTemplate, Workflow } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "SQL", "Java", "HTML", "CSS"],
  },
  {
    title: "ML / Deep Learning",
    icon: BrainCircuit,
    skills: ["Scikit-learn", "TensorFlow", "Keras", "PyTorch", "Random Forests"],
  },
  {
    title: "Data",
    icon: Database,
    skills: ["Pandas", "NumPy", "Exploratory Data Analysis"],
  },
  {
    title: "Generative AI",
    icon: Workflow,
    skills: ["GPT", "Claude", "Gemini", "Prompt Engineering", "RAG"],
  },
  {
    title: "Tools & Platforms",
    icon: LayoutTemplate,
    skills: ["Git", "VS Code", "Jupyter", "Flask", "Streamlit", "React", "Next.js"],
  },
];

export function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-24 relative bg-card/20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Arsenal</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A diverse toolkit enabling me to build intelligence from the ground up, from data pipelines to scalable user interfaces.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
              className="glass p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <category.icon className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center space-x-3 text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/60"></span>
                    <span className="text-sm font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
