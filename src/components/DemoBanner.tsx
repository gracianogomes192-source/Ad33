import React, { useState } from 'react';
import { Info, X, ShieldAlert } from 'lucide-react';
import { CLINIC_CONFIG } from '../data/medicalData';

export const DemoBanner: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <>
      <aside aria-label="Aviso de demonstração" className="bg-sky-950 text-sky-100 text-xs py-2 px-4 border-b border-sky-900/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-sky-500/20 text-sky-300 font-bold text-[10px]">!</span>
            <p className="truncate">
              <strong className="font-semibold text-white">PROJETO DEMONSTRATIVO:</strong> Todas as informações, contactos e médicos são estritamente fictícios.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setShowModal(true)}
              className="underline hover:text-white transition-colors cursor-pointer"
            >
              Ver detalhes
            </button>
            <button
              onClick={() => setDismissed(true)}
              aria-label="Dispensar aviso demonstrativo"
              className="text-sky-300/80 hover:text-white transition-colors p-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </aside>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 animate-in fade-in duration-200">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-sky-50 text-sky-700 rounded-xl shrink-0">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900">
                  Nota sobre o Projeto Demonstrativo
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Este website foi desenvolvido pela <strong className="text-sky-800">SoluDigital</strong> como protótipo comercial interativo para apresentar a potenciais clientes da área da saúde.
                </p>
                <div className="mt-4 p-3 bg-slate-50 rounded-xl text-xs text-slate-600 space-y-1.5 border border-slate-100">
                  <p>• <strong>Profissionais:</strong> Nomes, especialidades e dados fictícios.</p>
                  <p>• <strong>Contactos e Endereço:</strong> Exemplos ilustrativos sem correspondência física.</p>
                  <p>• <strong>Marcação:</strong> Simulação de solicitação sem armazenamento clínico real.</p>
                  <p>• <strong>Finalidade:</strong> Avaliação visual, usabilidade e potencial de personalização.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2 text-sm font-semibold text-white bg-sky-700 rounded-xl hover:bg-sky-800 transition-colors cursor-pointer"
              >
                Compreendido
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
