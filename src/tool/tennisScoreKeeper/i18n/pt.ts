import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TennisScoreKeeperUI } from '../ui';

const slug = 'pontuacao-de-tenis';
const title = 'Marcador de Ténis Online : Monitor de Partidas Grátis';
const description = 'Acompanhe partidas de ténis com pontuação de sets e jogos. Marcador de ténis online grátis para partidas e torneios. Sem registo necessário.';

const faqData = [
  {
    question: 'Como funciona a pontuação no ténis?',
    answer: 'As partidas de ténis são jogadas em jogos e sets. Um jogo é pontuado como Love, 15, 30, 40. Um placar de 40-40 chama-se Deuce, exigindo que um jogador ganhe 2 pontos consecutivos. Um set é ganho pelo primeiro jogador que vencer 6 jogos com margem de 2 jogos. Se o placar chegar a 6-6, é jogado um tiebreak.',
  },
  {
    question: 'Como uso este marcador de ténis?',
    answer: 'Toque no botão mais de um jogador quando ele marcar. O placar atualiza-se automaticamente. O marcador acompanha a ordem do saque, os resultados dos jogos, os sets atuais e o histórico de sets concluídos.',
  },
  {
    question: 'Quando é que os tenistas trocam de lado?',
    answer: 'Os tenistas trocam de lado após o primeiro, terceiro e cada jogo ímpar subsequente de cada set. Também trocam no final de um set, a menos que o número total de jogos seja par. Num tiebreak, os jogadores trocam de lado a cada 6 pontos.',
  },
  {
    question: 'Este marcador suporta tiebreaks?',
    answer: 'Sim, quando um set chega a 6-6, o marcador entra automaticamente no modo tiebreak, onde os pontos são contados numericamente até 7. Um jogador deve vencer por 2 pontos de diferença para concluir o tiebreak e o set.',
  },
  {
    question: 'Posso usar isto no meu telemóvel?',
    answer: 'Sim, a interface está otimizada para dispositivos móveis com botões grandes. Também pode ativar o modo ecrã inteiro para manter o ecrã ligado durante a partida.',
  },
];

const howToData = [
  {
    name: 'Definir nomes dos jogadores',
    text: 'Toque nos campos de entrada de nome para escrever nomes personalizados. Eles são guardados no seu navegador.',
  },
  {
    name: 'Adicionar pontos',
    text: 'Clique no botão mais do jogador que venceu a troca de bola. O placar será atualizado automaticamente.',
  },
  {
    name: 'Gerir resultados dos sets',
    text: 'O monitor conclui automaticamente jogos e sets. Arquiva os sets concluídos e passa para o set seguinte.',
  },
  {
    name: 'Trocar de lado',
    text: 'O marcador alerta-o quando os jogadores precisam de trocar de lado. Toque no botão de troca para inverter os lados visuais.',
  },
  {
    name: 'Conclusão da partida',
    text: 'O monitor conclui automaticamente a partida com base nas regras do ténis e anuncia o vencedor.',
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

export const content: ToolLocaleContent<TennisScoreKeeperUI> = {
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
      text: 'Marcador de Ténis Online Grátis e Monitor de Partidas',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Manter a pontuação no ténis pode ser desafiante com termos como deuce, vantagem e tiebreak. Este marcador de ténis online gratuito automatiza todo o processo. Só precisa de tocar no botão mais quando um jogador marca. A ferramenta gere pontos, jogos, sets e trocas de lado automaticamente em tempo real.',
    },
    {
      type: 'title',
      text: 'Como a pontuação do ténis funciona neste marcador',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O ténis usa uma estrutura de pontuação única. Um jogo padrão progride através de Love, 15, 30, 40 e Jogo. Quando ambos os jogadores atingem 40, o placar é Deuce. A partir de Deuce, um jogador deve marcar dois pontos consecutivos para ganhar o jogo. O primeiro ponto chama-se Vantagem, e o ponto seguinte garante o jogo. Se o adversário ganhar o ponto seguinte, o placar volta a Deuce. Os sets são ganhos pelo primeiro jogador a vencer 6 jogos com margem de 2. Quando o set chega a 6-6, é jogado um tiebreak até 7 pontos.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Jogos Casuais',
          description: 'Pontuação rápida e fácil para partidas de ténis informais com amigos.',
          icon: 'mdi:tennis',
          points: ['Pontuação com um toque', 'Indicador de troca de lado', 'Funciona offline'],
        },
        {
          title: 'Jogo de Clube',
          description: 'Acompanhamento perfeito para partidas de clube e torneios.',
          icon: 'mdi:trophy-outline',
          points: ['Arquivo de histórico de sets', 'Melhor de 3 ou 5 sets', 'Layout compatível com móveis'],
        },
        {
          title: 'Modo Torneio',
          description: 'Projetado para acompanhamento oficial de partidas e uso arbitral.',
          icon: 'mdi:school',
          points: ['Suporte a tiebreak', 'Marcador ecrã inteiro', 'Segurança de dados local'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Funcionalidades Especiais do Marcador',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Lógica automática das regras do ténis</strong> calcula Love, 15, 30, 40, deuce, vantagem e tiebreak automaticamente.',
        '<strong>Arquivo de histórico de sets</strong> mostra o resultado de sets anteriores rapidamente.',
        '<strong>Ajuda para troca de lado</strong> alerta os jogadores quando precisam de trocar de lado.',
        '<strong>Celebrações vibrantes de pontos</strong> mostra partículas flutuantes para pontos ganhos.',
        '<strong>Melhor de 3 ou 5 sets</strong> configurações de formato de partida ajustáveis.',
        '<strong>Nomes guardados localmente</strong> mantém nomes personalizados entre visitas.',
      ],
    },
    {
      type: 'title',
      text: 'Marcação Digital vs Acompanhamento Manual',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Os marcadores manuais exigem concentração constante para atualizar números, lembrar a rotação do saque, verificar tiebreaks e calcular trocas de lado. Este marcador de ténis digital lida com cada regra do ténis automaticamente. Pode concentrar-se totalmente na partida enquanto a ferramenta atualiza os históricos de sets e anuncia o vencedor com uma cerimónia de celebração.',
    },
  ],
  ui: {
    playerA: 'Jogador 1',
    playerB: 'Jogador 2',
    winnerLabel: 'CAMPEÃO',
    finishMatch: 'Finalizar Partida',
    newGame: 'Novo Set',
    serving: 'A Sacar',
    changeSide: 'Trocar de Lado',
    swapHint: 'Toque para trocar de lado',
    game: 'Jogo',
    set: 'Set',
    gamePoint: 'Ponto de Jogo',
    setPoint: 'Ponto de Set',
    matchPoint: 'Ponto de Partida',
    mode: 'Sets',
    bo3: 'BO3',
    bo5: 'BO5',
    points: 'Pontos',
    reset: 'Reiniciar',
    resetConfirm: 'Reiniciar partida? Todos os dados serão perdidos.',
    cancel: 'Cancelar',
    fullscreen: 'Ecrã inteiro',
    exitFullscreen: 'Sair do ecrã inteiro',
    deuce: 'Deuce',
    advantage: 'Vantagem',
    tiebreak: 'Tiebreak',
  },
};
