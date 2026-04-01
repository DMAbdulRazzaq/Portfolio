"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone, Linkedin, Github } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      
      // Reset after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative bg-card/10">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Touch</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Currently looking for internship opportunities. My inbox is always open!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/3 space-y-8"
          >
            <div className="glass p-8 rounded-2xl border border-border/50">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground/60 mb-1">Location</h4>
                    <p className="text-foreground font-medium">Bengaluru, Karnataka, India</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground/60 mb-1">Email</h4>
                    <a href="mailto:dmdabdulrazzaq@gmail.com" className="text-foreground font-medium hover:text-primary transition-colors">
                      dmdabdulrazzaq@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground/60 mb-1">Phone</h4>
                    <a href="tel:+918618851523" className="text-foreground font-medium hover:text-primary transition-colors">
                      +91 86188 51523
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="text-sm font-medium text-foreground/60 mb-4">Social Profiles</h4>
                <div className="flex space-x-4">
                  <a href="https://github.com/DMAbdulRazzaq" target="_blank" rel="noopener noreferrer" className="p-3 bg-card border border-border/50 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                    <Github size={20} />
                  </a>
                  <a href="https://linkedin.com/in/dmabdulrazzaq" target="_blank" rel="noopener noreferrer" className="p-3 bg-card border border-border/50 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-2/3"
          >
            <form onSubmit={handleSubmit} className="glass p-8 md:p-10 rounded-2xl border border-border/50 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground/80">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-foreground"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-foreground"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground/80">Subject</label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-foreground"
                  placeholder="Internship Opportunity"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-foreground resize-none"
                  placeholder="I'd love to discuss..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : submitStatus === "success" ? (
                  <span>Message Sent!</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
