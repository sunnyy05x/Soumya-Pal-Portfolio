import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const papers = [
  {
    title: "Inequality in length of life in India: an empirical analysis",
    journal: "Journal of Population Research, 2022",
    type: "Published",
    tags: ["Demography", "Inequality"],
  },
  {
    title: "Chronic respiratory disease mortality and its associated factors in selected Asian countries",
    journal: "BMC Public Health, 2021",
    type: "Published",
    tags: ["Health Economics", "Mortality"],
  },
  {
    title: "Smog at the Downstream: Abatement Cost of Delay in Paddy Cultivation",
    journal: "Working Paper",
    type: "Working Paper",
    tags: ["Climate Change", "Agriculture"],
  },
];

const interests = [
  "Economics of Climate Change",
  "Environmental Regulation",
  "Air Pollution Modeling",
  "Gender & Health Economics",
];

function PaperCard({ paper, index }: { paper: typeof papers[0]; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative border border-border/50 bg-card rounded-xl px-8 py-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <Badge variant={paper.type === "Published" ? "default" : "secondary"} className="mb-2">
            {paper.type}
          </Badge>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
        
        <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">
          {paper.title}
        </h3>
        <p className="text-muted-foreground font-medium mb-6">{paper.journal}</p>
        
        <div className="flex gap-2 flex-wrap">
          {paper.tags.map(tag => (
            <span key={tag} className="text-xs text-muted-foreground/70 bg-secondary/5 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Research() {
  return (
    <section id="research" className="py-24 bg-secondary/5">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Research</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Exploring the intersection of mathematical models and human welfare.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {papers.map((paper, i) => (
            <PaperCard key={i} paper={paper} index={i} />
          ))}
        </div>

        <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-serif font-bold mb-4">Research Interests</h3>
              <p className="text-primary-foreground/80 mb-0">Areas of focus and specialization.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {interests.map((item, i) => (
                <span 
                  key={i}
                  className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
