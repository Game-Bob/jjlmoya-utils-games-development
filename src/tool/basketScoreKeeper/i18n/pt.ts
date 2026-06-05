import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BasketScoreKeeperUI } from '../ui';

const slug = 'placar-de-basquete';
const title = 'Placar de Basquete Online : Mantenedor de Pontos Grátis';
const description =
  'Placar de basquete online grátis com botões +1, +2 e +3. Mantenha a pontuação em partidas de racha, basquete de rua, ensino médio e ligas locais. Sem cadastro, sem download, funciona offline.';

const faqData = [
  {
    question: 'Como manter a pontuação em uma partida de basquete?',
    answer:
      'O basquete usa três valores de pontuação: lance livre (+1 ponto), cesta de campo (+2 pontos) e cesta de três pontos (+3 pontos). Toque no botão correspondente sempre que uma equipe pontuar. O placar controla automaticamente o total. Para corrigir um erro, use o botão de menos ao lado da pontuação.',
  },
  {
    question: 'Qual é a diferença entre +1, +2 e +3 no basquete?',
    answer:
      '+1 é para lances livres concedidos após uma falta. +2 é para uma cesta de campo comum feita dentro do arco de três pontos. +3 é para arremessos feitos de fora da linha de três pontos. Ter botões separados para cada valor permite pontuar mais rápido e reduz erros em comparação com um contador simples.',
  },
  {
    question: 'Posso usar este placar para uma partida de basquete real?',
    answer:
      'Sim. O placar foi projetado para jogos reais: basquete de racha, basquete de rua, partidas de ensino médio, ligas locais e treinos. Ele salva a pontuação no seu navegador para que você possa recarregar a página sem perder o estado do jogo.',
  },
  {
    question: 'Como manter a pontuação no basquete de rua ou em rachas?',
    answer:
      'O basquete de rua geralmente é jogado até uma pontuação alvo (como 21 ou 16) com 1 e 2 pontos (ou apenas 1). Este placar funciona para qualquer formato. Use +1 para cestas comuns, +2 para arremessos de trás do arco. Defina sua própria condição de vitória e use o botão de menos se cometer um erro.',
  },
  {
    question: 'Funciona offline no celular?',
    answer:
      'Sim. Depois que a página carrega, o placar funciona completamente offline. Perfeito para quadras ao ar livre, ginásios sem WiFi ou qualquer lugar com sinal fraco. Você também pode usar o modo tela cheia e a tela permanecerá ligada para não bloquear durante o jogo.',
  },
  {
    question: 'Como controlar as faltas da equipe e o bônus?',
    answer:
      'Este placar foca no placar em si. Para faltas de equipe, você pode usar os campos de nome das equipes para controlar faltas manualmente (ex.: renomeie "CASA" para "CASA 3F"). Recomendamos usar esta ferramenta com um controlador de faltas separado para jogos oficiais.',
  },
  {
    question: 'Posso usar este mantenedor de pontos de basquete no meu celular?',
    answer:
      'Sim. A interface foi projetada primeiro para dispositivos móveis. Os botões +1, +2 e +3 são grandes e fáceis de tocar com o polegar. O modo tela cheia esconde a interface do navegador para que o placar ocupe a tela inteira, e o bloqueio de tela impede que o celular desligue.',
  },
];

