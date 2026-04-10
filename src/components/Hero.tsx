import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import mototaxiImg from "@/assets/mototaxi-prize.jpg";

interface HeroProps {
  onParticipateClick?: () => void;
}

const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 12);

const Hero = ({ onParticipateClick }: HeroProps) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = targetDate.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 md:pt-48 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial opacity-60" />
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-10" style={{ background: "radial-gradient(circle, hsl(330 100% 48%), transparent)" }} />

      <div className="container relative z-10 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary neon-border mb-6">
              🔥 Sorteo Activo
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-4">
              GANA EN GRANDE CON{" "}
              <span className="text-primary glow-text-primary">LA JEFA</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Tu oportunidad de cambiar tu vida empieza hoy. Participa en nuestros sorteos y gana premios reales.
            </p>

            {/* Countdown */}
            <div className="flex gap-3 mb-8">
              {[
                { label: "Días", value: timeLeft.days },
                { label: "Hrs", value: timeLeft.hours },
                { label: "Min", value: timeLeft.minutes },
                { label: "Seg", value: timeLeft.seconds },
              ].map((item) => (
                <div key={item.label} className="card-neon text-center min-w-[64px] p-3">
                  <div className="text-2xl font-black text-primary">{String(item.value).padStart(2, "0")}</div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={onParticipateClick}
                className="btn-glow text-base animate-pulse-glow"
              >
                Comprar Ticket
              </button>
              <a href="#premios" className="btn-glow-pink text-base">
                Ver Premios
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="card-neon overflow-hidden neon-border animate-float">
              <div className="relative">
                <img
                  src={mototaxiImg}
                  alt="Premio principal: Mototaxi 0KM"
                  width={800}
                  height={600}
                  className="w-full h-64 sm:h-80 object-cover rounded-xl"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase bg-secondary text-secondary-foreground glow-secondary">
                  1er Premio
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold">🛺 Mototaxi 0KM</h3>
                <p className="text-muted-foreground text-sm mt-1">Premio principal del sorteo</p>
                {/* Progress bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span>Tickets vendidos</span>
                    <span className="text-primary font-bold">67%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: "67%" }} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
