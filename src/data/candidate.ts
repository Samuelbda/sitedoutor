/**
 * ============================================================================
 * DADOS DO CANDIDATO E CONFIGURAÇÃO DA CAMPANHA
 * ============================================================================
 * Arquivo centralizado para alteração rápida de dados, propostas, links de redes
 * sociais e configurações visuais da campanha de Maycon Matos.
 */

export interface ProposalItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  iconName: 'HeartHandshake' | 'ShieldCheck' | 'FileSearch' | 'Users';
}

export interface QuickInfoItem {
  label: string;
  value: string;
}

export interface SocialLinkItem {
  id: string;
  platform: string;
  handle: string;
  description: string;
  icon: 'Instagram' | 'Facebook' | 'Youtube' | 'MessageCircle';
  url: string;
  actionText: string;
}

export interface NavLinkItem {
  name: string;
  href: string;
}

export interface CandidateData {
  // Identificação básica
  name: string;
  fullName: string;
  role: string;
  roleTitle: string;
  state: string;
  stateFull: string;
  party: string;
  ballotNumber: string;
  profession: string;
  birthplace: string;
  tagline: string;
  photoUrl: string;

  // Biografia
  about: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    quickInfo: QuickInfoItem[];
  };

  // Propostas
  proposalsSection: {
    title: string;
    subtitle: string;
    ctaButtonText: string;
    items: ProposalItem[];
  };

  // Seção Compromisso
  commitmentSection: {
    title: string;
    text: string;
    ctaButtonText: string;
  };

  // Redes Sociais e Contato
  socialSection: {
    title: string;
    subtitle: string;
    items: SocialLinkItem[];
  };

  // CTA Final
  finalCta: {
    title: string;
    subtitle: string;
    quote: string;
    primaryBtnText: string;
    secondaryBtnText: string;
  };

  // Footer & Conformidade Legal Eleitoral
  footer: {
    legalPlaceholder: string;
    electoralInfo: string;
    copyrightText: string;
    navLinks: NavLinkItem[];
    legalLinks: { name: string; href: string }[];
  };

  // Variáveis de Tema / Cores da Campanha
  theme: {
    primary: string;       // Cor principal forte da campanha
    primaryDark: string;   // Versão escura para contrastes e cabeçalhos
    primaryLight: string;  // Versão suave para fundos de destaque
    accent: string;        // Cor de destaque/ação
    partyColor: string;    // Cor representativa
    bgLight: string;       // Fundo claro / off-white
    cardBg: string;        // Fundo de cards
  };
}

