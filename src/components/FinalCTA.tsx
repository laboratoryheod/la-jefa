import { motion } from "framer-motion";

interface FinalCTAProps {
  onParticipateClick?: () => void;
}

const FinalCTA = ({ onParticipateClick }: FinalCTAProps) => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-radial opacity-40" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-20 animate-pulse" style={{ background: "radial-gradient(circle, hsl(45 100% 50%), transparent)" }} />

    <div className="container relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-black mb-4">
          ¿Listo para <span className="text-yellow-400 glow-text-gold">ganar</span>?
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
          No dejes pasar esta oportunidad. Los cupos son limitados.
        </p>
        <button 
          onClick={onParticipateClick}
          className="btn-glow text-lg animate-pulse-glow inline-block"
        >
          Participa Ahora
        </button>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
