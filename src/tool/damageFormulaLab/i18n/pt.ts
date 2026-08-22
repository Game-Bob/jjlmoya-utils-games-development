import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DamageFormulaLabUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'calculadora-formulas-dano-jogos-ttk';
const title = 'Laboratório de Fórmulas de Dano e Gráficos TTK';
const description = 'Compare fórmulas de dano para jogos em tempo real com curvas dinâmicas, mapas de calor de ataque e defesa, arredondamentos e tempo para derrotar (TTK).';

const faq = [
  {
    question: 'O que a calculadora de fórmulas de dano compara?',
    answer: 'Ela executa duas expressões matemáticas seguras sobre os mesmos atributos de combate. Permite comparar curvas de dano, limiares de golpes, tempo para derrotar (TTK), regras de arredondamento e ordem de resistências.',
  },
  {
    question: 'Quais variáveis e funções posso utilizar?',
    answer: 'As variáveis disponíveis são attack, defense, level, power, resistance, flat, criticalChance e criticalMultiplier. As funções seguras são min, max, clamp, abs, sqrt, pow, floor, round e ceil.',
  },
  {
    question: 'Como o tempo para derrotar (TTK) é calculado?',
    answer: 'Os golpes necessários são a vida do alvo dividida pelo dano esperado arredondado (arredondado para cima). O TTK mede o intervalo entre o primeiro e o último golpe: (golpes - 1) / ataques por segundo.',
  },
  {
    question: 'Por que a ordem das resistências altera o resultado?',
    answer: 'Aplicar um modificador plano antes da resistência percentual reduz também esse valor plano. Aplicar a resistência primeiro deixa o modificador plano posterior intacto.',
  },
  {
    question: 'Uma curva suave garante um jogo balanceado?',
    answer: 'Não. Uma curva revela limiares e zonas de dano zero, mas o balanceamento depende do contexto do jogo, papéis das unidades e testes de jogo.',
  },
];

const howTo = [
  { name: 'Escolher duas fórmulas', text: 'Comece a partir de um modelo predefinido (linear, proporção ou nível) ou digite suas próprias fórmulas A e B.' },
  { name: 'Ajustar os atributos de combate', text: 'Insira valores de ataque, defesa, nível, poder, resistência, modificador plano, críticos, vida e cadência.' },
  { name: 'Definir regras do motor', text: 'Escolha como o dano é arredondado e se a resistência se aplica antes ou depois do modificador plano.' },
  { name: 'Analisar curvas e limiares', text: 'Compare a trajetória do ataque, o mapa de calor da defesa, os golpes necessários e os avisos de diagnóstico.' },
  { name: 'Salvar o experimento', text: 'Copie um link de compartilhamento ou baixe a configuração em JSON, a tabela em CSV ou o gráfico em PNG.' },
];

const softwareApplication: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
};

const faqPage: WithContext<FAQPage> = {
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
  step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};

