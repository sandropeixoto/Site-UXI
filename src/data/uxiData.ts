import {
  ServiceItem,
  QualityControlPillar,
  MetricComparison,
  ResourceMaterial,
  SocialPost,
} from '../types';

export const HERO_DATA = {
  headline: 'Revolucionando as Pesquisas Digitais no Brasil',
  subheadline:
    'Transforme sua estratégia de pesquisa política ou de mercado com nossa metodologia inovadora, alcançando milhões de respondentes em todo o Brasil por meio de mídias sociais, painéis e inteligência geográfica.',
  badge: 'Sistema UXI • Tecnologia + 35 Anos de Expertise',
  stats: [
    { label: 'Redução de Custos', value: '65%' },
    { label: 'Velocidade de Execução', value: '80%' },
    { label: 'Taxa de Conclusão', value: '95%' },
    { label: 'Atendimento e Monitoramento', value: '24/7/365' },
  ],
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'redes-sociais',
    title: 'Pesquisas Online nas Redes Sociais',
    description:
      'Aproveitamos o crescimento explosivo das mídias sociais no Brasil para alcançar milhões de pessoas e segmentar com precisão cirúrgica o público-alvo necessário para cada estudo.',
    iconName: 'Share2',
    badge: 'Alta Escala',
    highlights: [
      'Segmentação socioeconômica e demográfica',
      'Comportamentos políticos ou de consumo',
      'Engajamento orgânico e impulsionado',
    ],
  },
  {
    id: 'tracking-diario',
    title: 'Tracking de Acompanhamento Diário',
    description:
      'Acompanhamento contínuo que define mudanças dinâmicas e em tempo real nas táticas de captação de informação, garantindo o cumprimento exato do plano amostral.',
    iconName: 'Activity',
    badge: 'Tempo Real',
    highlights: [
      'Ajuste dinâmico de cotas em campo',
      'Painéis em tempo real para tomada de decisão',
      'Monitoramento de oscilações de opinião',
    ],
  },
  {
    id: 'geolocalizacao',
    title: 'Geolocalização Precisa',
    description:
      'Busca-se a localização precisa do informante, garantindo que responda apenas uma vez com registro de IP, geolocalização e carimbo de data/hora oficial no relatório.',
    iconName: 'MapPin',
    badge: 'Amostragem Local',
    highlights: [
      'Precisão por município, bairro e setor',
      'Registro auditável de IP e coordenadas',
      'Zero duplicação territorial',
    ],
  },
  {
    id: 'opiniao-eleitoral',
    title: 'Opinião Pública & Eleitoral',
    description:
      'Metodologia exclusiva para pesquisas eleitorais, intenção de voto, avaliação de gestão, pesquisas de boca de urna e estudos profundos sobre temas sociais relevantes.',
    iconName: 'Vote',
    badge: 'Eleitoral & Mercado',
    highlights: [
      'Intenção de voto espontânea e estimulada',
      'Pesquisa de Boca de Urna ágil e confiável',
      'Análise de rejeição e percepção de marcas',
    ],
  },
  {
    id: 'migracao-quantitativa',
    title: 'Migração Quantitativa 100% Online',
    description:
      'Transição eficiente de estudos presenciais/analógicos para metodologias digitais sem perda de representatividade e com redução substancial do orçamento.',
    iconName: 'TrendingUp',
    badge: 'Modernização',
    highlights: [
      'Redução de até 65% nos custos operacionais',
      'Manutenção rigorosa das cotas amostrais',
      'Entrega até 80% mais rápida',
    ],
  },
  {
    id: 'controle-qualidade',
    title: 'Controle de Qualidade Total',
    description:
      'Sistema de auditoria em 6 etapas: captura inteligente, verificação de IP, bloqueio único, controle de e-mails, validação de velocidade e análise de consistência.',
    iconName: 'ShieldCheck',
    badge: 'Auditável',
    highlights: [
      'Eliminação de bots e respostas aleatórias',
      'Anexo de IP e horário no relatório final',
      '100% de respondentes humanos e verificados',
    ],
  },
];

