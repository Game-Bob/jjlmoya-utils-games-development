import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SnookerScoreKeeperLocaleContent } from '../entry';

const slug = 'rastreador-de-frames-e-calculadora-de-break-para-snooker';
const title = 'Rastreador de Frames e Calculadora de Break para Snooker';
const description = 'Acompanhe ao vivo os pontuações dos frames de snooker, calcule os breaks atuais, exiba os pontos restantes na mesa e obtenha o status de déficit em tempo real, como necessidade de snookers.';

const faqData = [
  {
    question: 'Como são calculados os pontos máximos restantes na mesa de snooker?',
    answer: 'Cada bola vermelha restante vale 8 pontos (1 ponto pela própria vermelha mais 7 pontos por encaçapar uma bola preta). Depois que todas as vermelhas são encaçapadas, as cores restantes valem 27 pontos no total.',
  },
  {
    question: 'O que significa "precisar de snookers" nesta calculadora?',
    answer: 'Significa que o déficit de pontuação é maior que o total de pontos restantes na mesa, exigindo que um jogador force faltas do adversário para alcançá-lo.',
  },
  {
    question: 'O que é uma situação de bola preta decisiva?',
    answer: 'Um cenário de preta decisiva ocorre quando todas as bolas são encaçapadas e as pontuações do frame estão empatadas, exigindo que a bola preta seja recolocada para determinar o vencedor.',
  },
];

