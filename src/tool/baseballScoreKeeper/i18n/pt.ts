import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BaseballScoreKeeperLocaleContent } from '../entry';

const slug = 'placar-baseball-softball';
const title = 'Placar de Baseball e Softbol com Rastreador de Diamante';
const description = 'Acompanhe pontuacoes ao vivo de baseball com corridas, rebatidas e erros. Diamante visual com posicoes dos corredores, contagem de bolas e strikes e grade historica inning por inning.';

const faqData = [
  {
    question: 'Como funciona a contagem no baseball?',
    answer: 'A contagem mostra o numero de bolas e strikes no rebatedor atual. Bolas vao ate 4 para um walk. Strikes vao ate 3 para um strikeout. Limites ajustaveis para ligas juvenis.',
  },
  {
    question: 'O que o diamante interativo de baseball mostra?',
    answer: 'O diamante mostra primeira, segunda e terceira base. Tocar em uma base a destaca em laranja para indicar que ha um corredor na base. Corredores avancam automaticamente em rebatidas.',
  },
  {
    question: 'Como corridas, rebatidas e erros sao registrados?',
    answer: 'A matriz R H E exibe corridas, rebatidas e erros para ambos os times. O historico inning por inning mostra como a pontuacao foi construida ao longo de todos os innings.',
  },
];

const howToData = [
  {
    name: 'Registre Cada Arremesso',
    text: 'Toque em Strike, Bola, Fouled, Rebatida ou Out para registrar cada arremesso. A contagem atualiza automaticamente conforme o resultado.',
  },
  {
    name: 'Gerencie os Corredores',
    text: 'Toque nas bases no diamante para colocar ou remover corredores. Em uma rebatida, os corredores avancam automaticamente.',
  },
  {
    name: 'Acompanhe o Progresso do Inning',
    text: 'O display do inning mostra a metade atual. Apos tres outs o jogo alterna automaticamente entre as metades superior e inferior.',
  },
  {
    name: 'Revise o Box Score',
    text: 'Confira o resumo R H E e a grade rolavel do historico de innings para ver a progressao completa da pontuacao.',
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
      html: 'Precisa de um placar de baseball confiavel para seu proximo jogo? Esta ferramenta online gratuita registra corridas, rebatidas e erros enquanto exibe um diamante interativo ao vivo com posicoes dos corredores em tempo real. Cada arremesso importa e nosso placar digital garante que voce nunca perca a contagem, os outs ou o inning. Quer voce esteja treinando uma liga juvenil, marcando pontos para um torneio de softbol ou gerenciando um jogo do ensino medio, esta ferramenta cuida de todo o box score automaticamente para que voce possa focar na acao em campo.',
    },
    {
      type: 'title',
      text: 'Como Este Placar de Baseball Economiza Seu Tempo e Previne Erros',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A marcacao manual esta sujeita a erros, especialmente durante jogos acelerados. Um strike perdido ou um corredor esquecido pode comprometer todo o box score. Este placar digital automatiza as partes tediosas. Toque em Strike, Bola, Fouled, Rebatida ou Out e o quadro atualiza a contagem instantaneamente. Quando um rebatedor anda ou e eliminado, a ferramenta reseta a contagem automaticamente. Apos tres outs, ela inverte o inning de cima para baixo e registra as corridas. A matriz R H E e a grade do historico inning por inning fornecem uma visao completa do jogo em relance.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Contagem de Arremessos ao Vivo',
          description: 'Rastreamento automatico de bolas e strikes com deteccao de walk e strikeout para cada vez ao bastao.',
          icon: 'mdi:baseball',
          points: ['Bolas ate 4', 'Strikes ate 3', 'Reset automatico na decisao'],
        },
        {
          title: 'Gerenciamento de Corredores',
          description: 'Diamante interativo mostra exatamente quem esta na primeira, segunda ou terceira base.',
          icon: 'mdi:diamond-stone',
          points: ['Toque nas bases para colocar', 'Destaque visual quando ocupado', 'Limpeza na mudanca de inning'],
        },
        {
          title: 'Box Score Completo',
          description: 'Estatisticas R H E completas com historico de pontuacao inning por inning rolavel.',
          icon: 'mdi:scoreboard-outline',
          points: ['Corridas rebatidas e erros', 'Grade inning por inning', 'Totais atualizados para ambos os times'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Quem Precisa Deste Rastreador de Pontuacao de Baseball',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Esta ferramenta foi criada para qualquer pessoa que precise marcar pontos: treinadores de baseball juvenil que querem um display digital claro para seus jogadores, voluntarios de ligas de softbol que gerenciam jogos sem um marcador dedicado, pais acompanhando os jogos dos filhos das arquibancadas e arbitros que desejam um sistema secundario de verificacao. A interface funciona em qualquer dispositivo, de smartphones no dugout a tablets montados na cerca ou laptops no banco. Sem necessidade de instalacao, basta abrir o navegador e comecar a marcar.',
    },
    {
      type: 'list',
      items: [
        '<strong>Gerenciamento Automatico de Contagem:</strong> Bolas e strikes resetam automaticamente apos walks, strikeouts, rebatidas e outs. Sem resets manuais necessarios.',
        '<strong>Diamante com Toque:</strong> Toque na primeira, segunda ou terceira base para colocar ou remover corredores. O diamante acende em dourado para mostrar bases ocupadas.',
        '<strong>Pontuacoes Inning por Inning:</strong> Cada metade de inning e registrada na grade rolavel. Veja exatamente como cada time pontuou ao longo de todos os nove innings.',
        '<strong>Zero Configuracao Necessaria:</strong> Abra a pagina e comece a marcar imediatamente. Personalize nomes dos times tocando nos rotulos acima das pontuacoes.',
      ],
    },
    {
      type: 'title',
      text: 'Marcacao de Baseball Simplificada: Contagem, Diamante e Box Score em Um So Lugar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Marcar pontos no baseball exige acompanhar varias coisas ao mesmo tempo: a contagem de bolas e strikes, o numero de outs, quais bases tem corredores, as corridas de cada time e o inning atual. Perder o controle de qualquer um desses elementos gera confusao e registros imprecisos. Esta ferramenta consolida tudo em uma unica tela. Os pontos de contagem mostram bolas e strikes em relance. O diamante mostra as posicoes dos corredores. A tabela R H E exibe o box score completo. E a grade de innings rola horizontalmente para mostrar o historico completo de pontuacao. Tudo atualiza em tempo real a cada toque.',
    },
    {
      type: 'grid',
      columns: [
        { type: 'card', title: 'Tecnicos', html: '<p>Mantenha um placar digital claro visivel para todo o time a partir do dugout.</p>' },
        { type: 'card', title: 'Voluntarios', html: '<p>Sem experiencia em marcacao necessaria. A ferramenta lida com todo o rastreamento complexo automaticamente.</p>' },
        { type: 'card', title: 'Pais', html: '<p>Acompanhe o jogo das arquibancadas com um display confiavel de pontuacao em tempo real no seu celular.</p>' },
        { type: 'card', title: 'Jogadores', html: '<p>Revise as pontuacoes inning por inning apos o jogo para analisar o desempenho.</p>' },
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
    resetConfirm: 'Reiniciar o jogo atual? Todas as pontuacoes serao perdidas.',
    cancel: 'Cancelar',
    confirm: 'Confirmar',
    total: 'Total',
    fullscreen: 'Tela Cheia',
    toggleSound: 'Alternar Som',
  },
};
