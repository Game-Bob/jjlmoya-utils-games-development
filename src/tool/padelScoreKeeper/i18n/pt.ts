import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PadelScoreKeeperLocaleContent } from '../entry';

const slug = 'marcador-pontos-padel';
const title = 'Marcador de Padel Premium : Ponto de Ouro & Rotação de Saque';
const description = 'Monitore os pontos do padel com a regra oficial do Punto de Oro (Ponto de Ouro), alertas de rotação de saque, tiebreaks e animação dinâmica de troca de lado.';

const faq = [
  {
    question: 'O que é o Ponto de Ouro (Punto de Oro) no Padel?',
    answer: 'O Ponto de Ouro é um ponto decisivo jogado quando a pontuação chega a 40-40 (Igualdade). Não há vantagem. A equipe que recebe escolhe se vai receber o saque do lado esquerdo ou direito, e quem vencer aquele único ponto vence o game inteiro.',
  },
  {
    question: 'Como funcionam os formatos de set no Padel?',
    answer: 'Partidas padrão são jogadas em melhor de 3 sets, com cada set vencido pela primeira equipe a alcançar 6 games (com vantagem de 2). Se a pontuação chegar a 6-6, um tiebreak de 7 pontos é jogado. Um formato opcional Golden Set termina em 4 games com tiebreak em 4-4.',
  },
  {
    question: 'Quando os jogadores trocam de lado no Padel?',
    answer: 'Os jogadores trocam de lado após o primeiro game e depois a cada 2 games (sempre que a soma dos games no set atual for ímpar, ex. 1, 3, 5). Durante os tiebreaks, os jogadores trocam de lado a cada 6 pontos.',
  },
];

