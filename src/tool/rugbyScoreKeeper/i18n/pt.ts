import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RugbyScoreKeeperLocaleContent } from '../entry';

const slug = 'placar-rugby-cronometro';
const title = 'Placar de Rugby Premium com Cronômetros de Sin Bin e Relógio de Partida';
const description = 'Registre as pontuações de partidas de rugby ao vivo com tries, conversões, penalidades e drop goals. Gerencie cronômetros de sin bin e os tempos de jogo com um placar interativo de estádio.';

const faqData = [
  {
    question: 'Como os pontos são marcados em uma partida de rugby union?',
    answer: 'Um try vale 5 pontos e é concedido quando um jogador apoia a bola na área de try adversária. Um chute de conversão após um try vale 2 pontos. Chutes de penalidade e drop goals valem 3 pontos cada.',
  },
  {
    question: 'O que acontece quando um jogador recebe um cartão amarelo no rugby?',
    answer: 'Um cartão amarelo resulta em uma suspensão temporária no sin bin. O jogador deve deixar o campo por 10 minutos de tempo ativo de partida. Sua equipe joga com um jogador a menos durante este período. O cronômetro do sin bin só conta enquanto o relógio da partida estiver rodando.',
  },
  {
    question: 'Quanto tempo dura uma partida de rugby union?',
    answer: 'Uma partida padrão de rugby union consiste em dois tempos de 40 minutos com um intervalo de 10 minutos. O relógio da partida é parado durante lesões e incidentes graves. Tempo adicional pode ser acrescido para compensar paradas.',
  },
];

