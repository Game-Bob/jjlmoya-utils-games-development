import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PingPongScoreKeeperUI } from '../ui';

const slug = 'marcador-de-pingue-pongue';
const title = 'Marcador de Pingue Pongue Online: Contador de Ténis de Mesa Grátis';
const description =
  'Acompanhe partidas de ténis de mesa com pontuação de jogos e sets. Marcador de pingue-pongue online grátis para jogos amigáveis e torneios. Sem registo necessário.';

const faqData = [
  {
    question: 'Como funciona a pontuação no pingue-pongue?',
    answer:
      'Um jogo padrão de pingue-pongue é jogado até 11 pontos. É preciso ganhar por 2 pontos de diferença. Se o placar chegar a 10-10, o jogo continua até alguém abrir 2 pontos de vantagem. O saque muda a cada 2 pontos. Este marcador trata de tudo automaticamente.',
  },
  {
    question: 'Como uso este marcador?',
    answer:
      'Toque no botão + por baixo de cada jogador para adicionar um ponto. A pontuação atualiza-se automaticamente. Quando um jogador atinge 11 com 2 pontos de vantagem, o jogo termina e um novo começa. O contador de jogos ganhos regista quantos jogos cada jogador venceu. Toque em Finalizar Partida quando a partida terminar.',
  },
  {
    question: 'Como funciona o indicador de saque?',
    answer:
      'O saque muda a cada 2 pontos. Um ponto aparece ao lado do jogador que está a sacar. Isto segue as regras oficiais do ténis de mesa. Pode ver em qualquer momento quem deve sacar durante a partida.',
  },
  {
    question: 'Posso usá-lo no telemóvel durante uma partida?',
    answer:
      'Sim. A interface é compatível com dispositivos móveis com botões grandes. O modo ecrã inteiro oculta o navegador e mantém o ecrã ligado.',
  },
  {
    question: 'Guarda os dados da partida?',
    answer:
      'Sim. O placar atual, os jogos ganhos e os nomes dos jogadores são guardados automaticamente no seu navegador.',
  },
];

