"use client";

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    name: "Transaction Verification System",
    tech: ["Next.js", "FastAPI", "Machine Learning", "Django"],
    desc: "Advanced fraud detection system with multi-step verification for e-commerce and banking applications using AI-powered analysis.",
    link: "#",
    featured: true
  },
  {
    name: "MazzakoTrip",
    tech: ["React.js", "REST API", "Node.js", "MongoDB"],
    desc: "Comprehensive tour and travel platform with real-time travel listings, booking system, and user reviews integration.",
    link: "#",
    featured: false
  },
  {
    name: "Twitter Insights",
    tech: ["Next.js", "Sentiment Analysis", "Python", "NLP"],
    desc: "Open-source analytics tool for localized Twitter sentiment analysis and real-time trend monitoring with data visualization.",
    link: "#",
    featured: false
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20">
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
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Portfolio</span>
            <div className="w-4 h-0.5 bg-primary rounded-full"></div>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A collection of projects that showcase my passion for creating impactful digital solutions
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ y: -8 }}
                className="relative"
              >
                {project.featured && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-3 py-1 text-xs">
                      Featured
                    </Badge>
                  </div>
                )}
                
                <Card className="card-gradient border-border shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col group hover:border-primary/50 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
                  
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                      {project.name}
                      {project.featured && (
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                      )}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="flex-grow pb-6">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.desc}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {project.tech.map((tech, techIndex) => (
                        <Badge 
                          key={tech} 
                          className={`text-xs border ${
                            techIndex % 2 === 0 
                              ? 'bg-primary/10 text-primary border-primary/20' 
                              : 'bg-accent/10 text-accent border-accent/20'
                          }`}
                          variant="secondary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="pt-0">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
                    >
                      <Link href={project.link}>
                        View Project Details
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}