export const QUALITY_PILLARS: QualityControlPillar[] = [
  {
    id: 'verificacao-ip',
    title: 'Verificação de IP',
    shortDesc: 'Consistência com o local declarado pelo respondente.',
    fullDesc:
      'Garantimos que o IP do dispositivo seja totalmente coerente com a geolocalização e local de trabalho/residência informados, evitando falsificações.',
    icon: 'Globe',
    tag: 'Anti-VPN',
  },
  {
    id: 'bloqueio-ip',
    title: 'Bloqueio de IP',
    shortDesc: 'Apenas um preenchimento por dispositivo.',
    fullDesc:
      'Cada endereço de IP é bloqueado imediatamente após o envio, impedindo qualquer tentativa de resposta múltipla ou manipulação de resultados.',
    icon: 'Lock',
    tag: 'Participação Única',
  },
  {
    id: 'controle-email',
    title: 'Controle de E-mail',
    shortDesc: 'Validação rigorosa de identidade única.',
    fullDesc:
      'Verificamos se há endereços de e-mail duplicados ou temporários, exigindo confirmações para assegurar a autenticidade de cada pessoa.',
    icon: 'MailCheck',
    tag: 'Validação ID',
  },
  {
    id: 'controle-dados',
    title: 'Controle de Dados',
    shortDesc: 'Detecção automatizada de duplicatas e inconsistências.',
    fullDesc:
      'Algoritmos de inteligência cruzada analisam o banco de dados em tempo real para expurgar registros repetidos ou padronizações suspeitas.',
    icon: 'Database',
    tag: 'Zero Duplicatas',
  },
  {
    id: 'verificacao-velocidade',
    title: 'Verificação de Velocidade',
    shortDesc: 'Detecção de respostas automáticas ou apressadas.',
    fullDesc:
      'Monitoramos o tempo gasto por tela e no formulário completo. Respostas concluídas em tempo desproporcionalmente baixo são descartadas.',
    icon: 'Zap',
    tag: 'Filtro Bot',
  },
  {
    id: 'analise-consistencia',
    title: 'Análise de Consistência',
    shortDesc: 'Auditoria estatística pré-entrega.',
    fullDesc:
      'Antes de enviar o relatório ao cliente, nossa equipe estatística analisa a coerência interna de todas as respostas e variáveis cruzadas.',
    icon: 'CheckCircle2',
    tag: 'Auditoria Humana',
  },
];

export const METRICS_DATA: MetricComparison[] = [
  {
    title: 'Redução de Custos',
    value: '65%',
    numericValue: 65,
    unit: '% de economia',
    description:
      'Em comparação com métodos presenciais tradicionais, nossas pesquisas digitais reduzem os custos logísticos e de equipe de campo.',
    badge: 'Eficiência Financeira',
    traditional: 'Alto custo com entrevistadores e deslocamento',
    uxi: 'Aproveitamento inteligente de mídia e sistemas autônomos',
  },
  {
    title: 'Velocidade de Execução',
    value: '80%',
    numericValue: 80,
    unit: '% mais rápido',
    description:
      'Concluímos projetos em uma fração do tempo necessário para pesquisas presenciais, entregando dados acionáveis com agilidade decisiva.',
    badge: 'Agilidade Decisiva',
    traditional: 'Semanas de tabulação e digitação manual',
    uxi: 'Coleta em tempo real com relatórios dinâmicos',
  },
  {
    title: 'Taxa de Conclusão',
    value: '95%',
    numericValue: 95,
    unit: '% de retenção',
    description:
      'Interface otimizada, amigável e acessível via smartphones garante que quase a totalidade dos participantes complete a pesquisa até o final.',
    badge: 'Alta Retenção',
    traditional: 'Altos índices de recusa no porta-a-porta',
    uxi: 'Experiência fluida e engajadora nas redes sociais',
  },
];

export const METHODOLOGY_STEPS = [
  {
    step: '01',
    title: 'Nós Capturamos',
    description:
      'Utilizamos tecnologia de ponta para recrutar respondentes qualificados através de canais digitais e mídias sociais, alcançando amostras representativas e diversificadas.',
    icon: 'UserPlus',
  },
  {
    step: '02',
    title: 'Nós Verificamos',
    description:
      'Implementamos múltiplos protocolos de verificação (IP, geolocalização, tempo de resposta e e-mail) para confirmar a autenticidade humana e eliminar fraudes.',
    icon: 'ShieldCheck',
  },
  {
    step: '03',
    title: 'Nós Aprovamos',
    description:
      'Apenas os dados que passam por 100% dos nossos testes de integridade são consolidados no relatório final e painel de análise entregues ao cliente.',
    icon: 'Award',
  },
];

export const REASONS_DATA = [
  {
    title: 'Três Pilares de Excelência',
    desc: 'Unimos Pesquisa, Tecnologia e Mídia Social em uma única estrutura coesa e autônoma.',
    icon: 'Layers',
  },
  {
    title: 'Comprometimento por Projeto',
    desc: 'Não vendemos apenas questionários. Assumimos o compromisso integral com o resultado e meta amostral do seu estudo.',
    icon: 'Target',
  },
  {
    title: 'Pesquisas 100% Autônomas',
    desc: 'Você alinha o projeto conosco e recebe os resultados totalmente digitalizados, auditados e estruturados.',
    icon: 'Cpu',
  },
  {
    title: 'Otimização de Orçamento',
    desc: 'Aproveitamos cada centavo do seu orçamento de pesquisa para maximizar o retorno sobre investimento (ROI).',
    icon: 'DollarSign',
  },
  {
    title: 'Suporte Ativo 24/7/365',
    desc: 'Equipe e ferramentas prontas para acompanhar seu projeto em tempo real, independentemente do dia ou horário de campo.',
    icon: 'Clock',
  },
  {
    title: 'Proteção de Imagem & Moderação',
    desc: 'Moderamos comentários públicos e gerenciamos sorteios/incentivos para preservar a reputação das marcas parceiras.',
    icon: 'Shield',
  },
];

