import { motion } from "framer-motion";
import { Mail, Linkedin, Globe, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground py-20 relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6">Let's Connect</h2>
            <p className="text-secondary-foreground/70 text-lg mb-8 max-w-md">
              Open to academic collaborations, research discussions, and speaking opportunities.
            </p>
            
            <a 
              href="mailto:soumya.pal@krea.edu.in" 
              className="inline-flex items-center gap-3 text-2xl font-serif font-bold hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent pb-1 mb-10"
            >
              <Mail className="w-6 h-6" />
              soumya.pal@krea.edu.in
            </a>

            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full bg-white/10 border-white/20 hover:bg-white/20 text-white">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-white/10 border-white/20 hover:bg-white/20 text-white">
                <BookOpen className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-white/10 border-white/20 hover:bg-white/20 text-white">
                <Globe className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="md:text-right">
            <h3 className="text-lg font-bold mb-4 opacity-50 uppercase tracking-widest">Affiliation</h3>
            <p className="text-xl mb-6">
              Assistant Professor<br />
              IFMR Graduate School of Business<br />
              Krea University
            </p>
            <p className="text-sm opacity-50">
              © {new Date().getFullYear()} Dr. Soumya Pal. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
