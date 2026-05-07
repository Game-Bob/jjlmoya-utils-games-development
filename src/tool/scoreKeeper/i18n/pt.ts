import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ScoreKeeperUI } from '../ui';

const slug = 'placar-esportivo-online';
const title = 'Placar Esportivo Online: Marcador de Pontos Grátis ';
const description =
  'Placar digital com botões gigantes para celular. Ideal para padel, ping-pong e futebol. Sem anúncios irritantes no meio do jogo. Simples e rápido.';

const faqData = [
  {
    question: 'Funciona sem conexão com a internet?',
    answer:
      'Sim, uma vez que a página é carregada, o placar funciona completamente offline. Você não precisa de dados ou WiFi durante a partida. Tudo é salvo localmente no seu navegador.'
  },
  {
    question: 'Posso usar o placar para tênis e padel?',
    answer:
      'Sim, o modo Tênis/Padel lida automaticamente com a sequência 15-30-40-AD e acompanha sets e games de acordo com as regras oficiais. Perfeito para jogos amistosos.'
  },
  {
    question: 'Pode ser colocado em tela cheia?',
    answer:
      'Sim, você pode ativar o modo de tela cheia no seu navegador (F11 no PC ou o botão de tela cheia no celular). Os números ocupam 80% da tela para máxima visibilidade.'
  },
  {
    question: 'Como corrijo um ponto se eu cometer um erro?',
    answer:
      'Existe um botão separado para subtrair pontos em cada cartão de jogador. Você pode corrigir erros rapidamente sem ter que reiniciar todo o placar.'
  },
  {
    question: 'Funciona para basquete com cestas de 1, 2 e 3 pontos?',
    answer:
      'Sim, no modo Basquete aparecem botões dedicados +1, +2 e +3 para marcar qualquer jogada rapidamente sem toques extras.'
  },
  {
    question: 'O placar lida automaticamente com o saque no ping-pong?',
    answer:
      'Sim, no modo Ping Pong o indicador de saque alterna automaticamente a cada 2 pontos (ou a cada ponto no empate), seguindo as regras oficiais da ITTF.'
  },
];

const howToData = [
  {
    name: 'Selecione seu esporte',
    text: 'Escolha o esporte no seletor no topo: Livre, Tênis, Padel, Ping Pong, Vôlei ou Basquete.'
  },
  {
    name: 'Personalize nomes',
    text: 'Toque em "CASA" ou "VISITANTE" para mudar os nomes dos jogadores ou equipes.'
  },
  {
    name: 'Adicione pontos com um toque',
    text: 'Toque na área grande do placar para adicionar um ponto. No basquete, use os botões +1, +2 ou +3.'
  },
  {
    name: 'Indique o saque',
    text: 'Use o botão de saque no canto inferior para marcar quem está sacando. O indicador amarelo aparece automaticamente.'
  },
  {
    name: 'Corrija erros',
    text: 'Use o botão "−" se você adicionou um ponto por engano. Não há necessidade de reiniciar todo o placar.'
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer }
  }))
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
    text: step.text
  }))
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'pt'
};

export const content: ToolLocaleContent<ScoreKeeperUI> = {
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
      text: 'Seu árbitro digital no seu bolso',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'No calor da partida, é fácil perder a conta. "Estava 4-3 ou 3-4?". Este placar foi projetado para resolver essas disputas antes que comecem. Com uma interface de <strong>botões gigantes</strong> que ocupam quase todo o cartão, você pode adicionar pontos sem olhar para a tela, apenas estendendo o braço para o telefone no banco.'
    },
    {
      type: 'title',
      text: 'Seletor Esportivo Inteligente',
      level: 2
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Modo Tênis / Padel',
          description:
            'Interface adaptada com contadores de Sets e Games. O sistema lida automaticamente com a sequência 15-30-40-AD.',
          icon: 'mdi:tennis',
          points: ['Regras oficiais', 'Gestão de vantagem', 'Contador de sets']
        },
        {
          title: 'Modo Basquete',
          description:
            'O placar detecta o esporte e altera sua interface. Botões dedicados +1, +2 e +3.',
          icon: 'mdi:basketball',
          points: ['Cestas de três rápidas', 'Lances livres', 'Sem toques extras']
        },
        {
          title: 'Modo Ping Pong',
          description:
            'Esqueça de memorizar de quem é a vez de sacar. O indicador visual alterna automaticamente a cada 2 pontos.',
          icon: 'mdi:table-tennis',
          points: ['Regras da ITTF', 'Rotação de saque', 'Modo deuce (11 pts)']
        },
      ]
    },
    {
      type: 'title',
      text: 'Recursos Projetados para o Esporte',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Alta Visibilidade:</strong> Números que ocupam 80% da tela para máxima legibilidade sob o sol.',
        '<strong>Nomes Editáveis:</strong> Toque em "CASA" ou "VISITANTE" para definir os nomes dos jogadores.',
        '<strong>Prevenção de Erros:</strong> Botão menos separado para corrigir erros rapidamente sem reiniciar.',
        '<strong>Funciona Offline:</strong> Uma vez carregado, não é necessária internet durante a partida.',
      ]
    },
  ],
  ui: {
    playerA: 'CASA',
    playerB: 'VISITANTE',
    swapSides: 'Trocar lados',
    reset: 'Reiniciar',
    serve: 'Saque',
    sets: 'Sets',
    games: 'Games',
    victory: 'VITÓRIA!',
    newGame: 'Novo Jogo',
    continueGame: 'Continuar Jogando',
    resetConfirm: 'Reiniciar placar?',
    sportSimple: 'Livre (Futebol, Jogo da Velha...)',
    sportTennis: 'Tênis',
    sportPadel: 'Padel',
    sportPingpong: 'Ping Pong',
    sportVolleyball: 'Vôlei',
    sportBasket: 'Basquete'
  }
};
