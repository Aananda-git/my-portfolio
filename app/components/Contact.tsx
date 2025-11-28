"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactMethods = [
    {
      icon: FaEnvelope,
      href: "mailto:aanandabhusal@gmail.com",
      label: "Email",
      text: "aanandabhusal@gmail.com",
      description: "Send me an email anytime"
    },
    {
      icon: FaGithub,
      href: "https://github.com/Aananda-git",
      label: "GitHub",
      text: "Aananda-git",
      description: "Check out my projects"
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/aananda-bhusal-555354283/",
      label: "LinkedIn",
      text: "Aananda Bhusal",
      description: "Let's connect professionally"
    },
  ];

  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="max-w-4xl mx-auto px-6">
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
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Connect</span>
            <div className="w-4 h-0.5 bg-primary rounded-full"></div>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto text-lg">
            I&apos;m always excited to discuss new opportunities, creative projects, or innovative ideas. 
            Let&apos;s create something amazing together!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <Link href={method.href} target="_blank" className="block">
                  <Card className="card-gradient border-border shadow-lg hover:shadow-xl transition-all duration-300 p-6 group hover:border-primary/50">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <method.icon className="text-primary-foreground text-xl" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{method.label}</h3>
                    <p className="text-primary font-medium text-sm mb-1">{method.text}</p>
                    <p className="text-muted-foreground text-xs">{method.description}</p>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
          >
            <Link href="mailto:aanandabhusal@gmail.com">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FaEnvelope className="mr-3" />
                Send Message
              </Button>
            </Link>
            
            <Link href="/Aananda_Resume.pdf" download>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg transition-all duration-300"
              >
                <FaFileDownload className="mr-3" />
                Download CV
              </Button>
            </Link>
          </motion.div>

          <motion.div 
            className="text-center mt-12 pt-8 border-t border-border"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-muted-foreground mb-6">
              Prefer a different way to connect? I&apos;m open to all possibilities!
            </p>
            <div className="flex justify-center gap-4">
              {contactMethods.map((social, index) => (
                <motion.div
                  key={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <Link href={social.href} target="_blank">
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-12 h-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-md hover:shadow-lg"
                      aria-label={social.label}
                    >
                      <social.icon className="text-xl" />
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}