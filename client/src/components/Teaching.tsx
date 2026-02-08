import { motion } from "framer-motion";
import { Book, Users, BarChart3, BrainCircuit, Award } from "lucide-react";

const courses = [
  { name: "Macroeconomics", audience: "MBA Students", icon: BarChart3 },
  { name: "Microeconomics", audience: "Undergraduate", icon: Users },
  { name: "Economics of Market", audience: "All Levels", icon: Book },
  { name: "Model Thinking", audience: "Advanced", icon: BrainCircuit },
];

const awards = [
  { title: "Tara Kanitkar IIPS Gold Medal", year: "2018", org: "International Institute for Population Sciences" },
  { title: "UGC Junior Research Fellowship", year: "2017", org: "Government of India" },
  { title: "Patna University Gold Medal", year: "2015", org: "Patna University" },
];

export function Teaching() {
  return (
    <section id="teaching" className="py-24 bg-background">
      <div className="container px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Teaching Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-primary mb-10">Teaching</h2>
            <div className="grid gap-4">
              {courses.map((course, i) => (
                <motion.div
                  key={course.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-6 rounded-xl border border-border/60 hover:border-primary/20 hover:bg-secondary/5 transition-colors group"
                >
                  <div className="p-3 bg-secondary/10 rounded-lg text-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <course.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg">{course.name}</h3>
                    <p className="text-sm text-muted-foreground">{course.audience}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Awards Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-primary mb-10">Awards & Recognition</h2>
            <div className="space-y-8 relative pl-8 border-l border-border/60">
              {awards.map((award, i) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative"
                >
                  <span className="absolute -left-[41px] top-1 p-2 bg-background border border-border rounded-full text-accent">
                    <Award className="w-4 h-4" />
                  </span>
                  <span className="text-sm font-bold text-accent tracking-widest block mb-1">{award.year}</span>
                  <h3 className="text-xl font-serif font-bold text-primary mb-1">{award.title}</h3>
                  <p className="text-muted-foreground">{award.org}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
