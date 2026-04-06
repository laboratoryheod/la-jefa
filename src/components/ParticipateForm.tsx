import { useState } from "react";
import { X } from "lucide-react";

interface ParticipateFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ParticipateForm = ({ isOpen, onClose }: ParticipateFormProps) => {
  const [formData, setFormData] = useState({
    dni: "",
    fullName: "",
    phoneNumber: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    // Aquí puedes agregar la lógica para enviar los datos
    alert("¡Formulario enviado con éxito! Nos pondremos en contacto contigo pronto.");
    onClose();
    setFormData({ dni: "", fullName: "", phoneNumber: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-card border border-border rounded-2xl p-8 max-w-md w-full neon-border">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-black text-white mb-2">
            <span className="text-yellow-400 glow-text-gold">Participa</span> en La Jefa
          </h2>
          <p className="text-muted-foreground">
            Completa tus datos para participar en nuestros sorteos
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* DNI */}
          <div>
            <label htmlFor="dni" className="block text-sm font-medium text-white mb-2">
              DNI
            </label>
            <input
              type="text"
              id="dni"
              name="dni"
              value={formData.dni}
              onChange={handleChange}
              required
              placeholder="12345678"
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
            />
          </div>

          {/* Nombre completo */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-white mb-2">
              Nombre Completo
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Juan Pérez García"
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
            />
          </div>

          {/* Teléfono */}
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-white mb-2">
              Número de Teléfono
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              placeholder="+51 999 888 777"
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full btn-glow text-base font-bold py-4 mt-6"
          >
            Enviar Participación
          </button>
        </form>

        {/* Footer note */}
        <p className="text-xs text-muted-foreground mt-4 text-center">
          Al enviar este formulario, aceptas nuestros términos y condiciones
        </p>
      </div>
    </div>
  );
};

export default ParticipateForm;