const howTo = [
  {
    name: 'Configurar o formato da partida',
    text: 'Selecione o formato padrão (primeiro a 6 games) ou o formato golden set mais curto (primeiro a 4 games).',
  },
  {
    name: 'Inserir nomes dos jogadores',
    text: 'Insira os nomes das equipes para personalizar o placar. Suas configurações são salvas automaticamente.',
  },
  {
    name: 'Registrar pontos na quadra',
    text: 'Toque em qualquer lado da quadra de padel isométrica para marcar pontos. Os indicadores de saque vão guiá-lo nas rotações diagonais.',
  },
  {
    name: 'Decidir Pontos de Ouro',
    text: 'Quando a igualdade for alcançada, selecione o lado de devolução (recebedor esquerdo ou direito) e clique na equipe vencedora para concluir o game.',
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

export const content: PadelScoreKeeperLocaleContent = {
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
      text: 'Placar de Padel Online Grátis & Rastreador de Partidas',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Acompanhar os pontos no padel pode ser confuso com rallies rápidos, tiebreaks, mudanças de lado e a regra oficial do Punto de Oro (Ponto de Ouro). Este placar de padel online gratuito elimina a complicação de marcar pontos. Basta tocar na quadra visual para registrar pontos e deixar a ferramenta gerenciar automaticamente as rotações de saque, os lados do recebedor, o histórico de sets e as trocas de lado em tempo real.',
    },
    {
      type: 'title',
      text: 'Entendendo a Pontuação do Padel, Pontos de Ouro e Rotações',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O padel segue um sistema de pontuação semelhante ao tênis (15, 30, 40, Game), mas introduz regras específicas para um jogo mais rápido. De acordo com as regras profissionais da FIP, quando a pontuação chega a 40-40, um Ponto de Ouro (Punto de Oro) decisivo é jogado. A equipe recebedora seleciona qual lado (esquerdo ou direito) receberá o saque, e o vencedor daquele único ponto vence o game. Além disso, as equipes devem trocar de lado sempre que o total de games em um set for ímpar e a cada 6 pontos durante um tiebreak.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Partidas Amistosas',
          description: 'Controle de pontos rápido e limpo para partidas amistosas com seus parceiros de padel.',
          icon: 'mdi:tennis',
          points: ['Adição de pontos com um toque', 'Layout otimizado para mobile', 'Funciona offline'],
        },
        {
          title: 'Clube e Liga',
          description: 'Acompanhe partidas competitivas de clube e torneios locais com facilidade.',
          icon: 'mdi:trophy-outline',
          points: ['Arquivo de histórico de sets', 'Sets de 6 ou 4 games', 'Suporte a Ponto de Ouro'],
        },
        {
          title: 'Modo Árbitro',
          description: 'Ferramenta completa para arbitrar partidas oficiais ou sessões de treino.',
          icon: 'mdi:school',
          points: ['Marcadores de saque e recepção', 'Rotação interativa da quadra', 'Modo console em tela cheia'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Recursos Digitais Avançados para Jogadores de Padel',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Lógica Oficial do Ponto de Ouro</strong> permite que a equipe recebedora escolha o lado do recebedor na igualdade, mostrando a trajetória do saque.',
        '<strong>Indicador Visual da Quadra</strong> mostra as posições do sacador (S) e do recebedor (R) dinamicamente para evitar erros de rotação.',
        '<strong>Troca Automática de Lados</strong> gira o layout da quadra em games ímpares ou intervalos de tiebreak para que corresponda sempre à sua visão física.',
        '<strong>Formatos de Set Personalizáveis</strong> suporta sets padrão de 6 games ou Golden Sets rápidos de 4 games.',
        '<strong>Salvamento Automático no Navegador</strong> mantém os nomes dos jogadores e a pontuação atual mesmo se você atualizar a página.',
      ],
    },
    {
      type: 'title',
      text: 'Regras do Tiebreak no Padel: Padrão vs Super Tiebreak',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Em sets padrão de padel, se a pontuação chegar a 6-6 em games, um tiebreak de 7 pontos é jogado. Em um tiebreak, os pontos são contados numericamente (1, 2, 3, etc.). A primeira equipe a atingir 7 pontos com margem de 2 vence o set. O jogador da vez saca o primeiro ponto do lado direito (igualdade). A partir daí, cada jogador saca dois pontos consecutivos, começando do lado esquerdo (vantagem). Em alguns formatos de torneio, se a partida estiver empatada em 1-1 nos sets, um Super Tiebreak de 10 pontos é jogado em vez de um terceiro set completo para decidir a partida.',
    },
    {
      type: 'title',
      text: 'Troca de Quadra e Rotações: Mantendo a Justiça no Padel',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A troca de quadra é essencial no padel para garantir que fatores ambientais como sol, vento ou imperfeições específicas da quadra não favoreçam uma equipe em detrimento da outra. Os jogadores devem trocar de lado após o primeiro game de cada set e depois a cada dois games (ex. em 1-0, 2-1, 3-2, 4-3, 5-4). Nosso placar digital de padel possui uma animação dinâmica de troca de lado que gira automaticamente o layout visual da quadra em 180 graus sempre que os jogadores precisam trocar fisicamente de lado. Isso garante que a equipe exibida na parte superior da tela corresponda sempre à equipe que está jogando no lado oposto da quadra física.',
    },
    {
      type: 'title',
      text: 'Sets Padrão vs Formato Golden Set',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Enquanto as partidas padrão são jogadas com 6 games por set, muitas ligas recreativas e torneios rápidos adotam o formato "Golden Set" em que os sets são jogados apenas até 4 games (com tiebreak em 4-4). Este placar permite alternar entre esses formatos com um único toque na barra de ferramentas. Independentemente do formato selecionado, o placar gerencia automaticamente todos os tiebreaks, rotações de saque e cálculos de pontuação.',
    },
    {
      type: 'title',
      text: 'Dicas para um Controle de Pontos Eficaz na Quadra',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Use um Suporte de Quadra ou Suporte para Celular:</strong> Monte seu celular ou tablet na cerca da quadra de padel na altura da rede. Isso permite que jogadores de ambos os lados vejam facilmente a pontuação ativa e os indicadores de saque.',
        '<strong>Personalize os Nomes Antes de Começar:</strong> Reserve 10 segundos para digitar os nomes reais dos jogadores ou equipes. Isso torna os anúncios de voz (se ativados) e o placar visual muito mais envolventes e oficiais.',
        '<strong>Ative o Modo Tela Cheia:</strong> Clique no botão de tela cheia no painel do cabeçalho. Isso maximiza a interface do placar e ajuda a evitar que a tela desligue automaticamente durante rallies longos.',
      ],
    },
    {
      type: 'title',
      text: 'Por Que Usar um Marcador Digital de Padel?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Em vez de discutir constantemente sobre quem está sacando, de quem é a vez de receber ou qual é a pontuação do game, um rastreador digital mantém todos alinhados. Ao renderizar visualmente as posições do sacador e do recebedor diretamente na tela, os jogadores podem dar uma olhada rápida no celular no banco e saber exatamente onde se posicionar. Isso melhora o ritmo do jogo e evita erros de rotação.',
    },
  ],
  ui: {
    playerA: 'Equipe 1',
    playerB: 'Equipe 2',
    game: 'Game',
    set: 'Set',
    tiebreak: 'Tiebreak',
    goldPoint: 'Ponto de Ouro',
    selectReceiver: 'Selecionar Recebedor',
    leftReceiver: 'Recebedor Esquerdo',
    rightReceiver: 'Recebedor Direito',
    server: 'Sacador',
    receiver: 'Recebedor',
    changeEnds: 'Trocar de Lado',
    matchWon: 'Partida Vencida',
    reset: 'Reiniciar',
    resetConfirm: 'Reiniciar a partida? Todos os dados serão perdidos.',
    cancel: 'Cancelar',
    fullscreen: 'Tela Cheia',
    exitFullscreen: 'Sair da Tela Cheia',
    deuce: 'Igualdade',
    advantage: 'Vantagem',
    formatStandard: '6 Games',
    formatGoldenSet: '4 Games',
    goldenSet: 'Golden Set',
    goldPointTitle: 'Ponto de Ouro Decisivo',
  },
};
