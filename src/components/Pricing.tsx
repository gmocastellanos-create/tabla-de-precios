import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Pricing() {
  const [expandedPlan, setExpandedPlan] = useState<number | null>(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const plans = [
    { 
      name: "Vitrina de Conversión", 
      price: "$750.000", 
      features: ["1 Página de Alto Impacto", "Formulario CRM", "Botón WhatsApp", "SEO On-page"],
      fullDetails: "Ideal para campañas de posicionamiento rápido. Incluye diseño responsivo, optimización de velocidad y configuración de píxeles para seguimiento de audiencia.",
      color: "border-primary-container/20"
    },
    { 
      name: "Ecosistema de Autoridad", 
      price: "$1.200.000", 
      features: ["5 Secciones de Prestigio", "SEO Avanzado", "Chatbot IA Básico", "Diseño UI/UX de Élite"], 
      featured: true,
      fullDetails: "La solución definitiva para marcas que buscan trascender. Incluye: Hub Central, Historia, Servicios, Blog de Autoridad y Contacto. Diseño 100% exclusivo.",
      color: "border-primary-container"
    },
    { 
      name: "Hub de Negocios", 
      price: "$1.800.000", 
      features: ["Vitrina de Productos Ilimitada", "Pasarela de Pagos", "Panel de Control", "Gestión Automatizada"],
      fullDetails: "Tu plataforma de negocios 24/7. Configuración de pasarela de pagos, gestión de inventario inteligente y capacitación para dominar tu plataforma.",
      color: "border-primary-container/20"
    }
  ];

  return (
    <section id="planes" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-semibold tracking-tighter uppercase mb-4">Oferta Educativa</h2>
        <p className="text-xs font-black text-on-surface-variant uppercase tracking-[0.3em]">* No incluye hosting ni dominio</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-12 items-start">
        {plans.map((plan, i) => (
          <motion.div 
            key={i}
            {...fadeIn}
            transition={{ delay: i * 0.1 }}
            className={cn(
              "neumorphic-raised p-10 rounded-[3rem] bg-surface flex flex-col neumorphic-card-hover border-t-4",
              plan.featured ? "scale-105 z-10 border-primary-container" : "border-transparent"
            )}
          >
            {plan.featured && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-container text-on-primary-container px-6 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                Más Popular
              </div>
            )}
            <h3 className="text-xl font-semibold uppercase tracking-widest mb-2">{plan.name}</h3>
            <div className="text-4xl font-black text-primary-container mb-10">{plan.price} <span className="text-xs text-on-surface-variant">COP</span></div>
            
            <ul className="space-y-4 mb-8">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <CheckCircle2 className="w-5 h-5 text-primary-container" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mb-8">
              <button 
                onClick={() => setExpandedPlan(expandedPlan === i ? null : i)}
                className="flex items-center justify-between w-full p-4 rounded-xl neumorphic-sunken bg-surface-container-lowest text-[10px] font-black uppercase tracking-widest text-primary-container"
              >
                {expandedPlan === i ? "Ver Menos" : "Ver Detalles"}
                {expandedPlan === i ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              <AnimatePresence>
                {expandedPlan === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="p-4 text-xs text-on-surface-variant leading-relaxed border-l-2 border-primary-container/20 mt-2">
                      {plan.fullDetails}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a 
              href="https://wa.me/573138137910"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "w-full py-5 rounded-2xl font-black uppercase tracking-widest transition-all neumorphic-button-active text-center",
                plan.featured ? "bg-primary-container text-on-primary-container" : "neumorphic-sunken bg-surface-container-lowest text-on-surface"
              )}
            >
              Seleccionar Plan
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
