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
    // eslint-disable-next-line react-hooks/set-state-in-effect
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
            ? "glass-effect border-b border-border/20 shadow-xl" 
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4 lg:p-6">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="#hero" 
              className="text-2xl font-bold text-gradient"
              onClick={() => handleNavClick("#hero")}
            >
              Aananda.dev
            </Link>
          </motion.div>

          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList className="flex gap-2 bg-background/80 backdrop-blur-md rounded-full p-1 border border-border/50 shadow-lg">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink asChild>
                    <Button
                      variant="ghost"
                      className={`relative px-6 py-2 transition-all duration-300 font-medium rounded-full ${
                        activeSection === item.href.substring(1)
                          ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent/10"
                      }`}
                      onClick={() => handleNavClick(item.href)}
                    >
                      {item.name}
                    </Button>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="relative w-12 h-12 rounded-full hover:bg-primary/10 transition-all duration-300 group border border-border/50 shadow-lg"
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            >
              <motion.div
                initial={false}
                animate={{ rotate: dark ? 180 : 0, scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5 }}
                className="relative w-6 h-6"
              >
                {dark ? (
                  <FaSun className="text-amber-400 text-xl group-hover:text-amber-300" />
                ) : (
                  <FaMoon className="text-purple-600 text-xl group-hover:text-purple-500" />
                )}
              </motion.div>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden w-12 h-12 rounded-full border border-border/50 shadow-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-lg"
              >
                {mobileMenuOpen ? (
                  <FaTimes className="text-foreground" />
                ) : (
                  <FaBars className="text-foreground" />
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
              className="lg:hidden glass-effect border-t border-border/20 backdrop-blur-lg"
            >
              <div className="px-6 py-8 space-y-3">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Button
                      variant="ghost"
                      className={`w-full justify-start text-lg p-4 transition-all duration-300 rounded-xl ${
                        activeSection === item.href.substring(1)
                          ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg"
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
                  className="pt-6 border-t border-border/30"
                >
                  <Button
                    className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-all duration-300 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl"
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
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}