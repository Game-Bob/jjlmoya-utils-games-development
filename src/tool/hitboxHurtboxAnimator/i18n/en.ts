import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HitboxHurtboxAnimatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const faq = [
  {
    question: 'What is the difference between a hitbox and a hurtbox?',
    answer: 'A hitbox usually marks an attacking region, while a hurtbox marks a region that can receive that attack. Pushboxes can keep characters apart, grabboxes can define throw reach, and sensors can represent detection areas. Your engine and game rules decide the final behavior.',
  },
  {
    question: 'Do my sprite files leave the browser?',
    answer: 'No. Images are decoded, sliced, drawn, and exported in your browser. The tool stores only editor preferences such as playback speed and onion skin visibility. Save the JSON file yourself if you want to keep the project.',
  },
  {
    question: 'Which coordinate system does the JSON export use?',
    answer: 'Every frame uses pixels measured from its top left corner. Rectangle and circle bounds store nonnegative x, y, width, and height values. Each frame also stores its own pivot in the same coordinate system.',
  },
  {
    question: 'Can I edit a sprite sheet and separate frame images?',
    answer: 'Yes. Load one PNG or WebP and set its rows and columns for uniform slicing, or select several ordered images and the tool will use one image per frame. File names with numbers are sorted naturally before the sequence is created.',
  },
  {
    question: 'Does the export work directly in every game engine?',
    answer: 'The JSON is intentionally engine neutral. It records frame rectangles, pivots, semantic layer names, and primitive shapes without claiming a universal engine mapping. Convert those values in your project while accounting for its origin, scale, and collider conventions.',
  },
];

const howTo = [
  { name: 'Load animation artwork', text: 'Choose one PNG or WebP sprite sheet, or select an ordered sequence of frame images. All image work stays on your device.' },
  { name: 'Define the frames', text: 'For a uniform sheet, enter its row and column count. Step through the filmstrip and confirm that every crop contains one animation frame.' },
  { name: 'Draw semantic collision layers', text: 'Choose a hitbox, hurtbox, pushbox, grabbox, sensor, or custom layer, then drag a rectangle or circle over the active frame.' },
  { name: 'Refine motion across time', text: 'Select shapes to drag or edit exact coordinates, copy useful geometry to neighboring frames, and use onion skin layers to compare motion.' },
  { name: 'Export reproducible data', text: 'Download the engine neutral JSON project and a PNG contact sheet. Keep the original images beside the JSON because image pixels are not embedded.' },
];

const softwareApplication: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Hitbox and Hurtbox Animator for Sprites',
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
  name: 'How to animate hitboxes and hurtboxes from a sprite sheet',
  step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};

