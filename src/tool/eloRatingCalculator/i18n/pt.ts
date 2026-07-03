import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EloRatingCalculatorUI } from '../ui';

const slug = 'calculadora-rating-elo';
const title = 'Calculadora de Pontuação ELO para Xadrez, Esports e Esportes';
const description = 'Calculadora ELO gratuita para vitórias, empates e derrotas. Insira ambas as pontuações, escolha um fator K e veja a mudança exata de pontos, pontuação esperada, novo ELO e ELO do oponente.';

const ui: EloRatingCalculatorUI = {
  playerLabel: 'Pontuação do jogador',
  opponentLabel: 'Pontuação do oponente',
  kFactorLabel: 'Fator K',
  resultLabel: 'Resultado da partida',
  winLabel: 'Vitória',
  drawLabel: 'Empate',
  lossLabel: 'Derrota',
  calculateLabel: 'Calcular',
  resetLabel: 'Redefinir',
  expectedLabel: 'Esperado',
  deltaLabel: 'Variação',
  newRatingLabel: 'Nova pontuação',
  opponentNewRatingLabel: 'Novo ELO do oponente',
  kFactorHelpTitle: 'O que é o fator K?',
  kFactorHelpText: 'K controla a agressividade da atualização. Um K baixo significa rankings estáveis. Um K alto faz cada resultado mover as pontuações mais rápido.',
  kFactorLowText: 'Estável',
  kFactorHighText: 'Volátil',
  resultSummaryLabel: 'Impacto da partida',
  initialImpactText: 'Empate mantém a tabela apertada',
  historyVersusLabel: 'vs',
  historyToLabel: 'para',
  playerPointsLabel: 'pontos do jogador',
  opponentEloLabel: 'ELO do oponente',
  particleEloLabel: 'ELO',
  particleRatingLabel: 'PONTUAÇÃO',
  upsetLabel: 'Chance de zebra',
  favoriteLabel: 'Pressão do favorito',
  balancedLabel: 'Partida equilibrada',
  historyLabel: 'Cálculos locais',
  noHistoryLabel: 'Execute um cálculo para salvá-lo aqui',
  copiedLabel: 'Copiado',
  copyLabel: 'Copiar',
  clearLabel: 'Limpar',
  kBeginner: 'Iniciante',
  kClub: 'Clube',
  kTournament: 'Torneio',
  kElite: 'Elite',
};

const faqData = [
  { question: 'Como calcular a mudança de pontuação ELO após uma partida?', answer: 'Insira seu ELO atual, o ELO do oponente, o resultado da partida e o fator K. A calculadora estima sua pontuação esperada, compara com o resultado real e retorna os pontos exatos ganhos ou perdidos.' },
  { question: 'O que significa o fator K no ELO?', answer: 'O fator K controla a sensibilidade da pontuação. Um fator K baixo torna as pontuações estáveis e lentas para mudar. Um fator K alto faz as pontuações reagirem mais rápido, útil para novos jogadores, temporadas curtas ou ligas locais ativas.' },
  { question: 'Por que ganho menos pontos ELO quando venço um oponente com pontuação menor?', answer: 'Porque a fórmula já esperava que você vencesse. Vencer um oponente com pontuação muito menor confirma a previsão, então o ganho de pontos é pequeno. Vencer um oponente mais forte é mais surpreendente, então o ganho é maior.' },
  { question: 'O oponente perde a mesma quantidade de pontos ELO?', answer: 'Em uma troca ELO padrão de dois jogadores, sim. Os pontos ganhos por um lado são subtraídos do outro, então a calculadora mostra tanto o novo ELO do jogador quanto o novo ELO do oponente.' },
  { question: 'Posso usar esta calculadora ELO fora do xadrez?', answer: 'Sim. O ELO funciona para qualquer competição repetida um contra um onde jogadores mais fortes devem ter mais probabilidade de vencer, incluindo esports, ligas de tênis, grupos de padel, tênis de mesa, clubes de debate e ligas fantasy.' },
];

