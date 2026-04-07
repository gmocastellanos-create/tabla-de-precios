import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Rocket, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  Bot,
  Layout,
  Star,
  Globe,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  ZapIcon,
  Users,
  Smartphone
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import BentoGrid from './components/BentoGrid';
import Pricing from './components/Pricing';
import MethodologyAccordion from './components/MethodologyAccordion';
import SalesChatbot from './components/SalesChatbot';

export default function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const WHATSAPP_URL = "https://wa.me/573138137910";

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="min-h-screen bg-surface selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary-container z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 neumorphic-raised rounded-xl flex items-center justify-center bg-surface group overflow-hidden">
              <Bot className="w-8 h-8 text-primary-container group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-black tracking-tighter uppercase text-primary-container">Soluciones</span>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-on-surface-variant">Digitales</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['Impacto', 'Soluciones', 'Valores', 'Bonus', 'Planes', 'Metodología', 'Testimonios'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                className="text-[10px] font-black text-on-surface-variant hover:text-primary-container transition-colors uppercase tracking-[0.2em]"
              >
                {item}
              </a>
            ))}
          </div>
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="neumorphic-raised neumorphic-button-active bg-surface px-6 py-2 rounded-xl text-sm font-black text-primary-container uppercase tracking-widest"
          >
            Comenzar
          </a>
        </div>
      </nav>

      {/* Impact Section: The Digital Reality */}
      <section id="impacto" className="pt-40 pb-20 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <span className="text-xs font-black text-primary-container uppercase tracking-[0.5em] mb-8 block">La Realidad Invisible</span>
            <h2 className="text-6xl md:text-8xl font-semibold tracking-tighter leading-[0.85] mb-12">
              Ser invisible es <br />
              <span className="text-primary-container">ser inexistente.</span>
            </h2>
            <p className="text-2xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto mb-16 font-medium">
              El 93% de las búsquedas definen el mercado. <br />
              <span className="text-on-surface">Sin autoridad, no hay negocio.</span>
            </p>
          </motion.div>

          <motion.div 
            style={{ y }}
            className="relative w-full aspect-video md:aspect-[21/9] neumorphic-raised p-4 rounded-[4rem] bg-surface overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
              alt="Digital Authority" 
              className="w-full h-full object-cover rounded-[3rem] grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-110 hover:scale-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent pointer-events-none" />
          </motion.div>
          
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-full h-full bg-primary-container/5 blur-[120px] -z-10" />
        </div>
      </section>

      {/* Hero Section */}
      <section id="hero" className="relative pt-20 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-container rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn}>
            <span className="text-xs font-black text-primary-container uppercase tracking-[0.4em] mb-6 block">
              Arquitectura de Prestigio
            </span>
            <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter leading-[0.9] mb-8">
              No diseñamos sitios; construimos tu <span className="text-primary-container">Ecosistema</span> de Autoridad.
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl mb-12 leading-relaxed">
              Tu lugar en internet no es una página, es tu <span className="text-on-surface font-bold">Vitrina de Posicionamiento</span>. Landing Page de Élite + Inteligencia de Datos + Estrategia de Contenido.
            </p>
            <div className="flex flex-wrap gap-6">
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="neumorphic-raised neumorphic-button-active bg-surface px-10 py-5 rounded-2xl font-black text-primary-container text-lg uppercase tracking-widest flex items-center gap-3 group"
              >
                ¡Empieza Ahora! <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-3 px-6">
                <ShieldCheck className="w-6 h-6 text-primary-container" />
                <span className="text-xs font-black uppercase tracking-widest">Garantía de Trascendencia</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative group/hero"
          >
            <div className="neumorphic-raised p-4 rounded-[3.5rem] bg-surface aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" 
                alt="Elite Digital Presence" 
                className="w-full h-full object-cover rounded-[3rem] grayscale group-hover/hero:grayscale-0 transition-all duration-700 contrast-110 brightness-90"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 neumorphic-raised p-8 rounded-3xl bg-surface-container-high max-w-[240px]">
              <div className="flex items-center gap-3 mb-3">
                <ZapIcon className="w-6 h-6 text-primary-container" />
                <span className="text-3xl font-black">70K+</span>
              </div>
              <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest leading-tight">Clientes Potenciales Listos</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Solutions */}
      <BentoGrid />

      {/* Added Values */}
      <section id="valores" className="bg-surface-container-low py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-semibold tracking-tighter uppercase mb-4">Arquitectura de Autoridad</h2>
            <p className="text-on-surface-variant uppercase tracking-widest text-sm">Estándares de élite incluidos en tu plataforma</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Propiedad Total", desc: "Mantenimiento $0 de por vida. Tu ecosistema digital es un activo real de tu empresa.", icon: <ShieldCheck /> },
              { title: "Diseño de Prestigio", desc: "Sin plantillas. Arquitectura visual diseñada para proyectar liderazgo inmediato.", icon: <Layout /> },
              { title: "Inteligencia 24/7", desc: "Chatbot IA de última generación para atención y filtrado de prospectos.", icon: <Bot /> },
              { title: "Estrategia de Élite", desc: "Asesoría en posicionamiento y desarrollo de contenido de alto impacto.", icon: <Sparkles /> }
            ].map((val, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2rem] neumorphic-sunken bg-surface-container-lowest flex flex-col gap-4 neumorphic-card-sunken-hover"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary-container/10 text-primary-container">
                  {val.icon}
                </div>
                <h4 className="font-semibold text-lg uppercase tracking-tight">{val.title}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Section (Indispensable) */}
      <section id="bonus" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold tracking-tighter uppercase mb-4">Bonos Indispensables</h2>
          <p className="text-xs font-black text-primary-container uppercase tracking-[0.3em]">Acelera tu posicionamiento</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Capacitación en Contenido",
              desc: "Aprende a desarrollar contenido de alto impacto para Instagram, TikTok y Facebook. Te enseñamos las estrategias de IA que funcionan hoy.",
              icon: <Users className="w-10 h-10" />,
              details: "Lo real, te enseñamos con aplicar la AI para generar contenido grafico"
            },
            {
              title: "Licencia WhatsApp Masivo",
              desc: "Envía mensajes a toda tu base de datos de forma segura y automatizada. La herramienta definitiva para remarketing de élite.",
              icon: <Smartphone className="w-10 h-10" />,
              details: "Incluye: Software de escritorio, tutorial de configuración y plantillas de mensajes persuasivos."
            }
          ].map((bonus, i) => (
            <motion.div 
              key={i}
              {...fadeIn}
              className="neumorphic-raised p-10 rounded-[2.5rem] bg-surface flex flex-col md:flex-row gap-8 items-start neumorphic-card-hover group"
            >
              <div className="w-20 h-20 neumorphic-sunken rounded-2xl flex items-center justify-center bg-surface-container-lowest flex-shrink-0">
                <div className="text-primary-container">{bonus.icon}</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold uppercase tracking-tight mb-4">{bonus.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-4">{bonus.desc}</p>
                <div className="p-4 rounded-xl bg-surface-container-low text-[10px] font-bold text-primary-container uppercase tracking-widest border border-primary-container/10">
                  {bonus.details}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Table */}
      <section id="planes">
        <Pricing />
      </section>

      {/* Methodology Accordion */}
      <section id="metodologia">
        <MethodologyAccordion />
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="py-32 px-6 max-w-7xl mx-auto border-t border-outline-variant/10">
        <div className="grid md:grid-cols-2 gap-12">
          {[
            { 
              name: "Mario Castro", 
              role: "Empresario Tech", 
              text: "La base de datos de 70k clientes fue el detonante que mi negocio necesitaba. La landing page convierte como ninguna otra que hayamos probado.",
              img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
            },
            { 
              name: "Guiomar Romero", 
              role: "Directora de Marketing", 
              text: "El diseño neomórfico proyecta una autoridad inmediata. La asesoría en contenido de IA nos ahorra horas de trabajo cada semana.",
              img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
            }
          ].map((t, i) => (
            <motion.div 
              key={i} 
              {...fadeIn}
              transition={{ delay: i * 0.2 }}
              className="neumorphic-sunken p-10 rounded-[3rem] bg-surface-container-lowest flex flex-col md:flex-row gap-8 relative neumorphic-card-sunken-hover"
            >
              <div className="w-24 h-24 rounded-full neumorphic-raised overflow-hidden flex-shrink-0 border-4 border-surface">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
              </div>
              <div>
                <p className="text-lg italic text-on-surface-variant mb-6 leading-relaxed">"{t.text}"</p>
                <div className="font-black text-primary-container uppercase tracking-widest text-sm">— {t.name}</div>
                <div className="text-[10px] font-bold text-on-surface-variant/50 uppercase tracking-widest">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 text-center">
        <motion.div 
          {...fadeIn}
          className="neumorphic-raised p-20 md:p-32 rounded-[4rem] bg-surface max-w-5xl mx-auto relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-primary-container/20" />
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-12 leading-tight">
            ¿Listo para dominar tu <span className="text-primary-container">presencia</span> digital?
          </h2>
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block neumorphic-sunken bg-surface-container-lowest px-16 py-8 rounded-3xl font-black text-2xl md:text-4xl text-primary-container hover:scale-105 transition-transform neumorphic-button-active uppercase tracking-tighter"
          >
            Agenda una asesoría gratuita hoy mismo
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <Bot className="w-8 h-8 text-primary-container" />
            <div className="flex flex-col leading-none">
              <span className="text-lg font-black tracking-tighter uppercase text-primary-container">Soluciones</span>
              <span className="text-[8px] font-bold tracking-[0.3em] uppercase text-on-surface-variant">Digitales</span>
            </div>
          </div>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">
            <a href="#" className="hover:text-primary-container transition-colors">Privacidad</a>
            <a href="#" className="hover:text-primary-container transition-colors">Términos</a>
            <a href="#" className="hover:text-primary-container transition-colors">Contacto</a>
          </div>
          <div className="text-[10px] font-bold text-on-surface-variant/30 uppercase tracking-widest">
            © 2024 Soluciones Digitales. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <SalesChatbot />
    </div>
  );
}
