import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PenaltyShootoutUI } from '../ui';

const slug = 'calculadora-desempate-penalti';
const title = 'Marcador de Grandes Penalidades Online: Desempate por Penáltis';
const description =
  'Acompanhe o desempate por grandes penalidades em direto. Contagem de 5 remates, eliminação matemática, morte súbita e celebração do vencedor.';

const faqData = [
  {
    question: 'Quando termina um desempate por grandes penalidades antecipadamente?',
    answer:
      'O desempate termina assim que uma equipa consegue uma vantagem de golos que o adversário já não pode empatar matematicamente com os remates restantes.',
  },
  {
    question: 'Como funciona a morte súbita nos penáltis?',
    answer:
      'Se houver empate após 5 penáltis por equipa, disputam-se rondas individuais de um penálti por equipa até que uma marque e a outra falhe na mesma ronda.',
  },
  {
    question: 'Quem remata primeiro no desempate por penáltis?',
    answer:
      'O árbitro realiza um sorteio por moeda para escolher a baliza e um segundo sorteio para decidir que equipa remata em primeiro lugar.',
  },
  {
    question: 'O guarda-redes pode ser substituído durante os penáltis?',
    answer:
      'Um guarda-redes lesionado sem condições para continuar pode ser substituído por um suplente designado, caso a equipa ainda não tenha esgotado as suas substituições.',
  },
];

const howToData = [
  {
    name: 'Introduzir os nomes das equipas',
    text: 'Escreva os nomes personalizados das equipas nos campos correspondentes antes de iniciar os remates.',
  },
  {
    name: 'Registar cada penálti',
    text: 'Clique em GOLO ou FALHA a cada remate. A aplicação atualiza pontuações, indicadores e a ordem de remate.',
  },
  {
    name: 'Transição para Morte Súbita',
    text: 'Em caso de empate após 5 remates por equipa, a ferramenta entra automaticamente em morte súbita.',
  },
  {
    name: 'Proclamação do Vencedor',
    text: 'Após a vitória matemática ou em morte súbita, uma janela animada proclama a equipa vencedora.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'SportsApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<PenaltyShootoutUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography: bibliographyEntries,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Regulamento Oficial IFAB do Desempate por Grandes Penalidades',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O desempate por grandes penalidades (oficialmente <em>pontapés da marca de grande penalidade</em>) determina o vencedor de um jogo de futebol empatado em eliminatórias de acordo com a Leis do Jogo da IFAB.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '5', label: 'Remates Iniciais' },
        { value: '11m', label: 'Distância da Baliza' },
        { value: '1v1', label: 'Rematador vs Guarda-Redes' },
        { value: 'ABBA / AB', label: 'Ordem de Remates' },
      ],
    },
    {
      type: 'tip',
      title: 'Regra de Eliminação Matemática',
      html: 'Se uma equipa alcançar mais golos do que o adversário pode marcar com os remates restantes, o desempate termina imediatamente.',
    },
    {
      type: 'title',
      text: 'Comparativo: Fase Regular vs Morte Súbita',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Fase Regular (5 Penáltis)',
          description: 'Série de 5 remates alternados por equipa. Interrupção apenas em caso de impossibilidade matemática de recuperação.',
        },
        {
          title: 'Fase de Morte Súbita',
          description: 'Rondas individuais após a 5ª ronda. Qualquer diferença de golos após remates iguais determina a vitória imediata.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Resumo das Normas IFAB',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Regra / Requisito', 'Padrão Oficial IFAB'],
      rows: [
        ['Jogadores Elegíveis', 'Apenas os jogadores no terreno de jogo ao apito final podem rematar.'],
        ['Posição do Guarda-Redes', 'Deve manter pelo menos parte de um pé sobre a linha de golo no momento do remate.'],
        ['Fintas na Corrida', 'Fintas durante a corrida são permitidas; fintas após concluir a corrida são penalizadas.'],
        ['Igualdade de Jogadores', 'Se uma equipa tiver menos jogadores devido a expulsão, o adversário deve reduzir o seu número para igualar.'],
      ],
    },
    {
      type: 'title',
      text: 'Prós e Contras dos Penáltis',
      level: 2,
    },
    {
      type: 'proscons',
      title: 'Avaliação do Formato',
      items: [
        {
          pro: 'Garante um vencedor definitivo num tempo previsível.',
          con: 'A elevadíssima pressão psicológica pode ofuscar o desempenho durante os 120 minutos.',
        },
        {
          pro: 'Proporciona momentos de grande emoção e espetáculo para os adeptos.',
          con: 'O falhanço individual de um jogador pode carregar uma culpa desproporcionada.',
        },
      ],
    },
  ],
  ui: {
    teamALabel: 'Equipa da Casa',
    teamBLabel: 'Equipa Visitante',
    scoreGoal: 'GOLO',
    scoreMiss: 'FALHA',
    undo: 'Desfazer',
    reset: 'Reiniciar',
    suddenDeath: 'Morte Súbita',
    regularRounds: 'Ronda Regular',
    roundLabel: 'Ronda',
    turnLabel: 'Vez de Rematar',
    winnerTitle: 'Vencedor Declarado',
    unreachableLead: 'Vantagem inalcançável na fase regular',
    regularRoundsWin: 'Vitória após 5 penáltis regulares',
    suddenDeathWin: 'Vitória em morte súbita',
    statusPending: 'Pendente',
    statusScored: 'Marcado',
    statusMissed: 'Falhado',
  },
};
