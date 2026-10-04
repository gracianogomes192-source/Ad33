import React, { useState } from 'react';
import { MessageCircle, X, ExternalLink, Send } from 'lucide-react';
import { CLINIC_CONFIG } from '../data/medicalData';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');

  const { phoneNumber, displayNumber, defaultMessage } = CLINIC_CONFIG.whatsapp;

  const handleSend = (text?: string) => {
    const messageToSend = encodeURIComponent(text || userMsg || defaultMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${messageToSend}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating CTA in bottom right corner */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Falar pelo WhatsApp com o Centro Médico Atlântico"
          className="flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-400"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full animate-ping"></span>
          </div>
          <span className="text-xs sm:text-sm font-bold tracking-tight whitespace-nowrap">
            Falar pelo WhatsApp
          </span>
        </button>
      </div>

      {/* Mini-Chat / Quick contact dialog */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          {/* Header */}
          <div className="bg-emerald-700 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
                <MessageCircle className="w-6 h-6 fill-white text-emerald-700" />
              </div>
              <div>
                <h4 className="text-sm font-bold">Centro Médico Atlântico</h4>
                <p className="text-[11px] text-emerald-100">Atendimento e Marcações (Demo)</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Fechar diálogo do WhatsApp"
              className="text-white/80 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 space-y-3">
            <div className="bg-white p-3.5 rounded-xl rounded-tl-xs shadow-2xs border border-slate-100 text-xs text-slate-700 leading-relaxed">
              <p className="font-semibold text-slate-900 mb-1">Olá! Seja bem-vindo(a). 👋</p>
              <p>
                Como podemos ajudar hoje? Clique no botão abaixo para iniciar a conversa no WhatsApp demonstrativo.
              </p>
              <p className="text-[10px] text-slate-400 mt-2">
                Número configurado: <strong>{displayNumber}</strong>
              </p>
            </div>

            {/* Quick Prompts */}
            <div className="space-y-1.5 pt-1">
              <button
                onClick={() => handleSend("Gostaria de agendar uma consulta médica.")}
                className="w-full text-left text-xs text-emerald-800 bg-emerald-50/80 hover:bg-emerald-100 p-2 rounded-lg border border-emerald-200/60 transition-colors"
              >
                📅 Solicitar agendamento de consulta
              </button>
              <button
                onClick={() => handleSend("Qual o horário para colheitas de análises laboratoriais?")}
                className="w-full text-left text-xs text-emerald-800 bg-emerald-50/80 hover:bg-emerald-100 p-2 rounded-lg border border-emerald-200/60 transition-colors"
              >
                🔬 Informações sobre análises de laboratório
              </button>
            </div>

            {/* Custom text input */}
            <div className="pt-2 flex items-center gap-2">
              <input
                type="text"
                placeholder="Escreva a sua mensagem..."
                value={userMsg}
                onChange={(e) => setUserMsg(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSend();
                }}
                className="flex-1 px-3 py-2 text-xs bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-emerald-600"
              />
              <button
                onClick={() => handleSend()}
                className="p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors cursor-pointer"
                aria-label="Enviar mensagem no WhatsApp"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Footer notice */}
          <div className="p-2.5 bg-slate-100 border-t border-slate-200/60 text-center text-[10px] text-slate-500">
            Fácil configuração no arquivo <code>medicalData.ts</code>
          </div>

        </div>
      )}
    </>
  );
};
