import React from 'react';
import { candidateData } from '../data/candidate';
import { MessageSquare, ChevronRight } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-slate-50 to-yellow-50/40 border-t border-slate-200/90 relative">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 md:p-14 border-2 border-yellow-300 shadow-xl text-center relative overflow-hidden">
          
          {/* Tag Partido */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-100 border border-yellow-300 text-[#0B2B60] text-xs font-black uppercase tracking-widest mb-6">
            <span>{candidateData.party} • MINAS GERAIS</span>
          </div>

          {/* Nome do Candidato */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B2B60] tracking-tight mb-2">
            {candidateData.finalCta.title}
          </h2>

          {/* Cargo */}
          <div className="text-lg sm:text-xl font-bold text-slate-700 mb-6">
            {candidateData.finalCta.subtitle}
          </div>

          {/* Badge 1078 */}
          <div className="inline-block my-2">
            <div className="bg-[#0B2B60] text-yellow-300 px-8 py-3 rounded-2xl font-display font-black text-4xl sm:text-5xl tracking-wider shadow-lg border-2 border-yellow-300/50">
              {candidateData.ballotNumber}
            </div>
          </div>

          {/* Citação de encerramento */}
          <p className="text-base sm:text-lg text-slate-600 font-medium italic mt-6 mb-8 max-w-lg mx-auto">
            "{candidateData.finalCta.quote}"
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#propostas"
              onClick={(e) => handleScrollTo(e, '#propostas')}
              className="btn-yellow w-full sm:w-auto py-3.5 px-7 text-sm font-black shadow-md hover:shadow-lg"
            >
              <span>{candidateData.finalCta.primaryBtnText}</span>
              <ChevronRight className="w-4 h-4 text-[#061A3B]" />
            </a>

            <a
              href="#contato"
              onClick={(e) => handleScrollTo(e, '#contato')}
              className="btn-secondary w-full sm:w-auto py-3.5 px-7 text-sm font-bold shadow-xs hover:shadow-md"
            >
              <MessageSquare className="w-4 h-4 text-[#0B2B60]" />
              <span>{candidateData.finalCta.secondaryBtnText}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
