import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/51999999999?text=Hola%2C%20quiero%20participar%20en%20el%20sorteo"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    aria-label="Contactar por WhatsApp"
    style={{ boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)" }}
  >
    <MessageCircle className="w-7 h-7 text-foreground" />
  </a>
);

export default WhatsAppButton;
