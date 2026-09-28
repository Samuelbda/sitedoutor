import React, { useState } from 'react';
import { candidateData } from '../data/candidate';
import { Shield, ArrowUp, AlertCircle, X, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'cookies' | null>(null);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#061A3B] text-slate-300 pt-16 pb-12 border-t border-slate-800">
        <div className="container-custom">
          
          {/* TOPO DO FOOTER: IDENTIFICAÇÃO E NAVEGAÇÃO */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80 items-start">
            
            {/* Coluna 1: Nome, Partido, Número */}
            <div className="md:col-span-6 flex flex-col items-start">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 text-white flex items-center justify-center font-display font-extrabold text-lg border border-white/20">
                  MM
                </div>
                <div>
                  <h3 className="font-display font-black text-xl text-white tracking-tight">
                    {candidateData.name}
                  </h3>
                  <span className="text-xs text-blue-300 font-semibold">
                    {candidateData.roleTitle} por {candidateData.stateFull}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold text-slate-400 bg-white/5 px-2.5 py-1 rounded border border-white/10">
                  {candidateData.party}
                </span>
                <span className="text-xs font-bold text-white bg-blue-600 px-3 py-1 rounded border border-blue-400">
                  Nº {candidateData.ballotNumber}
                </span>
              </div>

              <p className="text-xs text-slate-400 max-w-md leading-relaxed">
                "{candidateData.tagline}"
              </p>
            </div>

            {/* Coluna 2: Links de Navegação */}
            <div className="md:col-span-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                Navegação Rápida
              </h4>
              <ul className="space-y-2.5 text-sm list-none p-0 m-0">
                {candidateData.footer.navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleScrollTo(e, link.href)}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 3: Políticas e Voltar ao Topo */}
            <div className="md:col-span-3 flex flex-col justify-between h-full">
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                  Termos & Privacidade
                </h4>
                <ul className="space-y-2.5 text-sm list-none p-0 m-0">
                  <li>
                    <button
                      onClick={() => setActiveModal('privacy')}
                      className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                    >
                      Política de Privacidade
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveModal('cookies')}
                      className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                    >
                      Política de Cookies
                    </button>
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 cursor-pointer"
                  title="Voltar ao início da página"
                >
                  <span>Voltar ao topo</span>
                  <ArrowUp className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* ÁREA RESERVADA PARA IDENTIFICAÇÃO ELEITORAL OBRIGATÓRIA */}
          <div className="my-8 p-5 rounded-xl bg-white/5 border border-dashed border-slate-700 text-center">
            <div className="inline-flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
              <AlertCircle className="w-4 h-4" />
              <span>Conformidade Legal Eleitoral</span>
            </div>
            
            <div className="text-xs font-mono text-slate-300 bg-black/30 py-2 px-3 rounded inline-block max-w-full my-1">
              {candidateData.footer.legalPlaceholder}
            </div>

            <p className="text-[11px] text-slate-400 mt-2 max-w-2xl mx-auto">
              {candidateData.footer.electoralInfo} • Conteúdo informativo e institucional em conformidade com as normas eleitorais vigentes.
            </p>
          </div>

          {/* COPYRIGHT */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <div className="flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-slate-400" />
              <span>{candidateData.footer.copyrightText}</span>
            </div>
            <span>Desenvolvido com padrão institucional e acessibilidade.</span>
          </div>

        </div>
      </footer>

      {/* MODAL DE POLÍTICA DE PRIVACIDADE / COOKIES */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fade-in">
          <div className="bg-white text-slate-900 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-slide-up">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#0B2B60]" />
                <h3 className="font-bold text-lg text-slate-900">
                  {activeModal === 'privacy' ? 'Política de Privacidade' : 'Política de Cookies'}
                </h3>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                aria-label="Fechar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-5 text-sm text-slate-600 space-y-3 max-h-80 overflow-y-auto">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs font-mono text-[#0B2B60]">
                [CAMPO RESERVADO PARA INSERÇÃO DOS TERMOS OFICIAIS DE CONFORMIDADE COM A LGPD E LEGISLAÇÃO ELEITORAL]
              </div>
              <p>
                Este portal institucional respeita a privacidade dos visitantes e está em total conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) e com as resoluções do Tribunal Superior Eleitoral (TSE).
              </p>
              <p>
                Nenhum dado sensível é coletado sem o consentimento expresso do usuário. Os canais de contato e redes sociais são operados de forma transparente pela equipe oficial.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="btn-primary py-2 px-5 text-xs font-bold"
              >
                Entendido e Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
