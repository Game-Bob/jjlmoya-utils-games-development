import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GameDeltaTimeFixedTimestepLabUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const faq = [
  { question: '这个固定时间步实验室展示什么？', answer: '它让同一个移动物体分别通过可变 delta time 循环和固定 timestep 累加器。加入可重复的帧尖峰后，可以在不运行游戏引擎的情况下观察模拟时间、位置偏差和追赶步骤。' },
  { question: '可变 delta 和固定 timestep 有什么区别？', answer: '可变模型在每个渲染帧更新一次，并使用该帧的时长。固定模型使用大小相同的模拟步骤，通过累加器处理实际经过的时间所需要的步骤。固定步骤减少模拟对渲染帧率的依赖，但长帧可能造成额外的追赶工作。' },
  { question: '帧尖峰输入代表什么？', answer: '它会给每个选中的尖峰帧增加额外的毫秒数。频率字段决定每隔多少帧出现一次尖峰，因此可以创建可重复的卡顿模式，而不是依赖随机的性能记录。' },
  { question: '限制 delta 会改变什么？', answer: '当帧时间超过设定上限时，限制会减少可变模型使用的 delta。这可以避免一次过大的跳跃，但该模型的模拟时钟会落后于实际时间。固定累加器仍然会计算完整的帧时长。' },
  { question: '这是性能分析器或游戏测试的替代品吗？', answer: '不是。这是一个使用指定数字的确定性学习和设计实验室。它不会测量设备、诊断引擎、模拟渲染成本，也不能证明某种循环适用于所有游戏。' },
];
const howTo = [
  { name: '选择帧节奏', text: '设置目标每秒帧数，并添加可重复的毫秒级尖峰。使用频率决定每隔多少帧放置一次尖峰。' },
  { name: '设置模拟步骤', text: '选择固定 timestep 的毫秒数。接近 16.667 毫秒的值代表每秒约 60 次模拟更新。' },
  { name: '给两个模型相同的运动规则', text: '设置速度和时长。两个模型移动同一个物体，因此位置差异来自它们消耗经过时间的方式。' },
  { name: '有意识地测试上限', text: '启用 delta 上限，比较可变模型的模拟时间与固定累加器。上限是带有明显代价的策略，不是免费的修复。' },
  { name: '阅读证据', text: '查看两条路径、偏差摘要、时间线、追赶行为和无障碍帧表。教学或调试时，一次只改变一个输入。' },
];
const softwareApplication: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: '游戏 Delta Time 与固定 Timestep 实验室', applicationCategory: 'DeveloperApplication', operatingSystem: 'Any' };
const faqPage: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: '比较可变 Delta Time 与固定 Timestep', step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };

