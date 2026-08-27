import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GameDeltaTimeFixedTimestepLabUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const faq = [
  {
    question: 'What does this fixed timestep lab demonstrate?',
    answer: 'It runs the same moving object through a variable delta time loop and a fixed timestep accumulator. Frame spikes make the difference visible so you can inspect simulated time, position drift, and catch up steps without running a game engine.',
  },
  {
    question: 'What is the difference between variable and fixed delta time?',
    answer: 'The variable model advances once per rendered frame using that frame duration. The fixed model advances in equal simulation steps and uses an accumulator to process as many steps as the elapsed wall time requires. Fixed steps make simulation behavior less dependent on render rate, while a long frame may require catch up work.',
  },
  {
    question: 'What does the frame spike input represent?',
    answer: 'It adds extra milliseconds to every selected spike frame. The cadence field controls how often a spike appears, which lets you create a repeatable hitch pattern instead of relying on a random performance trace.',
  },
  {
    question: 'What does delta clamping change?',
    answer: 'Clamping limits the delta used by the variable model when a frame is longer than the chosen ceiling. This can prevent a single hitch from moving the object too far, but it also makes simulated time fall behind wall time. The fixed accumulator continues to account for the full elapsed frame.',
  },
  {
    question: 'Is this a profiler or a replacement for playtesting?',
    answer: 'No. It is a deterministic teaching and design lab using declared numbers. It does not measure your device, diagnose an engine, model rendering cost, or prove that one loop is correct for every game.',
  },
];

const howTo = [
  {
    name: 'Choose the frame rhythm',
    text: 'Set a target frames per second and add a repeatable spike in milliseconds. Use the cadence field to place that spike every chosen number of frames.',
  },
  {
    name: 'Set the simulation step',
    text: 'Choose the fixed timestep in milliseconds. A value near 16.667 milliseconds represents a 60 updates per second simulation.',
  },
  {
    name: 'Give both worlds a motion rule',
    text: 'Set velocity and duration. Both models move the same object, so the position difference comes from how each loop consumes elapsed time.',
  },
  {
    name: 'Test a clamp deliberately',
    text: 'Enable the delta clamp to cap the variable model, then compare its simulated time with the fixed accumulator. A clamp is a policy choice with a visible cost, not a free correction.',
  },
  {
    name: 'Read the evidence',
    text: 'Inspect the two tracks, divergence summary, timeline, catch up behavior, and accessible frame table. Change one input at a time when teaching or debugging a loop design.',
  },
];

const softwareApplication: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Game Delta Time and Fixed Timestep Lab',
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
  name: 'How to compare variable delta time with a fixed timestep',
  step: howTo.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

