import { motion } from "framer-motion";
import { ShoppingCart, Send, Tv } from "lucide-react";

const steps = [
  { icon: ShoppingCart, title: "Compra tu ticket", desc: "Elige cuántos tickets quieres y realiza el pago por Yape o Plin" },
  { icon: Send, title: "Envía tu comprobante", desc: "Manda la captura de tu pago por WhatsApp para confirmar tu participación" },
  { icon: Tv, title: "Espera el sorteo en vivo", desc: "Transmitimos en vivo por nuestras redes. ¡Podrías ser el próximo ganador!" },
];

const HowToParticipate = () => (
  <section id="cómo-participar" className="py-20 bg-card/50">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-black mb-3">
          Cómo <span className="text-primary glow-text-primary">Participar</span>
        </h2>
        <p className="text-muted-foreground">3 simples pasos para ganar</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="card-neon text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <step.icon className="w-8 h-8 text-primary" />
            </div>
            <span className="text-xs font-bold text-primary">Paso {i + 1}</span>
            <h3 className="text-lg font-bold mt-1 mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowToParticipate;
