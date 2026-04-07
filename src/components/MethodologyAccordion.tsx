import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Target, FileText, Users, Zap, BarChart3, Gift, CreditCard, Image as ImageIcon, Bot } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface AccordionItemProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ title, icon, children, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="mb-6">
      <button
        onClick={onClick}
        className={cn(
          "w-full flex items-center justify-between p-6 rounded-2xl transition-all duration-500 neumorphic-raised bg-surface group",
          isOpen ? "neumorphic-sunken bg-surface-container-low" : "hover:scale-[1.01]"
        )}
      >
        <div className="flex items-center gap-4">
          <div className={cn(
            "p-3 rounded-xl neumorphic-sunken bg-surface-container-lowest transition-colors duration-500",
            isOpen ? "text-primary-container" : "text-on-surface-variant group-hover:text-primary-container"
          )}>
            {icon}
          </div>
          <span className={cn(
            "text-lg font-black uppercase tracking-tight transition-colors duration-500",
            isOpen ? "text-on-surface" : "text-on-surface-variant group-hover:text-on-surface"
          )}>
            {title}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-on-surface-variant"
        >
          <ChevronDown />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-8 mt-2 rounded-2xl neumorphic-sunken bg-surface-container-lowest text-on-surface-variant leading-relaxed text-sm md:text-base">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function MethodologyAccordion() {
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    {
      title: "Encabezado de Impacto",
      icon: <Target className="w-6 h-6" />,
      content: "En este primer impacto captamos la atención absoluta. Transmitimos el destino al que conduciremos a tu cliente de forma atractiva, simple y directa. Es el anzuelo que garantiza que sigan leyendo."
    },
    {
      title: "Descripción Persuasiva",
      icon: <FileText className="w-6 h-6" />,
      content: "Ofrecemos una descripción detallada, informativa y persuasiva de tu servicio. Destacamos las características y ventajas únicas que te hacen la opción lógica e indiscutible."
    },
    {
      title: "Pruebas Sociales de Élite",
      icon: <Users className="w-6 h-6" />,
      content: "Casos de éxito que demuestran transformación real. Transmitimos la eficacia y precisión de tu trabajo a través de testimonios, datos estadísticos y reconocimientos que avalan tu autoridad."
    },
    {
      title: "Oferta Irresistible por Fases",
      icon: <Zap className="w-6 h-6" />,
      content: "Desvelamos tu oferta por etapas, solucionando cada pequeño problema de tu cliente. Enfatizamos qué te hace diferente del resto del mercado para que la decisión de compra sea inevitable."
    },
    {
      title: "Ventajas y Beneficios Claros",
      icon: <BarChart3 className="w-6 h-6" />,
      content: "Sintetizamos los beneficios principales para dibujar un destino claro y nítido en la mente de tu cliente. Usamos una narrativa simple para que entiendan exactamente qué van a conseguir."
    },
    {
      title: "Bonos y Garantías de Confianza",
      icon: <Gift className="w-6 h-6" />,
      content: "Elevamos el valor percibido disparando la sensación de beneficio por encima del precio. Incluimos garantías de satisfacción o devolución para eliminar cualquier riesgo percibido y transmitir seguridad total."
    },
    {
      title: "Precio y Llamada a la Acción",
      icon: <CreditCard className="w-6 h-6" />,
      content: "Estrategia de cierre optimizada. Ya sea conduciendo al pago directo o a una sesión estratégica, diseñamos CTAs fáciles de ver y entender que maximizan tu tasa de conversión."
    },
    {
      title: "Excelencia Visual y Marca",
      icon: <ImageIcon className="w-6 h-6" />,
      content: "Cuidamos tu imagen al extremo. Una marca bien trabajada vende más porque proyecta profesionalismo y cuidado. Mimamos cada detalle visual para que tu impacto sea memorable y conecte emocionalmente."
    }
  ];

  return (
    <section className="py-20 px-6 bg-surface">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => setIsSectionOpen(!isSectionOpen)}
          className={cn(
            "w-full neumorphic-raised p-10 rounded-[3rem] bg-surface-container-low flex items-center justify-between group transition-all duration-500",
            isSectionOpen ? "neumorphic-sunken bg-surface-container-lowest" : "hover:scale-[1.02]"
          )}
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 neumorphic-sunken rounded-2xl flex items-center justify-center bg-surface-container-lowest text-primary-container">
              <Bot className="w-8 h-8" />
            </div>
            <div className="text-left">
              <h2 className="text-3xl font-semibold tracking-tighter uppercase mb-1">Nuestra Arquitectura de Conversión</h2>
              <p className="text-xs font-black text-on-surface-variant uppercase tracking-[0.3em]">Haz clic para desglosar nuestra estrategia</p>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isSectionOpen ? 180 : 0 }}
            className="text-primary-container"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </button>

        <AnimatePresence>
          {isSectionOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-12 space-y-4">
                {items.map((item, index) => (
                  <AccordionItem
                    key={index}
                    title={item.title}
                    icon={item.icon}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    {item.content}
                  </AccordionItem>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
