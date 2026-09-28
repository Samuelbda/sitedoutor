import React, { useState, useEffect } from 'react';
import { candidateData } from '../data/candidate';
import { Menu, X, ArrowUpRight, Check, Copy } from 'lucide-react';

interface HeaderProps {
  onCopyNumber?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(candidateData.ballotNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { label: 'INÍCIO', href: '#inicio' },
    { label: 'SOBRE', href: '#sobre' },
    { label: 'PROPOSTAS', href: '#propostas' },
    { label: 'CONTATO', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4.5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* LOGO / NOME MAYCON MATOS */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, '#inicio')}
          className="flex items-center gap-3 group text-decoration-none"
        >
          <div className="w-10 h-10 rounded-lg bg-[#0B2B60] text-white flex items-center justify-center font-display font-extrabold text-lg shadow-sm group-hover:bg-[#164A96] transition-colors">
            MM
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 leading-none">
                {candidateData.name}
              </span>
              <span className="bg-blue-100 text-[#0B2B60] text-xs font-bold px-2 py-0.5 rounded-full border border-blue-200">
                {candidateData.party}
              </span>
            </div>
            <span className="text-xs text-slate-500 font-medium mt-0.5">
              {candidateData.role} • MG
            </span>
          </div>
        </a>

        {/* NAVEGAÇÃO DESKTOP */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação Principal">
          <ul className="flex items-center gap-7 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-bold text-slate-700 hover:text-[#0B2B60] transition-colors tracking-wide py-1 border-b-2 border-transparent hover:border-[#0B2B60]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* BADGE NÚMERO COM CÓPIA RÁPIDA */}
          <button
            onClick={handleCopyNumber}
            title="Clique para copiar o número eleitoral"
            aria-label={`Copiar número de votação ${candidateData.ballotNumber}`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#0B2B60] border border-slate-200 transition-all text-xs font-bold cursor-pointer"
          >
            <span className="text-slate-500">Nº</span>
            <span className="text-[#0B2B60] font-extrabold text-sm">{candidateData.ballotNumber}</span>
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-600 ml-0.5" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-slate-400 ml-0.5" />
            )}
            {copied && <span className="text-[10px] text-emerald-600 font-semibold">Copiado!</span>}
          </button>

          {/* BOTÃO DESTACADO: CONHEÇA AS PROPOSTAS */}
          <a
            href="#propostas"
            onClick={(e) => handleNavClick(e, '#propostas')}
            className="btn-primary text-xs py-2.5 px-5 font-bold tracking-wider"
          >
            <span>CONHEÇA AS PROPOSTAS</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </nav>

        {/* BOTÃO MOBILE HAMBURGER */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={handleCopyNumber}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-blue-50 text-[#0B2B60] border border-blue-200 text-xs font-bold"
            aria-label={`Número ${candidateData.ballotNumber}`}
          >
            <span>Nº</span>
            <span className="font-extrabold">{candidateData.ballotNumber}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#0B2B60]"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE EXPANDIDO */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl animate-fade-in">
          <div className="container-custom py-6 flex flex-col gap-4">
            <nav className="flex flex-col gap-2" aria-label="Menu Mobile">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-3 rounded-lg font-bold text-slate-800 hover:bg-blue-50 hover:text-[#0B2B60] transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
              <div className="flex items-center justify-between px-4 py-2 bg-slate-50 rounded-lg">
                <span className="text-xs text-slate-500 font-medium">VOTE DEPUTADO FEDERAL:</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-700">{candidateData.party}</span>
                  <span className="text-sm font-black text-[#0B2B60] bg-white px-2 py-0.5 rounded border border-blue-200">
                    {candidateData.ballotNumber}
                  </span>
                </div>
              </div>

              <a
                href="#propostas"
                onClick={(e) => handleNavClick(e, '#propostas')}
                className="btn-primary w-full text-center justify-center py-3"
              >
                CONHEÇA AS PROPOSTAS
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
