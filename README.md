<div align="center">
  <img src="https://nano.net.br/assets/programacao-DzAvORjU.png" width="50" alt="Logo NANO" />
  
  # NANO
  
  ### TECNOLOGIA SOB MEDIDA
</div>

---

# UXI Pesquisas — Sistema de Pesquisa Digital

Plataforma corporativa e portal institucional de alta performance da **UXI Pesquisas**, empresa pioneira no desenvolvimento e execução de pesquisas eleitorais, de opinião pública e de mercado totalmente digitais, alimentadas por inteligência de dados, geolocalização e auditoria amostral rigorosa.

---

## 📋 Visão Geral

### O que o projeto faz
O sistema **UXI Pesquisas** é uma solução web moderna e interativa que apresenta a metodologia, as soluções tecnológicas e a infraestrutura de pesquisas digitais da UXI. A plataforma oferece ferramentas em tempo real para gestores, candidatos e decisores do mercado, incluindo um **Simulador Amostral Interativo** que calcula instantaneamente o tamanho representativo de amostra, margem de erro, nível de confiança e estimativa de economia financeira e temporal.

### Qual problema resolve
A pesquisa presencial e analógica tradicional sofre com custos operacionais elevados, prazos extensos de coleta em campo, suscetibilidade a fraudes de entrevistadores e limitações geográficas. A UXI resolve esses gargalos ao aplicar um método digital proprietário, com checagem de IP, geolocalização por geofencing, proteção anti-bot e amostragem estatística estratificada por cotas (sexo, idade, instrução, renda e região), entregando resultados auditáveis com até 65% de economia e prazos de conclusão em até 48 horas.

### Objetivo Principal
Demonstrar a autoridade mercadológica e a robustez técnica do Sistema UXI, oferecendo transparência sobre o controle de qualidade dos dados, facilitando a contratação direta por tomadores de decisão e fornecendo simulações amostrais precisas para municípios, estados e segmentos de mercado em todo o Brasil.

### Público-Alvo
- Gestores públicos, prefeitos, governadores e secretários
- Candidatos políticos, coligações e coordenações de campanha eleitoral
- Consultores e estrategistas de marketing político e eleitoral
- Empresas, marcas e institutos de pesquisa corporativa
- Veículos de imprensa e analistas de opinião pública

---

## ⚡ Funcionalidades Principais

> **Simulador Interativo de Amostra e Economia**: Ferramenta estocástica de cálculo que ajusta tamanho populacional, margem de erro (1.5% a 5.0%) e nível de confiança (90% a 99%), gerando comparativos instantâneos de investimento e tempo de execução entre o modelo UXI e a pesquisa presencial tradicional.

> **Controle de Qualidade & Auditoria por IP**: Exposição dos 6 pilares de integridade da informação (Verificação de IP, Geolocalização, Filtro Anti-Bot, Checagem Dupla, Criptografia de Dados e Amostragem Representativa).

> **Portfólio de Pesquisas Especializadas**: Vitrine com detalhamento técnico das pesquisas Eleitorais (Espontânea/Estimulada, Rejeição, Tracking Diário), de Opinião Pública (Avaliação de Gestão, Prioridades do Município) e de Mercado (NPS, Hábitos de Consumo, Imagem de Marca).

> **Comparativo Direto de Desempenho**: Painel estatístico e tabela analítica demonstrando a superioridade em alcance, custo-benefício e velocidade de coleta em relação aos métodos tradicionais.

> **Atendimento Direto com Especialista (Modal 24/7/365)**: Sistema de agendamento e solicitação de ligação imediata com a equipe técnica de estatísticos e sociólogos da UXI.

> **Perfil Institucional & Trajetória de Liderança**: Apresentação da história do sociólogo Marco Barros, com 35 anos de atuação pioneira no setor de pesquisas sociopolíticas no Pará e no Brasil.

> **Central de Downloads e Whitepapers**: Acesso a relatórios de amostra com verificação técnica, e-books sobre ciência de dados eleitorais e guias de metodologia.

> **Feed Social Dinâmico**: Módulo de integração visual com as publicações, análises e novidades do canal oficial da UXI Pesquisas.

> **Formulário de Contato Direto e Localização**: Canal seguro com validação de dados para recebimento de solicitações de planos amostrais e propostas comerciais.

> **Animações de Revelação por Rolagem (Reveal on Scroll)**: Transições suaves e efeitos de surgimento (fade-in e slide-up) acionados dinamicamente conforme o usuário navega pelas seções da página.

