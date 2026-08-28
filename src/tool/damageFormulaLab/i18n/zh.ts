import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DamageFormulaLabUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'game-damage-formula-calculator-ttk';
const title = '游戏伤害公式与 TTK 击杀时间实验室';
const description = '在安全环境下对比游戏伤害公式，通过实时曲线、攻防热力图、舍入断点、暴击收益及击杀所需时间 (TTK) 进行数值平衡分析。';

const faq = [
  {
    question: '伤害公式计算器主要对比哪些数据？',
    answer: '它在同一套战斗变量下安全运行两条数学公式，帮助您对比伤害曲线、击杀所需攻击次数、击杀时间 (TTK)、舍入规则、减伤顺序及攻防热力图，全过程无需执行 JavaScript。',
  },
  {
    question: '支持哪些变量与数学函数？',
    answer: '支持的变量有 attack, defense, level, power, resistance, flat, criticalChance, criticalMultiplier。安全的函数包括 min, max, clamp, abs, sqrt, pow, floor, round, ceil，同时支持加减乘除与括号。',
  },
  {
    question: '击杀时间 (TTK) 是如何计算的？',
    answer: '击杀所需次数为目标血量除以舍入后的期望伤害（向上取整）。TTK 计算的是从首次攻击到致死攻击的时间间隔，即 (击杀次数 - 1) / 每秒攻击次数。若一击必杀则 TTK 为 0 秒。',
  },
  {
    question: '为什么减伤顺序会影响计算结果？',
    answer: '先应用固定减伤再应用百分比抗性，会使固定减伤数值同样受到百分比衰减；而先应用百分比抗性，则后续的固定减伤保持原值。本工具支持两种计算顺序以匹配不同引擎的物理规则。',
  },
  {
    question: '平滑的伤害曲线是否意味着游戏数值绝对平衡？',
    answer: '并非如此。曲线能揭示零伤害死区和陡峭断点，但平衡性取决于玩法目标、角色定位、玩家选择及实机测试。本工具仅提供数值行为分析，不作绝对判决。',
  },
];

