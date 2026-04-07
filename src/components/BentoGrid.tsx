import { motion } from 'motion/react';
import { Users, Bot, Smartphone, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function BentoGrid() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const solutions = [
    {
      title: "El Mercado",
      desc: "Te entregamos una Base de Datos de 70,000 potenciales clientes listos para ser contactados.",
      icon: <Users className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      colSpan: "md:col-span-2",
      color: "text-primary-container"
    },
    {
      title: "El Recurso",
      desc: "¿Frustrado por no saber qué publicar? Te enseñamos el recurso de IA para generar guiones, imágenes y videos de alto impacto en minutos.",
      icon: <Bot className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      colSpan: "md:col-span-1",
      color: "text-blue-400"
    },
    {
      title: "El Alcance",
      desc: "Licencia de 2 meses para Envíos Masivos por WhatsApp, optimizada para impactar en grupos.",
      icon: <Smartphone className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800",
      colSpan: "md:col-span-3",
      color: "text-green-400"
    }
  ];

  return (
    <section id="soluciones" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {solutions.map((item, i) => (
          <motion.div
            key={i}
            {...fadeIn}
            transition={{ delay: i * 0.1 }}
            className={cn(
              "neumorphic-raised p-8 rounded-[2.5rem] bg-surface flex flex-col gap-6 overflow-hidden relative group neumorphic-card-hover cursor-default",
              item.colSpan
            )}
          >
            <div className="relative z-10 transition-transform duration-500 group-hover:translate-x-2">
              <div className={cn(
                "w-16 h-16 neumorphic-sunken rounded-2xl flex items-center justify-center bg-surface-container-lowest mb-6 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(243,194,66,0.3)]", 
                item.color
              )}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold tracking-tight mb-4 transition-colors duration-500 group-hover:text-primary-container">{item.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed max-w-md transition-colors duration-500 group-hover:text-on-surface">{item.desc}</p>
            </div>
            
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 group-hover:opacity-100 transition-all duration-1000">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 contrast-125 scale-110 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-surface" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
