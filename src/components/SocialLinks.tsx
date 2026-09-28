import React from 'react';
import { candidateData, SocialLinkItem } from '../data/candidate';
import {
  Instagram,
  Facebook,
  Youtube,
  MessageCircle,
  ExternalLink,
  Share2
} from 'lucide-react';

export const SocialLinks: React.FC = () => {
  const getSocialIcon = (iconName: SocialLinkItem['icon']) => {
    switch (iconName) {
      case 'Instagram':
        return <Instagram className="w-7 h-7 text-[#E1306C]" />;
      case 'Facebook':
        return <Facebook className="w-7 h-7 text-[#1877F2]" />;
      case 'Youtube':
        return <Youtube className="w-7 h-7 text-[#FF0000]" />;
      case 'MessageCircle':
        return <MessageCircle className="w-7 h-7 text-[#25D366]" />;
      default:
        return <Share2 className="w-7 h-7 text-[#0B2B60]" />;
    }
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-white border-t border-slate-200/80 relative">
      <div className="container-custom">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0B2B60] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Canais Oficiais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            {candidateData.socialSection.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-xl mx-auto">
            {candidateData.socialSection.subtitle}
          </p>
          <div className="w-16 h-1 bg-[#0B2B60] mx-auto mt-4 rounded-full" />
        </div>

        {/* GRID DOS 4 CARDS DE REDES SOCIAIS E WHATSAPP */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {candidateData.socialSection.items.map((item) => (
            <div
              key={item.id}
              className="card-modern bg-slate-50/70 border border-slate-200 rounded-2xl p-6 hover:bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* ÍCONE DA PLATAFORMA */}
                <div className="w-14 h-14 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center mb-5">
                  {getSocialIcon(item.icon)}
                </div>

                {/* NOME DA REDE */}
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  {item.platform}
                </span>

                {/* IDENTIFICADOR / @HANDLE */}
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.handle}
                </h3>

                {/* DESCRIÇÃO */}
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* BOTÃO DE ACESSO */}
              <a
                href={item.url}
                target={item.url !== '#' ? '_blank' : undefined}
                rel={item.url !== '#' ? 'noopener noreferrer' : undefined}
                className="w-full py-2.5 px-4 rounded-lg bg-white hover:bg-[#0B2B60] text-[#0B2B60] hover:text-white border border-slate-200 hover:border-[#0B2B60] text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-xs group"
              >
                <span>{item.actionText}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          ))}
        </div>

        {/* NOTA DE CONFIANÇA */}
        <div className="mt-12 text-center text-xs text-slate-400">
          Canais oficiais de comunicação direta com a equipe e assessoria de Maycon Matos.
        </div>

      </div>
    </section>
  );
};
