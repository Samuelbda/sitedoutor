import React, { useState } from 'react';
import { candidateData } from '../data/candidate';
import { Check, Copy, ChevronRight, ShieldCheck } from 'lucide-react';

export const Commitment: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(candidateData.ballotNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScrollToProposals = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#propostas');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#0B2B60] text-white relative overflow-hidden">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* COLUNA ESQUERDA: TEXTO E CTA */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-200 text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-300" />
              <span>Transparência e Representatividade</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              {candidateData.commitmentSection.title}
            </h2>

            <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed mb-8 max-w-xl font-normal">
              {candidateData.commitmentSection.text}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#propostas"
                onClick={handleScrollToProposals}
                className="btn-white py-3.5 px-7 text-sm font-bold shadow-lg"
              >
                <span>{candidateData.commitmentSection.ctaButtonText}</span>
                <ChevronRight className="w-4 h-4 text-[#0B2B60]" />
              </a>

              <a
                href="#contato"
                className="btn-outline-white py-3.5 px-6 text-sm font-semibold"
              >
                <span>ACOMPANHAR AÇÕES</span>
              </a>
            </div>
          </div>

          {/* COLUNA DIREITA: COMPOSIÇÃO VISUAL ELEGANTE COM O NÚMERO 1078 */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl text-center relative">
              <div className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-2">
                Minas Gerais • Deputado Federal
              </div>

              <div className="text-xl font-black text-white mb-1">
                {candidateData.name}
              </div>

              <div className="inline-block bg-blue-500/30 text-blue-100 text-xs font-bold px-3 py-1 rounded-full border border-blue-400/30 mb-6">
                {candidateData.party}
              </div>

              {/* NÚMERO GIGANTE DESTACADO */}
              <div className="my-3 py-6 px-4 bg-white text-[#0B2B60] rounded-2xl shadow-xl font-display font-black text-5xl sm:text-6xl tracking-wider">
                {candidateData.ballotNumber}
              </div>

              {/* AÇÃO DE COPIAR */}
              <button
                onClick={handleCopyNumber}
                className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-white hover:text-blue-200 transition-colors py-2 px-4 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300">Número 1078 copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-blue-200" />
                    <span>Copiar número para votar</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
