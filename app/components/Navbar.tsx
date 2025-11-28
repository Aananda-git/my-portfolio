"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const initialTheme = savedTheme === "dark" || (!savedTheme && systemPrefersDark);
    setDark(initialTheme);
    
    if (initialTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newDark = !dark;
    setDark(newDark);
    
    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" 
            : "bg-background/80 backdrop-blur-md border-b border-border/50"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="#hero" 
              className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              onClick={() => handleNavClick("#hero")}
            >
              Aananda.dev
            </Link>
          </motion.div>

          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="flex gap-8">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink asChild>
                    <Button
                      variant="ghost"
                      className={`relative px-3 py-2 transition-all duration-300 font-medium ${
                        activeSection === item.href.substring(1)
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      onClick={() => handleNavClick(item.href)}
                    >
                      {item.name}
                      {activeSection === item.href.substring(1) && (
                        <motion.div
                          layoutId="activeSection"
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Button>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="relative w-10 h-10 rounded-full hover:bg-primary/10 transition-colors"
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            >
              <motion.div
                initial={false}
                animate={{ rotate: dark ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {dark ? (
                  <FaSun className="text-amber-500 text-lg" />
                ) : (
                  <FaMoon className="text-purple-600 text-lg" />
                )}
              </motion.div>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden w-10 h-10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileMenuOpen ? (
                  <FaTimes className="text-lg" />
                ) : (
                  <FaBars className="text-lg" />
                )}
              </motion.div>
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Button
                      variant="ghost"
                      className={`w-full justify-start text-lg p-4 transition-all duration-300 ${
                        activeSection === item.href.substring(1)
                          ? "text-primary bg-primary/10 border-l-4 border-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent/10"
                      }`}
                      onClick={() => handleNavClick(item.href)}
                    >
                      {item.name}
                    </Button>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-4 border-t border-border"
                >
                  <Button
                    className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity"
                    onClick={() => handleNavClick("#contact")}
                  >
                    Get In Touch
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}