export const candidateData: CandidateData = {
  name: "MAYCON MATOS",
  fullName: "Maycon Pereira de Matos",
  role: "Deputado Federal",
  roleTitle: "Candidato a Deputado Federal",
  state: "MG",
  stateFull: "Minas Gerais",
  party: "REPUBLICANOS",
  ballotNumber: "1078",
  profession: "Advogado",
  birthplace: "Teófilo Otoni — MG",
  tagline: "Uma candidatura voltada à defesa dos direitos previdenciários e assistenciais e à representação dos mineiros.",
  photoUrl: "/images/maycon-matos.jpg",

  // SEÇÃO SOBRE
  about: {
    title: "QUEM É MAYCON MATOS?",
    paragraph1: "Maycon Pereira de Matos é advogado, natural de Teófilo Otoni, Minas Gerais, e atua especialmente em questões relacionadas ao INSS, BPC e direitos previdenciários e assistenciais.",
    paragraph2: "Sua candidatura apresenta como uma de suas pautas a defesa de beneficiários e famílias que dependem de políticas de proteção social.",
    quickInfo: [
      { label: "NOME", value: "Maycon Pereira de Matos" },
      { label: "PROFISSÃO", value: "Advogado" },
      { label: "NATURALIDADE", value: "Teófilo Otoni — MG" },
      { label: "CARGO", value: "Deputado Federal" },
      { label: "PARTIDO", value: "REPUBLICANOS" },
    ]
  },

  // SEÇÃO PROPOSTAS
  proposalsSection: {
    title: "PRINCIPAIS PROPOSTAS",
    subtitle: "Conheça algumas das pautas apresentadas por Maycon Matos.",
    ctaButtonText: "VER TODAS AS PROPOSTAS",
    items: [
      {
        id: "auxilio-cuidador",
        number: "01",
        title: "AUXÍLIO-CUIDADOR",
        category: "Cuidado e Família",
        description: "Defesa da criação de um auxílio no valor de um salário mínimo mensal destinado a cuidadores de idosos doentes e mães e pais atípicos.",
        iconName: "HeartHandshake"
      },
      {
        id: "defesa-bpc",
        number: "02",
        title: "DEFESA DO BPC",
        category: "Proteção Social",
        description: "Atuação em defesa dos beneficiários do Benefício de Prestação Continuada e do acesso aos direitos assistenciais.",
        iconName: "ShieldCheck"
      },
      {
        id: "defesa-previdenciaria",
        number: "03",
        title: "DEFESA PREVIDENCIÁRIA",
        category: "Fiscalização e Direitos",
        description: "Defesa dos beneficiários e fiscalização de possíveis irregularidades e descontos indevidos relacionados aos benefícios do INSS.",
        iconName: "FileSearch"
      },
      {
        id: "direitos-beneficiarios",
        number: "04",
        title: "DIREITOS DOS BENEFICIÁRIOS",
        category: "Cidadania e Acesso",
        description: "Defesa do acesso à informação e dos direitos de aposentados, pensionistas e beneficiários.",
        iconName: "Users"
      }
    ]
  },

  // SEÇÃO COMPROMISSO
  commitmentSection: {
    title: "MEU COMPROMISSO É REPRESENTAR VOCÊ",
    text: "Conheça as propostas de Maycon Matos e acompanhe de perto as ideias, posicionamentos e ações apresentadas durante a campanha.",
    ctaButtonText: "CONHEÇA AS PROPOSTAS"
  },

  // SEÇÃO ACOMPANHE / CONTATO
  socialSection: {
    title: "ACOMPANHE MAYCON MATOS",
    subtitle: "Acompanhe a candidatura e tenha acesso às informações e conteúdos publicados nas redes sociais.",
    items: [
      {
        id: "instagram",
        platform: "INSTAGRAM",
        handle: "@mayconmatos.adv",
        description: "Acompanhe publicações, notícias e vídeos diários da campanha.",
        icon: "Instagram",
        // INSERIR LINK OFICIAL: altere a URL abaixo quando o link direto estiver disponível
        url: "#",
        actionText: "Acessar Instagram"
      },
      {
        id: "facebook",
        platform: "FACEBOOK",
        handle: "Maycon Matos",
        description: "Siga a página e participe dos debates e atualizações.",
        icon: "Facebook",
        // INSERIR LINK OFICIAL: altere a URL abaixo quando o link direto estiver disponível
        url: "#",
        actionText: "Acessar Facebook"
      },
      {
        id: "youtube",
        platform: "YOUTUBE",
        handle: "Maycon Matos",
        description: "Assista aos posicionamentos, entrevistas e explicações de direitos.",
        icon: "Youtube",
        // INSERIR LINK OFICIAL: altere a URL abaixo quando o link direto estiver disponível
        url: "#",
        actionText: "Acessar YouTube"
      },
      {
        id: "whatsapp",
        platform: "WHATSAPP",
        handle: "Fale com a campanha",
        description: "Canal direto de comunicação, envio de sugestões e contato.",
        icon: "MessageCircle",
        // INSERIR LINK OFICIAL: altere a URL abaixo quando o número de atendimento estiver ativo
        url: "#",
        actionText: "Falar no WhatsApp"
      }
    ]
  },

  // CTA FINAL
  finalCta: {
    title: "MAYCON MATOS",
    subtitle: "Deputado Federal por Minas Gerais",
    quote: "Conheça as propostas e acompanhe a candidatura.",
    primaryBtnText: "CONHEÇA AS PROPOSTAS",
    secondaryBtnText: "ENTRE EM CONTATO"
  },

  // FOOTER E IDENTIFICAÇÃO ELEITORAL
  footer: {
    // IMPORTANTE: Campo reservado para inclusão das informações exigidas pela Justiça Eleitoral
    legalPlaceholder: "[INSERIR IDENTIFICAÇÃO ELEITORAL OBRIGATÓRIA]",
    electoralInfo: "Propaganda Eleitoral na Internet • Resoluções vigentes do Tribunal Superior Eleitoral (TSE)",
    copyrightText: "Maycon Matos — Candidato a Deputado Federal por Minas Gerais. Todos os direitos reservados.",
    navLinks: [
      { name: "Início", href: "#inicio" },
      { name: "Sobre", href: "#sobre" },
      { name: "Propostas", href: "#propostas" },
      { name: "Contato", href: "#contato" }
    ],
    legalLinks: [
      { name: "Política de Privacidade", href: "#privacidade" },
      { name: "Política de Cookies", href: "#cookies" }
    ]
  },

  // CONFIGURAÇÃO DE CORES (facilita trocar as cores da campanha rapidamente)
  theme: {
    primary: "#0B2B60",       // Azul Marinho Institucional e Confiável
    primaryDark: "#061A3B",   // Azul Noite Profundo
    primaryLight: "#164A96",  // Azul Real Energético
    accent: "#0284C7",        // Azul Céu Vibrante / Ciano de Ação
    partyColor: "#0D47A1",    // Republicanos Blue
    bgLight: "#F8FAFC",       // Off-white refinado
    cardBg: "#FFFFFF"         // Branco puro para suporte
  }
};