export const content: ToolLocaleContent<HitboxHurtboxAnimatorUI> = {
  slug: 'hitbox-hurtbox-animator',
  title: 'Hitbox and Hurtbox Animator for Sprites',
  description: 'Draw collision layers on every sprite frame, preview them with onion skins, edit exact pixel coordinates, and export engine neutral JSON without uploading artwork.',
  ui: {
    onboarding: 'Load the current animation, confirm its frame cuts, then draw the regions that attack, receive damage, block movement, grab, or sense. The filmstrip shows where every layer exists.',
    privacyNote: 'Local animation desk. Artwork is not uploaded.',
    loadSprite: 'Bring artwork to the light table',
    loadHint: 'Choose one uniform sprite sheet or several ordered PNG and WebP frames. Numbered file names are sorted naturally.',
    chooseImages: 'Choose sprite images',
    slicingTitle: 'Frame slicing',
    rowsLabel: 'Rows',
    columnsLabel: 'Columns',
    applySlicing: 'Cut filmstrip',
    playbackTitle: 'Motion preview',
    previousFrame: 'Previous frame',
    play: 'Play',
    pause: 'Pause',
    nextFrame: 'Next frame',
    fpsLabel: 'Frames per second',
    onionPrevious: 'Previous acetate',
    onionNext: 'Next acetate',
    layerTitle: 'Collision inks',
    typeHitbox: 'Hitbox',
    typeHurtbox: 'Hurtbox',
    typePushbox: 'Pushbox',
    typeGrabbox: 'Grabbox',
    typeSensor: 'Sensor',
    typeCustom: 'Custom',
    shapeRectangle: 'Rectangle',
    shapeCircle: 'Circle',
    drawShape: 'Draw',
    selectShape: 'Select',
    stageLabel: 'Animation light table',
    emptyStage: 'Load sprite artwork to reveal the frame and start drawing collision layers.',
    frameReadout: 'Frame {current} of {total}',
    timelineTitle: 'Collision filmstrip',
    inspectorTitle: 'Selected acetate',
    noSelection: 'Switch to Select and choose a shape to edit exact values.',
    nameLabel: 'Layer name',
    xLabel: 'X in pixels',
    yLabel: 'Y in pixels',
    widthLabel: 'Width in pixels',
    heightLabel: 'Height in pixels',
    radiusLabel: 'Radius in pixels',
    duplicateShape: 'Duplicate',
    mirrorShape: 'Mirror horizontally',
    deleteShape: 'Delete selected shape',
    copyPrevious: 'Copy previous frame here',
    copyAll: 'Copy this frame to all',
    pivotTitle: 'Frame pivot',
    pivotXLabel: 'Pivot X',
    pivotYLabel: 'Pivot Y',
    exportTitle: 'Take the animation plan with you',
    exportJson: 'Download JSON',
    importJson: 'Import JSON',
    exportContactSheet: 'Download contact sheet',
    resetProject: 'Clear collision layers',
    undo: 'Undo',
    redo: 'Redo',
    statusReady: 'The animation desk is ready.',
    statusImageLoaded: '{count} image files loaded locally.',
    statusShapeCreated: 'A new collision shape was added to this frame.',
    statusShapeUpdated: 'Collision geometry updated.',
    statusImported: 'Collision project imported. Reconnect its source images to preview the artwork.',
    statusExported: 'Export prepared on this device.',
    statusError: 'The selected file could not be read as a supported image or collision project.',
    framesBadge: '{count} frames',
    shapesBadge: '{count} shapes',
    coverageBadge: '{percent}% covered',
    coordinatesNote: 'Coordinates use the top left of each frame as zero. Bounds are clamped to the visible frame and stored in pixels.',
    localOnlyDisclosure: 'The JSON stores image names, frame cuts, pivots, and collision geometry. It does not embed the image pixels.',
    limitationDisclosure: 'Collision layers describe authored regions only. Test them inside your game because timing, scale, transforms, physics settings, and combat rules remain engine specific.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Build hitboxes and hurtboxes around the animation itself',
    },
    {
      type: 'paragraph',
      html: 'Collision authoring becomes difficult when every frame is judged in isolation. This editor puts the sprite, semantic collision inks, neighboring onion skins, and filmstrip in one place. You can see where an attack begins, how a hurt region follows the body, and whether a pushbox stays stable while the artwork stretches or turns.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Choose each collision layer by gameplay responsibility',
    },
    {
      type: 'table',
      headers: ['Layer', 'Typical responsibility', 'Question to review'],
      rows: [
        ['Hitbox', 'Area that delivers an attack or active effect', 'Does it appear only on the intended active frames?'],
        ['Hurtbox', 'Area that can receive an attack or effect', 'Does it follow the readable body volume without unnecessary gaps?'],
        ['Pushbox', 'Area used to keep actors from occupying the same space', 'Does it remain stable enough to avoid visible shoving or jitter?'],
        ['Grabbox', 'Reach used to begin a throw or hold', 'Does its timing and range match the animation cue?'],
        ['Sensor', 'Detection area for interactions, ledges, targets, or triggers', 'Is its purpose named clearly enough for implementation?'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Read and preserve the coordinate contract',
    },
    {
      type: 'paragraph',
      html: 'The exported project measures x and y from the top left of each cropped frame. Width and height are nonnegative pixel dimensions, and the pivot uses the same frame local coordinates. This makes save and import cycles reproducible, but your engine adapter still needs to account for texture scale, centered origins, world transforms, and its own shape representation.',
    },
    {
      type: 'tip',
      title: 'Review anticipation, contact, and recovery together',
      html: 'Play the complete motion after editing a single frame. A geometrically tidy box can still start too early, disappear before the visual follow through, or drift between frames. Use the previous and next acetates to judge continuity without hiding intentional changes.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Use the contact sheet as an implementation review artifact',
    },
    {
      type: 'paragraph',
      html: 'The PNG contact sheet reveals every authored frame and its colored layers in one image. Pair it with the JSON export when reviewing combat timing with design, animation, and engineering. The image explains the motion at a glance, while the JSON carries the exact frame rectangles, pivots, semantic names, and primitive bounds.',
    },
  ],
  faq,
  bibliographyTitle: 'Collision authoring references',
  bibliography: bibliographyEntries,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
};
