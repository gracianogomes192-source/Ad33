import React, { useState } from 'react';
import { CheckCircle2, Shield, Clock, Heart, Sparkles } from 'lucide-react';
import consultationImg from '../assets/images/clinic_consultation_room_1791102473881.jpg';

export const AboutSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  const features = [
    {
      title: "Instalações modernas e acolhedoras",
      desc: "Gabinetes médicos preparados para proporcionar conforto, privacidade e higiene rigorosa.",
    },
    {
      title: "Abordagem multidisciplinar",
      desc: "Diferentes áreas médicas coordenadas para compreender o quadro clínico na totalidade.",
    },
    {
      title: "Agendamento ágil e organizado",
      desc: "Respeito rigoroso pelos horários marcados para minimizar tempos de espera desnecessários.",
    },
    {
      title: "Ambiente acessível para todos",
      desc: "Instalações adaptadas para pessoas com mobilidade reduzida, famílias e seniores.",
    },
  ];

  return (
    <section id="sobre" className="py-16 lg:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-100 aspect-4/3">
                {!imageError ? (
                  <img
                    src={consultationImg}
                    alt="Gabinete médico demonstrativo do Centro Médico Atlântico"
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-slate-800 text-white p-8 text-center">
                    <Heart className="w-10 h-10 text-sky-400 mb-2" />
                    <p className="font-semibold">Espaço Clínico</p>
                    <p className="text-xs text-slate-300">Ambiente seguro e humanizado</p>
                  </div>
                )}
              </div>

              {/* Informative floating badge */}
              <div className="mt-4 sm:mt-0 sm:absolute -bottom-6 -right-6 bg-slate-900 text-white p-5 rounded-2xl shadow-xl max-w-xs border border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-sky-500/20 text-sky-400 rounded-lg shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">Cuidado Centrado em Si</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Foco no bem-estar e na prevenção contínua.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider font-bold text-sky-700">
                Quem Somos
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Sobre o Centro Médico Atlântico
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 leading-relaxed text-base">
              <p>
                O <strong className="text-slate-800">Centro Médico Atlântico</strong> é um espaço concebido para oferecer cuidados de saúde integrados, reunindo diversas valências médicas num só local para maior comodidade e proximidade dos pacientes.
              </p>
              <p>
                A nossa missão concentra-se em aliar o rigor do conhecimento clínico contemporâneo a uma atenção verdadeiramente individualizada e acolhedora, garantindo que cada utente recebe o tempo e a dedicação necessários para o cuidado da sua saúde.
              </p>
              <p className="text-xs text-slate-500 bg-sky-50/60 p-3 rounded-xl border border-sky-100">
                <em>*Nota de demonstração: Este texto integra o protótipo digital concebido para apresentação de soluções web da SoluDigital. Todas as descrições refletem uma estrutura modelo para clínicas e centros médicos.</em>
              </p>
            </div>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{feat.title}</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-normal">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
