import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FootballScoreKeeperUI } from '../ui';

const slug = 'marcador-futebol';
const title = 'Marcador de Futebol Online Grátis: Contador de Gols ao Vivo';
const description =
  'Acompanhe o placar dos seus jogos de futebol online grátis. Contador de gols simples para partidas, amistosos e torneios. Sem cadastro.';

const faqData = [
  {
    question: 'Como usar este marcador de futebol?',
    answer:
      'Toque no botão + de cada time para adicionar um gol. O placar é atualizado na hora com uma animação de comemoração. Use o botão de menos para desfazer um erro. Os nomes dos times são editáveis: é só tocar no nome padrão e digitar o seu. Tudo é salvo automaticamente no seu navegador para que você possa fechar a página e voltar depois.',
  },
  {
    question: 'Posso usar no celular durante uma partida?',
    answer:
      'Sim. A interface foi projetada para uso mobile com botões grandes que você pode tocar sem olhar. O modo tela cheia esconde o navegador e mantém a tela do celular ligada durante toda a partida. O layout vertical permite alcançar as duas seções facilmente com o polegar.',
  },
  {
    question: 'Os dados da partida são salvos?',
    answer:
      'Sim. O placar atual e os nomes dos times são salvos automaticamente no seu navegador. Você pode recarregar a página, fechar o navegador ou voltar no dia seguinte e seus dados ainda estarão lá.',
  },
  {
    question: 'Posso acompanhar a prorrogação ou os pênaltis?',
    answer:
      'Sim. O marcador funciona do mesmo jeito para qualquer formato de partida. É só continuar usando os botões + durante a prorrogação ou os pênaltis. Quando a partida terminar, toque em Finalizar Partida para ver o resultado final.',
  },
  {
    question: 'É realmente grátis, sem limites ocultos?',
    answer:
      'Sim, completamente grátis sem restrições. Sem planos premium, sem limites de participantes, sem marcas d\'água, sem anúncios. Tudo funciona offline no seu navegador. Não precisa de conta nem email.',
  },
];

