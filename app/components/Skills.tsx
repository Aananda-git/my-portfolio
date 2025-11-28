"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    category: "Frontend",
    skills: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Redux", "SWR"],
    color: "primary"
  },
  {
    category: "Backend",
    skills: ["FastAPI", "Python", "Node.js", "PostgreSQL", "MongoDB"],
    color: "accent"
  },
  {
    category: "Tools & Others",
    skills: ["Docker", "Git", "AWS", "REST APIs", "Agile/Scrum"],
    color: "primary"
  }
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 bg-card/30">
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
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Expertise</span>
            <div className="w-4 h-0.5 bg-primary rounded-full"></div>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life and solve complex problems
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: categoryIndex * 0.2 }}
                className="text-center"
              >
                <div className={`inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full ${
                  category.color === 'primary' 
                    ? 'bg-primary/10 text-primary' 
                    : 'bg-accent/10 text-accent'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${
                    category.color === 'primary' ? 'bg-primary' : 'bg-accent'
                  }`}></div>
                  <span className="font-semibold text-sm">{category.category}</span>
                </div>
                
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge 
                        className={`text-sm border px-3 py-2 cursor-default transition-all duration-300 ${
                          category.color === 'primary'
                            ? 'bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground'
                            : 'bg-accent/10 text-accent border-accent/20 hover:bg-accent hover:text-accent-foreground'
                        }`}
                        variant="secondary"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}