const howToData = [
  {
    name: 'Nomeie suas equipes',
    text: 'Toque em CASA ou FORA para inserir os nomes das equipes. Os nomes são salvos automaticamente no navegador para que persistam mesmo se você recarregar a página.',
  },
  {
    name: 'Pontuar um lance livre (+1)',
    text: 'Toque no botão +1 quando um jogador fizer um lance livre. Cada lance livre vale um ponto e geralmente é concedido após uma falta.',
  },
  {
    name: 'Pontuar uma cesta de campo (+2)',
    text: 'Toque no botão +2 para uma cesta comum dentro da linha de três pontos. Esta é a ação de pontuação mais comum no basquete.',
  },
  {
    name: 'Pontuar uma cesta de três pontos (+3)',
    text: 'Toque no botão +3 quando um jogador pontuar de fora do arco de três pontos. Uma cesta de três pontos é destacada com um botão vermelho e aciona um efeito de comemoração extra.',
  },
  {
    name: 'Corrigir um erro de pontuação',
    text: 'Se você acidentalmente adicionar pontos, toque no botão de menos para subtrair. Não vai abaixo de zero. Não é necessário reiniciar o jogo inteiro por um pequeno erro.',
  },
  {
    name: 'Trocar de lado no intervalo',
    text: 'Use o botão de troca para inverter as posições CASA e FORA no intervalo. Tanto as pontuações quanto os nomes das equipes são trocados, sem perda de dados.',
  },
  {
    name: 'Iniciar um novo jogo',
    text: 'Toque no botão de reset e confirme para limpar todas as pontuações e iniciar um novo jogo. Os nomes das equipes são mantidos para que você não precise digitá-los novamente.',
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

export const content: ToolLocaleContent<BasketScoreKeeperUI> = {
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
      text: 'Placar de Basquete Online Grátis : Sem Cadastro, Sem Download',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Manter a pontuação no basquete deveria ser simples. Um lance livre é +1. Uma cesta de campo é +2. Uma cesta de três pontos é +3. Este placar oferece um botão dedicado para cada valor, para que você toque e continue jogando. Sem menus, sem modos, sem configuração. Apenas nomeie suas equipes e comece a pontuar. A pontuação é salva automaticamente no navegador, para que você possa recarregar a página, fechar o celular ou voltar mais tarde sem perder o jogo.',
    },
    {
      type: 'title',
      text: 'Por Que um Mantenedor de Pontos de Basquete Dedicado Supera um Contador Genérico',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A maioria dos aplicativos de placar força você a tocar no mesmo botão várias vezes para adicionar dois ou três pontos. Esses toques extras se acumulam durante uma partida de 40 minutos e aumentam a chance de perder a conta durante um contra-ataque ou substituição rápida. Este placar tem <strong>três botões separados</strong> : um para cada valor de pontuação : então você toca exatamente uma vez por jogada de pontuação. O botão +3 acende em vermelho e dispara uma animação explosiva para combinar com a emoção de uma cesta de três pontos.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Racha & Basquete de Rua',
          description:
            'Jogos até 16 ou 21 com 1 e 2 pontos. Este placar lida com ambos os valores. Basta usar +1 e +2 e ignorar o +3 ao jogar pelas regras de rua.',
          icon: 'mdi:basketball',
          points: ['Sem configuração necessária', 'Funciona para qualquer meta de vitória', 'Tela permanece ligada'],
        },
        {
          title: 'Ensino Médio & Liga Local',
          description:
            'Regras padrão FIBA ou NFHS com lances livres, cestas de campo e cestas de três pontos. Botões dedicados tornam rápido o suficiente para um marcador oficial.',
          icon: 'mdi:school',
          points: ['Todos os três valores de pontuação', 'Nomes de equipe editáveis', 'Tela cheia mantém celular ligado'],
        },
        {
          title: 'Treino & Prática',
          description:
            'Acompanhe cestas feitas durante exercícios de arremesso, jogos treino ou partidas um contra um. O histórico não é armazenado, então cada sessão começa do zero.',
          icon: 'mdi:whistle',
          points: ['Reset rápido entre exercícios', 'Funciona offline no ginásio', 'Sem necessidade de conta'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Como Funciona a Pontuação do Basquete',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O basquete tem três valores de pontuação. Um <strong>lance livre</strong> vale 1 ponto e é executado da linha de lance livre após uma falta. Uma <strong>cesta de campo</strong> vale 2 pontos e conta para qualquer cesta feita de dentro do arco de três pontos durante o jogo normal. Uma <strong>cesta de três pontos</strong> vale 3 pontos para arremessos feitos de fora do arco, marcado pela linha de três pontos. A maioria dos jogos profissionais e universitários usa todos os três valores. O basquete de rua geralmente usa apenas 1 e 2, ou apenas 1. Este placar se adapta a qualquer formato.',
    },
    {
      type: 'title',
      text: 'Jogue em Qualquer Formato: Vitória por Pontuação, por Tempo ou Primeiro ao Alvo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O basquete não tem um limite fixo de pontuação : o jogo termina quando o cronômetro zerar. Mas o basquete de rua geralmente usa pontuações alvo como primeiro a 16, 21 ou 11 (vitória por 2). Este placar não impõe uma condição de vitória porque o basquete não termina em uma pontuação. Você decide quando o jogo acaba, e o botão de reset limpa o placar para o próximo jogo. Os nomes das equipes são preservados para que você possa jogar partidas consecutivas sem redigitá-los.',
    },
    {
      type: 'title',
      text: 'O Que Torna Este Placar Diferente',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Três botões dedicados</strong> : +1, +2 e +3. Sem alternar entre valores, sem pressionar longo, sem toques extras.',
        '<strong>Nomes de equipe editáveis</strong> : toque no nome para alterá-lo. Os nomes são salvos no navegador e persistem entre recarregamentos de página.',
        '<strong>Bloqueio de suspensão de tela</strong> : quando você entra em tela cheia, o placar impede que a tela do celular desligue. Chega de ficar tocando na tela só para mantê-la acesa.',
        '<strong>Modo tela cheia</strong> : esconde as abas do navegador e a barra de endereços para que o placar ocupe a tela inteira. Toque no botão de tela cheia uma vez e a ferramenta se expande.',
        '<strong>Offline primeiro</strong> : o placar inteiro funciona sem conexão com a internet após o primeiro carregamento. Sem anúncios, sem rastreadores, sem coleta de dados.',
        '<strong>Feedback satisfatório</strong> : cada toque dispara uma animação de pontuação, partículas flutuantes e uma vibração sutil em dispositivos compatíveis. O +3 ganha um efeito de explosão extra.',
        '<strong>Estado do jogo é salvo</strong> : recarregue a página, feche o navegador ou volte amanhã. As pontuações e nomes das equipes são armazenados localmente.',
      ],
    },
    {
      type: 'title',
      text: 'Placar de Basquete vs. Planilha de Papel',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uma planilha de papel funciona, mas requer uma caneta, uma superfície plana e alguém que consiga escrever e assistir ao jogo ao mesmo tempo. Um placar digital resolve todos os três problemas. Os botões são grandes o suficiente para tocar sem olhar. Os números são legíveis do outro lado da quadra. A pontuação nunca fica borrada, perdida ou apagada acidentalmente. E ao contrário do papel, este placar salva o estado do jogo, então você pode fechá-lo no intervalo e voltar depois.',
    },
  ],
  ui: {
    playerA: 'CASA',
    playerB: 'FORA',
    swapSides: 'Trocar Lados',
    reset: 'Resetar',
    resetConfirm: 'Resetar o jogo? Todos os pontos serão perdidos.',
    cancel: 'Cancelar',
    fullscreen: 'Tela Cheia',
    exitFullscreen: 'Sair da Tela Cheia',
    winnerLabel: 'VENCEDOR',
  },
};
