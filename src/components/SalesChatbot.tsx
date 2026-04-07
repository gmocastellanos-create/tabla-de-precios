import { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, ThinkingLevel } from "@google/genai";
import { MessageSquare, Send, X, Bot, User, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export default function SalesChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '¡Hola! Soy tu consultor de **Soluciones Digitales**. Te ayudamos a escalar tu negocio con tecnología de élite. ¿Te gustaría conocer nuestros precios de Landing Pages o los bonos exclusivos de este mes?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    const newMessages = [...messages, { role: 'user', text: userMessage } as Message];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // Usamos process.env.GEMINI_API_KEY que es inyectado por Google AI Studio
      const apiKey = process.env.GEMINI_API_KEY;
      
      if (!apiKey) {
        throw new Error("API Key no detectada. Asegúrate de que esté configurada en el panel de Secretos.");
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const history = messages.slice(1).map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }));

      const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
        history: history.slice(-10),
        config: {
          systemInstruction: `Eres el Consultor de Estrategia Digital de Élite para "Soluciones Digitales". 
          Tu misión es transformar visitantes en prospectos calificados, proyectando autoridad y exclusividad.

          REGLAS CRÍTICAS DE RESPUESTA:
          1. BREVEDAD ABSOLUTA: Tus respuestas deben ser cortas, directas y al grano. Evita párrafos largos.
          2. LLAMADA A LA ACCIÓN (CTA): En cada respuesta, sugiere sutilmente que para una estrategia personalizada o cerrar detalles, lo ideal es hablar directamente con un asesor experto (haciendo clic en "Comenzar" o vía WhatsApp).
          3. ENFOQUE EN VENTAS: No des demasiados detalles técnicos gratuitos; despierta el interés y dirige al usuario hacia el cierre con un humano.

          NUESTRA FILOSOFÍA:
          No vendemos "páginas web". Construimos "Ecosistemas de Autoridad" y "Plataformas de Posicionamiento".

          SERVICIOS Y PRECIOS (COP):
          - Vitrina de Conversión: $750,000.
          - Ecosistema de Autoridad: $1,200,000.
          - Hub de Negocios: $1,800,000.
          
          DIFERENCIALES:
          - Mantenimiento $0 (Propiedad total).
          - Diseño Neumórfico de Vanguardia.
          - Bonos: Base de datos 70k, Masterclass IA y WhatsApp Masivo.

          TONO:
          - Sofisticado, ejecutivo y persuasivo.
          - Usa negritas para impacto.
          - Si el usuario muestra interés real, di: "Para concretar esta visión en tu negocio, te sugiero agendar una breve llamada con nuestro asesor principal. ¿Te gustaría el enlace?"`,
          thinkingConfig: { thinkingLevel: ThinkingLevel.LOW }
        },
      });

      const response = await chat.sendMessage({ message: userMessage });
      const text = response.text || "Disculpa, tuve un error de conexión. ¿Podrías repetir tu pregunta?";
      
      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Lo siento, el servicio de IA no está respondiendo en este momento. Por favor, intenta de nuevo en unos segundos o contacta a soporte vía WhatsApp." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-8 right-8 z-50 p-4 rounded-full neumorphic-raised bg-surface-container-high text-primary-container transition-all hover:scale-110 active:scale-95",
          isOpen && "hidden"
        )}
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-8 right-8 z-50 w-[90vw] md:w-[400px] h-[600px] flex flex-col neumorphic-raised bg-surface-container rounded-3xl overflow-hidden border border-outline-variant/20 shadow-2xl"
          >
            {/* Header */}
            <div className="p-4 bg-surface-container-high flex justify-between items-center border-b border-outline-variant/10">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-surface neumorphic-sunken">
                  <Bot className="w-5 h-5 text-primary-container" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Soporte Soluciones Digitales</h3>
                  <p className="text-[10px] text-primary-container uppercase tracking-widest font-black">Asesor IA Activo</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:text-primary-container transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-hide bg-[#0a0a0a]">
              {messages.map((msg, i) => (
                <div key={i} className={cn("flex gap-3 max-w-[85%]", msg.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto")}>
                  <div className={cn("p-2 rounded-full h-fit neumorphic-raised", msg.role === 'user' ? "bg-surface-container-highest" : "bg-surface")}>
                    {msg.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-primary-container" />}
                  </div>
                  <div className={cn("p-4 rounded-2xl text-sm leading-relaxed", msg.role === 'user' ? "bg-[#1a1a1a] text-white neumorphic-sunken" : "bg-[#222222] text-gray-200 neumorphic-raised")}>
                    <div className="prose prose-invert prose-sm max-w-none">
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3 mr-auto">
                  <div className="p-2 rounded-full h-fit neumorphic-raised bg-surface">
                    <Loader2 className="w-4 h-4 text-primary-container animate-spin" />
                  </div>
                  <div className="p-4 rounded-2xl bg-surface neumorphic-raised text-sm text-gray-400">Generando respuesta...</div>
                </div>
              )}
            </div>

            {/* Input Box */}
            <div className="p-4 bg-surface-container-high border-t border-outline-variant/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Pregunta por la Web Pro..."
                  className="flex-grow bg-[#050505] text-white border-none rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-primary-container"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading}
                  className="p-3 rounded-xl neumorphic-raised bg-surface-container-highest text-primary-container hover:scale-105 transition-all disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}