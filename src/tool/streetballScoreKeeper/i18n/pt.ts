import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { StreetballLocaleContent } from '../entry';

const slug = 'marcador-streetball-3x3';
const title = 'Marcador Premium de Streetball 3x3 com Cronômetro de Arremesso';
const description = 'Acompanhe os placares do streetball FIBA 3x3 com um cronômetro de arremesso de 12 segundos integrado, faltas por equipe, pontos de morte súbita e indicadores visuais dinâmicos de meia quadra.';

const faq = [
  {
    question: 'Como funciona o cronômetro de arremesso de 12 segundos no streetball 3x3?',
    answer: 'No FIBA 3x3, as equipes têm apenas 12 segundos para tentar um arremesso depois de ganharem a posse de bola. O cronômetro é reiniciado para 12 na mudança de posse ou para 14 segundos em rebotes ofensivos e faltas sob condições específicas.',
  },
  {
    question: 'Qual é o limite de pontuação para morte súbita no basquete 3x3?',
    answer: 'A primeira equipe a marcar 21 pontos vence a partida imediatamente, independentemente do tempo restante no cronômetro. Esta é a regra da morte súbita.',
  },
  {
    question: 'Como as faltas por equipe afetam a partida?',
    answer: 'A partir da 7ª falta da equipe, os adversários recebem 2 lances livres. Na 10ª falta e nas subsequentes, eles recebem 2 lances livres mais a posse de bola, ativando o estado de penalidade.',
  },
];

const howTo = [
  {
    name: 'Definir nomes dos times',
    text: 'Insira nomes personalizados para as duas equipes de streetball para personalizar a interface.',
  },
  {
    name: 'Registrar pontos e posse',
    text: 'Toque na quadra de asfalto interativa para adicionar 1 ponto (dentro do arco) ou 2 pontos (fora do arco) e alterne o indicador de posse de bola.',
  },
  {
    name: 'Controlar o cronômetro de arremesso',
    text: 'Toque no cronômetro para reiniciar para 12, clique no reset secundário para 14, ou toque duas vezes para pausar a contagem regressiva.',
  },
  {
    name: 'Gerenciar faltas da equipe',
    text: 'Acompanhe as faltas da equipe usando o contador, que fica vermelho ao entrar no estado de penalidade (7+ faltas).',
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

export const content: StreetballLocaleContent = {
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
      text: 'Placar de streetball 3x3 online grátis',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Manter a pontuação em partidas rápidas de basquete 3x3 pode ser difícil enquanto você gerencia um cronômetro de arremesso curto e controla as faltas da equipe. Este placar de streetball 3x3 online grátis oferece um tema industrial de asfalto com estilo neon de alto contraste. Ele gerencia automaticamente o cronômetro de arremesso de 12 segundos, o relógio da partida, o sistema de penalidade por faltas e os indicadores de posse de bola.',
    },
    {
      type: 'title',
      text: 'Regras de pontuação e cronômetro de arremesso do FIBA 3x3 Streetball',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O streetball FIBA 3x3 difere do basquete tradicional 5x5. As partidas duram um período de 10 minutos ou terminam imediatamente quando uma equipe marca 21 pontos (morte súbita). Arremessos dentro do arco e lances livres valem 1 ponto, enquanto arremessos feitos de trás do arco de 6,75m valem 2 pontos. O cronômetro de arremesso de 12 segundos impõe jogadas ofensivas rápidas, e os jogadores devem limpar a bola atrás do arco após uma mudança de posse.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Jogos casuais',
          description: 'Contagem rápida de pontos para basquete de rua com amigos em quadras locais.',
          icon: 'mdi:basketball',
          points: ['Gatilhos de ponto simples', 'Layout responsivo', 'Funciona offline'],
        },
        {
          title: 'Jogos de torneio',
          description: 'Perfeito para torneios oficiais de 3x3 e ligas de streetball.',
          icon: 'mdi:trophy-outline',
          points: ['Contagem de 10 min', 'Morte súbita em 21 pts', 'Estados de penalidade'],
        },
        {
          title: 'Painel do árbitro',
          description: 'Projetado para árbitros gerenciarem reinícios rápidos do cronômetro de arremesso e a posse de bola.',
          icon: 'mdi:school',
          points: ['Reinícios 12s e 14s', 'Som da buzina', 'Gestos táteis'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Controles interativos e animações táteis',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Cronômetro de arremesso de 12 segundos</strong> pisca em vermelho e exibe decimais abaixo de 4 segundos, seguido por uma buzina simulada.',
        '<strong>Meia quadra de concreto interativa</strong> permite tocar nas áreas de 1 e 2 pontos para registrar os pontos diretamente no diagrama.',
        '<strong>Aviso de contagem de faltas</strong> fica vermelho e treme para indicar penalidades por faltas da equipe (7+ e 10+ faltas).',
        '<strong>Indicador de limpeza de bola</strong> exibe um lembrete quando a posse muda até que a bola seja limpa atrás do arco.',
        '<strong>Controle de tempo técnico</strong> inicia uma contagem regressiva de 30 segundos com alertas sonoros personalizados.',
      ],
    },
    {
      type: 'title',
      text: 'Por que usar um rastreador digital de streetball?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Um placar digital elimina divergências sobre pontuações, faltas ou violações do cronômetro de arremesso no asfalto. Os números neon brilhantes são fáceis de ler à distância, e os lembretes automáticos de posse e limpeza de bola garantem que a partida flua sem interrupções.',
    },
  ],
  ui: {
    teamA: 'Equipe 1',
    teamB: 'Equipe 2',
    points: 'Pontos',
    fouls: 'Faltas',
    timeouts: 'Tempos técnicos',
    shotClock: 'Cronômetro',
    reset: 'Reiniciar',
    resetConfirm: 'Reiniciar partida? Todos os dados serão perdidos.',
    cancel: 'Cancelar',
    gameTime: 'Tempo',
    possession: 'Posse',
    clearBall: 'Limpar bola',
    matchWon: 'Partida vencida',
    timeoutActive: 'Tempo técnico',
    penalty: 'Penalidade',
    fullscreen: 'Tela cheia',
    exitFullscreen: 'Sair da tela cheia',
    overtime: 'Prorrogação',
    ptsInside: '+1 Ponto',
    ptsOutside: '+2 Pontos',
    toggleSound: 'Ativar som',
    soundOn: 'Som ativado',
    soundOff: 'Som desativado',
  },
};
