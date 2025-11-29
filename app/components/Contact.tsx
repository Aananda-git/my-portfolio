"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaMapMarkerAlt } from "react-icons/fa";
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
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=aanandabhusal199@gmail.com",
      label: "Email",
      text: "aanandabhusal199@gmail.com",
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
    {
      icon: FaMapMarkerAlt,
      href: "#",
      label: "Location",
      text: "Amsterdam, Netherlands",
      description: "Based in Europe"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-card/20 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
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
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
              <div className="w-8 h-0.5 bg-primary rounded-full" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I&apos;m always excited to discuss new opportunities, creative projects, or innovative ideas. 
              Let&apos;s create something amazing together!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center"
              >
                <Link href={method.href} target={method.href !== "#" ? "_blank" : undefined} className="block">
                  <Card className="card-gradient border-border/50 shadow-xl hover:shadow-2xl transition-all duration-300 p-6 group hover:border-primary/50 h-full">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <method.icon className="text-primary-foreground text-2xl" />
                      </div>
                    </div>
                    <h3 className="font-bold text-foreground mb-3 text-lg">{method.label}</h3>
                    <p className="text-primary font-semibold text-base mb-2">{method.text}</p>
                    <p className="text-muted-foreground text-sm">{method.description}</p>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-12 border border-primary/20 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Whether you&apos;re looking to build a new application, improve an existing one, or just want to chat about technology, I&apos;d love to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=aanandabhusal199@gmail.com">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-2xl transform hover:scale-105 px-10 py-6 text-lg font-semibold rounded-2xl shadow-xl transition-all duration-300"
                >
                  <FaEnvelope className="mr-3 text-xl" />
                  Send Message
                </Button>
              </Link>
              
              <Link href="/Resume_Aananda.pdf" download>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105"
                >
                  <FaFileDownload className="mr-3 text-xl" />
                  Download CV
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="text-center mt-16 pt-12 border-t border-border/30"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-muted-foreground text-lg mb-8 font-medium">
              Connect with me on social platforms
            </p>
            <div className="flex justify-center gap-6">
              {contactMethods.slice(0, 3).map((social, index) => (
                <motion.div
                  key={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <Link href={social.href} target="_blank">
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-16 h-16 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl"
                      aria-label={social.label}
                    >
                      <social.icon className="text-2xl" />
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