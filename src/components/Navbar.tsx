import React, { useState } from 'react';
import { Menu, X, Calendar, Activity } from 'lucide-react';
import { CLINIC_CONFIG } from '../data/medicalData';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Equipa', href: '#equipa' },
    { label: 'Contactos', href: '#contactos' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#inicio"
          className="flex items-center gap-2.5 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-sky-600 rounded-lg py-1"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-700 to-sky-500 flex items-center justify-center text-white shadow-sm shadow-sky-200">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-sky-800 transition-colors">
            {CLINIC_CONFIG.name}
          </span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="hover:text-sky-700 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-sky-600 after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 active:bg-sky-900 rounded-xl transition-all shadow-xs hover:shadow-md cursor-pointer whitespace-nowrap"
          >
            <Calendar className="w-4 h-4" />
            <span>Marcar consulta</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onBookClick}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-sky-700 rounded-lg"
          >
            Marcar
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-hidden"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-150">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="block px-3 py-2.5 text-base font-medium text-slate-700 hover:text-sky-700 hover:bg-sky-50/70 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-base font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-xl shadow-xs"
            >
              <Calendar className="w-4 h-4" />
              <span>Marcar consulta</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
