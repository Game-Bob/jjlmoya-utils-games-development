import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReactionTesterUI } from '../ui';

const slug = 'teste-de-reacao';
const title = 'Teste de Velocidade de Reação (Reflexos): Benchmark Online';
const description = 'Meça seus reflexos em milissegundos com nosso teste de reação profissional. Compete por patentes de "Tartaruga" até "Ciberatleta" e analise seu desempenho.';

const ui: ReactionTesterUI = {
  title: 'Teste de Reação',
  subtitle: 'Meça sua velocidade de reação em milissegundos. Média de 5 tentativas.',
  startBtn: 'Clique para começar',
  goTitle: 'VÁ!',
  goSubtitle: 'CLIQUE AGORA!',
  earlyTitle: 'Cedo demais!',
  earlySubtitle: 'Aguarde o verde.',
  earlyRetry: 'Clique para tentar novamente',
  promptNext: 'Clique para próxima tentativa',
  promptFinal: 'Ver Resultados Finais',
  avgLabel: 'Média final',
  copyBtn: 'Copiar',
  tweetBtn: 'Tweet',
  retryBtn: 'Tentar novamente',
  inputMouse: 'Mouse',
  inputTouch: 'Toque',
  inputSpace: 'Espaço',
  historyTitle: 'Histórico Local',
  historyBest: 'Top 5 Melhores',
  historyWorst: 'Top 5 Piores',
  historyEmpty: 'Jogue para registrar seu primeiro placar',
  copySuccess: 'Copiado!',
  shareText: 'Marquei {ms}ms no Teste de Reação!\nPatente: {rank}\n\nVocê consegue me vencer?\n{url}',
  rankCiberatleta: 'Ciberatleta',
  rankTigre: 'Tigre',
  rankHumano: 'Humano',
  rankTortuga: 'Tartaruga',
  rankDormido: 'Dormindo',
  f150: 'VOCÊ É UM ROBÔ?!',
  f180: 'INCRÍVEL!',
  f210: 'Muito rápido!',
  f250: 'Boa reação',
  f300: 'Nada mal...',
  f400: 'Um pouco lento...',
  f600: 'Você adormecu',
  fSlow: 'Acorde...',
  wp0t: 'ESPERE...', wp0s: 'Prenda a respiração...',
  wp1t: 'FIQUE QUIETO...', wp1s: 'Não pisque agora',
  wp2t: 'PRONTO...', wp2s: 'Dedos prontos...',
  wp3t: 'SEGURE...', wp3s: 'Paciência, jovem gafanhoto',
  wp4t: 'FOCO...', wp4s: 'Já vem aí...',
};

const faqData = [
  { question: 'Qual é o tempo de reação humano médio?', answer: 'O tempo de reação humano médio a um estímulo visual é aproximadamente 250 a 270 milissegundos. Atletas de alto desempenho e jogadores profissionais geralmente ficam abaixo de 200 ms.' },
  { question: 'Como posso melhorar meus reflexos?', answer: 'A chave é prática consistente e descanso. Jogar videogames de ação (FPS), praticar esportes rápidos como tênis de mesa e se manter bem hidratado ajuda a manter o sistema nervoso alerta.' },
  { question: 'A tela afeta meu resultado?', answer: 'Sim. Existe algo chamado \"latência de entrada\". Telas com baixa taxa de atualização (60Hz) ou mouses wireless antigos podem adicionar 15 a 50 ms ao seu tempo de reação real.' },
  { question: 'Em que idade começamos a perder reflexos?', answer: 'Fisiologicamente, os reflexos humanos atingem o pico entre 20 e 24 anos. Após isso, há um declínio muito lento (aproximadamente 2-6 ms por década) se não for treinado.' },
];

const howTo = [
  { name: 'Espere o vermelho', text: 'Clique na área de início e espere pacientemente a cor da tela mudar.' },
  { name: 'Reaja ao verde', text: 'Assim que vir verde, clique ou toque na tela o mais rápido possível.' },
  { name: 'Veja seu resultado', text: 'O sistema calculará a diferença exata em milissegundos entre a mudança de cor e seu toque.' },
  { name: 'Analise sua patente', text: 'Repita o teste 5 vezes para obter uma média confiável e descubra se você é uma "Tartaruga" ou um "Ciberatleta".' },
];

const seo = [
  { type: 'title' as const, text: 'Como Este Teste de Reação Funciona?', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: 'Esta ferramenta mede seu <strong>tempo de reação visual</strong> com precisão cirúrgica. Calculamos o intervalo exato desde quando a tela acende até quando o sinal viaja de seus olhos para seu cérebro e depois para seus dedos. O teste requer <strong>5 tentativas consecutivas</strong> para calcular sua média real, eliminando o fator sorte.',
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Média de 5 tentativas:</strong> Eliminamos o fator "sorte" exigindo consistência. Um único clique de sorte não o torna um Ciberatleta.',
      '<strong>Sistema Anti-Trapaça:</strong> Tempos de espera aleatórios (1,5s - 4,5s) e detecção de cliques antecipados para prevenir previsão.',
      '<strong>Ciência real:</strong> Processamento cerebral ~180-200 ms + resposta motora +20-40 ms = seu tempo de reação total.',
    ],
  },
  { type: 'title' as const, text: 'Tabela de Ranking Mundial', level: 2 as const },
  {
    type: 'table' as const,
    headers: ['Tempo', 'Patente', 'Descrição'],
    rows: [
      ['&lt; 180 ms', 'Ciberatleta', 'Nível sobre-humano típico de profissionais de esports ou pilotos de combate.'],
      ['180 - 230 ms', 'Tigre', 'Reflexos aguçados. Você provavelmente é ótimo em jogos de tiro.'],
      ['230 - 280 ms', 'Humano', 'A média saudável. Você está acordado e funcionando adequadamente.'],
      ['280 - 350 ms', 'Tartaruga', 'Abaixo da média. Descanse mais ou treine mais.'],
      ['&gt; 350 ms', 'Dormindo', 'Possível fadiga, sonolência ou hardware lento (latência de entrada).'],
    ],
  },
  { type: 'title' as const, text: 'Por Que Você É Lento? Culpando o Hardware', level: 2 as const },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: 'Monitor (Hz)',
        description: 'Um monitor 60Hz leva cerca de 16 ms para desenhar um quadro. Um 144Hz leva apenas 7 ms. Essa diferença de 10 ms conta em sua pontuação final.',
        icon: 'mdi:monitor',
        points: ['60Hz = ~16ms por quadro', '144Hz = ~7ms por quadro', 'Diferença visível no teste'],
      },
      {
        title: 'Mouse Wireless',
        description: 'Mouses Bluetooth baratos têm alta latência. Para este teste, use um cabo ou tecnologia wireless 2,4GHz de baixa latência.',
        icon: 'mdi:mouse-variant',
        points: ['Bluetooth barato: +15-50ms', '2.4GHz gaming: <1ms extra', 'Cabo USB: referência'],
      },
      {
        title: 'Navegador',
        description: 'Extensões que bloqueiam anúncios ou scripts pesados podem causar entrecortes. Tente o modo incógnito para seu recorde real.',
        icon: 'mdi:web',
        points: ['Feche extensões pesadas', 'Incógnito = mais limpo', 'Chrome/Firefox recomendado'],
      },
    ],
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'SportsApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  },
];

export const content: ToolLocaleContent<ReactionTesterUI> = { slug, title, description, ui, seo, faqTitle: 'Perguntas Frequentes', faq: faqData, bibliography: [], howTo, schemas };
