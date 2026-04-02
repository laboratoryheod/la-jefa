import { useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import winner1 from "@/assets/winner-1.jpg";
import winner2 from "@/assets/winner-2.jpg";
import winner3 from "@/assets/winner-3.jpg";

const winners = [
  { name: "Carlos M.", image: winner1 },
  { name: "Ana L.", image: winner2 },
  { name: "Diego R.", image: winner3 },
  { name: "Lucía P.", image: winner1 },
  { name: "Pedro S.", image: winner2 },
];

const Winners = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>();
  const pausedRef = useRef(false);

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 280, behavior: "smooth" });
  };

  const autoScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el || pausedRef.current) {
      animRef.current = requestAnimationFrame(autoScroll);
      return;
    }
    el.scrollLeft += 0.5;
    // Loop back when reaching the end
    if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
      el.scrollLeft = 0;
    }
    animRef.current = requestAnimationFrame(autoScroll);
  }, []);

  useEffect(() => {
    animRef.current = requestAnimationFrame(autoScroll);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [autoScroll]);

  return (
    <section id="ganadores" className="py-20 bg-card/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-black mb-3">
            Ganadores <span className="text-primary glow-text-primary">Reales</span>
          </h2>
          <p className="text-muted-foreground">Personas reales que ya cambiaron su vida</p>
        </motion.div>

        <div className="relative">
          <button onClick={() => scroll(-1)} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary transition-colors" aria-label="Anterior">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => scroll(1)} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary transition-colors" aria-label="Siguiente">
            <ChevronRight className="w-5 h-5" />
          </button>

          <div ref={scrollRef} onMouseEnter={() => (pausedRef.current = true)} onMouseLeave={() => (pausedRef.current = false)} className="flex gap-5 overflow-x-auto scrollbar-hide px-12 py-2 snap-x snap-mandatory" style={{ scrollbarWidth: "none" }}>
            {winners.map((w, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex-shrink-0 w-56 snap-center"
              >
                <div className="card-neon group relative overflow-hidden">
                  <img src={w.image} alt={`Ganador ${w.name}`} loading="lazy" width={512} height={512} className="w-full h-56 object-cover rounded-xl" />
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
                    <button className="btn-glow text-xs flex items-center gap-1">
                      <ExternalLink size={14} /> Ver publicación
                    </button>
                  </div>
                  <div className="mt-3">
                    <p className="font-bold">{w.name}</p>
                    <p className="text-xs text-primary">✓ Ganador verificado</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Winners;