const howToData = [
  {
    name: 'Nomeie os times',
    text: 'Toque no nome padrão do time e digite o seu. O novo nome é salvo automaticamente no seu navegador.',
  },
  {
    name: 'Adicione um gol',
    text: 'Toque no grande botão circular + do time que marcou. O número do placar sobe com uma animação de comemoração.',
  },
  {
    name: 'Remova um gol',
    text: 'Toque no botão de menos abaixo do + se você adicionou um gol por engano. O placar se ajusta na hora.',
  },
  {
    name: 'Finalize a partida',
    text: 'Toque em Finalizar Partida na parte inferior para ver o vencedor anunciado com um troféu e confetes. Dispense a comemoração tocando fora.',
  },
  {
    name: 'Reinicie a partida',
    text: 'Toque no ícone de reiniciar na barra superior e confirme para limpar os dois placares. Os nomes dos times são mantidos para que você não precise redigitá-los.',
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

export const content: ToolLocaleContent<FootballScoreKeeperUI> = {
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
      text: 'Marcador de Futebol Online Grátis: Placar ao Vivo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Manter o placar durante uma partida de futebol deveria ser a parte mais fácil do jogo. Este marcador de futebol online permite registrar gols de dois times em tempo real com um simples toque. Sem cadastro, sem downloads, sem menus complicados. Abra a página, nomeie seus times e comece a contar os gols. Seja você um treinador de futebol de base à beira do campo, organizando uma partida amistosa entre amigos ou acompanhando o placar de uma partida de liga local, esta ferramenta foi feita para ser rápida e simples. Cada time tem sua própria seção com um código de cores distinto, um placar grande e um botão +1 dedicado. Toque para adicionar um gol, toque no botão de menos para desfazer um erro. Todo o histórico da partida fica visível na tela para que você saiba exatamente o que aconteceu e quando.',
    },
    {
      type: 'title',
      text: 'Por que você precisa de um marcador de futebol dedicado em vez de um contador genérico',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Um contador numérico genérico serve para contar qualquer coisa, mas um marcador de futebol dedicado entende como o jogo funciona. Ele separa visualmente os dois times com cores distintas para que você nunca toque no lado errado. O botão de gol é grande e satisfatório de apertar, mesmo quando você está segurando o celular com uma mão à beira do campo. O botão de menos permite corrigir erros instantaneamente sem ter que reiniciar a partida inteira. E quando o jogo acaba, o botão Finalizar Partida ativa uma tela de comemoração que mostra o resultado final com confetes e um troféu. Contadores genéricos não conseguem fazer nada disso. Eles tratam todos os pontos da mesma forma. O futebol não é genérico, e seu marcador também não deveria ser.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Partidas Amistosas e Treinos',
          description: 'Registro rápido de gols para jogos treino e sessões de treinamento. Reinicie entre partidas com um toque. Funciona offline para usar em qualquer campo.',
          icon: 'mdi:soccer',
          points: ['Registro de gols com um toque', 'Funciona completamente offline', 'Sem conta ou email', 'Reinício instantâneo entre partidas'],
        },
        {
          title: 'Ligas Locais e Torneios',
          description: 'Mantenha um placar limpo para partidas de liga onde cada gol conta. Placar grande legível do outro lado do campo. As cores dos times ajudam a evitar confusão.',
          icon: 'mdi:trophy-outline',
          points: ['Seções de times coloridas', 'Nomes de times editáveis', 'Finalizar partida com comemoração', 'Placar grande legível à distância'],
        },
        {
          title: 'Futebol Juvenil e Escolar',
          description: 'Simples o suficiente para os jovens jogadores operarem sozinhos. Os treinadores podem registrar gols enquanto focam no jogo. O modo tela cheia mantém a tela ligada.',
          icon: 'mdi:school',
          points: ['Fácil para crianças usarem', 'Tela cheia mantém a tela ligada', 'Nomes de times editáveis', 'Sem funções que distraiam'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Como acompanhar uma partida de futebol ao vivo com este marcador online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Usar este placar de futebol é muito simples. Quando você abre a página, vê duas seções de time. O time da casa aparece em vermelho e o visitante em azul. Cada seção tem um grande número de placar no centro, um campo de nome do time no topo e dois botões abaixo. Toque no grande botão circular + para adicionar um gol para aquele time. O número do placar anima com um efeito de comemoração cada vez que um gol é registrado. Oito animações de gol diferentes se alternam aleatoriamente, para que cada gol seja único. Partículas flutuantes surgem da área do botão com textos como GOAL e SIUUU. A tela pisca brevemente para marcar o momento. Se você errar, toque no pequeno botão de menos para remover o último gol. Os campos de nome do time são editáveis. Toque no nome padrão para digitar seu próprio nome. Os nomes são salvos automaticamente no seu navegador junto com o placar atual. Isso significa que você pode fechar a página, voltar mais tarde e seus dados da partida ainda estarão lá. No final da partida, toque em Finalizar Partida para ver o vencedor anunciado com uma animação de troféu e confetes caindo. Você pode dispensar a comemoração e manter o placar visível.',
    },
    {
      type: 'title',
      text: 'Marcador de futebol otimizado para mobile, projetado para a beira do campo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Esta ferramenta foi projetada primeiro para dispositivos móveis. O layout vertical coloca um time acima do outro para que você alcance ambas as seções confortavelmente com o polegar enquanto segura o celular. Os botões são grandes o suficiente para serem tocados sem olhar para a tela. O modo tela cheia remove as barras do navegador e mantém a tela do celular ligada durante toda a partida. Chega de ficar tocando na tela a cada minuto para evitar que ela apague. A interface funciona tanto na orientação paisagem quanto retrato. Também funciona offline após o primeiro carregamento, então você não precisa de conexão com a internet no campo. Não há anúncios, rastreadores ou coleta de dados. Seus dados de partida nunca saem do seu dispositivo.',
    },
    {
      type: 'title',
      text: 'O que torna este marcador de futebol especial',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Times coloridos</strong> vermelho para a casa e azul para o visitante. Você sabe qual é qual instantaneamente sem ler.',
        '<strong>Animações de comemoração</strong> cada gol ativa uma comemoração aleatória. Oito animações diferentes: boom, rise, glow, ball bounce e mais.',
        '<strong>Partículas flutuantes</strong> cada gol gera texto flutuante com mensagens como GOAL e SIUUU. Cada comemoração é única.',
        '<strong>Cerimônia de Finalizar Partida</strong> toque em Finalizar Partida para ativar o anúncio do vencedor com animação de troféu, nome do time e chuva de confetes.',
        '<strong>Nomes de times editáveis</strong> toque no campo de nome para renomear seus times. Os nomes são salvos localmente no seu navegador.',
        '<strong>Bloqueio de tela</strong> o modo tela cheia impede que a tela do celular desligue durante a partida.',
        '<strong>Modo tela cheia</strong> esconde a interface do navegador para que o placar ocupe a tela inteira sem distrações.',
        '<strong>Offline</strong> funciona sem internet após a primeira visita. Sem anúncios, sem rastreamento, sem coleta de dados.',
        '<strong>Persistência instantânea</strong> placares e nomes são salvos automaticamente. Recarregue a página ou feche o navegador e seus dados da partida voltam.',
        '<strong>Reinício com confirmação</strong> o botão de reiniciar pede confirmação antes de limpar os placares. Evita a perda acidental de dados.',
      ],
    },
    {
      type: 'title',
      text: 'Marcador de Futebol vs Planilha de Papel: por que o digital é melhor',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'As planilhas de papel para o placar são usadas há décadas, mas têm problemas reais. Você precisa de uma caneta que funcione, uma superfície plana para escrever e atenção suficiente para anotar enquanto assiste ao jogo. Uma única distração pode fazer você perder um gol ou escrever o número errado. Depois de escrito no papel, o placar não pode ser corrigido de forma limpa. Números riscados dificultam a leitura da folha. O papel pode molhar com a chuva, voar com o vento ou se perder entre as partidas. Um marcador de futebol digital resolve todos esses problemas. Os botões são grandes o suficiente para serem apertados pelo tato sem olhar. Os números são exibidos claramente em uma fonte grande e legível de qualquer ponto do campo. Os erros são corrigidos instantaneamente com o botão de menos. O placar é salvo automaticamente e nunca se perde. E diferente do papel, o marcador adiciona animações de comemoração e feedback visual que tornam manter o placar mais divertido. Seja você um treinador de time juvenil, organizando uma liga de domingo ou apenas jogando com amigos, este marcador de futebol online grátis oferece tudo que você precisa e nada que não precisa.',
    },
    {
      type: 'title',
      text: 'Marcador de futebol gratuito para todos os níveis do jogo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Esta ferramenta é completamente gratuita, sem limitações. Não há níveis premium, funções escondidas atrás de paywall ou marcas d\'água na tela. Funciona para qualquer nível de futebol, desde partidas informais entre amigos até jogos de liga organizados. A interface simples permite que qualquer um use, desde jovens jogadores aprendendo o jogo até treinadores experientes gerenciando um torneio. Nenhum registro é necessário. Nenhum email. Nenhum dado pessoal coletado. Abra a página, comece a partida, toque os gols. É só isso.',
    },
  ],
  ui: {
    playerA: 'Casa',
    playerB: 'Visitante',
    winnerLabel: 'CAMPEÃO',
    finishMatch: 'Finalizar Partida',
    reset: 'Reiniciar',
    resetConfirm: 'Reiniciar a partida? Todos os dados serão perdidos.',
    cancel: 'Cancelar',
    fullscreen: 'Tela Cheia',
    exitFullscreen: 'Sair da Tela Cheia',
  },
};