> **Botão Flutuante 'Voltar ao Topo'**: Componente inteligente acionado após 500px de rolagem para navegação fluida e acessível.

---

## 🛠️ Stack Técnica

| Categoria | Tecnologia | Descrição |
|---|---|---|
| **Frontend Framework** | React 19.0 | Biblioteca declarativa de UI com arquitetura orientada a componentes |
| **Linguagem** | TypeScript 5.8 | Tipagem estática rigorosa para garantia de integridade e autosuporte |
| **Build System** | Vite 6.2 | Bundler de alta velocidade para desenvolvimento e compilação de produção |
| **Estilização** | Tailwind CSS v4 | Framework utilitário CSS configurado nativamente via plugin Vite |
| **Animações & Motion** | Motion 12.23 (Framer) | Animações declarativas e efeitos `whileInView` para transição e scroll |
| **Efeitos Visuais** | Canvas Confetti | Efeito interativo no encerramento de cálculos do simulador amostral |
| **Ícones** | Lucide React | Biblioteca moderna e otimizada de ícones vetoriais em JSX |
| **Backend / Proxy** | Express 4.21 | Servidor Node.js para gerenciamento de rotas e entrega de assets |
| **Inteligência de Dados** | Google GenAI SDK | Integração com SDK corporativo `@google/genai` para análises preditivas |
| **Gerenciamento de Ambiente** | Dotenv | Controle seguro de variáveis de ambiente do sistema |
| **Deploy / Publicação** | GitHub Pages (`gh-pages`) | Pipeline de automação de build para publicação do artefato estático |
| **Gerenciador de Pacotes** | Bun / NPM | Gerenciamento de dependências e execução de scripts do projeto |

---

## 🏗️ Arquitetura do Projeto

O projeto segue uma arquitetura moderna baseada em componentes funcionais do React e padrões de projeto limpos (**Clean Code**), promovendo alta coesão e baixo acoplamento:

```
├── public/                 # Assets estáticos públicos e favicons
├── src/
│   ├── components/         # Componentes React reutilizáveis e modulares
│   │   ├── ContactForm.tsx       # Formulário de contato e mapa
│   │   ├── Footer.tsx            # Rodapé institucional e links rápidos
│   │   ├── Hero.tsx              # Seção principal com CTA e métricas
│   │   ├── Methodology.tsx       # Detalhamento do método em 3 etapas
│   │   ├── Navbar.tsx            # Cabeçalho fixo transparente com navegação
│   │   ├── PerformanceStats.tsx  # Métricas e tabela comparativa
│   │   ├── QualityControl.tsx    # Pilares de segurança e verificação de IP
│   │   ├── Resources.tsx         # Central de e-books e whitepapers
│   │   ├── SampleCalculator.tsx  # Simulador estatístico interativo
│   │   ├── ScrollToTopButton.tsx # Botão flutuante para retorno ao topo
│   │   ├── Services.tsx          # Cards dos serviços de pesquisa
│   │   ├── SocialFeed.tsx        # Feed visual das redes sociais
│   │   ├── SpecialistModal.tsx   # Modal de agendamento de chamada
│   │   └── WhyUxi.tsx            # Trajetória institucional de Marco Barros
│   ├── data/               # Camada de dados e constantes da aplicação
│   │   └── uxiData.ts            # Estrutura unificada de conteúdo e parâmetros
│   ├── types/              # Interfaces e declarações de tipos TypeScript
│   │   └── index.ts              # Contratos de dados dos serviços, métricas e formulários
│   ├── App.tsx             # Componente raiz da aplicação
│   ├── index.css           # Estilos globais e importação do Tailwind CSS
│   └── main.tsx            # Ponto de entrada de renderização do React DOM
├── .env.example            # Declaração das variáveis de ambiente necessárias
├── metadata.json           # Metadados de configuração e permissões
├── package.json            # Manifesto de dependências e scripts de automação
├── tsconfig.json           # Configurações do compilador TypeScript
└── vite.config.ts          # Configuração do Vite e plugins de compilação
```