export const LEADERSHIP_DATA = {
  name: 'Marco Barros',
  role: 'Sociólogo & Fundador da UXI Pesquisas',
  experience: 'Pioneiro em Pesquisas de Opinião e Mercado desde 1988',
  bio: 'Com mais de 35 anos de trajetória acadêmica e prática em sociologia, pesquisas eleitorais e estudos de comportamento de consumo no Brasil, Marco Barros liderou a transição da UXI das pesquisas analógicas para os modelos digitais de alta precisão.',
  quote:
    'Nosso nome é UXI, e nosso sobrenome é comprometimento e resultado. Aliamos 35 anos de história ao que há de mais avançado em ciência de dados e mídias sociais.',
};

export const RESOURCES_DATA: ResourceMaterial[] = [
  {
    id: 'guia-pesquisa-eleitoral',
    title: 'Guia de Pesquisa Eleitoral Digital no Brasil',
    category: 'E-book Metodológico',
    readTime: '12 min de leitura',
    description:
      'Como a amostragem estratificada por mídias sociais substitui com superioridade as antigas abordagens de ponto de fluxo.',
    fileSize: '2.4 MB (PDF)',
    tags: ['Eleitoral', 'Metodologia', 'Amostragem'],
  },
  {
    id: 'estudo-caso-migracao',
    title: 'Whitepaper: Migração de Estudos Presenciais para Online',
    category: 'Estudo de Caso',
    readTime: '8 min de leitura',
    description:
      'Aprenda como reduzir 65% dos custos de campo mantendo a calibração de cotas e a representatividade estatística.',
    fileSize: '1.8 MB (PDF)',
    tags: ['Mercado', 'Economia de Escala', 'Tecnologia'],
  },
  {
    id: 'modelo-relatorio-uxi',
    title: 'Modelo de Relatório com Auditoria de IP & Geolocalização',
    category: 'Amostra de Entregável',
    readTime: '5 min de leitura',
    description:
      'Veja um exemplo real de relatório da UXI com anexo de IP, carimbo de data/hora e mapas de densidade geográfica.',
    fileSize: '3.1 MB (PDF)',
    tags: ['Relatórios', 'Auditoria', 'Transparência'],
  },
];

export const SOCIAL_POSTS: SocialPost[] = [
  {
    id: 'post-1',
    username: 'UXI Pesquisas',
    handle: '@uxipesquisa',
    date: 'Há 2 dias',
    content:
      '📊 Como o tracking diário em mídias sociais prevê tendências eleitorais com dias de antecedência? A velocidade da captação digital permite reajustar campanhas no timing certo. #UXIPesquisas #PesquisaEleitoral #CienciaDeDados',
    imageAlt: 'Gráfico comparativo de tracking diário',
    category: 'Pesquisa Eleitoral',
    likes: 342,
    comments: 28,
    shares: 45,
    link: 'https://instagram.com/uxipesquisa',
  },
  {
    id: 'post-2',
    username: 'UXI Pesquisas',
    handle: '@uxipesquisa',
    date: 'Há 4 dias',
    content:
      '🔒 Segurança e integridade de dados: Nosso sistema registra IP, coordenadas exatas e timestamp de cada respondente. Pesquisa digital levada a sério com 100% de transparência. #QualidadeUXI #MetodologiaExclusiva',
    imageAlt: 'Selo de qualidade e verificação de IP',
    category: 'Tecnologia & Controle',
    likes: 512,
    comments: 41,
    shares: 89,
    link: 'https://instagram.com/uxipesquisa',
  },
  {
    id: 'post-3',
    username: 'UXI Pesquisas',
    handle: '@uxipesquisa',
    date: 'Há 1 semana',
    content:
      '💡 35 anos de trajetória com a agilidade dos novos tempos. Do analógico ao digital, nossa missão continua a mesma: entregar verdades estatísticas para grandes decisões. #MarcoBarros #SociologiaAplicada',
    imageAlt: 'Sociólogo Marco Barros em apresentação',
    category: 'Institucional',
    likes: 628,
    comments: 54,
    shares: 112,
    link: 'https://instagram.com/uxipesquisa',
  },
];

export const ADDRESS_INFO = {
  company: 'UXI Pesquisas',
  tagline: 'Transformamos informações em insights estratégicos para o sucesso do seu negócio.',
  address: 'Travessa 14 de Março, 1376 - Bairro Umarizal, Belém - PA',
  cep: 'CEP: 66055-490',
  email: 'contato@uxipesquisa.com.br',
  phone: '+55 (91) 98624-6666',
  social: {
    facebook: 'https://facebook.com/uxipesquisa',
    instagram: 'https://instagram.com/uxipesquisa',
    linkedin: 'https://linkedin.com/company/uxipesquisa',
  },
};