const howTo = [
  { name: 'Insira a pontuação do jogador', text: 'Digite a pontuação atual do jogador cuja mudança você quer calcular.' },
  { name: 'Insira a pontuação do oponente', text: 'Adicione a pontuação do oponente para que a calculadora possa estimar a pontuação esperada.' },
  { name: 'Escolha o fator K e o resultado', text: 'Use um fator K menor para rankings estáveis ou um fator K maior quando as pontuações devem se ajustar rápido, depois escolha vitória, empate ou derrota.' },
  { name: 'Leia as novas pontuações', text: 'A calculadora mostra a pontuação esperada, a variação, seu novo ELO e o novo ELO do oponente após a troca de pontos.' },
];

const seo = [
  { type: 'title' as const, text: 'Calcule Pontos ELO Após Qualquer Partida', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: 'Use esta calculadora de pontuação ELO quando precisar de uma resposta rápida para uma pergunta muito prática: <strong>quantos pontos ELO eu ganho ou perco após este resultado?</strong> Insira sua pontuação, a pontuação do oponente, o resultado da partida e o fator K. A ferramenta calcula a pontuação esperada, a variação de pontuação, seu novo ELO e o novo ELO do oponente na mesma ficha de resultados.'
  },
  {
    type: 'summary' as const,
    title: 'O que esta calculadora responde',
    items: [
      'Quantos pontos ELO você ganha após uma vitória contra um oponente mais forte ou mais fraco.',
      'Quantos pontos ELO você perde após uma derrota surpreendente.',
      'Se um empate deve aumentar ou diminuir sua pontuação.',
      'Qual é a pontuação do oponente após a mesma troca de pontos.',
      'Como mudar o fator K torna o movimento da pontuação estável ou volátil.',
    ]
  },
  {
    type: 'stats' as const,
    items: [
      { value: '1.0', label: 'pontuação de vitória', description: 'Uma vitória é tratada como um ponto completo antes de ser comparada com a pontuação esperada.' },
      { value: '0.5', label: 'pontuação de empate', description: 'Um empate fica exatamente entre uma vitória e uma derrota, podendo ganhar pontos contra um oponente mais forte.' },
      { value: '0.0', label: 'pontuação de derrota', description: 'Uma derrota contra um oponente com pontuação menor geralmente custa mais porque foi inesperada.' },
    ]
  },
  { type: 'title' as const, text: 'O Que a Fórmula ELO Faz', level: 2 as const },
  {
    type: 'diagnostic' as const,
    title: 'Os três passos por trás de cada resultado',
    description: 'A calculadora segue a ideia padrão do ELO sem fazer você trabalhar manualmente com a fórmula.',
    items: [
      { label: 'Pontuação esperada', value: 'A diferença de pontuação é convertida em um escore de estilo probabilístico. Espera-se que jogadores com pontuação maior obtenham mais pontos.' },
      { label: 'Pontuação real', value: 'Uma vitória conta como 1, um empate como 0.5 e uma derrota como 0.' },
      { label: 'Variação de pontuação', value: 'A diferença entre pontuação real e esperada é multiplicada pelo fator K e arredondada em pontos.' },
    ]
  },
  {
    type: 'table' as const,
    headers: ['Situação', 'O que geralmente acontece', 'Por que acontece'],
    rows: [
      ['Você vence um oponente mais forte', 'Grande ganho de ELO', 'Sua pontuação real foi muito maior que a esperada'],
      ['Você vence um oponente mais fraco', 'Pequeno ganho de ELO', 'A fórmula já esperava que você vencesse'],
      ['Você empata com um oponente mais forte', 'Pequeno ganho de ELO', 'Um empate pode superar sua pontuação esperada'],
      ['Você perde para um oponente mais fraco', 'Grande perda de ELO', 'O resultado foi pior que o esperado'],
    ]
  },
  { type: 'title' as const, text: 'Escolhendo o Fator K Certo para Seu Sistema de Pontuação', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: '<strong>O fator K é o botão de sensibilidade de um sistema ELO.</strong> Ele não decide quem merecia vencer. Ele decide com que força a tabela de pontuação reage a um resultado. Se sua liga tem muitas partidas e pontuações maduras, um K menor mantém a tabela calma. Se os jogadores são novos ou as temporadas são curtas, um K maior ajuda as pontuações a se ajustarem mais rápido.'
  },
  {
    type: 'table' as const,
    headers: ['Fator K', 'Usar para', 'O que o usuário deve esperar'],
    rows: [
      ['10 a 16', 'Clubes de xadrez estabelecidos, grupos de especialistas, rankings de longa duração', 'Pontuações muito estáveis com pequenas mudanças após cada partida'],
      ['20 a 32', 'Ligas locais, rankings de clubes, torneios recorrentes', 'Movimento equilibrado que parece responsivo sem exagerar'],
      ['40 a 60', 'Novos jogadores, temporadas curtas, rankings de esports, grupos informais', 'Correção rápida quando a pontuação atual pode estar imprecisa'],
      ['60 ou mais', 'Apenas formatos experimentais ou pontuações provisórias', 'Pontuações muito voláteis onde uma partida pode mudar drasticamente a tabela'],
    ]
  },
  {
    type: 'tip' as const,
    title: 'Melhor valor padrão para a maioria dos usuários',
    html: 'Se você não segue uma regra oficial de federação, comece com <strong>K 32</strong>. É responsivo o suficiente para rankings ativos e ainda estável o suficiente para que um resultado de sorte não reescreva completamente a classificação.'
  },
  { type: 'title' as const, text: 'Como Ler o Resultado da Sua Calculadora ELO', level: 2 as const },
  {
    type: 'list' as const,
    items: [
      '<strong>Esperado:</strong> a pontuação que a fórmula previu antes da partida. Uma pontuação esperada mais alta significa que você era favorito.',
      '<strong>Variação:</strong> os pontos ELO exatos adicionados ou removidos da pontuação do jogador.',
      '<strong>Nova pontuação:</strong> a pontuação do jogador após aplicar o resultado.',
      '<strong>Novo ELO do oponente:</strong> a pontuação do oponente após o movimento oposto de pontos.',
      '<strong>Impacto da partida:</strong> um resumo em linguagem simples de quão fortemente o resultado moveu a tabela.',
    ]
  },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: 'Xadrez e jogos de tabuleiro',
        description: 'Calcule pontuações pós-partida para noites de clube, eventos online e grupos de pontuação privados.',
        icon: 'mdi:chess-knight',
        points: ['Suporte vitória-empate-derrota', 'ELO do oponente exibido', 'Ideal para rankings de longo prazo']
      },
      {
        title: 'Rankings de esports',
        description: 'Atualize pontuações de jogadores ou equipes após partidas repetidas um contra um onde a habilidade pode mudar rapidamente.',
        icon: 'mdi:gamepad-variant',
        points: ['Opções de fator K mais alto', 'Correção rápida de pontuação', 'Recompensas claras por zebras']
      },
      {
        title: 'Rankings esportivos',
        description: 'Mantenha classificações justas para tênis, padel, squash, tênis de mesa, badminton e ligas locais.',
        icon: 'mdi:tennis',
        points: ['Atualizações manuais simples', 'Funciona para clubes', 'Fácil para organizadores']
      },
    ]
  },
  {
    type: 'proscons' as const,
    title: 'Quando o ELO é uma boa escolha de pontuação',
    items: [
      {
        pro: 'Excelente para partidas repetidas um contra um onde jogadores mais fortes devem vencer com mais frequência.',
        con: 'Menos ideal para esportes coletivos onde a contribuição individual é difícil de isolar.'
      },
      {
        pro: 'Fácil de explicar porque vitórias contra oponentes mais fortes valem mais pontos.',
        con: 'Precisa de partidas suficientes antes que as pontuações pareçam precisas para jogadores completamente novos.'
      },
      {
        pro: 'Simples o suficiente para manter em uma planilha, ranking de clube ou tabela de liga.',
        con: 'As regras do fator K devem ser consistentes ou as classificações se tornam difíceis de confiar.'
      },
    ]
  },
  {
    type: 'message' as const,
    title: 'Importante para organizadores de ligas',
    html: 'Escolha seu fator K antes do início da temporada e publique-o. Os jogadores confiam mais nas tabelas ELO quando todos sabem como as pontuações são calculadas antes dos resultados serem inseridos.'
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'SportsApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }
  },
];

export const content: ToolLocaleContent<EloRatingCalculatorUI> = { slug, title, description, ui, seo, faq: faqData, bibliography, howTo, schemas };
