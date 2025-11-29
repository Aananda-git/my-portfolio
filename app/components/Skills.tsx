"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    category: "Frontend",
    skills: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Redux", "SWR"],
    color: "primary",
    icon: "🎨"
  },
  {
    category: "Backend",
    skills: ["FastAPI", "Python", "Node.js", "PostgreSQL", "MongoDB"],
    color: "accent",
    icon: "⚙️"
  },
  {
    category: "Tools & Others",
    skills: ["Docker", "Git", "AWS", "REST APIs", "Agile/Scrum"],
    color: "primary",
    icon: "🛠️"
  }
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-card/20 to-background relative overflow-hidden">
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
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Technical Expertise</span>
              <div className="w-8 h-0.5 bg-primary rounded-full" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Skills & Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The tools and technologies I use to bring ideas to life and solve complex problems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: categoryIndex * 0.2 }}
                className="group"
              >
                <div className={`text-center p-8 rounded-3xl border-2 transition-all duration-300 h-full ${
                  category.color === 'primary' 
                    ? 'border-primary/20 bg-primary/5 hover:border-primary/40 hover:bg-primary/10' 
                    : 'border-accent/20 bg-accent/5 hover:border-accent/40 hover:bg-accent/10'
                }`}>
                  <div className={`inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full ${
                    category.color === 'primary' 
                      ? 'bg-primary/10 text-primary' 
                      : 'bg-accent/10 text-accent'
                  }`}>
                    <span className="text-xl">{category.icon}</span>
                    <span className="font-bold text-lg">{category.category}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="cursor-default"
                      >
                        <Badge 
                          className={`text-base border-2 px-4 py-2 transition-all duration-300 font-semibold ${
                            category.color === 'primary'
                              ? 'bg-primary/10 text-primary border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary'
                              : 'bg-accent/10 text-accent border-accent/30 hover:bg-accent hover:text-accent-foreground hover:border-accent'
                          }`}
                          variant="secondary"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-16 p-8 rounded-3xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">Always Learning</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I continuously explore new technologies and methodologies to stay at the forefront of web development.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}