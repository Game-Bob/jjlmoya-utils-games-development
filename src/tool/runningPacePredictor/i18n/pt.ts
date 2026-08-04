import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RunningPacePredictorUI } from '../ui';

const slug = 'calculadora-ritmo-corrida';
const title = 'Calculadora de Ritmo de Corrida e Previsão de Provas';
const description =
  'Calcule o seu ritmo de corrida, preveja tempos de prova para 5k, 10k, meia maratona e maratona com a fórmula de Riegel e gere zonas de treino.';

const faqData = [
  {
    question: 'Qual a precisão da fórmula de Peter Riegel para a maratona?',
    answer:
      'A fórmula de Riegel T2 = T1 * (D2 / D1)^1.06 oferece alta precisão quando o atleta tem boa base aeróbica. Na maratona, o resultado depende do volume semanal e dos treinos longos.',
  },
  {
    question: 'Como converter min/km para min/milha?',
    answer:
      'Multiplique o total de segundos por quilómetro por 1,609344. Um ritmo de 5:00 min/km equivale a 8:03 min/milha.',
  },
  {
    question: 'Por que as previsões parecem por vezes exigentes demais na maratona?',
    answer:
      'O expoente 1,06 pressupõe resistência ideal à fadiga. Sem volume suficiente, o desgaste muscular e a depleção de glicogénio tornam o tempo real mais lento.',
  },
  {
    question: 'Como estruturar as zonas de ritmo para treino intervalado e ritmo de prova?',
    answer:
      'Os treinos de tiro (VMA) devem ser feitos entre 95% e 105% do ritmo de 5k, o ritmo de limiar entre 110% e 120%, e as rodagens leves entre 125% e 145%.',
  },
];

