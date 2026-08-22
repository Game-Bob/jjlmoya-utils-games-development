import type {
  FAQPage,
  HowTo,
  SoftwareApplication,
  WithContext,
} from "schema-dts";
import type { ToolLocaleContent } from "../../../types";
import type { DamageFormulaLabUI } from "../ui";
import { bibliographyEntries } from "../bibliography";

const faq = [
  {
    question: "What does the damage formula calculator compare?",
    answer:
      "It runs two safe mathematical expressions against the same combat variables. You can compare damage curves, hit count breakpoints, time to kill, rounding, resistance order, and a two variable attack and defense heatmap without executing JavaScript.",
  },
  {
    question: "Which variables and functions can I use?",
    answer:
      "Available variables are attack, defense, level, power, resistance, flat, criticalChance, and criticalMultiplier. Safe functions are min, max, clamp, abs, sqrt, pow, floor, round, and ceil. Operators include addition, subtraction, multiplication, division, exponentiation, and parentheses.",
  },
  {
    question: "How is time to kill calculated?",
    answer:
      "Hits to kill is target health divided by rounded expected damage, rounded upward. Time to kill is the interval between the first and final hit, so the tool uses hits minus one divided by attacks per second. A one hit kill therefore has a time to kill of zero seconds.",
  },
  {
    question: "Why can resistance order change the result?",
    answer:
      "Applying a flat modifier before percentage resistance also reduces that flat amount. Applying resistance first leaves the later flat modifier untouched. The lab exposes both pipelines because engines and combat designs may intentionally choose different orders.",
  },
  {
    question: "Does a smoother curve mean the game is balanced?",
    answer:
      "No. A curve can reveal cliffs, zero damage zones, and breakpoints, but balance depends on goals, player choices, encounter context, feedback, and playtesting. The lab reports numerical behavior and never presents a universal balance verdict.",
  },
];

const howTo = [
  {
    name: "Choose two formulas",
    text: "Start from the linear, ratio, or level scaled presets, then edit Formula A and Formula B with the documented variables and safe functions.",
  },
  {
    name: "Set one combat state",
    text: "Enter attack, defense, level, power, resistance, flat adjustment, critical settings, target health, and attack cadence.",
  },
  {
    name: "Make engine rules explicit",
    text: "Choose how damage is rounded and whether resistance applies before or after the flat modifier.",
  },
  {
    name: "Read curves and breakpoints",
    text: "Compare the impact trajectory, attack sweep, defense heatmap, hit count, time to kill, and diagnostic warnings.",
  },
  {
    name: "Preserve the experiment",
    text: "Copy a shareable URL fragment or download the configuration, CSV samples, or chart image. All processing remains in the browser.",
  },
];

const softwareApplication: WithContext<SoftwareApplication> = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Damage Formula Lab with TTK Charts",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
};

const faqPage: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to compare game damage formulas and time to kill",
  step: howTo.map((step) => ({
    "@type": "HowToStep",
    name: step.name,
    text: step.text,
  })),
};

