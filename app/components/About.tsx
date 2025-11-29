"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "15+", label: "Projects Completed" },
    { value: "5+", label: "Technologies" },
    { value: "100%", label: "Client Satisfaction" }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-card/20 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-0.5 bg-primary rounded-full" />
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">About Me</span>
            <div className="w-8 h-0.5 bg-primary rounded-full" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Crafting Digital Excellence
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate software engineer specializing in modern web technologies and 
            creating solutions that make a real difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl blur-2xl opacity-20 animate-pulse" />
              
              {/* Avatar container */}
              <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 backdrop-blur-sm border border-primary/20 shadow-2xl">
                <Avatar className="w-80 h-80 border-4 border-background shadow-2xl">
                  <AvatarImage src="/my_pic.jpg" alt="Aananda" className="object-cover" />
                  <AvatarFallback className="text-4xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold">
                    AB
                  </AvatarFallback>
                </Avatar>
                
                {/* Decorative elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-accent/30 rounded-full"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m a passionate <span className="text-primary font-semibold">Software Engineer</span> with expertise in building modern, scalable web applications. My journey in tech is driven by a love for creating solutions that make a difference.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in the <span className="text-accent font-semibold">JavaScript ecosystem</span> with <span className="text-primary font-semibold">Next.js, React, TypeScript</span>, and <span className="text-accent font-semibold">Python FastAPI</span>. I believe in writing clean, maintainable code and creating intuitive user experiences.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="text-center p-4 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm"
                  >
                    <div className="text-2xl font-bold text-gradient mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <Link href="/Aananda_Resume.pdf" download>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-xl transform hover:scale-105 px-8 py-4 text-base font-semibold rounded-xl shadow-lg transition-all duration-300"
                >
                  Download Resume
                </Button>
              </Link>
              <Link href="#contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-base font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                >
                  Let&apos;s Talk
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}