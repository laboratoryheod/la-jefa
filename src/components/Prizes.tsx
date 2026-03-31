import { motion } from "framer-motion";
import mototaxiImg from "@/assets/mototaxi-prize.jpg";
import cashImg from "@/assets/cash-prize.jpg";

const prizes = [
  {
    emoji: "🛺",
    title: "1er Premio: Mototaxi 0KM",
    description: "Una mototaxi nueva de paquete, lista para trabajar",
    image: mototaxiImg,
    quantity: "1 unidad",
  },
  {
    emoji: "💰",
    title: "2do Premio: S/ 1,000",
    description: "Mil soles en efectivo directo a tu cuenta",
    image: cashImg,
    quantity: "1 ganador",
  },
];

const Prizes = () => (
  <section id="premios" className="py-20 relative">
    <div className="absolute inset-0 bg-gradient-radial opacity-30" />
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-black mb-3">
          Premios del <span className="text-primary glow-text-primary">Sorteo</span>
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Premios reales para ganadores reales. ¡No te quedes fuera!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {prizes.map((prize, i) => (
          <motion.div
            key={prize.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="card-neon group overflow-hidden"
          >
            <div className="overflow-hidden rounded-xl mb-4">
              <img
                src={prize.image}
                alt={prize.title}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <span className="text-3xl">{prize.emoji}</span>
            <h3 className="text-lg font-bold mt-2">{prize.title}</h3>
            <p className="text-muted-foreground text-sm mt-1">{prize.description}</p>
            <span className="inline-block mt-3 text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full">
              {prize.quantity}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Prizes;
