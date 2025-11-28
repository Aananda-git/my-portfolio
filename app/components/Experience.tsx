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
    highlights: ["React & Next.js", "TypeScript", "REST APIs", "Agile Development"]
  },
  { 
    role: "Software Engineer", 
    company: "Investiaa / Aava Tech",
    duration: "Jun 2024 – Dec 2024 | Kathmandu",
    description: "Built scalable web applications and contributed to system architecture design, implementing robust backend solutions and intuitive frontend interfaces.",
    highlights: ["Python FastAPI", "PostgreSQL", "System Design", "Team Collaboration"]
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
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
            className="inline-flex items-center gap-2 mb-2 justify-center w-full"
          >
            <div className="w-4 h-0.5 bg-primary rounded-full"></div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Journey</span>
            <div className="w-4 h-0.5 bg-primary rounded-full"></div>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            My path through the tech industry, building solutions and growing with each challenge
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <Card className="card-gradient border-border shadow-lg hover:shadow-xl transition-all duration-300 h-full group hover:border-primary/30 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent"></div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                      {exp.role}
                    </CardTitle>
                    <p className="text-primary font-semibold text-lg">{exp.company}</p>
                    <p className="text-sm text-muted-foreground font-medium">{exp.duration}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-foreground leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, idx) => (
                        <span 
                          key={idx}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full border border-primary/20"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}