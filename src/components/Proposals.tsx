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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 border border-yellow-300 text-[#0B2B60] text-xs font-black uppercase tracking-wider mb-3">
            <span>Pautas e Compromissos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B2B60] tracking-tight mb-4">
            {candidateData.proposalsSection.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium max-w-xl mx-auto">
            {candidateData.proposalsSection.subtitle}
          </p>
          <div className="w-16 h-1.5 bg-yellow-300 mx-auto mt-4 rounded-full" />
        </div>

        {/* GRID DE PROPOSTAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {candidateData.proposalsSection.items.map((proposal) => (
            <div
              key={proposal.id}
              className="card-modern relative bg-white border-2 border-slate-200/90 hover:border-yellow-400 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* TOPO DO CARD: ÍCONE + NÚMERO / CATEGORIA */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-yellow-50 border border-yellow-200 flex items-center justify-center group-hover:bg-yellow-100 transition-colors">
                    {getProposalIcon(proposal.iconName)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-extrabold text-[#0B2B60] bg-yellow-100 px-2.5 py-1 rounded-full border border-yellow-300">
                      Pauta {proposal.number}
                    </span>
                  </div>
                </div>

                {/* CATEGORIA DA PAUTA */}
                <span className="text-[11px] font-black uppercase tracking-wider text-yellow-800 block mb-1">
                  {proposal.category}
                </span>

                {/* TÍTULO DA PROPOSTA */}
                <h3 className="text-xl font-extrabold text-[#0B2B60] mb-3 group-hover:text-yellow-700 transition-colors">
                  {proposal.title}
                </h3>

                {/* DESCRIÇÃO */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {proposal.description}
                </p>
              </div>

              {/* RODAPÉ DO CARD */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
                <span>Compromisso com MG</span>
                <span className="text-yellow-800 bg-yellow-50 px-2 py-0.5 rounded border border-yellow-200 font-black">{candidateData.ballotNumber}</span>
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
            <ArrowUp className="w-4 h-4 text-yellow-500" />
          </a>
        </div>

      </div>
    </section>
  );
};