const howToData = [
  {
    name: 'Escolha o Sistema de Unidades',
    text: 'Selecione entre o sistema métrico (km, min/km) ou imperial (milhas, min/milha).',
  },
  {
    name: 'Selecione a Distância',
    text: 'Clique num chip de distância (5K, 10K, Meia Maratona, 42K) ou insira a distância personalizada.',
  },
  {
    name: 'Ajuste o Tempo de Referência',
    text: 'Utilize os botões (+1m, +5m, -1m, -5m) ou insira o tempo de uma prova recente.',
  },
  {
    name: 'Analise Previsões e Zonas',
    text: 'Consulte o ritmo médio, os tempos previstos pela fórmula de Riegel e as zonas de treino.',
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

export const content: ToolLocaleContent<RunningPacePredictorUI> = {
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
      text: 'Princípios Biomecânicos do Cálculo de Pace de Corrida',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O cálculo de pace e a previsão de marcas requerem o entendimento dos sistemas energéticos metabólicos. O desempenho em corridas de longa distância depende do VO2 máx, do limiar de lactato e da economia de corrida.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1.06', label: 'Expoente Riegel' },
        { value: '4 Principais', label: 'Distâncias Oficiais' },
        { value: '3 Vias', label: 'Cálculo Reativo' },
        { value: '3 Níveis', label: 'Zonas Alvo' },
      ],
    },
    {
      type: 'title',
      text: 'A Fórmula de Riegel e a Modelagem de Performance',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Criada pelo engenheiro Peter Riegel em 1977, a fórmula T2 = T1 * (D2 / D1)^1.06 modela a perda de velocidade com o aumento da distância. O expoente 1,06 reflete a queda aeróbica média em atletas treinados.',
    },
    {
      type: 'title',
      text: 'Comparativo Sistema Métrico vs Imperial',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Sistema Métrico (min/km)',
          description: 'Padrão internacional. Permite um controlo preciso dos parciais a cada 1000 metros.',
        },
        {
          title: 'Sistema Imperial (min/milha)',
          description: 'Padrão nos EUA e Reino Unido. Uma milha equivale a 1,609344 quilómetros.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Distâncias Oficiais de Provas de Estrada',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Prova', 'Distância Métrica (km)', 'Distância Imperial (mi)', 'Via Energética Principal'],
      rows: [
        ['5K Estrada', '5.00 km', '3.11 mi', '90% Aeróbica / 10% Anaeróbica'],
        ['10K Estrada', '10.00 km', '6.21 mi', '95% Aeróbica / 5% Anaeróbica'],
        ['Meia Maratona', '21.0975 km', '13.11 mi', '99% Aeróbica (Limiar de Lactato)'],
        ['Maratona', '42.195 km', '26.22 mi', '100% Aeróbica (Limitado por Glicogénio)'],
      ],
    },
    {
      type: 'title',
      text: 'Estratégia de Prova e Negative Split',
      level: 2,
    },
    {
      type: 'tip',
      title: 'Eficácia do Negative Split',
      html: 'Correr a segunda metade da prova ligeiramente mais rápido preserva as reservas de glicogénio e evita a acidose precoce.',
    },
  ],
  ui: {
    title: 'Calculadora de Ritmo de Corrida e Previsão de Provas',
    subtitle: 'Calcule o seu ritmo e preveja tempos de prova com a fórmula de Riegel',
    paceCalculatorTitle: 'Calculadora de Pace, Distância e Tempo',
    racePredictorTitle: 'Previsão de Tempos de Prova',
    trainingZonesTitle: 'Zonas Alvo de Pace para Treino',
    distanceLabel: 'Distância',
    timeLabel: 'Tempo',
    paceLabel: 'Pace Médio',
    hoursLabel: 'Horas',
    minutesLabel: 'Minutos',
    secondsLabel: 'Segundos',
    unitKm: 'Quilómetros',
    unitMiles: 'Milhas',
    paceUnitKm: 'min/km',
    paceUnitMiles: 'min/milha',
    presetsTitle: 'Distâncias Rápidas',
    calculateButton: 'Calcular',
    resetButton: 'Reiniciar',
    recentRaceTitle: 'Tempo de Referência Recente',
    predictedTimesTitle: 'Tempos Previstos nas Provas',
    distanceHeader: 'Distância',
    estimatedTimeHeader: 'Tempo Estimado',
    targetPaceHeader: 'Pace Alvo',
    trainingZoneHeader: 'Zona de Treino',
    paceRangeHeader: 'Intervalo de Pace',
    zoneEasy: 'Rodagem Leve & Recuperação',
    zoneEasyDesc: 'Construção da base aeróbica e regeneração',
    zoneTempo: 'Ritmo Limiar & Fartlek',
    zoneTempoDesc: 'Melhoria do limiar anaeróbico',
    zoneIntervals: 'Treino de Tiros (VMA)',
    zoneIntervalsDesc: 'Desenvolvimento do VO2 máx e resistência de velocidade',
    riegelExplanation: 'As previsões utilizam a fórmula de Riegel T2 = T1 * (D2 / D1)^1.06.',
    seo: {
      title: 'Calculadora de Ritmo de Corrida e Previsão de Provas',
      description: 'Calcule o ritmo de corrida e preveja tempos para 5k, 10k, meia maratona e maratona.',
      h1: 'Calculadora de Ritmo de Corrida e Previsão de Provas',
      intro: 'O cálculo preciso de ritmo e a previsão de tempos são ferramentas vitais para corredores de fundo.',
      statsTitle: 'Métricas de Desempenho',
      stat1Label: 'Expoente Riegel',
      stat1Value: '1.06',
      stat2Label: 'Distâncias Principais',
      stat2Value: '4 Provas',
      stat3Label: 'Cálculo de Pace',
      stat3Value: '3 Vias',
      stat4Label: 'Zonas de Treino',
      stat4Value: '3 Níveis',
      comparativeTitle: 'Comparativo de Unidades',
      comparativeItem1Title: 'Sistema Métrico (min/km)',
      comparativeItem1Desc: 'Padrão internacional.',
      comparativeItem2Title: 'Sistema Imperial (min/milha)',
      comparativeItem2Desc: 'Padrão nos EUA e Reino Unido.',
      tableTitle: 'Visão Geral das Distâncias',
      tableCol1: 'Prova',
      tableCol2: 'Quilómetros',
      tableCol3: 'Milhas',
      tableRow1Col1: 'Prova 5K',
      tableRow1Col2: '5.00 km',
      tableRow1Col3: '3.11 mi',
      tableRow2Col1: 'Prova 10K',
      tableRow2Col2: '10.00 km',
      tableRow2Col3: '6.21 mi',
      tableRow3Col1: 'Meia Maratona',
      tableRow3Col2: '21.10 km',
      tableRow3Col3: '13.11 mi',
      tipTitle: 'Estratégia de Ritmo',
      tipText: 'O negative split otimiza o consumo metabólico ao longo da corrida.',
      faqTitle: 'Perguntas Frequentes',
      faq1Q: 'Qual a precisão da fórmula de Riegel?',
      faq1A: 'Exige um treino aeróbico adequado.',
      faq2Q: 'Diferença entre min/km e min/milha?',
      faq2A: 'Min/km indica minutos por quilómetro.',
      glossaryTitle: 'Glossário de Corrida',
      term1Name: 'Fórmula de Riegel',
      term1Def: 'Fórmula matemática de previsão de marcas criada por Peter Riegel.',
      term2Name: 'Limiar de Lactato',
      term2Def: 'Intensidade em que o lactato se acumula rapidamente.',
    },
  },
};
