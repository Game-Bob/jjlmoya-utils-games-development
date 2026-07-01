import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BaseballScoreKeeperLocaleContent } from '../entry';

const slug = 'placar-baseball-softball';
const title = 'Placar de Baseball e Softbol com Rastreador de Diamante';
const description = 'Acompanhe pontuações ao vivo de baseball com corridas, rebatidas e erros. Diamante visual com posições dos corredores, contagem de bolas e strikes e grade histórica inning por inning.';

const faqData = [
  {
    question: 'Como funciona a contagem no baseball?',
    answer: 'A contagem mostra o número de bolas e strikes no rebatedor atual. Bolas vão até 4 para um walk. Strikes vão até 3 para um strikeout. Limites ajustáveis para ligas juvenis.',
  },
  {
    question: 'O que o diamante interativo de baseball mostra?',
    answer: 'O diamante mostra primeira, segunda e terceira base. Tocar em uma base a destaca em laranja para indicar que há um corredor na base. Corredores avançam automaticamente em rebatidas.',
  },
  {
    question: 'Como corridas, rebatidas e erros são registrados?',
    answer: 'A matriz R H E exibe corridas, rebatidas e erros para ambos os times. O histórico inning por inning mostra como a pontuação foi construída ao longo de todos os innings.',
  },
];

