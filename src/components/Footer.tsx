import { Facebook, Instagram, Music } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container text-center">
      <a href="#" className="text-3xl font-black inline-block mb-6">
        <span className="text-primary glow-text-primary">LA</span>{" "}
        <span className="text-foreground">JEFA</span>
      </a>

      <div className="flex justify-center gap-4 mb-6">
        {[
          { icon: Facebook, label: "Facebook", href: "#" },
          { icon: Instagram, label: "Instagram", href: "#" },
          { icon: Music, label: "TikTok", href: "#" },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
          >
            <s.icon size={18} />
          </a>
        ))}
      </div>

      <div className="flex justify-center gap-6 text-sm text-muted-foreground mb-6">
        <a href="#" className="hover:text-primary transition-colors">Términos y condiciones</a>
        <a href="#" className="hover:text-primary transition-colors">Política de privacidad</a>
      </div>

      <p className="text-xs text-muted-foreground">© 2025 La Jefa. Todos los derechos reservados.</p>
    </div>
  </footer>
);

export default Footer;
