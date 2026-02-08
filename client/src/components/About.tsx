import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import profileImg from "@/assets/profile_new.png";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Image Side - 3D Tilt Effect could be added here, simplified for now */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-secondary/10 rounded-2xl transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
            <div className="relative overflow-hidden rounded-2xl aspect-[3/4] shadow-2xl border border-border/50">
              <img
                src={profileImg}
                alt="Dr. Soumya Pal"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-white font-medium">Assistant Professor, IFMR GSB</p>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I am an environmental economist with a PhD in Public Policy from the <strong className="text-foreground">Indian Institute of Management Bangalore (IIMB)</strong>.
              My work intersects health economics, environmental justice, and mathematical demography, seeking to understand the profound impacts of climate change on human populations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Currently, I teach Macroeconomics and Model Thinking at <strong className="text-foreground">IFMR Graduate School of Business</strong>.
              I strive to bridge the gap between theoretical models and real-world policy implications.
            </p>

            <div className="grid gap-6">
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-full bg-secondary/10 text-secondary mt-1">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl mb-1">Education</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>PhD, Public Policy, IIM Bangalore</li>
                    <li>M.Phil & M.Sc., Population Studies, IIPS Mumbai</li>
                    <li>B.Sc. Statistics, Patna University</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
