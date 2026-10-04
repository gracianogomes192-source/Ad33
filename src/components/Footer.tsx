import React from 'react';
import { Activity, ShieldCheck, Heart } from 'lucide-react';
import { CLINIC_CONFIG } from '../data/medicalData';

interface FooterProps {
  onBookClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBookClick }) => {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-sky-600 flex items-center justify-center text-white">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {CLINIC_CONFIG.name}
              </span>
            </div>

            <p className="text-slate-400 text-sm max-w-sm italic">
              "{CLINIC_CONFIG.tagline}"
            </p>

            <p className="text-xs text-slate-500 leading-relaxed max-w-md pt-2">
              Espaço de saúde dedicado ao bem-estar e à prevenção, proporcionando atendimento atencioso e especializado para toda a família.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-100">
              Navegação
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNavClick('#inicio')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#sobre')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#especialidades')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400"
                >
                  Especialidades
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#equipa')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400"
                >
                  Equipa
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#contactos')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400"
                >
                  Contactos
                </button>
              </li>
              <li>
                <button
                  onClick={onBookClick}
                  className="text-sky-400 hover:text-sky-300 font-semibold transition-colors cursor-pointer"
                >
                  Marcar consulta
                </button>
              </li>
            </ul>
          </div>

          {/* Disclaimer & Authorship */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-100">
              Sobre o Projeto
            </p>
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300 space-y-2">
              <p className="font-semibold text-white">
                {CLINIC_CONFIG.demoDisclaimer}
              </p>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Todas as informações são demonstrativas. Não há prestação de diagnósticos nem armazenamento de dados clínicos.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {CLINIC_CONFIG.name}. Todos os direitos reservados.</p>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Desenvolvido com excelência por</span>
            <strong className="text-slate-200">SoluDigital</strong>
          </div>
        </div>

      </div>
    </footer>
  );
};
