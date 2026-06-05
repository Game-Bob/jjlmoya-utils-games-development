import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DartsScoreKeeperUI } from '../ui';

const slug = 'pontuacao-de-dardos';
const title = 'Marcador de Dardos Online : Monitor de Legs e Sets';
const description = 'Acompanhe partidas de dardos com pontuação de legs e sets. Marcador de dardos online grátis para partidas de 501 e 301 com cálculos de fecho ao vivo e estatísticas.';

const faqData = [
  {
    question: 'Como funciona a pontuação nos dardos 501 e 301?',
    answer: 'Os jogadores começam com uma pontuação fixa de 501 ou 301 pontos. Cada jogador lança três dardos à vez, e o valor total desses lançamentos é subtraído da sua pontuação. O objetivo é chegar exatamente a zero pontos. Se a regra de Fecho com Duplo estiver ativada, o dardo vencedor final deve aterrar num segmento duplo ou no bullseye interior.',
  },
  {
    question: 'O que é um bust nos dardos e quando acontece?',
    answer: 'Um bust ocorre quando um jogador marca mais pontos do que o seu total restante, ou quando a sua pontuação é reduzida exatamente a um ponto com a regra de Fecho com Duplo ativa. Quando um jogador faz bust, a sua vez termina imediatamente e a sua pontuação é reposta para o total que tinha no início dessa vez.',
  },
  {
    question: 'Como se calcula a média nos dardos?',
    answer: 'A média nos dardos é calculada dividindo o número total de pontos marcados pelo número total de dardos lançados e multiplicando o resultado por três. Isto representa a pontuação média que um jogador atinge por vez padrão de três dardos.',
  },
  {
    question: 'O que é um fecho nos dardos?',
    answer: 'Um fecho é a combinação específica de lançamentos necessária para reduzir a pontuação restante a zero e ganhar o leg. Marcadores profissionais mostram sugestões de fecho para pontuações de 170 ou menos, guiando os jogadores sobre quais simples, duplos ou triplos visar.',
  },
];

const howToData = [
  {
    name: 'Escolher pontuação inicial e regras',
    text: 'Selecione 501 ou 301 como pontuação inicial e ative ou desative a regra de Fecho com Duplo conforme o nível de jogo desejado.',
  },
  {
    name: 'Inserir nomes dos jogadores',
    text: 'Clique nos campos de nome no topo do marcador para personalizar os nomes. Os valores serão guardados automaticamente no seu navegador.',
  },
  {
    name: 'Registar dardos lançados',
    text: 'Use o teclado interativo ou toque diretamente nos setores do alvo para registar os seus lançamentos. Selecione primeiro o multiplicador (Simples, Duplo ou Triplo) e depois o número acertado.',
  },
  {
    name: 'Seguir recomendações de fecho',
    text: 'Quando a sua pontuação restante cair abaixo de 170, veja o painel de fecho para ver os alvos ideais para finalizar o leg.',
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

export const content: ToolLocaleContent<DartsScoreKeeperUI> = {
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
      text: 'Marcador de Dardos Online Grátis e Monitor de Partidas',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Gerir pontuações nos dardos requer cálculo mental rápido e concentração. Este monitor digital de legs faz todos os cálculos por si, permitindo-lhe concentrar-se totalmente no lançamento. Quer esteja a treinar sozinho ou a jogar uma partida competitiva com amigos, este marcador acompanha pontos, legs, sets, médias de lançamento e alvos de fecho com duplo.',
    },
    {
      type: 'title',
      text: 'Formatos de Pontuação Padrão de Dardos Explicados',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'As partidas de dardos são jogadas em legs e sets. Os formatos mais populares a nível global são 501 e 301, ambos jogos de subtração onde os jogadores reduzem a sua pontuação a zero.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Torneio 501',
          description: 'O formato padrão para torneios profissionais em todo o mundo.',
          icon: 'mdi:trophy-outline',
          points: ['Pontuação inicial padrão', 'Fecho com duplo necessário', 'Foco em pontuação alta'],
        },
        {
          title: '301 Casual',
          description: 'Uma versão mais rápida do jogo de subtração ideal para partidas casuais rápidas.',
          icon: 'mdi:clock-outline',
          points: ['Ritmo de jogo mais rápido', 'Opção de entrada com duplo', 'Ótimo para praticar'],
        },
        {
          title: 'Modo Cricket',
          description: 'Um jogo estratégico de acertar alvos popular em pubs e ligas.',
          icon: 'mdi:bullseye',
          points: ['Foco nos números 15-20', 'Monitorização do bullseye', 'Sistema de regras alternativo'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Entender a Matemática do Fecho nos Dardos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O fecho mais alto possível nos dardos é 170, conseguido lançando Triplo 20, Triplo 20 e Duplo Bull. Quando a sua pontuação atinge 170 ou menos, entra no alcance de fecho, onde uma sequência específica de dardos pode ganhar o jogo.',
    },
    {
      type: 'table',
      headers: ['Pontuação', 'Alvo Dardo 1', 'Alvo Dardo 2', 'Alvo Dardo 3'],
      rows: [
        ['170', 'Triplo 20 (60)', 'Triplo 20 (60)', 'Duplo Bull (50)'],
        ['120', 'Triplo 20 (60)', 'Simples 20 (20)', 'Duplo 20 (40)'],
        ['100', 'Triplo 20 (60)', 'Simples 20 (20)', 'Duplo 10 (20)'],
        ['80', 'Triplo 20 (60)', 'Duplo 10 (20)', '-'],
        ['40', 'Duplo 20 (40)', '-', '-'],
      ],
    },
    {
      type: 'title',
      text: 'Funcionalidades deste Marcador Digital de Dardos',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Métodos de Entrada Interativos</strong> alterne entre um alvo radial visual e um teclado numérico rápido.',
        '<strong>Motor de Fecho Inteligente</strong> exibe combinações ao vivo para finalizar legs.',
        '<strong>Deteção de Bust</strong> repõe automaticamente lançamentos inválidos e alerta o utilizador.',
        '<strong>Registo de Histórico de Turnos</strong> monitoriza rondas anteriores e pontuações restantes.',
        '<strong>Estatísticas Detalhadas da Partida</strong> calcula médias de três dardos dinamicamente.',
      ],
    },
    {
      type: 'title',
      text: 'Monitorização Manual vs Digital de Dardos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Os quadros tradicionais exigem escrever, apagar e cálculos constantes. Este marcador online elimina o risco de erros, automatiza as médias e apresenta alvos de fecho. Coloque o seu dispositivo junto ao alvo, entre no modo ecrã inteiro para manter o ecrã ativo e desfrute de uma pontuação sem complicações.',
    },
  ],
  ui: {
    playerA: 'Jogador 1',
    playerB: 'Jogador 2',
    winnerLabel: 'CAMPEÃO',
    reset: 'Reiniciar',
    resetConfirm: 'Reiniciar partida? Todos os dados serão perdidos.',
    cancel: 'Cancelar',
    fullscreen: 'Ecrã inteiro',
    exitFullscreen: 'Sair do ecrã inteiro',
    leg: 'Leg',
    set: 'Set',
    average: 'Média',
    checkout: 'Fecho',
    busted: 'Bust',
    dart: 'Vez de Dardos',
    score301: '301',
    score501: '501',
    doubleOut: 'Fecho com Duplo',
    noCheckout: 'Sem Fecho',
  },
};
