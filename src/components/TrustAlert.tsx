import { motion } from "framer-motion";
import { ShieldAlert } from "lucide-react";

const TrustAlert = () => (
  <section className="py-16">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto rounded-2xl p-8 text-center"
        style={{ background: "linear-gradient(135deg, hsl(0 60% 15%), hsl(0 40% 10%))" }}
      >
        <ShieldAlert className="w-12 h-12 text-destructive mx-auto mb-4" />
        <h2 className="text-2xl font-black mb-4">⚠️ IMPORTANTE ⚠️</h2>
        <p className="text-muted-foreground mb-4">
          Verifica siempre el nombre del destinatario antes de realizar cualquier pago. Evita estafas comprando solo por nuestros canales oficiales.
        </p>
        <div className="inline-block bg-background/40 rounded-xl px-6 py-3 neon-border">
          <p className="text-xs text-muted-foreground mb-1">Nombre oficial del negocio</p>
          <p className="text-lg font-black text-primary glow-text-primary">LA JEFA SORTEOS</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default TrustAlert;
