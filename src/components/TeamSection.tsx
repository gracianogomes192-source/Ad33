import React from 'react';
import { UserCheck, ShieldAlert, Award } from 'lucide-react';
import { DEMO_DOCTORS } from '../data/medicalData';

interface TeamSectionProps {
  onSelectDoctorForBooking: (specialty: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onSelectDoctorForBooking }) => {
  return (
    <section id="equipa" className="py-16 lg:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs uppercase tracking-wider font-bold text-sky-700">
            Corpo Clínico Exemplificativo
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Nossa Equipa
          </h2>
          <p className="text-base sm:text-lg text-slate-600 text-balance">
            Conheça a disposição dos perfis demonstrativos de profissionais de saúde estruturados para este projeto.
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-medium">
            <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
            <span>Perfis, nomes e credenciais fictícios — Exclusivamente para demonstração visual.</span>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEMO_DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 hover:border-sky-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Avatar Mockup */}
                <div className="relative mb-5 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-sky-700 to-sky-500 text-white flex items-center justify-center font-bold text-2xl shadow-inner group-hover:scale-105 transition-transform">
                    {doc.avatarInitials}
                  </div>
                  <span className="absolute bottom-0 right-1/4 bg-sky-100 text-sky-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-white">
                    Exemplo
                  </span>
                </div>

                <div className="text-center space-y-1">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-800 transition-colors">
                    {doc.name}
                  </h3>
                  <p className="text-xs font-semibold text-sky-700">
                    {doc.specialty}
                  </p>
                  <p className="text-xs text-slate-500 pt-2 leading-relaxed">
                    {doc.bio}
                  </p>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-200/60 text-center">
                <button
                  onClick={() => {
                    const cleanSpec = doc.specialty.split('—')[0].trim();
                    onSelectDoctorForBooking(cleanSpec);
                  }}
                  className="w-full py-2 px-3 text-xs font-semibold text-sky-700 hover:text-white bg-sky-50 hover:bg-sky-700 rounded-xl transition-colors cursor-pointer"
                >
                  Solicitar com este perfil
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-12 p-4 rounded-xl bg-slate-100/80 border border-slate-200 text-center text-xs text-slate-600 max-w-2xl mx-auto">
          <p>
            No website final do cliente, esta seção exibirá a fotografia real, cédula profissional e especialidades oficiais de cada membro clínico registado na Ordem respetiva.
          </p>
        </div>

      </div>
    </section>
  );
};
