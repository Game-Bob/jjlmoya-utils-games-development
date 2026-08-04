import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SwimCssCalculatorUI } from '../ui';

const slug = 'calculadora-css-natacao';
const title = 'Calculadora de Velocidade Critica de Natacao CSS';
const description = 'Calcule sua velocidade critica de natacao CSS ritmo limiar por 100m ou 100yd a partir de testes de 400m e 200m em piscina.';

const faqData = [
  {
    question: 'Com que frequencia se deve realizar o teste de CSS na natacao?',
    answer: 'Recomenda-se realizar o protocolo de teste de 400m e 200m a cada 4 a 6 semanas durante o ciclo de treino.',
  },
  {
    question: 'E possivel calcular o CSS em piscinas de yardas?',
    answer: 'Sim. A formula matematica de velocidade critica aplica-se exatamente da mesma forma em piscinas em yardas.',
  },
];

const howToData = [
  {
    name: 'Selecione a Unidade da Piscina',
    text: 'Escolha entre Metros (piscina de 25m ou 50m) ou Yardas (piscina de 25yd) no seletor superior.',
  },
  {
    name: 'Insira o Tempo do Teste de 400m',
    text: 'Insira os minutos e segundos registrados no seu teste de 400 metros em esforço máximo.',
  },
  {
    name: 'Insira o Tempo do Teste de 200m',
    text: 'Insira os minutos e segundos registrados no seu teste de 200 metros em esforço máximo.',
  },
  {
    name: 'Calcule e Analise os Tempos Parciais',
    text: 'Clique em Calcular para ver sua velocidade aeróbica e a matriz de tempos por série.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pt',
};

const ui: SwimCssCalculatorUI = {
  title: 'Calculadora de Velocidade Critica de Natacao CSS',
  subtitle: 'Calcule seu ritmo limiar aerobico por 100 metros e matriz de tempos parciais por zona.',
  unitLabel: 'Unidade da Piscina',
  unitMeters: 'Metros (Piscina de 25m / 50m)',
  unitYards: 'Yardas (Piscina de 25yd)',
  t400Label: 'Teste de 400m / 400yd',
  t200Label: 'Teste de 200m / 200yd',
  minutesLabel: 'Minutos',
  secondsLabel: 'Segundos',
  calculateButton: 'Calcular CSS e Tempos',
  resetButton: 'Redefinir Valores',
  cssResultTitle: 'Resultados de Velocidade Critica de Natacao',
  cssSpeedLabel: 'Velocidade Aerobica',
  cssPace100Label: 'Ritmo CSS por 100',
  lapPaceLabel: 'Objetivo por Piscina de 25m / 25yd',
  unitMeterPerSec: 'm/s',
  unitYardPerSec: 'yd/s',
  pace100mUnit: '/100m',
  pace100ydUnit: '/100yd',
  trainingZonesTitle: 'Matriz de Ritmos de Treino em Piscina',
  zoneHeader: 'Zona de Intensidade',
  pace100Header: 'Ritmo Alvo / 100',
  split50Header: 'Parcial 50',
  split100Header: 'Parcial 100',
  split200Header: 'Parcial 200',
  split400Header: 'Parcial 400',
  zoneAerobic: 'Resistencia Aerobica',
  zoneAerobicDesc: 'Para series longas aerobicas e aquecimento (~104% ritmo CSS)',
  zoneAerobicRest: 'Descanso: 10s - 15s por serie',
  zoneCss: 'Limiar CSS',
  zoneCssDesc: 'Ritmo alvo para series de limiar e ritmo de prova (~100% ritmo CSS)',
  zoneCssRest: 'Descanso: 15s - 20s por serie',
  zoneVo2Max: 'Velocidade VO2 Max',
  zoneVo2MaxDesc: 'Treino intervalado de alta intensidade (~96% ritmo CSS)',
  zoneVo2MaxRest: 'Descanso: 30s - 45s por serie',
  invalidNotice: 'O tempo do teste de 400m deve ser maior que o tempo de 200m.',
  copySplitsButton: 'Copiar Tempos Parciais',
  copiedNotice: 'Tempos parciais copiados',
  seo: {
    title: 'Calculadora de Velocidade Critica de Natacao CSS Tempos',
    description: 'Calcule sua velocidade critica de natacao CSS ritmo limiar por 100m ou 100yd a partir de testes de 400m e 200m em piscina.',
    h1: 'Calculadora de Velocidade Critica de Natacao e Matriz de Treino',
    intro: 'A Velocidade Crítica de Natação é a métrica padrão usada por nadadores e triatletas para estruturar séries na piscina com base no limiar aeróbico.',
    statsTitle: 'Indicadores Chave de Desempenho',
    stat1Label: 'Teste 1',
    stat1Value: '400m Esforco Maximo',
    stat2Label: 'Teste 2',
    stat2Value: '200m Esforco Maximo',
    stat3Label: 'Indicador Limiar',
    stat3Value: 'Ritmo Base 100m CSS',
    stat4Label: 'Aplicacao Pratica',
    stat4Value: 'Tempos no Cronometro',
    comparativeTitle: 'Metodo CSS vs Frequencia Cardiaca na Agua',
    comparativeItem1Title: 'Metodologia Velocidade Critica CSS',
    comparativeItem1Desc: 'Mede a velocidade real de deslocamento na água considerando viradas e eficiência de braçada.',
    comparativeItem2Title: 'Monitoramento Cardíaco Convencional',
    comparativeItem2Desc: 'Apresenta atrasos de leitura dentro da água e falha em refletir mudanças na técnica sob fadiga.',
    tableTitle: 'Detalhamento das Zonas de Intensidade e Descanso',
    tableCol1: 'Zona de Treino',
    tableCol2: 'Adaptacao Fisiologica',
    tableCol3: 'Distancias Recomendadas',
    tableRow1Col1: 'Resistencia Aerobica',
    tableRow1Col2: 'Capilarização e eficiência no metabolismo de gorduras.',
    tableRow1Col3: 'Repetições de 400m a 800m com descanso curto de 10 a 15 segundos.',
    tableRow2Col1: 'Limiar CSS',
    tableRow2Col2: 'Remoção de lactato e manutenção de potência aeróbica.',
    tableRow2Col3: 'Repetições de 100m a 300m com descanso de 15 a 20 segundos.',
    tableRow3Col1: 'Velocidade VO2 Max',
    tableRow3Col2: 'Consumo máximo de oxigênio e frequência de braçada.',
    tableRow3Col3: 'Intervalos de 50m a 100m com descanso mais amplo.',
    tipTitle: 'Dica de Treino para o Teste',
    tipText: 'Mantenha o ritmo constante no teste de 400m para evitar acúmulo precoce de lactato.',
    faqTitle: 'Perguntas Frequentes sobre Velocidade Critica de Natacao',
    faq1Q: 'Com que frequencia reavaliar o CSS?',
    faq1A: 'Recomenda-se a reavaliação a cada 4 a 6 semanas.',
    faq2Q: 'Pode ser usado em piscinas em yardas?',
    faq2A: 'Sim. A fórmula matemática é exatamente igual.',
    glossaryTitle: 'Glossario de Fisiologia da Natacao',
    term1Name: 'Velocidade Critica de Natacao',
    term1Def: 'A velocidade máxima teórica sustentável continuamente sem exaustão imediata.',
    term2Name: 'Tempo Parcial',
    term2Def: 'O tempo alvo na virada a ser verificado no cronômetro da piscina.',
  },
};

export const content: ToolLocaleContent<SwimCssCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
  seo: [
    {
      type: 'title',
      text: 'Principios Biomecanicos da Velocidade Critica na Natacao',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A Velocidade Crítica de Natação estabelece a inclinação da relação entre distância nadada e tempo. A subtração da prova de 200m da prova de 400m isola o limiar aeróbico.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '400m & 200m', label: 'Par de Teste Padrao' },
        { value: 'Base 100m', label: 'Padrao de Ritmo' },
        { value: '3 Zonas', label: 'Matriz Intensidade' },
        { value: '4 Parciais', label: 'Tempos no Virada' },
      ],
    },
    {
      type: 'title',
      text: 'Ritmo CSS vs Monitoramento de Frequencia Cardiaca',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Ritmo Direto CSS',
          description: 'Mede a velocidade real de deslocamento incluindo viradas e deslize aquático.',
        },
        {
          title: 'Sensores Cardíacos na Agua',
          description: 'Sofrem atrasos de leitura e instabilidade devido à temperatura e turbulência.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Tabela de Zonas de Intensidade e Tempos de Descanso',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Nome da Zona', 'Ritmo Relativo ao CSS', 'Objetivo Fisiológico', 'Descanso Recomendado'],
      rows: [
        ['Resistencia Aerobica', '104% do tempo CSS', 'Eficiência metabólica aeróbica', '10 a 15 segundos'],
        ['Limiar CSS', '100% do tempo CSS', 'Tolerância ao lactato e ritmo de prova', '15 a 20 segundos'],
        ['Velocidade VO2 Max', '96% do tempo CSS', 'Potência aeróbica máxima', '30 a 45 segundos'],
      ],
    },
    {
      type: 'title',
      text: 'Estrategia de Execucao de Series em Piscina',
      level: 2,
    },
    {
      type: 'tip',
      title: 'Dica para Manter o Ritmo Alvo',
      html: 'Mantenha rigorosamente o tempo parcial a cada 50 metros. Sair 2 segundos mais rápido provoca queda brusca no final da série.',
    },
  ],
  ui,
};
