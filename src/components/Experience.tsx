"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, GraduationCap, Calendar } from "lucide-react";

const journey = [
  {
    type: "work",
    period: "Jan 2024 - Apr 2024",
    title: "Full Stack Web Development Intern",
    organization: "Abhivriddhi Edutech | Bellary, India",
    details: [
      "Engineered responsive, cross-device UI layouts using HTML5 and CSS3.",
      "Designed normalized SQL schemas and wrote queries for dynamic content rendering.",
      "Structured modular codebases reducing redundancy and improving maintainability.",
    ],
    icon: BriefcaseBusiness,
  },
  {
    type: "education",
    period: "Aug 2024 - Expected 2027",
    title: "Bachelor of Engineering in AI & Machine Learning",
    organization: "BMS College of Engineering | Bengaluru",
    details: [
      "CGPA: 7.89 / 10.0",
      "Deeply involved in practical deep learning and computer vision architectures.",
    ],
    icon: GraduationCap,
  },
  {
    type: "education",
    period: "Aug 2021 - Aug 2024",
    title: "Diploma in Computer Science Engineering",
    organization: "Sanjay Gandhi Polytechnic | Bellary",
    details: [
      "CGPA: 9.65 / 10.0 (Top Performer)",
      "Built a strong foundation in core computer science, software engineering, and modern web tech.",
    ],
    icon: GraduationCap,
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Journey</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A timeline of my academic growth and professional experiences.
          </p>
        </div>

        <div className="relative border-l border-primary/20 ml-6 md:ml-0 md:max-w-4xl mx-auto">
          {journey.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 relative pl-8 md:pl-0"
            >
              {/* Timeline dot */}
              <div className="absolute w-12 h-12 bg-card border-2 border-primary rounded-full flex items-center justify-center -left-6 md:left-1/2 md:-ml-6 z-10 shadow-lg shadow-primary/20">
                <item.icon className="w-5 h-5 text-primary" />
              </div>

              {/* Content Card */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:ml-auto md:text-left' : 'md:pl-16 md:text-right'}`}>
                {/* On mobile, standard left alignment. On desktop, alternate left/right */}
                <div className={`glass p-6 md:p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-colors shadow-xl md:hidden block`}>
                  <div className="flex items-center space-x-2 text-sm text-primary mb-3">
                    <Calendar size={16} />
                    <span className="font-semibold">{item.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                  <h4 className="text-md text-foreground/80 mb-4 font-medium">{item.organization}</h4>
                  <ul className="space-y-2 text-foreground/70 text-sm">
                    {item.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`glass p-6 md:p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-colors shadow-xl hidden md:block w-full max-w-lg ${index % 2 === 0 ? 'ml-0' : 'ml-auto'}`}>
                  <div className={`flex items-center space-x-2 text-sm text-primary mb-3 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <Calendar size={16} />
                    <span className="font-semibold">{item.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                  <h4 className="text-md text-foreground/80 mb-4 font-medium">{item.organization}</h4>
                  <ul className={`space-y-2 text-foreground/70 text-sm ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    {item.details.map((detail, i) => (
                      <li key={i} className={`flex ${index % 2 === 0 ? 'items-start flex-row' : 'items-start flex-row-reverse space-x-reverse'}`}>
                         <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 ${index % 2 === 0 ? 'mr-2' : 'ml-2'}`}></span>
                         <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
