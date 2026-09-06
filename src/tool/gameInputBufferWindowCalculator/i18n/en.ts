import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GameInputBufferWindowCalculatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const faq = [
  {
    question: 'What does this input buffer calculator measure?',
    answer: 'It converts an animation frame range into milliseconds, subtracts the latency you provide from the requested pre-input buffer, and shows how much effective timing remains. It is a planning aid, not a measurement of a real controller or display.',
  },
  {
    question: 'How should I choose the active frames?',
    answer: 'Enter the first and last animation frames in which the action is valid or the hit is active. The calculator counts both endpoints, so frames 8 through 12 represent five frames of active time.',
  },
  {
    question: 'Why can latency make the input arrive late?',
    answer: 'The requested buffer is the time before the active window in which the player may press. If estimated input latency is larger than that buffer, the input arrives after the protected pre-window has already been consumed. The result reports the shortfall instead of hiding it.',
  },
  {
    question: 'Does the result prove that a move feels responsive?',
    answer: 'No. Feel also depends on input sampling, animation presentation, display latency, game state, hit confirmation, and playtesting. Use the result to compare declared timings before testing the mechanic in the game.',
  },
];

const howTo = [
  {
    name: 'Set the target frame rate',
    text: 'Enter the game loop frame rate. The tool converts it to milliseconds per frame, so a 60 FPS target is about 16.67 milliseconds per frame.',
  },
  {
    name: 'Mark the active animation window',
    text: 'Enter the first and last animation frames that accept the input or contain the active gameplay state. Both frame numbers are included.',
  },
  {
    name: 'Add the intended buffer and latency',
    text: 'Set how early the input may be pressed and the estimated end-to-end latency that should be budgeted. Keep both values in milliseconds.',
  },
  {
    name: 'Read the timing map',
    text: 'The violet zone is the requested pre-input buffer, the teal zone is the active animation window, and the red marker shows the part of the buffer consumed by latency. Use the status to decide whether the window needs a timing change or playtest.',
  },
];

const softwareApplication: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Game Input Buffer Window Calculator',
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
  name: 'How to calculate a game input buffer window',
  step: howTo.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

export const content: ToolLocaleContent<GameInputBufferWindowCalculatorUI> = {
  slug: 'game-input-buffer-window-calculator',
  title: 'Game Input Buffer Window Calculator',
  description: 'Convert animation frames, FPS, input buffer time, and latency into a usable game input window before tuning a move or combo.',
  ui: {
    inputsTitle: 'Describe the move timing',
    fpsLabel: 'Target frame rate',
    fpsHint: 'The game loop rate used for the conversion.',
    activeStartLabel: 'First active frame',
    activeStartHint: 'The first frame that accepts the input or state.',
    activeEndLabel: 'Last active frame',
    activeEndHint: 'The final included frame; both ends are counted.',
    bufferLabel: 'Requested input buffer',
    bufferHint: 'How early a player may press before the active window.',
    latencyLabel: 'Estimated input latency',
    latencyHint: 'The delay budget to subtract from the buffer.',
    calculateLabel: 'Calculate window',
    resetLabel: 'Reset values',
    stageKicker: '02 · Read the timing',
    stageTitle: 'When does the input arrive?',
    stageCaption: 'The map connects your frame range and latency budget to a decision you can take back to the move.',
    statusReady: 'Window available',
    statusLate: 'Input arrives late',
    statusTight: 'Window is tight',
    statusInvalid: 'Check the inputs',
    frameDurationLabel: 'Time per frame',
    activeWindowLabel: 'Active animation',
    usableBufferLabel: 'Usable pre-window',
    effectiveWindowLabel: 'Effective total window',
    framesAvailableLabel: 'Frames available',
    lateByLabel: 'Buffer shortfall',
    timingTitle: 'Buffer → active frames',
    timingCaption: 'The highlighted spans show the time budget behind the decision.',
    inputBufferLabel: 'requested buffer',
    activeFramesLabel: 'active frames',
    latencyLabelShort: 'latency',
    frameAxis: 'animation timeline',
    zeroLabel: 'before frame 1',
    startLabel: 'start',
    endLabel: 'end',
    resultTitle: 'Decision',
    readyResult: 'The estimated latency leaves usable pre-input time before the active animation window.',
    tightResult: 'The input is not late, but less than one full frame remains in the pre-input buffer. Small timing changes may be noticeable.',
    lateResult: 'The estimated latency exceeds the requested buffer. The input may arrive after the pre-input window; increase the buffer or test a different timing.',
    errorTitle: 'Input check',
    invalidNumber: 'Enter numbers in every field.',
    invalidRange: 'Use values inside the displayed limits.',
    invalidOrder: 'The last active frame must be the same as or later than the first active frame.',
    modelNote: 'The model counts both active-frame endpoints, uses 1000 ÷ FPS milliseconds per frame, and subtracts latency only from the requested pre-input buffer. It does not measure hardware, controller sampling, display delay, or player feel.',
    privacyDisclosure: 'Your timing values stay in this browser for the next visit. No game data or telemetry is sent anywhere.',
    unitMs: 'ms',
    unitFps: 'FPS',
    unitFrames: 'frames',
  },
  seo: [
    { type: 'title', level: 2, text: 'Turn animation frames into an input timing decision' },
    { type: 'paragraph', html: 'A move can look like a short animation sequence while its gameplay window is easier to reason about in milliseconds. This calculator uses the frame rate and the first and last valid frames you provide to show the active duration. It then subtracts an estimated input latency from the requested pre-input buffer, so you can see whether the timing survives the trip from the player to the game.' },
    { type: 'title', level: 2, text: 'How the window is calculated' },
    { type: 'paragraph', html: 'The duration of one frame is <code>1000 ÷ FPS</code>. The active duration is the number of included frames multiplied by that duration. The usable pre-window is <code>max(0, requested buffer − estimated latency)</code>. The effective window combines the usable pre-window and the active animation duration. The result is a transparent estimate based only on the timings you enter.' },
    { type: 'table', headers: ['Reading', 'What it means', 'What to do next'], rows: [['Window available', 'Latency leaves time before the active frames.', 'Take the timing into playtesting and check how it feels.'], ['Window is tight', 'Less than one frame of usable pre-input time remains.', 'Compare one-frame changes and test on the target input path.'], ['Input arrives late', 'Latency is larger than the requested buffer.', 'Increase the buffer, move the active window, or verify the latency assumption.']] },
    { type: 'title', level: 2, text: 'Use it before playtesting a mechanic' },
    { type: 'paragraph', html: 'Bring the actual animation frame numbers from the move, not a guessed duration. Start with the target update rate, enter the active range, and use a latency estimate that you can explain. Then change one assumption at a time. The tool is most useful for comparing two timing designs before you spend a playtest session deciding why one of them feels inconsistent.' },
    { type: 'tip', title: 'What the calculator cannot measure', html: 'This is a local timing model, not a controller or display test. It does not know when a device samples input, how an engine queues events, whether animation and gameplay frames are synchronized, or how a real player perceives the result. Treat the output as a tuning hypothesis and verify the final behavior in the target game.' },
  ],
  faq,
  bibliographyTitle: 'Timing references',
  bibliography: bibliographyEntries,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
};