export const content: ToolLocaleContent<DamageFormulaLabUI> = {
  slug,
  title,
  description,
  ui: {
    onboarding: 'Insira a fórmula de dano atual, coloque uma alternativa ao lado e ajuste os atributos de combate.',
    localNote: 'Modelo privado. Fórmulas e dados permanecem neste navegador.',
    formulaDeck: 'Câmara de fórmulas',
    formulaALabel: 'Fórmula A (Modelo atual)',
    formulaBLabel: 'Fórmula B (Alternativa)',
    formulaHint: 'Variáveis: attack, defense, level, power, resistance, flat, criticalChance, criticalMultiplier',
    formulaFunctions: 'Funções seguras: min, max, clamp, abs, sqrt, pow, floor, round, ceil',
    presetLinear: 'Proteção linear',
    presetRatio: 'Armadura por proporção',
    presetLevel: 'Escalamento por nível',
    combatInputs: 'Atributos de combate',
    attackLabel: 'Ataque',
    defenseLabel: 'Defesa',
    levelLabel: 'Nível',
    powerLabel: 'Coeficiente de poder',
    resistanceLabel: 'Resistência (%)',
    flatLabel: 'Modificador plano',
    criticalChanceLabel: 'Chance de crítico (%)',
    criticalMultiplierLabel: 'Multiplicador de crítico',
    healthLabel: 'Vida do alvo',
    cadenceLabel: 'Ataques por segundo',
    roundingLabel: 'Arredondamento do dano',
    roundingNone: 'Manter decimais',
    roundingFloor: 'Arredondar para baixo (Floor)',
    roundingRound: 'Inteiro mais próximo',
    roundingCeil: 'Arredondar para cima (Ceil)',
    orderLabel: 'Ordem dos modificadores',
    resistanceFirst: 'Resistência depois plano',
    flatFirst: 'Plano depois resistência',
    runLabel: 'Comparação de impacto em tempo real',
    resultDamage: 'Dano esperado',
    resultHits: 'Golpes para derrotar',
    resultTtk: 'Tempo para derrotar (TTK)',
    resultDifference: 'Diferença de dano',
    formulaAName: 'Atual',
    formulaBName: 'Alternativa',
    curveTitle: 'Trajetória do ataque',
    curveCaption: 'O ataque varia da metade ao dobro do valor atual enquanto a defesa permanece fixa.',
    heatmapTitle: 'Mapa de calor de pressão',
    heatmapCaption: 'Mostra o dano esperado da Fórmula A em combinações de ataque e defesa.',
    attackAxis: 'O ataque aumenta para a direita',
    defenseAxis: 'A defesa aumenta para baixo',
    scenariosTitle: 'Perfis de combate',
    scenarioSkirmisher: 'Combatente',
    scenarioGuardian: 'Guardião',
    scenarioBoss: 'Chefe',
    scenarioCustom: 'Configuração atual',
    diagnosticsTitle: 'Verificação de limiares',
    statusBalanced: 'Nenhuma anomalia matemática detectada neste intervalo de teste.',
    exportTitle: 'Exportar experimento',
    copyLink: 'Copiar link',
    exportCsv: 'Baixar CSV',
    exportJson: 'Baixar JSON',
    importJson: 'Importar JSON',
    exportPng: 'Baixar PNG do gráfico',
    reset: 'Restaurar modelo',
    privacyDisclosure: 'O link de compartilhamento salva a configuração na URL sem enviar dados a servidores.',
    limitationDisclosure: 'O dano crítico esperado é uma média e não uma simulação aleatória.',
    importError: 'O arquivo selecionado não é uma configuração válida.',
    copiedStatus: 'Link copiado para a área de transferência.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Testar fórmulas de dano antes de integrar ao motor do jogo',
    },
    {
      type: 'paragraph',
      html: 'Uma fórmula de dano pode parecer correta em valores médios mas falhar nos extremos da progressão. Este laboratório permite identificar limiares e zonas de dano nulo antecipadamente.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Linguagem de expressão segura e restrita',
    },
    {
      type: 'paragraph',
      html: 'O campo aceita exclusivamente variáveis e funções matemáticas predefinidas sem executar código arbitrário.',
    },
    {
      type: 'table',
      headers: ['Métrica', 'Cálculo realizado', 'Questão de design'],
      rows: [
        ['Dano esperado', 'Fórmula base incluindo fator crítico e ordem de resistência', 'A regra responde de forma coerente em personagens fracos e fortes?'],
        ['Golpes para derrotar', 'Vida do alvo dividida pelo dano arredondado', 'Um único ponto de atributo elimina um golpe inteiro necessário?'],
        ['Tempo para derrotar (TTK)', 'Intervalo entre golpes dividido pela cadência de ataque', 'A cadência cria o ritmo de combate desejado?'],
        ['Mapa de calor', 'Amostragem da Fórmula A sobre ataque e defesa', 'Existem zonas mortas ou saltos inesperados?'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Separar a matemática das decisões de balanceamento',
    },
    {
      type: 'paragraph',
      html: 'Um gráfico fluido não garante um jogo divertido. Use este laboratório para identificar hipóteses a serem testadas com jogadores.',
    },
    {
      type: 'tip',
      title: 'Examine o dano e o número de golpes juntos',
      html: 'Uma pequena alteração no dano pode cruzar um limiar de vida e eliminar um golpe completo. Compare sempre o dano com o TTK.',
    },
  ],
  faq,
  bibliographyTitle: 'Referências de cálculo de dano em jogos',
  bibliography: bibliographyEntries,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
};