export const content: ToolLocaleContent<DamageFormulaLabUI> = {
  slug: "game-damage-formula-calculator-ttk",
  title: "Damage Formula Lab with TTK Charts",
  description:
    "Compare safe game damage formulas through live curves, attack and defense heatmaps, rounding breakpoints, criticals, hits to kill, and time to kill.",
  ui: {
    onboarding:
      "Write the damage rule you use now, place an alternative beside it, then tune one combat state. The proving ground shows where each formula lands and how it behaves beyond the comfortable middle.",
    localNote: "Private combat model. Formulas and files stay in this browser.",
    formulaDeck: "Formula chamber",
    formulaALabel: "Formula A current model",
    formulaBLabel: "Formula B challenger",
    formulaHint:
      "Variables: attack, defense, level, power, resistance, flat, criticalChance, criticalMultiplier",
    formulaFunctions:
      "Safe functions: min, max, clamp, abs, sqrt, pow, floor, round, ceil",
    presetLinear: "Linear guard",
    presetRatio: "Ratio armor",
    presetLevel: "Level scale",
    combatInputs: "Combat state",
    attackLabel: "Attack",
    defenseLabel: "Defense",
    levelLabel: "Level",
    powerLabel: "Power coefficient",
    resistanceLabel: "Resistance percent",
    flatLabel: "Flat modifier",
    criticalChanceLabel: "Critical chance percent",
    criticalMultiplierLabel: "Critical multiplier",
    healthLabel: "Target health",
    cadenceLabel: "Attacks per second",
    roundingLabel: "Damage rounding",
    roundingNone: "Keep decimals",
    roundingFloor: "Floor",
    roundingRound: "Nearest integer",
    roundingCeil: "Ceiling",
    orderLabel: "Modifier order",
    resistanceFirst: "Resistance then flat",
    flatFirst: "Flat then resistance",
    runLabel: "Live impact comparison",
    resultDamage: "Expected damage",
    resultHits: "Hits to defeat",
    resultTtk: "Time to defeat",
    resultDifference: "Damage gap",
    formulaAName: "Current",
    formulaBName: "Challenger",
    curveTitle: "Attack trajectory",
    curveCaption:
      "Attack sweeps from half to twice the current value while defense stays fixed.",
    heatmapTitle: "Pressure field",
    heatmapCaption:
      "Each tile shows Formula A expected damage across attack and defense combinations.",
    attackAxis: "Attack increases to the right",
    defenseAxis: "Defense increases downward",
    scenariosTitle: "Combat silhouettes",
    scenarioSkirmisher: "Skirmisher",
    scenarioGuardian: "Guardian",
    scenarioBoss: "Boss",
    scenarioCustom: "Current setup",
    diagnosticsTitle: "Breakpoint watch",
    statusBalanced:
      "No numerical hazard detected in this sweep. This is not a balance verdict.",
    exportTitle: "Carry the experiment",
    copyLink: "Copy share link",
    exportCsv: "Download CSV",
    exportJson: "Download JSON",
    importJson: "Import JSON",
    exportPng: "Download chart PNG",
    reset: "Reset model",
    privacyDisclosure:
      "The share link stores configuration in the URL fragment. It is not sent to a server by this tool.",
    limitationDisclosure:
      "Expected critical damage is an average, not a random combat simulation. Animation locks, reloads, misses, status effects, player decisions, and encounter rules are outside this model.",
    importError: "That file is not a compatible damage lab configuration.",
    copiedStatus: "Share link copied to the clipboard.",
  },
  seo: [
    {
      type: "title",
      level: 2,
      text: "Compare game damage formulas before they become combat rules",
    },
    {
      type: "paragraph",
      html: "A damage formula may feel reasonable at one attack and defense pair while collapsing at progression extremes. This lab evaluates two formulas against the same state, then repeats the calculation across a controlled sweep. It makes zero damage regions, sudden jumps, rounding thresholds, and hit count breakpoints visible before the rule is embedded in a game engine.",
    },
    {
      type: "title",
      level: 2,
      text: "Use a restricted expression language instead of executable code",
    },
    {
      type: "paragraph",
      html: "The formula field accepts named combat variables, arithmetic operators, parentheses, and a short list of mathematical functions. It does not evaluate JavaScript, access browser APIs, or call arbitrary functions. Division by zero and non finite output become visible errors instead of silently contaminating the chart and exports.",
    },
    {
      type: "table",
      headers: ["Output", "Calculation", "Design question"],
      rows: [
        [
          "Expected damage",
          "Base formula with expected critical factor, modifier order, resistance, and selected rounding",
          "Does the same rule behave sensibly for weak and strong combatants?",
        ],
        [
          "Hits to defeat",
          "Target health divided by rounded damage, rounded upward",
          "Where does one stat point remove an entire required hit?",
        ],
        [
          "Time to defeat",
          "Intervals between required hits divided by attacks per second",
          "Does cadence create the intended combat rhythm?",
        ],
        [
          "Pressure field",
          "Formula A sampled across attack and defense ranges",
          "Are there dead zones, cliffs, or unexpectedly flat regions?",
        ],
      ],
    },
    {
      type: "title",
      level: 2,
      text: "Separate arithmetic evidence from a balance verdict",
    },
    {
      type: "paragraph",
      html: "A smooth graph is not proof that combat is fair, expressive, or enjoyable. Numeric relationships only gain meaning beside health, cadence, progression, encounter roles, player options, and the intended experience. Use the lab to find questions worth playtesting, preserve reproducible configurations, and compare implementation rules without presenting one universal formula as correct.",
    },
    {
      type: "tip",
      title: "Inspect both damage and hit count",
      html: "A small damage change can look harmless on a curve but cross a health breakpoint and remove a full attack. Compare the damage line with hits to defeat and time to defeat whenever you adjust rounding, criticals, resistance, or attack cadence.",
    },
  ],
  faq,
  bibliographyTitle: "Damage modelling references",
  bibliography: bibliographyEntries,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
};