export const content: ToolLocaleContent<GameDeltaTimeFixedTimestepLabUI> = {
  slug: 'game-delta-time-fixed-timestep-lab',
  title: 'Game Delta Time and Fixed Timestep Lab',
  description: 'Compare variable and fixed timestep game loops with repeatable frame spikes, simulated motion, catch up steps, and visible time drift.',
  ui: {
    controlsTitle: 'Build the frame pattern',
    fpsLabel: 'Target frame rate',
    fpsHint: 'Rendered frames per second',
    spikeLabel: 'Frame spike',
    spikeHint: 'Extra time added to spike frames',
    spikeEveryLabel: 'Spike every frames',
    fixedDtLabel: 'Fixed timestep',
    fixedDtHint: 'Equal simulation step size',
    velocityLabel: 'Object velocity',
    durationLabel: 'Run duration',
    clampLabel: 'Delta ceiling',
    clampToggle: 'Clamp variable delta time',
    runLabel: 'Run experiment',
    resetLabel: 'Reset values',
    stageKicker: 'The proving ground',
    stageTitle: 'Two clocks, one moving object',
    stageCaption: 'Bars expose the hitches, lines trace both positions, and the lower trace isolates the drift that the final values can hide.',
    frameTraceLabel: 'Frame durations',
    positionPlotLabel: 'Object position',
    differencePlotLabel: 'Position difference from fixed path',
    variableLane: 'Variable delta',
    fixedLane: 'Fixed accumulator',
    frameCountLabel: 'Rendered frames',
    wallTimeLabel: 'Wall time',
    variableTimeLabel: 'Variable simulated time',
    fixedTimeLabel: 'Fixed simulated time',
    divergenceLabel: 'Position difference',
    stepsLabel: 'Fixed simulation steps',
    diagnosticsTitle: 'Frame reading',
    stableStatus: 'The two paths stay aligned for this pattern.',
    variableStatus: 'The variable path runs ahead because its frame durations include the spikes.',
    fixedStatus: 'The fixed path is catching up in multiple simulation steps after a long frame.',
    clampStatus: 'The clamp limits the variable jump and leaves that model behind elapsed wall time.',
    timelineTitle: 'The motion ledger',
    timelineCaption: 'Position over elapsed wall time. A dashed line marks equal fixed steps.',
    frameAxis: 'Elapsed wall time',
    positionAxis: 'Object position',
    legendVariable: 'Variable delta path',
    legendFixed: 'Fixed timestep path',
    legendSpike: 'Frame spike',
    tableTitle: 'Accessible frame ledger',
    tableFrame: 'Frame',
    tableWall: 'Wall time',
    tableVariable: 'Variable position',
    tableFixed: 'Fixed position',
    tableDelta: 'Difference',
    modelNote: 'The variable model applies velocity once with the current frame duration. The fixed model accumulates full wall time and advances in equal steps. Neither path is a performance measurement.',
    privacyDisclosure: 'Your values are saved only in this browser so the experiment is ready when you return. No game data or telemetry is sent anywhere.',
    unitMs: 'ms',
    unitSeconds: 's',
    unitPixels: 'units',
    statusReady: 'Experiment updated',
  },
  seo: [
    { type: 'title', level: 2, text: 'Understand the clock inside a game loop' },
    { type: 'paragraph', html: 'Every rendered frame gives the game a new elapsed time. In a variable delta loop, motion is commonly updated as <code>position += velocity × frameTime</code>. That keeps average speed close to the intended value when frames are steady, but it also makes one simulation update as large as the frame that produced it. A hitch is therefore not just a visual pause: it changes the amount of game time consumed by that update.' },
    { type: 'title', level: 2, text: 'Compare variable integration with a fixed accumulator' },
    { type: 'paragraph', html: 'A fixed timestep loop adds each frame duration to an accumulator, then repeatedly consumes a chosen step such as <code>16.667 ms</code>. The simulation sees equal-sized updates, while the renderer can still present frames at a different rhythm. The leftover fraction stays in the accumulator for the next frame. When a long frame arrives, the fixed loop performs several small updates to account for elapsed time, which preserves the step size but can create a catch up burst.' },
    {
      type: 'table',
      headers: ['Situation', 'Variable delta path', 'Fixed timestep path', 'Decision to consider'],
      rows: [
        ['Steady rendering', 'One update uses each regular frame duration', 'One or more equal steps consume the accumulated time', 'Both should follow the same motion closely.'],
        ['Long frame', 'One large update can move an object too far', 'Several fixed updates catch up to elapsed time', 'Inspect drift and the catch up count together.'],
        ['Different render rate', 'The update size changes with the frame rate', 'The simulation step stays the same', 'Fixed steps reduce render-rate dependence.'],
        ['Delta ceiling', 'The variable update ignores time above the cap', 'The accumulator still receives the full frame duration', 'Use a clamp only when losing time is acceptable.'],
      ],
    },
    { type: 'title', level: 2, text: 'See what a frame spike actually does' },
    { type: 'paragraph', html: 'At 60 frames per second, a regular frame is about <code>16.667 ms</code>. With an extra <code>80 ms</code> spike, one frame becomes about <code>96.667 ms</code>. The variable model consumes that whole duration in one update. The fixed model consumes roughly six <code>16.667 ms</code> steps instead. The total elapsed time can match, while the path taken through the simulation is different.' },
    { type: 'title', level: 2, text: 'Read position drift and catch up together' },
    { type: 'paragraph', html: 'Position difference is the variable path minus the fixed path. It tells you how far the two integration policies have separated, not which one is automatically correct. The catch up count tells you how much fixed work was required in a single rendered frame. A large difference points to visible motion divergence; a large catch up count points to a possible CPU budget problem. These are related, but they are not the same diagnosis.' },
    { type: 'title', level: 2, text: 'Treat delta clamping as a policy' },
    { type: 'paragraph', html: 'A clamp can stop a paused tab, breakpoint, or severe hitch from teleporting a character or sending a physics body through geometry. The tradeoff is that the variable clock then falls behind real elapsed time. If the game must preserve timing, use a fixed accumulator or another recovery policy. If the game must remain bounded and responsive, a clamp may be acceptable, but the lost time should be intentional.' },
    { type: 'title', level: 2, text: 'Choose the loop for the job it protects' },
    {
      type: 'table',
      headers: ['Game-loop job', 'Useful default', 'Reason'],
      rows: [
        ['Physics, collisions, or deterministic gameplay', 'Fixed timestep', 'Equal steps make the simulation less sensitive to render cadence.'],
        ['Simple visual motion with no accumulated state', 'Variable delta', 'The update is small and usually does not need a catch up queue.'],
        ['Gameplay simulation plus smooth rendering', 'Fixed update with interpolation', 'The simulation keeps its step while presentation hides fractional progress.'],
        ['Recovery after a severe stall', 'A bounded catch up policy', 'Avoid turning one bad frame into unbounded simulation work.'],
      ],
    },
    { type: 'title', level: 2, text: 'Use a repeatable tuning workflow' },
    { type: 'paragraph', html: 'Begin with no spikes and confirm that both paths agree. Add one repeatable hitch, then change its cadence to see whether the visible error accumulates or settles. Adjust the fixed step and inspect the catch up count before changing velocity. Finally enable the clamp and compare variable simulated time with wall time. This sequence separates the cause of a divergence from the policy used to contain it.' },
    { type: 'tip', title: 'What this experiment cannot prove', html: 'The lab uses declared frame durations and a constant velocity, so it explains timing behavior rather than measuring a device or validating an engine. Real physics, input sampling, networking, interpolation, and a frame budget can change the best design. Use the result to form a hypothesis, then verify that hypothesis in the actual game.' },
  ],
  faq,
  bibliographyTitle: 'Game loop references',
  bibliography: bibliographyEntries,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
};