### Fluxo da Aplicação e Padrões
1. **Component-Based Architecture**: Cada seção da landing page é isolada em seu próprio componente em `src/components/`, facilitando manutenção e expansão.
2. **Data-Driven UI**: Todo o conteúdo institucional, perguntas frequentes, cards de serviços e pilares de qualidade são alimentados de forma desacoplada via `src/data/uxiData.ts`.
3. **Motion / Viewport Triggers**: Utilização da prop `whileInView` do Motion com `viewport={{ once: true, margin: '-50px' }}` para renderização progressiva e suave ao longo do scroll.
4. **State Management**: Estado local reativo utilizando React Hooks (`useState`, `useMemo`, `useEffect`) para recálculo instantâneo das equações amostrais e gerenciamento de modais.

---

## 🚦 Instalação e Execução

### Pré-requisitos
Certifique-se de ter instalado em sua máquina:
- **Node.js**: Versão `>= 18.0.0`
- **NPM** ou **Bun**: Gerenciador de pacotes

### Passo a Passo

1. **Clonar o Repositório**:
   ```bash
   git clone https://github.com/seu-usuario/uxi-pesquisas.git
   cd uxi-pesquisas
   ```

2. **Instalar as Dependências**:
   ```bash
   npm install
   # ou usando bun
   bun install
   ```

3. **Configurar as Variáveis de Ambiente**:
   Crie um arquivo `.env` baseado no `.env.example`:
   ```bash
   cp .env.example .env
   ```
   Ajuste as chaves conforme necessário:
   ```env
   GEMINI_API_KEY="SuaChaveDeAPI"
   APP_URL="http://localhost:3000"
   ```

4. **Executar em Modo de Desenvolvimento**:
   ```bash
   npm run dev
   ```
   Acesse no navegador: `http://localhost:3000`

5. **Gerar Build de Produção**:
   ```bash
   npm run build
   ```

6. **Testar a Versão de Produção Localmente**:
   ```bash
   npm run preview
   ```

---

## 📜 Scripts Disponíveis

| Script | Comando | Descrição |
|---|---|---|
| `dev` | `vite --port=3000 --host=0.0.0.0` | Inicia o servidor de desenvolvimento na porta 3000 |
| `build` | `vite build` | Compila os arquivos para produção na pasta `dist/` |
| `preview` | `vite preview` | Executa um servidor local para testar a pasta de build |
| `deploy` | `gh-pages -d dist` | Realiza o deploy automático da pasta `dist` para o GitHub Pages |
| `clean` | `rm -rf dist server.js` | Limpa diretórios e artefatos de compilação antigos |
| `lint` | `tsc --noEmit` | Executa a validação do TypeScript sem gerar arquivos |

---

## 🚀 Deploy

O projeto está preparado para múltiplos ambientes de hospedagem corporativa:

### 1. GitHub Actions & GitHub Pages
O projeto conta com o pipeline automatizado via **GitHub Actions** configurado em `.github/workflows/deploy.yml`:
- **Gatilho**: Disparado em todo `push` na branch `main`
- **Validação Antecipada**: Executa o comando de lint (`npm run lint` / `tsc --noEmit`) antes da compilação para garantir que nenhum código com erro chegue ao ar
- **Deploy**: Realiza a compilação do Vite com caminhos relativos (`base: './'`) e faz o deploy automático para o **GitHub Pages**

Para deploy manual via CLI:
```bash
npm run build
npm run deploy
```

### 2. Google Cloud Run / Docker
Para execução em container Fullstack com servidor Express, o projeto possui estrutura compatível com containerização Node.js na porta `3000`:
- **Build da imagem Docker**: `docker build -t uxi-pesquisas .`
- **Execução do Container**: `docker run -p 3000:3000 uxi-pesquisas`

---

## 🔒 Considerações Técnicas

- **Segurança & Sanitização**: O formulário de contato e as rotas de interação realizam validação rigorosa de campos obrigatoriedade de formato para telefone e e-mail antes do processamento.
- **Performance**: Tempo de carregamento otimizado com empacotamento em chunks via Vite, otimização de fontes e componentes assíncronos.
- **Acessibilidade & UX**: Design com contraste aprovado (fundo escuro `#0a0f1e` com acentos em Emerald e Cyan), suporte a navegação por teclado, rótulos ARIA adequados e estados interativos claros.
- **Responsividade Total**: Layout totalmente adaptável para dispositivos móveis, tablets e telas desktop ultra-wide utilizando breakpoints nativos do Tailwind CSS (`sm`, `md`, `lg`, `xl`).

---

## 🚀 Desenvolvido por

> **Sandro Peixoto**  
> https://www.sandropeixoto.com.br
>
> **NANO**  
> https://nano.net.br
