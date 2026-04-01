"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Activity } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Brain Tumor Detection and Classification",
    category: "ML / AI",
    tech: ["Python", "Flask", "TensorFlow", "Keras"],
    description: "Integrated VGG16 (Classification) and U-Net (Segmentation) models into a Flask backend to classify MRI scans and generate segmentation masks.",
    github: "https://github.com/DMAbdulRazzaq",
    demo: "#",
    image: "bg-gradient-to-tr from-purple-500/20 to-blue-500/20",
  },
  {
    id: 2,
    title: "Diabetes Prediction Web Application",
    category: "Full Stack",
    tech: ["HTML", "CSS", "Python", "Flask", "Scikit-Learn"],
    description: "Trained a Random Forest Classifier with a Pandas preprocessing pipeline achieving 76.62% accuracy. Deployed via Flask with an intuitive vitals input UI.",
    github: "https://github.com/DMAbdulRazzaq",
    demo: "#",
    image: "bg-gradient-to-tr from-green-500/20 to-teal-500/20",
  },
];

export function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter((project) =>
    filter === "All" ? true : project.category === filter
  );

  return (
    <section id="projects" className="py-24 relative bg-card/20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Projects</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A showcase of my recent work in Web Development and Machine Learning.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-16">
          {["All", "ML / AI", "Full Stack"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 blur-0"
                  : "bg-card glass text-foreground hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden glass border border-border/50 hover:border-primary/50 transition-all flex flex-col h-full"
              >
                {/* Image Placeholder */}
                <div className={`relative h-60 w-full ${project.image} flex items-center justify-center`}>
                  <Activity size={48} className="text-primary/40 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
                      {project.category}
                    </span>
                    <div className="flex space-x-3 text-foreground/50">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        <Github size={20} />
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-foreground/70 mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs font-medium text-foreground/60 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
