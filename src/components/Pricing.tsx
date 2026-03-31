import { motion } from "framer-motion";

const Pricing = () => (
  <section id="participar" className="py-20">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-md mx-auto card-neon neon-border text-center p-8"
      >
        <span className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase bg-secondary/10 text-secondary mb-4">
          Precio por ticket
        </span>
        <div className="text-5xl font-black text-primary glow-text-primary mb-2">
          S/ 10.00
        </div>
        <p className="text-muted-foreground mb-6">Participa fácilmente desde tu celular</p>

        <div className="bg-muted/50 rounded-xl p-4 mb-6 space-y-2">
          <p className="text-sm font-semibold">Métodos de pago</p>
          <div className="flex justify-center gap-4 text-lg font-bold">
            <span className="text-primary">Yape</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-secondary">Plin</span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            A nombre de: <span className="text-foreground font-semibold">María García López</span>
          </p>
        </div>

        <a href="#" className="btn-glow w-full block text-lg animate-pulse-glow">
          ¡PARTICIPAR AHORA!
        </a>
      </motion.div>
    </div>
  </section>
);

export default Pricing;