const howToData = [
  {
    name: 'Registre eventos de pontuação',
    text: 'Toque nos botões Try, Conversão, Penalidade ou Drop Goal para registrar pontos. Após tocar em Try, o botão Conversão acende automaticamente.',
  },
  {
    name: 'Gerencie penalidades de sin bin',
    text: 'Toque em Cartão Amarelo para enviar um jogador ao sin bin. Insira o nome ou número dele e uma contagem regressiva de 10 minutos começa automaticamente.',
  },
  {
    name: 'Controle o tempo da partida',
    text: 'Use o relógio da partida para acompanhar dois tempos de 40 minutos. Pause o relógio durante lesões e retome quando o jogo recomeçar.',
  },
  {
    name: 'Acompanhe a evolução do placar',
    text: 'Monitore o placar ao vivo com pontos de casa e visitante. Veja o resumo da pontuação para conferir a divisão de tries, conversões, penalidades e drop goals.',
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

export const content: RugbyScoreKeeperLocaleContent = {
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
      text: 'Placar de Rugby Online Grátis com Acompanhamento ao Vivo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Assuma o controle da pontuação da sua partida de rugby com nosso placar digital interativo. Acompanhe tries, conversões, penalidades e drop goals em tempo real. O sistema de gerenciamento de sin bin conta automaticamente as suspensões de jogadores e o relógio da partida mantém ambos os tempos perfeitamente cronometrados. Esteja você apitando uma partida de clube local ou treinando uma equipe juvenil, esta ferramenta lida com todos os detalhes de pontuação e tempo automaticamente.',
    },
    {
      type: 'title',
      text: 'Sistema de Pontuação do Rugby Union Explicado',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O rugby union oferece quatro formas de marcar pontos, cada uma exigindo habilidades e estratégias diferentes. O try é a jogada ofensiva mais valiosa, recompensando equipes que rompem a linha defensiva e apoiam a bola na zona de try. Após um try, a equipe que marcou tenta um chute de conversão para dois pontos extras. Chutes de penalidade e drop goals adicionam profundidade tática, permitindo que as equipes marquem em jogo aberto ou após infrações adversárias.',
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: 'Try',
          description: 'Apoie a bola na zona de try para cinco pontos.',
          icon: 'mdi:rugby',
          points: ['Cinco pontos concedidos', 'Permite tentativa de conversão', 'Requer apoio da bola'],
        },
        {
          title: 'Conversão',
          description: 'Chute entre as traves após um try para dois pontos.',
          icon: 'mdi:goal',
          points: ['Dois pontos se bem sucedido', 'Chutado da posição do try', 'Deve ultrapassar a trave'],
        },
        {
          title: 'Penalidade',
          description: 'Chute a gol após infração adversária para três pontos.',
          icon: 'mdi:alert-octagon',
          points: ['Três pontos concedidos', 'Pode ser chutado ou tocado', 'Frequentemente decide jogos apertados'],
        },
        {
          title: 'Drop Goal',
          description: 'Chute de ressalto da bola entre as traves durante jogo aberto para três pontos.',
          icon: 'mdi:circle-outline',
          points: ['Três pontos concedidos', 'Bola deve tocar o chão primeiro', 'Vencedor de jogo sob pressão'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Entendendo o Sistema de Sin Bin',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O sin bin é um sistema de suspensão temporária para infrações perigosas ou repetidas. Quando um árbitro mostra um cartão amarelo, o jogador deve deixar o campo por dez minutos de jogo ativo. Durante este período, sua equipe joga com um jogador a menos, criando uma vantagem numérica para a equipe adversária. O cronômetro do sin bin só conta enquanto o relógio da partida estiver rodando, garantindo uma aplicação justa independentemente de paradas.',
    },
    {
      type: 'list',
      items: [
        '<strong>Penalidade do Cartão Amarelo:</strong> Dez minutos no sin bin por jogo perigoso ou infrações repetidas da equipe.',
        '<strong>Desvantagem Numérica:</strong> A equipe infratora joga com 14 jogadores em vez de 15 durante o período de suspensão.',
        '<strong>Retorno Automático:</strong> Quando o cronômetro expira, o jogador retorna automaticamente da linha de meio campo.',
        '<strong>Elevação para Cartão Vermelho:</strong> Um segundo cartão amarelo ou uma única infração grave resulta em cartão vermelho e expulsão definitiva.',
      ],
    },
    {
      type: 'title',
      text: 'Gerenciamento de Tempo e Intervalo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uma partida padrão de rugby union é dividida em dois tempos de 40 minutos com um intervalo de 10 minutos. O relógio da partida corre continuamente durante o jogo ativo, mas pode ser pausado pelo árbitro para lesões, revisões de jogadas graves ou outras paradas. Este placar digital inclui um relógio preciso com controles de pausa e retomada, acompanhamento automático dos tempos e indicadores visuais claros para cada período de jogo.',
    },
    {
      type: 'title',
      text: 'Por Que Usar um Placar de Rugby Digital',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A manutenção manual da pontuação no rugby é desafiadora devido à variedade de métodos de pontuação, aos requisitos de tempo do sin bin e ao gerenciamento dos tempos. Esta ferramenta de navegador fornece pontuação precisa em tempo real, contagens regressivas automáticas de sin bin e temporização precisa da partida. Treinadores podem focar na estratégia de jogo em vez de aritmética, árbitros têm um sistema de pontuação de reserva confiável e jogadores podem verificar o estado da partida rapidamente.',
    },
  ],
  ui: {
    title: 'Placar de Rugby',
    description: 'Registre pontuações de partidas e cronômetros de sin bin.',
    home: 'Casa',
    away: 'Visitante',
    score: 'Placar',
    tryLabel: 'Try +5',
    conversion: 'Conversão +2',
    penalty: 'Penalidade +3',
    dropGoal: 'Drop Goal +3',
    conversionYes: 'Sim',
    conversionNo: 'Não',
    sinBin: 'Cartão Amarelo',
    sinBinTitle: 'Suspensão Temporária',
    sinBinPlayer: 'Nome ou número do jogador:',
    sinBinAdd: 'Iniciar Suspensão',
    sinBinEmpty: 'Nenhuma suspensão ativa',
    sinBinReturn: 'Retornou',
    matchClock: 'Relógio da Partida',
    half: 'Tempo',
    half1: 'Primeiro Tempo',
    half2: 'Segundo Tempo',
    startMatch: 'Pontapé Inicial',
    pauseMatch: 'Pausar',
    resumeMatch: 'Retomar',
    resetMatch: 'Reiniciar Partida',
    resetConfirm: 'Reiniciar a partida atual? Todas as pontuações e cronômetros serão perdidos.',
    cancel: 'Cancelar',
    confirm: 'Confirmar Reinício',
    period: 'Período',
    scoringSummary: 'Resumo da Pontuação',
    tryScored: 'Tries',
    conversionSuccess: 'Conversões',
    conversionMiss: 'Conversões Perdidas',
    penaltyScored: 'Penalidades',
    dropGoalScored: 'Drop Goals',
    totalPoints: 'Total',
    fullscreen: 'Tela Cheia',
    toggleSound: 'Ativar Desativar Som',
    eventLog: 'Registro de Eventos',
    eventEmpty: 'Nenhum evento ainda',
    undoBtn: 'Desfazer Último',
    timeOff: 'Tempo Parado',
    timeOn: 'Tempo em Jogo',
  },
};
