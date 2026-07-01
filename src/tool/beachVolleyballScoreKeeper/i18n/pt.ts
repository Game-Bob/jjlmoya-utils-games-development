import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BeachVolleyballLocaleContent } from '../entry';

const slug = 'marcador-volei-praia';
const title = 'Marcador de Vôlei de Praia e Controle de Rotação';
const description = 'Acompanhe os pontos do vôlei de praia, ordem de saque, trocas de lado por vento e sets com uma visualização interativa de quadra de areia dourada vista de cima.';

const faq = [
  {
    question: 'Quando as equipes trocam de lado no Vôlei de Praia?',
    answer: 'Para garantir justiça em condições externas (vento, sol, areia), as equipes trocam de lado a cada 7 pontos durante os dois primeiros sets, e a cada 5 pontos durante o set de desempate.',
  },
  {
    question: 'Como funciona a rotação de saque no Vôlei de Praia?',
    answer: 'Cada equipe tem 2 jogadores que devem alternar o saque. Quando uma equipe vence uma quebra de serviço (side-out), eles devem rodar o sacador para que o jogador que não sacou da última vez seja o próximo a sacar.',
  },
  {
    question: 'Quantos pontos são necessários para vencer um set de Vôlei de Praia?',
    answer: 'Os sets 1 e 2 são jogados até 21 pontos. Se um terceiro set for necessário, ele é jogado até 15 pontos. Em todos os casos, uma equipe deve vencer por pelo menos 2 pontos de diferença.',
  },
];

const howTo = [
  {
    name: 'Configurar Escalação',
    text: 'Insira nomes personalizados para os dois jogadores de ambas as equipes A e B.',
  },
  {
    name: 'Registrar Pontos',
    text: 'Toque no cartão de uma equipe ou clique na quadra interativa para adicionar pontos. A escalação e a rotação são atualizadas automaticamente.',
  },
  {
    name: 'Seguir Alertas de Troca de Lado',
    text: 'Quando o banner de troca deslizar para baixo, realize a troca física de lado e clique no botão de troca para inverter a orientação da quadra.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, i) => ({
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

export const content: BeachVolleyballLocaleContent = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Placar de Vôlei de Praia Online e Controle de Rotação de Saque',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Manter o controle da ordem de saque e das posições das equipes sob o sol quente pode ser difícil. Este marcador profissional de vôlei de praia possui um layout digital de quadra com textura de areia e alto contraste, otimizado para visibilidade externa. Ele evita problemas de leitura por reflexo, automatiza as regras de troca de lado e rastreia qual dos dois jogadores deve sacar após cada ponto de side-out.',
    },
    {
      type: 'title',
      text: 'Entendendo a Rotação e as Regras de Saque no Vôlei de Praia',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Embora não existam posições fixas ou faltas de rotação baseadas na localização na quadra no vôlei de praia 2v2, os jogadores devem alternar estritamente o saque. Sempre que a equipe receptora vence uma jogada (conhecida como side-out), ela ganha o direito de sacar. O jogador que não sacou da última vez que sua equipe serviu deve ser o novo sacador. Sacar fora de ordem é uma falta e resulta em um ponto para os adversários. Este placar digital possui indicadores de saque ativos e bolas quicando ao lado dos círculos dos jogadores para evitar erros de rotação.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Regras Oficiais FIVB',
          description: 'Cumpra as diretrizes oficiais de pontuação, incluindo limites de sets e trocas de lado.',
          icon: 'mdi:volleyball',
          points: ['Sets até 21 (desempate até 15)', 'Margem estrita de vantagem de 2', 'Trocas de lado automatizadas'],
        },
        {
          title: 'Controle de Rotação',
          description: 'Nunca discuta ou se confunda sobre de quem é a vez de sacar.',
          icon: 'mdi:account-sync-outline',
          points: ['Indicadores de saque brilhantes', 'Iniciais mapeadas na areia', 'Modal de sobreposição de escalação'],
        },
        {
          title: 'Otimizado para Externas',
          description: 'Construído para jogar em quadras de areia sob luz solar direta.',
          icon: 'mdi:weather-sunny',
          points: ['Tema amarelo de alto contraste', 'Persistência de tela Wake Lock', 'Gesto de deslizar para desfazer ponto'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Funcionalidades Interativas e Configurações do Jogo',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Quadra SVG Areia Dourada:</strong> Reflete visualmente o estado do jogo. Toque diretamente em qualquer metade da quadra para conceder um ponto a essa equipe.',
        '<strong>Animação de Rotação da Quadra:</strong> Quando o alerta de troca de lado for acionado, clicar no botão de troca gira toda a quadra SVG em 180 graus para que a tela se alinhe com suas posições físicas.',
        '<strong>Alarmes de Troca de Lado FIVB:</strong> Exibe um banner de aviso de alta visibilidade quando a pontuação combinada é múltipla de 7 (nos sets 1 e 2) ou múltipla de 5 (no set final).',
        '<strong>Partículas de Areia:</strong> Adiciona feedback visual nas mudanças de pontuação com partículas de areia animadas explodindo a partir das coordenadas do toque.',
        '<strong>Controle de Desfazer por Gesto:</strong> Deslize para baixo no cartão para desfazer o último ponto registrado instantaneamente.',
      ],
    },
    {
      type: 'title',
      text: 'Por Que as Equipes Trocam de Lado no Vôlei de Praia',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ao contrário do vôlei indoor, as partidas de vôlei de praia são fortemente influenciadas por elementos ambientais como reflexo do sol, calor, força do vento e consistência da areia. Trocar de lado com frequência garante que nenhuma equipe receba uma vantagem injusta devido a uma direção favorável do vento ou ter o sol nos olhos. As regras determinam a troca de lado a cada 7 pontos durante os dois primeiros sets, e a cada 5 pontos durante o terceiro set.',
    },
  ],
  ui: {
    teamA: 'Equipe 1',
    teamB: 'Equipe 2',
    points: 'Pontos',
    sets: 'Sets',
    reset: 'Reiniciar',
    resetConfirm: 'Reiniciar a partida? Todos os pontos e escalações serão perdidos.',
    cancel: 'Cancelar',
    switchSides: 'Trocar de Lado',
    switchSidesDesc: 'Pontuação acumulada atingiu o limite de troca!',
    fullscreen: 'Tela Cheia',
    exitFullscreen: 'Sair da Tela Cheia',
    player1: 'Jogador 1',
    player2: 'Jogador 2',
    serving: 'Sacando',
    winner: 'Vencedor',
    undo: 'Desfazer',
  },
};

