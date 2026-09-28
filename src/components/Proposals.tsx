import React from 'react';
import { candidateData, ProposalItem } from '../data/candidate';
import {
  HeartHandshake,
  ShieldCheck,
  FileSearch,
  Users,
  ArrowUp,
  Sparkles
} from 'lucide-react';

export const Proposals: React.FC = () => {
  const handleScrollToSectionTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#propostas');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getProposalIcon = (iconName: ProposalItem['iconName']) => {
    const iconClass = "w-6 h-6 text-[#0B2B60]";
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake className={iconClass} />;
      case 'ShieldCheck':
        return <ShieldCheck className={iconClass} />;
      case 'FileSearch':
        return <FileSearch className={iconClass} />;
      case 'Users':
        return <Users className={iconClass} />;
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  return (
    <section id="propostas" className="py-20 md:py-28 bg-[#F8FAFC] border-t border-slate-200/80 relative">
      <div className="container-custom">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-[#0B2B60] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Pautas e Compromissos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            {candidateData.proposalsSection.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-xl mx-auto">
            {candidateData.proposalsSection.subtitle}
          </p>
          <div className="w-16 h-1 bg-[#0B2B60] mx-auto mt-4 rounded-full" />
        </div>

        {/* GRID DE PROPOSTAS (RESPONSIVO: 1 col mobile, 2 col tablet/desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {candidateData.proposalsSection.items.map((proposal) => (
            <div
              key={proposal.id}
              className="card-modern relative bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* TOPO DO CARD: ÍCONE + NÚMERO / CATEGORIA */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-[#0B2B60]/10 transition-colors">
                    {getProposalIcon(proposal.iconName)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                      Pauta {proposal.number}
                    </span>
                  </div>
                </div>

                {/* CATEGORIA DA PAUTA */}
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0284C7] block mb-1">
                  {proposal.category}
                </span>

                {/* TÍTULO DA PROPOSTA */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0B2B60] transition-colors">
                  {proposal.title}
                </h3>

                {/* DESCRIÇÃO FIEL AO BRIEFING */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {proposal.description}
                </p>
              </div>

              {/* RODAPÉ DO CARD */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
                <span>Compromisso com MG</span>
                <span className="text-[#0B2B60] font-extrabold">{candidateData.ballotNumber}</span>
              </div>
            </div>
          ))}
        </div>

        {/* BOTÃO 'VER TODAS AS PROPOSTAS' */}
        <div className="mt-12 text-center">
          <a
            href="#propostas"
            onClick={handleScrollToSectionTop}
            className="btn-secondary py-3 px-6 text-xs sm:text-sm font-bold shadow-xs hover:shadow-md"
          >
            <span>{candidateData.proposalsSection.ctaButtonText}</span>
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
