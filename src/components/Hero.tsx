import React, { useState } from 'react';
import { candidateData } from '../data/candidate';
import { ArrowDown, Check, Copy, ChevronRight, Award, Shield } from 'lucide-react';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(candidateData.ballotNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 bg-[#F8FAFC] overflow-hidden"
    >
      {/* Background Decor Elements - Blue & Yellow Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* COLUNA ESQUERDA: TEXTO E DESTAQUES */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* TAG SUPERIOR: PARTIDO & ESTADO */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-amber-300 shadow-xs mb-6 animate-fade-in">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="text-xs font-black text-[#0B2B60] tracking-wide uppercase">
                {candidateData.party}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-xs font-bold text-slate-700">
                Minas Gerais
              </span>
            </div>

            {/* NOME PRINCIPAL */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0B2B60] tracking-tight leading-[1.08] mb-4">
              {candidateData.name}
            </h1>

            {/* CARGO */}
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0B2B60] mb-6 flex flex-wrap items-center gap-2">
              <span>{candidateData.roleTitle}</span>
              <span className="text-slate-400 font-light">por</span>
              <span className="text-slate-900 underline decoration-amber-400 decoration-4 underline-offset-6">
                {candidateData.stateFull}
              </span>
            </div>

            {/* CITAÇÃO / MISSÃO */}
            <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed mb-8 max-w-2xl bg-white/80 p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs">
              "{candidateData.tagline}"
            </p>

            {/* DESTAQUE VISUAL DO NÚMERO 1078 (AZUL & AMARELO OURO) */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 p-4 bg-white rounded-2xl border-2 border-amber-300/80 shadow-md mb-8">
              <div className="flex items-center gap-3">
                <div className="flex flex-col">
                  <span className="text-[11px] font-extrabold text-amber-700 uppercase tracking-wider">
                    Número de Urna
                  </span>
                  <span className="text-xs font-black text-[#0B2B60]">
                    {candidateData.party}
                  </span>
                </div>
                <div className="bg-[#0B2B60] text-amber-400 px-5 py-2 rounded-xl font-display font-black text-3xl sm:text-4xl tracking-wider shadow-inner border border-amber-400/40">
                  {candidateData.ballotNumber}
                </div>
              </div>

              <div className="h-px sm:h-10 sm:w-px bg-slate-200 my-1 sm:my-0" />

              <button
                onClick={handleCopyNumber}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-[#0B2B60] border border-amber-300 text-xs font-bold transition-all cursor-pointer"
                title="Copiar número eleitoral"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Número copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-amber-700" />
                    <span>Copiar número</span>
                  </>
                )}
              </button>
            </div>

            {/* BOTÕES DE AÇÃO: AMARELO E AZUL */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#propostas"
                onClick={(e) => handleScrollTo(e, '#propostas')}
                className="btn-yellow py-3.5 px-7 text-sm font-black text-center justify-center shadow-lg hover:shadow-xl"
              >
                <span>CONHEÇA MINHAS PROPOSTAS</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#contato"
                onClick={(e) => handleScrollTo(e, '#contato')}
                className="btn-secondary py-3.5 px-6 text-sm font-bold text-center justify-center"
              >
                <span>ACOMPANHE A CANDIDATURA</span>
              </a>
            </div>

            {/* BADGES RÁPIDAS DE CONFIANÇA */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 w-full flex flex-wrap gap-4 text-xs font-bold text-slate-600">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-amber-500" />
                <span>Defesa Previdenciária & BPC</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#0B2B60]" />
                <span>Advogado Atuante</span>
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: FOTO DO CANDIDATO */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Moldura de Fundo com Amarelo e Azul */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#0B2B60]/20 via-amber-300/30 to-blue-200/40 rounded-3xl transform -rotate-1 -z-10" />

              <div className="relative bg-white p-3 rounded-2xl border-2 border-amber-300/60 shadow-xl overflow-hidden">
                {!imgError ? (
                  <img
                    src={candidateData.photoUrl}
                    alt={`${candidateData.name} - Candidato a Deputado Federal`}
                    onError={() => setImgError(true)}
                    className="w-full h-[420px] sm:h-[480px] lg:h-[500px] object-cover object-top rounded-xl"
                    loading="eager"
                  />
                ) : (
                  <div className="w-full h-[440px] bg-slate-100 rounded-xl flex flex-col items-center justify-center p-8 text-center border-2 border-dashed border-amber-300">
                    <div className="w-20 h-20 rounded-full bg-[#0B2B60] text-amber-400 flex items-center justify-center font-display font-extrabold text-2xl mb-4">
                      MM
                    </div>
                    <span className="font-bold text-slate-800 text-lg">{candidateData.name}</span>
                    <span className="text-xs text-slate-500 mt-1">Foto oficial do candidato</span>
                  </div>
                )}

                {/* Selo Flutuante sobre a Foto */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-amber-200 shadow-lg flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-amber-700 uppercase tracking-wider">
                      {candidateData.party}
                    </span>
                    <span className="font-extrabold text-[#0B2B60] text-sm">
                      {candidateData.fullName}
                    </span>
                  </div>
                  <div className="bg-[#0B2B60] text-amber-400 px-3 py-1 rounded-lg font-display font-black text-base border border-amber-400/40">
                    {candidateData.ballotNumber}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* INDICAÇÃO VISUAL PARA ROLAR ATÉ A PRÓXIMA SEÇÃO */}
        <div className="mt-14 lg:mt-16 flex justify-center">
          <a
            href="#sobre"
            onClick={(e) => handleScrollTo(e, '#sobre')}
            className="group flex flex-col items-center gap-1.5 text-slate-400 hover:text-[#0B2B60] transition-colors"
            aria-label="Rolar para a seção Sobre"
          >
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-600">
              Conheça a trajetória
            </span>
            <div className="w-8 h-8 rounded-full border border-amber-300 bg-amber-50 shadow-xs flex items-center justify-center group-hover:bg-amber-100 transition-colors">
              <ArrowDown className="w-4 h-4 text-[#0B2B60] group-hover:translate-y-0.5 transition-transform" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};