const howToData = [
  {
    name: 'Registre Cada Arremesso',
    text: 'Toque em Strike, Bola, Fouled, Rebatida ou Out para registrar cada arremesso. A contagem atualiza automaticamente conforme o resultado.',
  },
  {
    name: 'Gerencie os Corredores',
    text: 'Toque nas bases no diamante para colocar ou remover corredores. Em uma rebatida, os corredores avançam automaticamente.',
  },
  {
    name: 'Acompanhe o Progresso do Inning',
    text: 'O display do inning mostra a metade atual. Após três outs o jogo alterna automaticamente entre as metades superior e inferior.',
  },
  {
    name: 'Revise o Box Score',
    text: 'Confira o resumo R H E e a grade rolável do histórico de innings para ver a progressão completa da pontuação.',
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
    image: undefined,
    url: undefined,
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

export const content: BaseballScoreKeeperLocaleContent = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Placar de Baseball Gratuito Online: Acompanhe Corridas Rebatidas Erros com Diamante ao Vivo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Precisa de um placar de baseball confiável para seu próximo jogo? Esta ferramenta online gratuita registra corridas, rebatidas e erros enquanto exibe um diamante interativo ao vivo com posições dos corredores em tempo real. Cada arremesso importa e nosso placar digital garante que você nunca perca a contagem, os outs ou o inning. Quer você esteja treinando uma liga juvenil, marcando pontos para um torneio de softbol ou gerenciando um jogo do ensino médio, esta ferramenta cuida de todo o box score automaticamente para que você possa focar na ação em campo.',
    },
    {
      type: 'title',
      text: 'Como Este Placar de Baseball Economiza Seu Tempo e Previne Erros',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A marcação manual está sujeita a erros, especialmente durante jogos acelerados. Um strike perdido ou um corredor esquecido pode comprometer todo o box score. Este placar digital automatiza as partes tediosas. Toque em Strike, Bola, Fouled, Rebatida ou Out e o quadro atualiza a contagem instantaneamente. Quando um rebatedor anda ou é eliminado, a ferramenta reseta a contagem automaticamente. Após três outs, ela inverte o inning de cima para baixo e registra as corridas. A matriz R H E e a grade do histórico inning por inning fornecem uma visão completa do jogo em relance.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Contagem de Arremessos ao Vivo',
          description: 'Rastreamento automático de bolas e strikes com detecção de walk e strikeout para cada vez ao bastão.',
          icon: 'mdi:baseball',
          points: ['Bolas até 4', 'Strikes até 3', 'Reset automático na decisão'],
        },
        {
          title: 'Gerenciamento de Corredores',
          description: 'Diamante interativo mostra exatamente quem está na primeira, segunda ou terceira base.',
          icon: 'mdi:diamond-stone',
          points: ['Toque nas bases para colocar', 'Destaque visual quando ocupado', 'Limpeza na mudança de inning'],
        },
        {
          title: 'Box Score Completo',
          description: 'Estatísticas R H E completas com histórico de pontuação inning por inning rolável.',
          icon: 'mdi:scoreboard-outline',
          points: ['Corridas rebatidas e erros', 'Grade inning por inning', 'Totais atualizados para ambos os times'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Quem Precisa Deste Rastreador de Pontuação de Baseball',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Esta ferramenta foi criada para qualquer pessoa que precise marcar pontos: treinadores de baseball juvenil que querem um display digital claro para seus jogadores, voluntários de ligas de softbol que gerenciam jogos sem um marcador dedicado, pais acompanhando os jogos dos filhos das arquibancadas e árbitros que desejam um sistema secundário de verificação. A interface funciona em qualquer dispositivo, de smartphones no dugout a tablets montados na cerca ou laptops no banco. Sem necessidade de instalação, basta abrir o navegador e começar a marcar.',
    },
    {
      type: 'list',
      items: [
        '<strong>Gerenciamento Automático de Contagem:</strong> Bolas e strikes resetam automaticamente após walks, strikeouts, rebatidas e outs. Sem resets manuais necessários.',
        '<strong>Diamante com Toque:</strong> Toque na primeira, segunda ou terceira base para colocar ou remover corredores. O diamante acende em dourado para mostrar bases ocupadas.',
        '<strong>Pontuações Inning por Inning:</strong> Cada metade de inning é registrada na grade rolável. Veja exatamente como cada time pontuou ao longo de todos os nove innings.',
        '<strong>Zero Configuração Necessária:</strong> Abra a página e comece a marcar imediatamente. Personalize nomes dos times tocando nos rótulos acima das pontuações.',
      ],
    },
    {
      type: 'title',
      text: 'Marcação de Baseball Simplificada: Contagem, Diamante e Box Score em Um Só Lugar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Marcar pontos no baseball exige acompanhar várias coisas ao mesmo tempo: a contagem de bolas e strikes, o número de outs, quais bases têm corredores, as corridas de cada time e o inning atual. Perder o controle de qualquer um desses elementos gera confusão e registros imprecisos. Esta ferramenta consolida tudo em uma única tela. Os pontos de contagem mostram bolas e strikes em relance. O diamante mostra as posições dos corredores. A tabela R H E exibe o box score completo. E a grade de innings rola horizontalmente para mostrar o histórico completo de pontuação. Tudo atualiza em tempo real a cada toque.',
    },
    {
      type: 'grid',
      columns: [
        { type: 'card', title: 'Técnicos', html: '<p>Mantenha um placar digital claro visível para todo o time a partir do dugout.</p>' },
        { type: 'card', title: 'Voluntários', html: '<p>Sem experiência em marcação necessária. A ferramenta lida com todo o rastreamento complexo automaticamente.</p>' },
        { type: 'card', title: 'Pais', html: '<p>Acompanhe o jogo das arquibancadas com um display confiável de pontuação em tempo real no seu celular.</p>' },
        { type: 'card', title: 'Jogadores', html: '<p>Revise as pontuações inning por inning após o jogo para analisar o desempenho.</p>' },
      ],
    },
  ],
  ui: {
    title: 'Placar de Baseball',
    description: 'Acompanhe corridas, rebatidas e erros com vista de diamante.',
    away: 'Visitante',
    home: 'Casa',
    runs: 'C',
    hits: 'R',
    errors: 'E',
    inning: 'Inning',
    topInning: 'Topo',
    bottomInning: 'Base',
    balls: 'Bolas',
    strikes: 'Strikes',
    outs: 'Outs',
    strikeBtn: 'Strike',
    ballBtn: 'Bola',
    foulBtn: 'Fouled',
    hitBtn: 'Rebatida',
    outBtn: 'Out',
    walkBtn: 'Walk',
    runBtn: '+1 Corrida',
    errorBtn: 'Erro',
    newBatter: 'Novo Rebatedor',
    resetMatch: 'Reiniciar Jogo',
    resetConfirm: 'Reiniciar o jogo atual? Todas as pontuações serão perdidas.',
    cancel: 'Cancelar',
    confirm: 'Confirmar',
    total: 'Total',
    fullscreen: 'Tela Cheia',
    toggleSound: 'Alternar Som',
  },
};
