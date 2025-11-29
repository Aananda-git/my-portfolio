"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experience = [
  { 
    role: "Full Stack Developer", 
    company: "New Soft Solution",
    duration: "May 2025 – Oct 2025 | Amsterdam",
    description: "Developed and maintained full-stack applications using modern web technologies, focusing on creating responsive and performant user interfaces.",
    highlights: ["React & Next.js", "TypeScript", "REST APIs", "Agile Development"],
    icon: "💻"
  },
  { 
    role: "Software Engineer", 
    company: "Investiaa / Aava Tech",
    duration: "Jun 2024 – Dec 2024 | Kathmandu",
    description: "Built scalable web applications and contributed to system architecture design, implementing robust backend solutions and intuitive frontend interfaces.",
    highlights: ["Python FastAPI", "PostgreSQL", "System Design", "Team Collaboration"],
    icon: "🚀"
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-background to-card/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-0.5 bg-primary rounded-full" />
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Professional Journey</span>
              <div className="w-8 h-0.5 bg-primary rounded-full" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Work Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My path through the tech industry, building solutions and growing with each challenge
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2" />
            
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ delay: index * 0.3, duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg transform -translate-x-1/2 z-10" />
                  
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-12 md:ml-0`}>
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className="card-gradient border-border/50 shadow-2xl hover:shadow-3xl transition-all duration-300 group overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
                        
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="text-2xl">{exp.icon}</span>
                                <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                                  {exp.role}
                                </CardTitle>
                              </div>
                              <p className="text-primary font-semibold text-lg mb-1">{exp.company}</p>
                              <p className="text-sm text-muted-foreground font-medium bg-primary/5 px-3 py-1 rounded-full inline-block">
                                {exp.duration}
                              </p>
                            </div>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="space-y-4">
                          <p className="text-foreground leading-relaxed text-lg">{exp.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.highlights.map((highlight, idx) => (
                              <motion.span 
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                transition={{ delay: (index * 0.3) + (idx * 0.1) }}
                                whileHover={{ scale: 1.05 }}
                                className="text-sm bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-3 py-2 rounded-full border border-primary/20 font-medium"
                              >
                                {highlight}
                              </motion.span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}