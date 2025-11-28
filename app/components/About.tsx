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

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-2"
          >
            <div className="w-4 h-0.5 bg-primary rounded-full"></div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About</span>
            <div className="w-4 h-0.5 bg-primary rounded-full"></div>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Crafting Digital Excellence
          </h2>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex-shrink-0 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-md opacity-20 animate-pulse"></div>
              <Avatar className="w-60 h-60 border-4 border-background shadow-2xl relative z-10">
                <AvatarImage src="/my_pic.jpg" alt="Aananda" className="object-contain" />
                <AvatarFallback className="text-2xl bg-gradient-to-r from-primary to-accent text-primary-foreground">
                  AB
                </AvatarFallback>
              </Avatar>
            </motion.div>

            <div className="text-left space-y-6 flex-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I&apos;m a passionate <span className="text-primary font-semibold">Software Engineer</span> with expertise in building modern, scalable web applications. My journey in tech is driven by a love for creating solutions that make a difference.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I specialize in the <span className="text-accent font-semibold">JavaScript ecosystem</span> with <span className="text-primary font-semibold">Next.js, React, TypeScript</span>, and <span className="text-accent font-semibold">Python FastAPI</span>. I believe in writing clean, maintainable code and creating intuitive user experiences.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Full Stack Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm text-muted-foreground">UI/UX Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Problem Solving</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 }}
                className="flex gap-4 pt-4"
              >
                <Link href="/Aananda_Resume.pdf" download>
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 px-8 shadow-lg">
                    Download Resume
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
                    Let&apos;s Talk
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}