const howToData = [
  {
    name: 'Nomear os jogadores',
    text: 'Toque no nome de jogador predefinido e escreva o seu. Os nomes são guardados automaticamente.',
  },
  {
    name: 'Adicionar um ponto',
    text: 'Toque no grande botão circular + do jogador que marcou. A pontuação atualiza-se com uma animação de celebração.',
  },
  {
    name: 'Remover um ponto',
    text: 'Toque no botão de menos se adicionou um ponto por engano.',
  },
  {
    name: 'Começar um novo jogo',
    text: 'Quando um jogo terminar, toque em Novo Jogo para começar o seguinte. Ou toque em Finalizar Partida para acabar o encontro.',
  },
  {
    name: 'Finalizar a partida',
    text: 'Toque em Finalizar Partida para ver o vencedor anunciado com troféu e confetes.',
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

export const content: ToolLocaleContent<PingPongScoreKeeperUI> = {
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
      text: 'Marcador de Pingue-Pongue Online Grátis: Monitor de Partidas de Ténis de Mesa',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Manter a pontuação no pingue-pongue devia ser simples, mas as regras podem ser confusas. Quem saca a seguir? É 10-10 ou 11-9? Quantos jogos cada jogador ganhou? Este marcador de pingue-pongue online grátis trata de tudo automaticamente. Basta tocar no botão + quando alguém marca. O marcador acompanha os pontos por jogo, os jogos ganhos na partida e quem está a sacar. Tudo se atualiza em tempo real com animações de celebração que fazem cada ponto valer a pena. Sem registos, sem descarregamentos, sem menus complicados.',
    },
    {
      type: 'title',
      text: 'Como a pontuação do pingue-pongue funciona neste marcador',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O ténis de mesa segue um sistema de pontuação padrão. Cada jogo é jogado até 11 pontos. Um jogador deve ganhar por 2 pontos de diferença, por isso se o placar chegar a 10-10, o jogo continua até alguém abrir 2 pontos de vantagem. O saque muda a cada 2 pontos durante um jogo. Este marcador segue todas estas regras automaticamente. Não precisa de se lembrar de quem saca ou quando mudar. O indicador de saque mostra um ponto ao lado do jogador que está a sacar. Quando um jogador ganha um jogo, o marcador passa automaticamente para o jogo seguinte. O contador de jogos ganhos aumenta para o vencedor. Uma partida pode ter qualquer número de jogos, mas é tipicamente melhor de 5 ou 7. Toque em Finalizar Partida quando a partida estiver concluída e o vencedor será anunciado com uma celebração.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Jogos Amigáveis',
          description: 'Pontuação rápida e fácil para pingue-pongue casual com amigos. Acompanhamento automático de jogos e partidas.',
          icon: 'mdi:table-tennis',
          points: ['Um toque por ponto', 'Acompanhamento automático de saque', 'Funciona offline'],
        },
        {
          title: 'Clube & Liga',
          description: 'Mantenha um registo limpo de jogos e resultados. Perfeito para torneios de clube e jogos de liga.',
          icon: 'mdi:trophy-outline',
          points: ['Acompanhamento de jogos ganhos', 'Suporte melhor de 5 ou 7', 'Compatível com dispositivos móveis'],
        },
        {
          title: 'Torneios',
          description: 'Acompanhe várias partidas num ambiente de torneio. Reinício rápido entre partidas.',
          icon: 'mdi:school',
          points: ['Reinício rápido de partida', 'Pontuação persistente', 'Modo ecrã inteiro'],
        },
      ],
    },
    {
      type: 'title',
      text: 'O que torna este marcador de pingue-pongue especial',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Pontuação automática</strong> o marcador conhece as regras do pingue-pongue. Jogos até 11, ganhar por 2 pontos, mudanças de saque automáticas.',
        '<strong>Acompanhamento de jogos ganhos</strong> cada jogo ganho é registado. Veja rapidamente quantos jogos cada jogador ganhou na partida.',
        '<strong>Indicador de saque</strong> um ponto visível mostra qual jogador está a sacar, seguindo a regra de rotação a cada 2 pontos.',
        '<strong>Animações de celebração</strong> cada ponto desencadeia uma animação aleatória. Oito efeitos diferentes mantêm cada ponto emocionante.',
        '<strong>Partículas flutuantes</strong> cada ponto marcado gera texto flutuante a celebrar o momento.',
        '<strong>Cerimónia de fim de partida</strong> toque em Finalizar Partida para ativar o anúncio do vencedor com troféu e confetes.',
        '<strong>Nomes editáveis</strong> toque no campo do nome para renomear jogadores. Os nomes são guardados no seu navegador.',
        '<strong>Modo ecrã inteiro</strong> oculta a interface do navegador para que o marcador preencha o ecrã e o mantenha ligado.',
        '<strong>Prioridade offline</strong> funciona sem internet. Sem anúncios, sem monitorização, sem recolha de dados.',
      ],
    },
    {
      type: 'title',
      text: 'Marcador de Pingue-Pongue vs Pontuação Manual',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A pontuação manual no pingue-pongue exige acompanhar o placar, lembrar-se de quem saca, saber quando mudar de saque e contar os jogos ganhos. É fácil perder o fio à meada, especialmente num jogo rápido. Este marcador digital trata de tudo automaticamente. Só precisa de tocar num botão quando é marcado um ponto. O marcador acompanha o placar do jogo, deteta quando um jogo é ganho, regista os jogos ganhos na partida e mostra quem está a sacar. Cada ponto é celebrado com animações e partículas. O placar nunca se confunde e nunca perde uma mudança de saque. Quer esteja a jogar uma partida casual com amigos ou a competir num torneio, este marcador de pingue-pongue online grátis dá-lhe tudo o que precisa.',
    },
  ],
  ui: {
    playerA: 'Jogador 1',
    playerB: 'Jogador 2',
    winnerLabel: 'CAMPEÃO',
    finishMatch: 'Finalizar Partida',
    newGame: 'Novo Jogo',
    serving: 'A Sacar',
    changeSide: 'Trocar de Lado',
    swapHint: 'Toque para trocar',
    game: 'Jogo',
    set: 'Set',
    gamePoint: 'Ponto de Jogo',
    matchPoint: 'Ponto de Partida',
    mode: 'Formato',
    bo1: 'BO1',
    bo3: 'BO3',
    bo5: 'BO5',
    bo7: 'BO7',
    points: 'Pontos',
    reset: 'Reiniciar',
    resetConfirm: 'Reiniciar partida? Todos os dados serão perdidos.',
    cancel: 'Cancelar',
    fullscreen: 'Ecrã inteiro',
    exitFullscreen: 'Sair do ecrã inteiro',
  },
};
