import React, { useState } from 'react';
import { 
  Stethoscope, 
  Baby, 
  Activity, 
  Users, 
  Smile, 
  FlaskConical, 
  ChevronRight, 
  X, 
  Calendar,
  CheckCircle2,
  Microscope,
  Sparkles
} from 'lucide-react';
import { SPECIALTIES, Specialty } from '../data/medicalData';
import labFacilityImg from '../assets/images/clinic_lab_facility_1791102485971.jpg';

interface SpecialtiesSectionProps {
  onSelectSpecialtyForBooking: (specialtyName: string) => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({
  onSelectSpecialtyForBooking,
}) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(null);
  const [labImgError, setLabImgError] = useState(false);

  // Helper for dynamic icon rendering
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope':
        return <Stethoscope className="w-6 h-6" />;
      case 'HeartPulse':
        return <Baby className="w-6 h-6" />;
      case 'Activity':
        return <Activity className="w-6 h-6" />;
      case 'Users':
        return <Users className="w-6 h-6" />;
      case 'Smile':
        return <Smile className="w-6 h-6" />;
      case 'FlaskConical':
        return <FlaskConical className="w-6 h-6" />;
      default:
        return <Stethoscope className="w-6 h-6" />;
    }
  };

  const handleBookingFromModal = (specName: string) => {
    setSelectedSpecialty(null);
    onSelectSpecialtyForBooking(specName);
  };

  return (
    <section id="especialidades" className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 lg:mb-16">
          <span className="text-xs uppercase tracking-wider font-bold text-sky-700">
            Áreas de Cuidados Médicos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Especialidades Disponíveis
          </h2>
          <p className="text-base sm:text-lg text-slate-600 text-balance">
            Consulte a nossa oferta de especialidades médicas e de diagnóstico para assegurar o acompanhamento continuado da sua saúde.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIALTIES.map((spec) => (
            <div
              key={spec.id}
              className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-sky-300 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Header with Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 group-hover:bg-sky-700 group-hover:text-white transition-colors flex items-center justify-center shadow-2xs">
                    {getIcon(spec.iconName)}
                  </div>
                  <span className="text-xs text-slate-500 font-medium bg-slate-100 px-2.5 py-1 rounded-md">
                    Consulta & Exames
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-800 transition-colors">
                  {spec.name}
                </h3>

                <p className="text-sm text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                  {spec.shortDesc}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedSpecialty(spec)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 hover:text-sky-900 group/btn transition-colors cursor-pointer"
                >
                  <span>Saber mais</span>
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={() => onSelectSpecialtyForBooking(spec.name)}
                  aria-label={`Marcar consulta para ${spec.name}`}
                  className="text-xs font-medium text-slate-500 hover:text-sky-700 px-2 py-1 rounded-md hover:bg-sky-50 transition-colors cursor-pointer"
                >
                  Agendar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Laboratory & Diagnostic Feature Card */}
        <div className="mt-14 rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-7 p-8 lg:p-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold">
                <Microscope className="w-3.5 h-3.5 text-sky-700" />
                <span>Unidade de Colheitas e Análises Clínicas</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Apoio Diagnóstico e Laboratorial Rápido
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                O Centro Médico Atlântico dispõe de instalações demonstrativas com postos de colheita confortáveis para realização de exames laboratoriais complementares, essenciais para o diagnóstico preciso e monitorização preventiva.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Colheitas de sangue, urina e outros fluidos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Resultados disponibilizados de forma ágil</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Protocolos rigorosos de biossegurança</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Ambiente tranquilo e descontraído</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onSelectSpecialtyForBooking("Laboratório")}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-xl transition-colors cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Solicitar marcação para análises</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 h-64 lg:h-full min-h-[260px] bg-slate-100 relative">
              {!labImgError ? (
                <img
                  src={labFacilityImg}
                  alt="Instalações laboratoriais demonstrativas do Centro Médico Atlântico"
                  className="w-full h-full object-cover"
                  onError={() => setLabImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-slate-800 text-white text-center">
                  <FlaskConical className="w-10 h-10 text-sky-400 mb-2" />
                  <p className="font-semibold text-sm">Laboratório Clínico</p>
                  <p className="text-xs text-slate-400 mt-1">Ambiente de apoio analítico</p>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>

      {/* Specialty Detail Modal */}
      {selectedSpecialty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
                  {getIcon(selectedSpecialty.iconName)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {selectedSpecialty.name}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Especialidade Médica • Centro Médico Atlântico
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedSpecialty(null)}
                aria-label="Fechar janela de detalhes"
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-5 space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-1">
                  Visão Geral
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedSpecialty.fullDesc}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-2">
                  Atos e Procedimentos Frequentes
                </h4>
                <div className="space-y-2">
                  {selectedSpecialty.commonProcedures.map((proc, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <span>{proc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-amber-50/70 border border-amber-200/60 rounded-xl text-xs text-amber-900">
                <strong>Aviso de demonstração:</strong> As informações apresentadas ilustram a organização dos serviços de saúde e não constituem recomendação clínica ou diagnóstica.
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                onClick={() => setSelectedSpecialty(null)}
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
              >
                Voltar
              </button>
              <button
                onClick={() => handleBookingFromModal(selectedSpecialty.name)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Solicitar consulta nesta especialidade</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
