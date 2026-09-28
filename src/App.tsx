import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Proposals } from './components/Proposals';
import { Commitment } from './components/Commitment';
import { SocialLinks } from './components/SocialLinks';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 selection:bg-[#0B2B60] selection:text-white">
      {/* Header Fixo com Efeito de Scroll e Menu Mobile */}
      <Header />

      {/* Conteúdo Principal com Estrutura Semântica */}
      <main className="flex-grow">
        {/* Seção Hero - Alto Impacto Visual */}
        <Hero />

        {/* Seção Sobre - Trajetória e Perfil */}
        <About />

        {/* Seção Propostas - Pautas e Compromissos com MG */}
        <Proposals />

        {/* Seção Compromisso - Destaque Visual Diferenciado com 1078 */}
        <Commitment />

        {/* Seção Acompanhe - Redes Sociais Oficiais e Contato */}
        <SocialLinks />

        {/* CTA Final - Encerramento e Chamada de Ação */}
        <FinalCTA />
      </main>

      {/* Footer Elegante com Identificação Eleitoral Obrigatória */}
      <Footer />
    </div>
  );
};

export default App;