export const content: ToolLocaleContent<GameDeltaTimeFixedTimestepLabUI> = {
  slug: 'game-delta-time-fixed-timestep-lab', title: '游戏 Delta Time 与固定 Timestep 实验室', description: '通过可重复的帧尖峰、移动模拟、追赶步骤和可见的时间偏差，比较可变与固定的游戏循环。',
  ui: { controlsTitle: '构建帧模式', fpsLabel: '目标帧率', fpsHint: '每秒渲染帧数', spikeLabel: '帧尖峰', spikeHint: '尖峰帧增加的额外时间', spikeEveryLabel: '尖峰间隔帧数', fixedDtLabel: '固定时间步', fixedDtHint: '相等的模拟步骤大小', velocityLabel: '物体速度', durationLabel: '运行时长', clampLabel: 'Delta 上限', clampToggle: '限制可变 Delta', runLabel: '运行实验', resetLabel: '重置数值', stageKicker: '实验场', stageTitle: '两只时钟，一个移动物体', stageCaption: '柱形图显示卡顿，曲线跟踪两个位置，下方曲线单独显示最终数值可能隐藏的偏差。', frameTraceLabel: '帧时长', positionPlotLabel: '物体位置', differencePlotLabel: '相对固定路径的位置差', variableLane: '可变 Delta', fixedLane: '固定累加器', frameCountLabel: '渲染帧数', wallTimeLabel: '实际时间', variableTimeLabel: '可变模拟时间', fixedTimeLabel: '固定模拟时间', divergenceLabel: '位置差', stepsLabel: '固定模拟步骤', diagnosticsTitle: '帧读取', stableStatus: '在这个模式下两条路径保持一致。', variableStatus: '可变路径向前，因为它的帧时长包含尖峰。', fixedStatus: '长帧之后，固定路径通过多个模拟步骤追赶时间。', clampStatus: '上限减少可变跳跃，并使该模型落后于已经经过的实际时间。', timelineTitle: '运动记录', timelineCaption: '相对于经过的实际时间的位置。虚线表示相等的固定步骤。', frameAxis: '经过的实际时间', positionAxis: '物体位置', legendVariable: '可变 Delta 路径', legendFixed: '固定 Timestep 路径', legendSpike: '帧尖峰', tableTitle: '无障碍帧记录', tableFrame: '帧', tableWall: '实际时间', tableVariable: '可变位置', tableFixed: '固定位置', tableDelta: '差值', modelNote: '可变模型使用当前帧时长将速度应用一次。固定模型累加完整实际时间，并以相等步骤前进。两条路径都不是性能测量。', privacyDisclosure: '你的数值只保存在此浏览器中，方便下次继续实验。不会发送游戏数据或遥测信息。', unitMs: '毫秒', unitSeconds: '秒', unitPixels: '单位', statusReady: '实验已更新' },
  seo: [
    { type: 'title', level: 2, text: '理解游戏循环里的时钟' },
    { type: 'paragraph', html: '每个渲染帧都会向游戏提供新的经过时间。在可变 delta 循环中，运动通常按 <code>position += velocity × frameTime</code> 更新。帧稳定时，平均速度接近目标值，但一次更新也可能和产生它的帧一样长。因此 hitch 不只是画面暂停：它会改变这次更新消耗的游戏时间。' },
    { type: 'title', level: 2, text: '比较可变积分与固定累加器' },
    { type: 'paragraph', html: '固定 timestep 循环把每个帧时长加入累加器，然后反复消耗选定的步骤，例如 <code>16.667 ms</code>。模拟得到大小相同的更新，而渲染器可以保持不同节奏。剩余的小数时间留在累加器中，供下一帧使用。长帧到来时，固定循环执行多个小更新来覆盖经过的时间。步骤大小保持稳定，但可能出现追赶工作峰值。' },
    { type: 'table', headers: ['情况', '可变 Delta 路径', '固定 Timestep 路径', '需要考虑的决定'], rows: [['稳定渲染', '一次更新使用每个正常帧时长', '相同步骤消耗累积时间', '确认两条路径是否跟随相同运动。'], ['长帧', '一次大更新可能让物体移动过远', '多个固定更新追赶经过的时间', '同时查看位置差与追赶步骤数量。'], ['不同渲染速度', '更新大小随帧率变化', '模拟步骤保持不变', '固定步骤减少对渲染节奏的依赖。'], ['Delta 上限', '忽略超过上限的时间', '累加器接收完整帧时长', '只有可以接受时间损失时才限制。']] },
    { type: 'title', level: 2, text: '查看帧尖峰的实际影响' },
    { type: 'paragraph', html: '每秒 60 帧时，普通帧约为 <code>16.667 ms</code>。增加 <code>80 ms</code> 尖峰后，一帧约为 <code>96.667 ms</code>。可变模型在一次更新中消耗全部时长。固定模型则大约消耗六个 <code>16.667 ms</code> 步骤。总经过时间可能相同，但模拟走过的路径不同。' },
    { type: 'title', level: 2, text: '结合位置偏差和追赶步骤阅读结果' },
    { type: 'paragraph', html: '位置差等于可变路径减去固定路径。它说明两种积分策略分离了多远，但不会自动说明哪一种正确。追赶数量说明一个渲染帧中需要多少固定工作。较大的位置差意味着可见的运动差异，较多的追赶步骤则可能意味着 CPU 预算问题。两者相关，却不是同一个诊断。' },
    { type: 'title', level: 2, text: '把 Delta 限制当作策略' },
    { type: 'paragraph', html: '上限可以防止暂停的标签页、断点或严重 hitch 让角色瞬移，或让物理物体穿过几何体。代价是可变时钟会落后于实际经过的时间。如果游戏必须保留时间，应使用固定累加器或其他恢复策略。如果游戏必须限制跳跃并保持响应，上限可能合适，但丢失的时间必须是有意选择的。' },
    { type: 'title', level: 2, text: '根据需要保护的工作选择循环' },
    { type: 'table', headers: ['游戏循环任务', '有用的默认选择', '原因'], rows: [['物理、碰撞或确定性游戏玩法', '固定 Timestep', '相同步骤让模拟更少依赖渲染节奏。'], ['不积累状态的简单视觉运动', '可变 Delta', '更新很小，通常不需要追赶队列。'], ['带平滑渲染的游戏模拟', '带插值的固定更新', '模拟保持步骤，显示层隐藏小数进度。'], ['严重停顿后的恢复', '有上限的追赶策略', '避免一次坏帧制造无限的模拟工作。']] },
    { type: 'title', level: 2, text: '使用可重复的调节流程' },
    { type: 'paragraph', html: '先关闭尖峰，确认两条路径一致。加入可重复的 hitch，再改变频率，观察可见误差是累积还是稳定。调整固定步骤，查看追赶数量，然后再改变速度。最后启用上限，比较可变模拟时间与实际时间。这个顺序可以把偏差原因和限制偏差的策略分开。' },
    { type: 'tip', title: '这个实验无法证明什么', html: '实验室使用指定的帧时长和恒定速度，因此解释的是时间行为，而不是测量设备或验证引擎。真实物理、输入采样、网络、插值和帧预算可能改变最佳设计。把结果当作假设，再在实际游戏中验证。' },
  ],
  faq, bibliographyTitle: '游戏循环参考资料', bibliography: bibliographyEntries, howTo, schemas: [softwareApplication, faqPage, howToSchema],
};
