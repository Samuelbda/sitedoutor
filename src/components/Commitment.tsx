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
      {/* Elementos Decorativos de Fundo em Amarelo Claro e Azul */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* COLUNA ESQUERDA: TEXTO E CTA */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-300/20 border border-yellow-300/40 text-yellow-300 text-xs font-black uppercase tracking-wider mb-6">
              <ShieldCheck className="w-3.5 h-3.5 text-yellow-300" />
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
                className="btn-yellow py-3.5 px-7 text-sm font-black shadow-lg"
              >
                <span>{candidateData.commitmentSection.ctaButtonText}</span>
                <ChevronRight className="w-4 h-4 text-[#061A3B]" />
              </a>

              <a
                href="#contato"
                className="btn-outline-white py-3.5 px-6 text-sm font-semibold"
              >
                <span>ACOMPANHAR AÇÕES</span>
              </a>
            </div>
          </div>

          {/* COLUNA DIREITA: COMPOSIÇÃO VISUAL ELEGANTE COM O NÚMERO 1078 EM AMARELO CLARO */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-3xl p-8 border-2 border-yellow-300/40 shadow-2xl text-center relative">
              <div className="text-xs font-bold uppercase tracking-widest text-yellow-300 mb-2">
                Minas Gerais • Deputado Federal
              </div>

              <div className="text-2xl font-black text-white mb-1">
                {candidateData.name}
              </div>

              <div className="inline-block bg-yellow-300 text-[#061A3B] text-xs font-black px-3.5 py-1 rounded-full shadow-sm mb-6">
                {candidateData.party}
              </div>

              {/* NÚMERO GIGANTE DESTACADO EM AMARELO CLARO */}
              <div className="my-3 py-6 px-4 bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 text-[#061A3B] rounded-2xl shadow-xl font-display font-black text-5xl sm:text-6xl tracking-wider border-2 border-yellow-100">
                {candidateData.ballotNumber}
              </div>

              {/* AÇÃO DE COPIAR */}
              <button
                onClick={handleCopyNumber}
                className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-yellow-200 hover:text-white transition-colors py-2 px-4 rounded-lg bg-white/10 hover:bg-white/20 border border-yellow-300/30 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300 font-bold">Número 1078 copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-yellow-300" />
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
