import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  Stethoscope, 
  MessageSquare, 
  CheckCircle, 
  AlertCircle, 
  ShieldCheck, 
  ArrowRight,
  RefreshCw
} from 'lucide-react';
import { SPECIALTIES } from '../data/medicalData';

interface AppointmentSectionProps {
  preselectedSpecialty?: string;
  onClearPreselected?: () => void;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  preselectedSpecialty,
  onClearPreselected,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    specialty: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  // Sync preselected specialty
  useEffect(() => {
    if (preselectedSpecialty) {
      // Find matching or set directly
      const match = SPECIALTIES.find(s => 
        preselectedSpecialty.toLowerCase().includes(s.name.toLowerCase()) || 
        s.name.toLowerCase().includes(preselectedSpecialty.toLowerCase())
      );
      setFormData(prev => ({
        ...prev,
        specialty: match ? match.name : preselectedSpecialty,
      }));
    }
  }, [preselectedSpecialty]);

  const timeSlots = [
    '08:30 – Manhã',
    '09:30 – Manhã',
    '10:30 – Manhã',
    '11:30 – Manhã',
    '14:00 – Tarde',
    '15:00 – Tarde',
    '16:30 – Tarde',
    '18:00 – Fim de tarde',
    '19:00 – Fim de tarde',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate clean dispatch
    setTimeout(() => {
      setSubmittedData({ ...formData });
      setSubmitted(true);
      setSubmitting(false);
      if (onClearPreselected) onClearPreselected();
    }, 450);
  };

  const handleReset = () => {
    setSubmitted(false);
    setSubmittedData(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      specialty: '',
      preferredDate: '',
      preferredTime: '',
      message: '',
    });
  };

  // Get tomorrow's date formatted as YYYY-MM-DD for min date
  const getMinDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  };

  return (
    <section id="marcar-consulta" className="py-16 lg:py-24 bg-gradient-to-b from-white via-sky-50/40 to-slate-50 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs uppercase tracking-wider font-bold text-sky-700">
            Agendamento Simples
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Marcar Consulta
          </h2>
          <p className="text-base text-slate-600 max-w-xl mx-auto text-balance">
            Preencha os dados abaixo para submeter o seu pedido. A nossa equipa entrará em contacto para confirmar o dia e horário pretendidos.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl shadow-sky-900/5 relative">
          
          {/* Important Mandatory Notice */}
          <div className="mb-8 p-4 rounded-2xl bg-sky-50/80 border border-sky-200/70 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-700 leading-relaxed">
              <strong className="text-sky-900 block font-semibold mb-0.5">Nota Importante:</strong>
              O formulário representa apenas uma solicitação de marcação e não uma confirmação automática de consulta. A disponibilidade de agenda será validada pela equipa administrativa.
            </div>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Nome Completo */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Nome completo <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Maria Santos Silva"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-sky-600 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Telefone e E-mail */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Telefone de contacto <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: 912 345 678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-sky-600 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    E-mail <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      required
                      placeholder="Ex: maria.silva@exemplo.pt"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-sky-600 focus:bg-white transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Especialidade */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Especialidade pretendida <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                  <select
                    required
                    value={formData.specialty}
                    onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-600 focus:bg-white transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Selecione a especialidade médica</option>
                    {SPECIALTIES.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                    <option value="Outra / Não tenho a certeza">Outra área / Esclarecimento</option>
                  </select>
                </div>
              </div>

              {/* Data e Horário Pretendidos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Data pretendida <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      type="date"
                      required
                      min={getMinDate()}
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-600 focus:bg-white transition-all cursor-pointer"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Horário pretendido <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Clock className="w-4 h-4" />
                    </div>
                    <select
                      required
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-600 focus:bg-white transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Selecione um período ou hora</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Mensagem */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Mensagem <span className="text-slate-400 font-normal lowercase">(opcional — sintomas, preferências ou observações)</span>
                </label>
                <div className="relative">
                  <div className="absolute top-3.5 left-3.5 pointer-events-none text-slate-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <textarea
                    rows={3}
                    placeholder="Descreva brevemente o motivo da consulta ou se tem preferência por algum médico demonstrativo..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-sky-600 focus:bg-white transition-all"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 px-6 text-base font-bold text-white bg-sky-700 hover:bg-sky-800 active:bg-sky-900 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {submitting ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      <span>A submeter pedido...</span>
                    </>
                  ) : (
                    <>
                      <span>Solicitar consulta</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-center">
                <p className="text-xs text-slate-400">
                  Os dados submetidos nesta demonstração não são guardados em servidores clínicos.
                </p>
              </div>

            </form>
          ) : (
            /* Confirmation View requested explicitly in prompt */
            <div className="py-8 px-4 text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-2xl mx-auto flex items-center justify-center shadow-xs">
                <CheckCircle className="w-9 h-9" />
              </div>

              <div className="space-y-2 max-w-lg mx-auto">
                <h3 className="text-2xl font-bold text-slate-900">
                  Solicitação enviada.
                </h3>
                <p className="text-base text-slate-700 font-medium">
                  O centro médico entrará em contacto para confirmar a disponibilidade.
                </p>
                <p className="text-xs text-slate-500 pt-1">
                  (Simulação do fluxo de agendamento do Centro Médico Atlântico)
                </p>
              </div>

              {submittedData && (
                <div className="max-w-md mx-auto text-left bg-slate-50 rounded-2xl p-5 border border-slate-200 text-xs space-y-2.5 text-slate-700">
                  <div className="flex justify-between border-b border-slate-200/60 pb-2">
                    <span className="text-slate-500 font-medium">Paciente:</span>
                    <span className="font-semibold text-slate-900">{submittedData.fullName}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200/60 pb-2">
                    <span className="text-slate-500 font-medium">Especialidade:</span>
                    <span className="font-semibold text-sky-800">{submittedData.specialty}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200/60 pb-2">
                    <span className="text-slate-500 font-medium">Data solicitada:</span>
                    <span className="font-semibold text-slate-900">{submittedData.preferredDate}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200/60 pb-2">
                    <span className="text-slate-500 font-medium">Horário pretendido:</span>
                    <span className="font-semibold text-slate-900">{submittedData.preferredTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Contacto:</span>
                    <span className="font-semibold text-slate-900">{submittedData.phone}</span>
                  </div>
                </div>
              )}

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 text-xs font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 rounded-xl transition-colors cursor-pointer inline-flex items-center gap-2"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Submeter outra solicitação</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
