import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BeachVolleyballLocaleContent } from '../entry';

const slug = 'marcador-volei-praia';
const title = 'Marcador de Volei de Praia e Controle de Rotacao';
const description = 'Acompanhe os pontos do volei de praia, ordem de saque, trocas de lado por vento e sets com uma visualizacao interativa de quadra de areia dourada vista de cima.';

const faq = [
  {
    question: 'Quando as equipes trocam de lado no Volei de Praia?',
    answer: 'Para garantir justica em condicoes externas (vento, sol, areia), as equipes trocam de lado a cada 7 pontos durante os dois primeiros sets, e a cada 5 pontos durante o set de desempate.',
  },
  {
    question: 'Como funciona a rotacao de saque no Volei de Praia?',
    answer: 'Cada equipe tem 2 jogadores que devem alternar o saque. Quando uma equipe vence uma quebra de servico (side-out), eles devem rodar o sacador para que o jogador que nao sacou da ultima vez seja o proximo a sacar.',
  },
  {
    question: 'Quantos pontos sao necessarios para vencer um set de Volei de Praia?',
    answer: 'Os sets 1 e 2 sao jogados ate 21 pontos. Se um terceiro set for necessario, ele e jogado ate 15 pontos. Em todos os casos, uma equipe deve vencer por pelo menos 2 pontos de diferenca.',
  },
];

const howTo = [
  {
    name: 'Configurar Escalacao',
    text: 'Insira nomes personalizados para os dois jogadores de ambas as equipes A e B.',
  },
  {
    name: 'Registrar Pontos',
    text: 'Toque no cartao de uma equipe ou clique na quadra interativa para adicionar pontos. A escalacao e a rotacao sao atualizadas automaticamente.',
  },
  {
    name: 'Seguir Alertas de Troca de Lado',
    text: 'Quando o banner de troca deslizar para baixo, realize a troca fisica de lado e clique no botao de troca para inverter a orientacao da quadra.',
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
      text: 'Placar de Volei de Praia Online e Controle de Rotacao de Saque',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Manter o controle da ordem de saque e das posicoes das equipes sob o sol quente pode ser dificil. Este marcador profissional de volei de praia possui um layout digital de quadra com textura de areia e alto contraste, otimizado para visibilidade externa. Ele evita problemas de leitura por reflexo, automatiza as regras de troca de lado e rastreia qual dos dois jogadores deve sacar apos cada ponto de side-out.',
    },
    {
      type: 'title',
      text: 'Entendendo a Rotacao e as Regras de Saque no Volei de Praia',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Embora nao existam posicoes fixas ou faltas de rotacao baseadas na localizacao na quadra no volei de praia 2v2, os jogadores devem alternar estritamente o saque. Sempre que a equipe receptora vence uma jogada (conhecida como side-out), ela ganha o direito de sacar. O jogador que nao sacou da ultima vez que sua equipe serviu deve ser o novo sacador. Sacar fora de ordem e uma falta e resulta em um ponto para os adversarios. Este placar digital possui indicadores de saque ativos e bolas quicando ao lado dos circulos dos jogadores para evitar erros de rotacao.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Regras Oficiais FIVB',
          description: 'Cumpra as diretrizes oficiais de pontuacao, incluindo limites de sets e trocas de lado.',
          icon: 'mdi:volleyball',
          points: ['Sets ate 21 (desempate ate 15)', 'Margem estrita de vantagem de 2', 'Trocas de lado automatizadas'],
        },
        {
          title: 'Controle de Rotacao',
          description: 'Nunca discuta ou se confunda sobre de quem e a vez de sacar.',
          icon: 'mdi:account-sync-outline',
          points: ['Indicadores de saque brilhantes', 'Iniciais mapeadas na areia', 'Modal de sobreposicao de escalacao'],
        },
        {
          title: 'Otimizado para Externas',
          description: 'Construido para jogar em quadras de areia sob luz solar direta.',
          icon: 'mdi:weather-sunny',
          points: ['Tema amarelo de alto contraste', 'Persistencia de tela Wake Lock', 'Gesto de deslizar para desfazer ponto'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Funcionalidades Interativas e Configuracoes do Jogo',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Quadra SVG Areia Dourada:</strong> Reflete visualmente o estado do jogo. Toque diretamente em qualquer metade da quadra para conceder um ponto a essa equipe.',
        '<strong>Animacao de Rotacao da Quadra:</strong> Quando o alerta de troca de lado for acionado, clicar no botao de troca gira toda a quadra SVG em 180 graus para que a tela se alinhe com suas posicoes fisicas.',
        '<strong>Alarmes de Troca de Lado FIVB:</strong> Exibe um banner de aviso de alta visibilidade quando a pontuacao combinada e multipla de 7 (nos sets 1 e 2) ou multipla de 5 (no set final).',
        '<strong>Particulas de Areia:</strong> Adiciona feedback visual nas mudancas de pontuacao com particulas de areia animadas explodindo a partir das coordenadas do toque.',
        '<strong>Controle de Desfazer por Gesto:</strong> Deslize para baixo no cartao para desfazer o ultimo ponto registrado instantaneamente.',
      ],
    },
    {
      type: 'title',
      text: 'Por Que as Equipes Trocam de Lado no Volei de Praia',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ao contrario do volei indoor, as partidas de volei de praia sao fortemente influenciadas por elementos ambientais como reflexo do sol, calor, forca do vento e consistencia da areia. Trocar de lado com frequencia garante que nenhuma equipe receba uma vantagem injusta devido a uma direcao favoravel do vento ou ter o sol nos olhos. As regras determinam a troca de lado a cada 7 pontos durante os dois primeiros sets, e a cada 5 pontos durante o terceiro set.',
    },
  ],
  ui: {
    teamA: 'Equipe 1',
    teamB: 'Equipe 2',
    points: 'Pontos',
    sets: 'Sets',
    reset: 'Reiniciar',
    resetConfirm: 'Reiniciar a partida? Todos os pontos e escalacoes serao perdidos.',
    cancel: 'Cancelar',
    switchSides: 'Trocar de Lado',
    switchSidesDesc: 'Pontuacao acumulada atingiu o limite de troca!',
    fullscreen: 'Tela Cheia',
    exitFullscreen: 'Sair da Tela Cheia',
    player1: 'Jogador 1',
    player2: 'Jogador 2',
    serving: 'Sacando',
    winner: 'Vencedor',
    undo: 'Desfazer',
  },
};
