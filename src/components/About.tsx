import React from 'react';
import { candidateData } from '../data/candidate';
import { User, Briefcase, MapPin, Award, Flag, ChevronRight, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const handleScrollToProposals = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#propostas');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getIconForLabel = (label: string) => {
    switch (label.toUpperCase()) {
      case 'NOME':
        return <User className="w-4 h-4 text-[#0B2B60]" />;
      case 'PROFISSÃO':
        return <Briefcase className="w-4 h-4 text-[#0B2B60]" />;
      case 'NATURALIDADE':
        return <MapPin className="w-4 h-4 text-[#0B2B60]" />;
      case 'CARGO':
        return <Award className="w-4 h-4 text-[#0B2B60]" />;
      case 'PARTIDO':
        return <Flag className="w-4 h-4 text-[#0B2B60]" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-[#0B2B60]" />;
    }
  };

  return (
    <section id="sobre" className="py-20 md:py-28 bg-white border-t border-slate-100 relative">
      <div className="container-custom">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0B2B60] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Trajetória e Perfil</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            {candidateData.about.title}
          </h2>
          <div className="w-16 h-1 bg-[#0B2B60] mx-auto mt-4 rounded-full" />
        </div>

        {/* LAYOUT CONTEÚDO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* FOTO SECUNDÁRIA / CARD VISUAL */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 shadow-md">
                <img
                  src={candidateData.photoUrl}
                  alt={`${candidateData.fullName} - ${candidateData.profession}`}
                  className="w-full h-80 sm:h-96 object-cover object-top rounded-xl"
                  loading="lazy"
                />
                <div className="mt-4 p-3.5 bg-white rounded-xl border border-slate-100 text-center">
                  <span className="font-display font-bold text-slate-800 text-base block">
                    {candidateData.fullName}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {candidateData.profession} • {candidateData.birthplace}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* TEXTO BIOGRÁFICO E INFORMAÇÕES RÁPIDAS */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Parágrafos Biográficos Fiéis ao Briefing */}
            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed mb-8">
              <p className="bg-slate-50/70 p-4 rounded-xl border border-slate-100">
                {candidateData.about.paragraph1}
              </p>
              <p className="bg-slate-50/70 p-4 rounded-xl border border-slate-100">
                {candidateData.about.paragraph2}
              </p>
            </div>

            {/* ÁREA DE INFORMAÇÕES RÁPIDAS */}
            <div className="w-full mb-8">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Informações Institucionais
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {candidateData.about.quickInfo.map((info) => (
                  <div
                    key={info.label}
                    className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 hover:border-blue-300 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {getIconForLabel(info.label)}
                      <span className="text-[11px] font-bold text-slate-400 uppercase">
                        {info.label}
                      </span>
                    </div>
                    <span className="font-bold text-slate-800 text-sm block">
                      {info.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* BOTÃO DE CTA PARA PROPOSTAS */}
            <a
              href="#propostas"
              onClick={handleScrollToProposals}
              className="btn-primary py-3 px-6 text-sm font-bold"
            >
              <span>CONHEÇA AS PROPOSTAS</span>
              <ChevronRight className="w-4 h-4" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