const howTo = [
  { name: '选择两条公式', text: '从线性、比例或等级缩放预设开始，或自定义输入公式 A 与公式 B。' },
  { name: '设定战斗状态', text: '输入攻击力、防御力、等级、系数、抗性百分比、固定修正、暴击参数、目标血量及攻击频率。' },
  { name: '指定引擎规则', text: '选择伤害舍入方式，并指定百分比抗性与固定修正值的先后计算顺序。' },
  { name: '分析曲线与断点', text: '对比伤害推移曲线、防御热力图、击杀次数、TTK 及诊断警告。' },
  { name: '保存实验数据', text: '复制分享链接，或导出 JSON 配置文件、CSV 数据表及 PNG 曲线图。' },
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
    onboarding: '输入您现有的伤害规则，在其旁放置对比公式，调整战斗状态以观察数值在极端情况下的表现。',
    localNote: '私密战斗模型。公式与数据完全在本地浏览器内处理。',
    formulaDeck: '公式实验室 Chamber',
    formulaALabel: '公式 A (当前模型)',
    formulaBLabel: '公式 B (对比模型)',
    formulaHint: '支持变量: attack, defense, level, power, resistance, flat, criticalChance, criticalMultiplier',
    formulaFunctions: '安全函数: min, max, clamp, abs, sqrt, pow, floor, round, ceil',
    presetLinear: '线性减伤',
    presetRatio: '比例护甲',
    presetLevel: '等级缩放',
    combatInputs: '战斗状态参数',
    attackLabel: '攻击力 (Attack)',
    defenseLabel: '防御力 (Defense)',
    levelLabel: '等级 (Level)',
    powerLabel: '技能威力系数',
    resistanceLabel: '抗性百分比 (%)',
    flatLabel: '固定加减修正值',
    criticalChanceLabel: '暴击率 (%)',
    criticalMultiplierLabel: '暴击伤害倍率',
    healthLabel: '目标生命值 (Health)',
    cadenceLabel: '每秒攻击次数 (APS)',
    roundingLabel: '伤害舍入规则',
    roundingNone: '保留小数',
    roundingFloor: '向下取整 (Floor)',
    roundingRound: '四舍五入 (Round)',
    roundingCeil: '向上取整 (Ceil)',
    orderLabel: '修正计算顺序',
    resistanceFirst: '先计算抗性后计算固定值',
    flatFirst: '先计算固定值后计算抗性',
    runLabel: '实时影响对比',
    resultDamage: '期望伤害',
    resultHits: '击杀所需次数',
    resultTtk: '击杀时间 (TTK)',
    resultDifference: '伤害差值',
    formulaAName: '当前公式',
    formulaBName: '对比公式',
    curveTitle: '攻击力推移曲线',
    curveCaption: '在防御力固定的情况下，攻击力从当前值的一半扫掠至两倍。',
    heatmapTitle: '压力场热力图',
    heatmapCaption: '展示公式 A 在不同攻击力与防御力组合下的期望伤害。',
    attackAxis: '攻击力向右递增',
    defenseAxis: '防御力向下递增',
    scenariosTitle: '战斗目标预设',
    scenarioSkirmisher: '游侠 / 刺客',
    scenarioGuardian: '重装战士',
    scenarioBoss: '首领 Boss',
    scenarioCustom: '当前自定义',
    diagnosticsTitle: '断点与风险诊断',
    statusBalanced: '在此扫掠范围内未检测到数值异常突变。',
    exportTitle: '导出实验成果',
    copyLink: '复制分享链接',
    exportCsv: '下载 CSV 数据',
    exportJson: '下载 JSON 配置',
    importJson: '导入 JSON 配置',
    exportPng: '下载 PNG 图形',
    reset: '重置模型',
    privacyDisclosure: '分享链接将配置保存在 URL 哈希中，不会发送至服务器。',
    limitationDisclosure: '期望暴击伤害为统计平均值，非随机抽样模拟。',
    importError: '所选文件不是有效的伤害实验室配置文件。',
    copiedStatus: '分享链接已复制到剪贴板。',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: '在代码实装前验证游戏伤害公式',
    },
    {
      type: 'paragraph',
      html: '一条伤害公式可能在常规数值下表现良好，但在等级或装备极端增长时失效。本实验室能帮助您提前发现零伤害区与数值断层。',
    },
    {
      type: 'title',
      level: 2,
      text: '受限且安全的表达式解析',
    },
    {
      type: 'paragraph',
      html: '公式输入框仅解析预设变量与安全数学函数，杜绝任意 JavaScript 代码执行风险。',
    },
    {
      type: 'table',
      headers: ['评估指标', '计算逻辑', '设计思考'],
      rows: [
        ['期望伤害', '包含暴击期待、抗性与舍入规则的基础伤害', '公式在强弱单位间是否均具备合理响应？'],
        ['击杀次数', '目标生命值除以舍入后的伤害', '增加 1 点属性是否会导致所需攻击次数减少一次？'],
        ['击杀时间 (TTK)', '攻击间隔除以每秒攻击频率', '攻击频率是否符合预期的战斗节奏？'],
        ['压力热力图', '公式 A 在攻防矩阵上的采样', '是否存在不合理的停滞区或陡峭断层？'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '区分算术客观事实与数值平衡主观判断',
    },
    {
      type: 'paragraph',
      html: '平滑的曲线并不直接等同于出色的游戏体验。请将本实验室作为发现实测问题与试玩验证的辅助工具。',
    },
    {
      type: 'tip',
      title: '同时观察伤害数值与击杀次数',
      html: '伤害数值的微小变化可能会跨越血量阈值，从而使所需攻击次数减少一次。请务必结合 TTK 进行综合评估。',
    },
    { type: 'paragraph', html: '同一公式会因舍入方式和修正顺序不同而产生不同的战斗结果。还要检查低伤害、高防御以及需要额外攻击的临界点；TTK 不模拟闪避、冷却或中断。' },
    { type: 'paragraph', html: '每次修改后请保存几组基准场景，包括低攻击对高防御、暴击命中，以及攻击次数发生变化的临界值。这些案例有助于比较不同平衡版本，也能在系数或舍入规则调整后及时发现回归问题。' },
  ],
  faq,
  bibliographyTitle: '游戏伤害数值设计参考资料',
  bibliography: bibliographyEntries,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
};