const howToData = [
  {
    name: 'Configurar Nomes dos Jogadores',
    text: 'Insira nomes personalizados para os dois jogadores de snooker para personalizar a exibição do placar.',
  },
  {
    name: 'Encaçapar Bolas e Construir Breaks',
    text: 'Toque nas bolas de feltro brilhantes para registrar as bolas encaçapadas em sequência. A calculadora bloqueia cores inelegíveis de acordo com as regras.',
  },
  {
    name: 'Verificar Status do Déficit',
    text: 'Monitore a barra de status ao vivo para ver se um jogador está seguro, precisa de snookers ou se o frame ainda está aberto.',
  },
  {
    name: 'Registrar Penalidades por Falta',
    text: 'Abra o menu de faltas para atribuir pontos de penalidade diretamente ao adversário e alternar o turno do jogador ativo.',
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

export const content: SnookerScoreKeeperLocaleContent = {
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
      text: 'Marcador de Frames Grátis Online e Contador de Break para Snooker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Simplifique seus frames de snooker com nosso placar digital. A ferramenta calcula os pontos de break ativos, os pontos restantes na mesa e exibe a diferença exata de pontuação. A interface em estilo feltro fornece indicadores interativos que acendem dinamicamente com base nas sequências das regras do snooker. Esteja você arbitrando um torneio local ou acompanhando partidas amistosas em casa, esta aplicação cuida de todos os cálculos automaticamente.',
    },
    {
      type: 'title',
      text: 'Entendendo a Pontuação do Snooker e os Cálculos de Déficit',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uma partida padrão de snooker começa com quinze bolas vermelhas valendo um ponto cada. Os jogadores devem alternar entre uma bola vermelha e uma bola colorida. Cada bola colorida encaçapada é devolvida ao seu ponto até que todas as vermelhas tenham sido encaçapadas. Depois disso, as coloridas devem ser encaçapadas em sua ordem numérica, do amarelo ao preto. Esta calculadora acompanha a sequência e avisa quando snookers são necessários. Ao calcular a diferença de pontuação e os pontos máximos restantes na mesa, ela determina exatamente quando um frame atingiu seu limite de vitória.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Placar de Frames',
          description: 'Acompanhe as pontuações dos frames e as rodadas dos jogadores em um display de alto contraste.',
          icon: 'mdi:scoreboard-outline',
          points: ['Destaque claro do jogador ativo', 'Entrada de nome personalizado', 'Suporte a desfazer com um clique'],
        },
        {
          title: 'Calculadora de Break',
          description: 'Monitoramento em tempo real dos breaks ativos com registro das cores encaçapadas.',
          icon: 'mdi:billiards',
          points: ['Linha do tempo das bolas encaçapadas', 'Bloqueio automático de bolas pelas regras', 'Status do break codificado por cores'],
        },
        {
          title: 'Indicadores de Pontos Restantes',
          description: 'Acompanhe os pontos máximos que ainda restam na mesa de feltro verde.',
          icon: 'mdi:percent-outline',
          points: ['Monitoramento da diferença de pontos', 'Avisos dinâmicos de necessidade de snooker', 'Detecção de preta decisiva'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Controles Interativos e Feedback Sonoro',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>HUD Tátil em Feltro</strong> permite tocar nas bolas para adicionar pontos e registrá-las na linha do tempo do break.',
        '<strong>Botões de Ação de Falta</strong> aplicam de quatro a sete pontos de penalidade ao placar do adversário e encerram o turno ativo.',
        '<strong>Luz de Status Dinâmica</strong> é atualizada para indicar jogo normal, margem segura ou necessidade de snookers.',
        '<strong>Síntese de Áudio</strong> dispara um som de encaçapada ao pottar e um som de buzina em faltas.',
      ],
    },
    {
      type: 'title',
      text: 'Regras de Faltas e Sistema de Penalidades no Snooker Explicados',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Faltas no snooker concedem pontos ao adversário. O valor da penalidade é determinado pelo valor da bola alvo ou da bola envolvida na falta, com uma penalidade mínima de quatro pontos. Por exemplo, encaçapar a bola branca, acertar uma colorida em vez de uma vermelha primeiro, ou não acertar nenhuma bola resulta em penalidade. Se a falta for cometida ao mirar na azul, rosa ou preta, a penalidade é de cinco, seis ou sete pontos respectivamente. Este placar digital possui um painel rápido de faltas para adicionar facilmente valores de penalidade e transferir automaticamente o turno ativo para o próximo jogador.',
    },
    {
      type: 'title',
      text: 'O que Acontece Durante um Cenário de Bola Preta Decisiva',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Quando todas as bolas foram encaçapadas e as pontuações do frame estão empatadas, a bola preta é recolocada em sua posição original. Os jogadores sorteiam para determinar quem jogará primeiro, e o primeiro jogador a encaçapar a preta ou cometer uma falta perde o frame. Esta regra da preta decisiva garante uma resolução justa para partidas equilibradas sem exigir frames adicionais completos, e nosso rastreador detecta automaticamente este estado final de empate para notificar ambos os jogadores.',
    },
    {
      type: 'title',
      text: 'Por Que Usar um Rastreador Digital de Snooker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O cálculo manual de pontos restantes e margens de déficit durante frames apertados está sujeito a erros humanos. Esta ferramenta de navegador fornece estatísticas precisas em tempo real, permitindo que os jogadores se concentrem em sua técnica e estratégia. Ao manter uma linha do tempo interativa das bolas encaçapadas, os árbitros podem verificar facilmente breaks controversos e manter a continuidade oficial da partida.',
    },
  ],
  ui: {
    title: 'Placar de Snooker',
    description: 'Acompanhe pontuações e breaks.',
    player1: 'Jogador 1',
    player2: 'Jogador 2',
    score: 'Pontuação',
    currentBreak: 'Break',
    remainingPoints: 'Restantes',
    deficit: 'Déficit',
    statusSafe: 'Seguro',
    statusNeedSnookers: 'Snookers Necessários',
    statusDecidingBlack: 'Preta Decisiva',
    statusNormal: 'Normal',
    foul: 'Falta',
    foulTitle: 'Selecionar Penalidade da Falta',
    foulPoints: 'Penalidade',
    foulOnRed: 'Vermelha/Amarela/Verde/Marrom',
    foulOnYellow: 'Amarela',
    foulOnGreen: 'Verde',
    foulOnBrown: 'Marrom',
    foulOnBlue: 'Azul',
    foulOnPink: 'Rosa',
    foulOnBlack: 'Preta',
    reset: 'Reiniciar',
    resetConfirm: 'Reiniciar o frame atual? Todas as pontuações serão perdidas.',
    cancel: 'Cancelar',
    confirm: 'Confirmar Reinício',
    endTurn: 'Encerrar Turno',
    miss: 'Erro',
    redsRemaining: 'Vermelhas',
    pocketedBalls: 'Encaçapadas',
    toggleSound: 'Ativar/Desativar Som',
    fullscreen: 'Tela Cheia',
  },
};
