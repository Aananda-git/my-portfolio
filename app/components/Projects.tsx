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
    featured: true,
    image: "/project1.jpg"
  },
  {
    name: "MazzakoTrip",
    tech: ["React.js", "REST API", "Node.js", "MongoDB"],
    desc: "Comprehensive tour and travel platform with real-time travel listings, booking system, and user reviews integration.",
    link: "#",
    featured: false,
    image: "/project2.jpg"
  },
  {
    name: "Twitter Insights",
    tech: ["Next.js", "Sentiment Analysis", "Python", "NLP"],
    desc: "Open-source analytics tool for localized Twitter sentiment analysis and real-time trend monitoring with data visualization.",
    link: "#",
    featured: false,
    image: "/project3.jpg"
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background to-card/20 relative overflow-hidden">
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
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Featured Work</span>
              <div className="w-8 h-0.5 bg-primary rounded-full" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Recent Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of projects that showcase my passion for creating impactful digital solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                {project.featured && (
                  <div className="absolute -top-3 -right-3 z-20">
                    <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-2 text-sm font-bold shadow-lg">
                      ⭐ Featured
                    </Badge>
                  </div>
                )}
                
                <Card className="card-gradient border-border/50 shadow-2xl hover:shadow-3xl transition-all duration-300 h-full flex flex-col group-hover:border-primary/50 overflow-hidden">
                  {/* Project image placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-2 flex-wrap">
                        {project.tech.slice(0, 3).map((tech, techIndex) => (
                          <Badge 
                            key={tech} 
                            className={`text-xs border ${
                              techIndex % 2 === 0 
                                ? 'bg-primary/20 text-primary border-primary/30' 
                                : 'bg-accent/20 text-accent border-accent/30'
                            } backdrop-blur-sm`}
                            variant="secondary"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 3 && (
                          <Badge className="bg-background/80 text-foreground border-border backdrop-blur-sm">
                            +{project.tech.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                      {project.name}
                      {project.featured && (
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-2 h-2 bg-accent rounded-full"
                        />
                      )}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="flex-grow pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.desc}
                    </p>
                  </CardContent>

                  <CardFooter className="pt-0">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
                    >
                      <Link href={project.link} className="flex items-center justify-center gap-2">
                        <span>View Project</span>
                        <motion.span
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          →
                        </motion.span>
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground text-lg mb-8">
              Interested in seeing more of my work?
            </p>
            <Link href="#contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                View All Projects
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}