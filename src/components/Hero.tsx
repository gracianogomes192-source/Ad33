import React, { useState } from 'react';
import { Calendar, Stethoscope, ChevronRight, Award, Layers, CalendarCheck, HeartHandshake, ShieldCheck } from 'lucide-react';
import heroReceptionImg from '../assets/images/hero_clinic_reception_1791102461723.jpg';

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreClick }) => {
  const [imageError, setImageError] = useState(false);

  const pillars = [
    {
      title: "Atendimento profissional",
      desc: "Corpo clínico dedicado com foco no rigor técnico e ético.",
      icon: Award,
    },
    {
      title: "Diversas especialidades",
      desc: "Cuidados integrados para todas as fases da sua vida e da sua família.",
      icon: Layers,
    },
    {
      title: "Marcação de consultas",
      desc: "Solicite o seu agendamento de forma simples, online e sem burocracia.",
      icon: CalendarCheck,
    },
    {
      title: "Atendimento humanizado",
      desc: "Ambiente acolhedor focado no seu conforto, escuta e bem-estar.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="inicio" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden bg-gradient-to-b from-sky-50/60 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100/80 text-sky-800 text-xs font-semibold tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
              <span>Centro de Saúde de Referência • Demonstração</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance">
              Cuidamos da sua saúde com profissionalismo e atenção.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Conheça os nossos serviços de saúde e solicite a sua consulta de forma simples e rápida.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-sky-700 hover:bg-sky-800 active:bg-sky-900 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Marcar consulta</span>
              </button>

              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 rounded-xl shadow-2xs transition-all cursor-pointer"
              >
                <Stethoscope className="w-5 h-5 text-sky-700" />
                <span>Conhecer especialidades</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Micro-trust indicators */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Atendimento de 2ª a Sábado</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                <span>Instalações Modernas & Acolhedoras</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                <span>Espaço Acessível e Confortável</span>
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-sky-900/10 border border-slate-100 bg-slate-100 aspect-16/10 sm:aspect-4/3">
                {!imageError ? (
                  <img
                    src={heroReceptionImg}
                    alt="Receção moderna do Centro Médico Atlântico"
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-sky-800 to-slate-900 text-white p-8 text-center">
                    <Stethoscope className="w-12 h-12 text-sky-300 mb-3" />
                    <p className="font-semibold text-lg">Centro Médico Atlântico</p>
                    <p className="text-xs text-sky-200 mt-1">Espaço acolhedor e tecnologia diagnóstica</p>
                  </div>
                )}

                {/* Subtle scrim for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none"></div>

                {/* Floating caption card */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-white/95 backdrop-blur-md rounded-xl border border-white/40 shadow-lg text-slate-800">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="text-xs font-bold text-slate-900">Receção Central & Triagem</p>
                      <p className="text-[11px] text-slate-500">Acolhimento com foco no paciente</p>
                    </div>
                    <span className="text-[11px] font-semibold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md">
                      Demonstração
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative soft glow */}
              <div className="absolute -top-6 -right-6 w-44 h-44 bg-sky-200/40 rounded-full blur-2xl -z-10 pointer-events-none"></div>
              <div className="absolute -bottom-6 -left-6 w-44 h-44 bg-blue-100/50 rounded-full blur-2xl -z-10 pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Highlight Section (4 key pillars requested in prompt) */}
        <div className="mt-16 pt-10 border-t border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-xs uppercase tracking-wider font-bold text-sky-700">
              Pilares do Nosso Cuidado
            </h2>
            <p className="text-xl font-bold text-slate-900 mt-1">
              Uma abordagem pensada para o seu conforto e tranquilidade
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl border border-slate-200/70 shadow-xs hover:shadow-md hover:border-sky-300 transition-all duration-200 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 group-hover:bg-sky-700 group-hover:text-white transition-colors flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-800 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
