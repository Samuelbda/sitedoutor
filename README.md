# Site Institucional Eleitoral — Maycon Matos (1078)

Landing page eleitoral One Page, moderna, profissional, elegante e 100% responsiva para **Maycon Matos**, candidato a **Deputado Federal por Minas Gerais** (**REPUBLICANOS - 1078**).

---

## 🚀 Tecnologias Utilizadas

- **React 19**
- **TypeScript**
- **Vite 6**
- **Tailwind CSS & CSS Moderno** (com Design System baseado em variáveis CSS)
- **Lucide React** (ícones vetoriais leves e consistentes)
- **Google Fonts** (Plus Jakarta Sans & Outfit)
- **SEO Semântico e OpenGraph Integrado**
- **Acessibilidade (a11y) e Navegação por Teclado**

---

## 📂 Estrutura do Projeto

```text
maycon-matos-site/
├── public/
│   ├── favicon.svg               # Ícone do site
│   └── images/
│       └── maycon-matos.jpg      # Fotografia oficial do candidato
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── Header.tsx            # Cabeçalho fixo, navegação e menu mobile
│   │   ├── Hero.tsx              # Destaque principal, número 1078 e foto oficial
│   │   ├── About.tsx             # Trajetória (#sobre) e informações rápidas
│   │   ├── Proposals.tsx         # Cards modernos das 4 propostas (#propostas)
│   │   ├── Commitment.tsx        # Seção de compromisso com contraste navy e 1078
│   │   ├── SocialLinks.tsx       # Redes sociais oficiais e WhatsApp (#contato)
│   │   ├── FinalCTA.tsx          # Chamada de encerramento
│   │   └── Footer.tsx            # Rodapé e identificações eleitorais obrigatórias
│   ├── data/
│   │   └── candidate.ts          # Centralizador de todos os dados editáveis
│   ├── App.tsx                   # Composição semântica da página
│   ├── main.tsx                  # Ponto de entrada do React
│   └── index.css                 # Design system, tipografia e animações
├── index.html                    # SEO, meta tags, OpenGraph e fontes
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

---

## ⚙️ Como Executar Localmente

1. Navegue até a pasta do projeto:
   ```bash
   cd maycon-matos-site
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Para gerar a versão de produção otimizada:
   ```bash
   npm run build
   ```

---

## ✏️ Como Personalizar os Dados do Candidato

Todos os textos, links de redes sociais, números e informações institucionais estão centralizados em **`src/data/candidate.ts`**:

- **Número Eleitoral / Partido / Nome**: Edite as constantes no topo do arquivo.
- **Propostas**: O array `proposalsSection.items` permite adicionar ou editar propostas com facilidade mantendo o padrão visual.
- **Redes Sociais**: As URLs oficiais podem ser inseridas diretamente nos campos `url` (onde consta o comentário `// INSERIR LINK OFICIAL`).
- **Cores da Campanha**: As cores principais estão mapeadas no objeto `theme` e nas variáveis de `:root` em `src/index.css`.

---

## ⚖️ Conformidade Legal Eleitoral

- O rodapé inclui área dedicada e delimitada para inclusão do CNPJ da campanha, identificação do partido/coligação e tiragem, conforme exigido pelas resoluções do **TSE**.
- As seções respeitam o princípio da clareza, transparência e veracidade das informações.
