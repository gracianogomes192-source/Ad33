import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, ExternalLink, Copy, Check, Navigation } from 'lucide-react';
import { CLINIC_CONFIG } from '../data/medicalData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CLINIC_CONFIG.contacts.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contactos" className="py-16 lg:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs uppercase tracking-wider font-bold text-sky-700">
            Canais de Comunicação
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contactos & Localização
          </h2>
          <p className="text-base sm:text-lg text-slate-600 text-balance">
            Estamos disponíveis para prestar esclarecimentos e apoiar no seu processo de marcação.
          </p>
          <div className="text-xs text-amber-800 bg-amber-50 px-3 py-1.5 rounded-lg inline-block border border-amber-200/70">
            Dados de contacto fictícios — projeto demonstrativo
          </div>
        </div>

        {/* Contacts & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Contact Cards Column */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            
            {/* Telefone */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 transition-all flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Telefone Geral</p>
                <p className="text-base font-bold text-slate-900 mt-0.5">{CLINIC_CONFIG.contacts.phone}</p>
                <p className="text-xs text-slate-500 mt-1">Atendimento telefónico em dias úteis</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 transition-all flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">WhatsApp</p>
                <p className="text-base font-bold text-slate-900 mt-0.5">{CLINIC_CONFIG.contacts.whatsapp}</p>
                <p className="text-xs text-slate-500 mt-1">Dúvidas rápidas e informações de agendamento</p>
              </div>
            </div>

            {/* Email */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 transition-all flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">E-mail</p>
                <p className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 truncate">{CLINIC_CONFIG.contacts.email}</p>
                <p className="text-xs text-slate-500 mt-1">Resposta habitual em 24h úteis</p>
              </div>
            </div>

            {/* Horários */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="flex-1 space-y-1.5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Horário de Atendimento</p>
                {CLINIC_CONFIG.contacts.hours.map((h, i) => (
                  <div key={i} className="flex justify-between text-xs text-slate-700">
                    <span className="font-medium">{h.days}:</span>
                    <span className="font-bold text-slate-900">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Map Column (Interactive demonstrative map element) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="h-full bg-slate-100 rounded-3xl border border-slate-200 p-6 flex flex-col justify-between relative overflow-hidden">
              
              {/* Map Canvas Mockup */}
              <div className="relative rounded-2xl bg-slate-200/90 border border-slate-300/80 overflow-hidden min-h-[300px] flex-1 flex flex-col items-center justify-center p-6 text-center shadow-inner">
                
                {/* SVG Visual Map Grid */}
                <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#cbd5e1" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  {/* Stylized road lines */}
                  <path d="M -10 120 Q 200 110 500 180 T 900 240" fill="none" stroke="#94a3b8" strokeWidth="10" strokeLinecap="round" opacity="0.6" />
                  <path d="M 300 -10 L 320 400" fill="none" stroke="#cbd5e1" strokeWidth="6" strokeDasharray="6 4" opacity="0.8" />
                  <path d="M 120 300 Q 300 250 600 320" fill="none" stroke="#64748b" strokeWidth="8" strokeLinecap="round" opacity="0.4" />
                </svg>

                {/* Central Pin */}
                <div className="relative z-10 flex flex-col items-center animate-bounce">
                  <div className="px-3.5 py-1.5 bg-slate-900 text-white rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5 mb-1 whitespace-nowrap">
                    <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                    Centro Médico Atlântico
                  </div>
                  <div className="w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center shadow-xl ring-4 ring-white">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>

                <div className="relative z-10 mt-6 bg-white/90 backdrop-blur-xs px-4 py-2 rounded-xl text-xs text-slate-700 shadow-sm border border-slate-200/80">
                  <p className="font-semibold text-slate-900">Mapa Demonstrativo</p>
                  <p className="text-[11px] text-slate-500">Visualização de posicionamento da clínica fictícia</p>
                </div>

              </div>

              {/* Address details bar */}
              <div className="mt-5 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                    <MapPin className="w-4 h-4 text-sky-700" />
                    <span>{CLINIC_CONFIG.contacts.address}</span>
                  </div>
                  <p className="text-xs text-slate-500 pl-5">
                    {CLINIC_CONFIG.contacts.metroRef} • {CLINIC_CONFIG.contacts.parkingRef}
                  </p>
                </div>

                <button
                  onClick={handleCopyAddress}
                  className="px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors inline-flex items-center gap-1.5 cursor-pointer shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copiar morada</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
