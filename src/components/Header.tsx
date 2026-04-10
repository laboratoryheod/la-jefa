import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/logo.png";

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Sorteos", href: "#participar" },
  { name: "Ganadores", href: "#ganadores" },
  { name: "Cómo Participar", href: "#cómo-participar" },
  { name: "Contacto", href: "#contacto" }
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
      <div className="container flex items-center justify-between h-24 md:h-48">
        <a href="#" className="flex items-center gap-2 md:gap-2">
          <img
            src={logoImg}
            alt="La Jefa - Premios y Lotería"
            className="h-24 md:h-48 w-auto object-contain"
          />
          <span className="text-2xl md:text-6xl font-black tracking-tight">
            <span className="text-yellow-400 glow-text-gold">LA</span>{" "}
            <span className="text-white">JEFA</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="pill-nav">
              {link.name}
            </a>
          ))}
        </nav>

        <a href="#participar" className="hidden md:inline-flex btn-glow text-sm">
          Participar Ahora
        </a>

        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-card border-t border-border"
          >
            <nav className="flex flex-col p-4 gap-2" aria-label="Menú móvil">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="pill-nav text-center"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a href="#participar" className="btn-glow text-center mt-2 text-sm" onClick={() => setMobileOpen(false)}>
                Participar Ahora
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
