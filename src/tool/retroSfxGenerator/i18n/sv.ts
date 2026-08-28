import type { ToolLocaleContent } from '../../../types';
import type { RetroSfxGeneratorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<RetroSfxGeneratorUI> = {
  slug: 'retro-ljudeffekt-generator-spel',
  title: 'Retro Ljudeffekt Generator för Spel',
  description: 'Skapa korta retro-ljudeffekter för spel i din webbläsare med förinställningar, vågformsreglage, oscilloskop och WAV-export.',
  ui: {
    waveformLabel: 'Vågform',
    waveformSquare: 'Fyrkant',
    waveformSawtooth: 'Sågtand',
    waveformSine: 'Sinus',
    waveformTriangle: 'Triangel',
    waveformNoise: 'Brus',
    presetLabel: 'Snabb ljudbank',
    presetExplosion: 'Explosion',
    presetLaser: 'Laser',
    presetJump: 'Hopp',
    presetCoin: 'Mynt',
    presetPowerUp: 'Power-up',
    frequencyLabel: 'Startfrekvens',
    frequencyEndLabel: 'Slutfrekvens',
    durationLabel: 'Längd',
    decayLabel: 'Avklingning',
    sweepLabel: 'Tonsvep',
    vibratoLabel: 'Vibrato',
    lowpassLabel: 'Lågpass',
    highpassLabel: 'Högpass',
    noiseMixLabel: 'Brusmix',
    toneSection: 'Ton',
    dynamicsSection: 'Dynamik',
    filterSection: 'Textur',
    playButton: 'Spela ljud',
    stopButton: 'Stoppa',
    downloadButton: 'Ladda ner WAV',
    randomizeButton: 'Slumpa',
    resetButton: 'Återställ',
    waveformPreviewLabel: 'Realtidsvågform',
    generatedLabel: 'Genererad',
    statusReady: 'Klar för avlyssning',
    statusPlaying: 'Spelas i webbläsaren',
    statusStopped: 'Uppspelning stoppad',
    statusDownloaded: 'WAV nedladdad',
    statusAudioBlocked: 'Uppspelning kräver ljudtillstånd i fliken',
    statusGenerating: 'Renderar ljud',
    presetHint: 'Välj en startpunkt och forma signalen med reglagen nedan.',
    monoWavHint: '44.1 kHz · 16-bitars mono WAV',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Skapa spelljud under ett Game Jam direkt i webbläsaren',
    },
    {
      type: 'paragraph',
      html: 'En bra retro-ljudeffekt kommunicerar en spelhandling direkt. En stigande ton ger känslan av ett hopp eller en power-up, ett snabbt fallande svep låter som en laser och ett brussvep återskapar en explosion.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Förinställningar', value: '5 startmönster' },
        { label: 'Oscillatorer', value: '5 vågformer' },
        { label: 'Exportformat', value: '16-bitars PCM WAV' },
        { label: 'Bearbetning', value: 'I webbläsaren' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Vad reglagen styr',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Ton och rörelse',
          description: 'Tonreglagen definierar ljudets grundläggande karaktär.',
          points: [
            'Startfrekvens sätter den inledande tonhöjden',
            'Tonsvep flyttar frekvensen mot ett beräknat slutvärde',
            'Vibrato lägger till en mjuk periodisk svängning',
            'Olika vågformer skapar olika harmoniska strukturer',
          ],
        },
        {
          title: 'Form och textur',
          description: 'Dynamik och filter formar avklingningen.',
          points: [
            'Längd styr den totala speltiden',
            'Avklingning justerar hur snabbt volymen sjunker',
            'Lågpassfilter dämpar vassa höga frekvenser',
            'Högpassfilter tar bort basfrekvenser',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Praktiska recept för vanliga spelhändelser',
    },
    {
      type: 'table',
      headers: ['Händelse', 'Bra startmönster', 'Första justering att testa'],
      rows: [
        ['Explosion', 'Brus med låg frekvens', 'Öka längden och sänk lågpassfiltret för mer tyngd'],
        ['Laser', 'Sågtand med fallande svep', 'Minska längden och höj högpassfiltret'],
        ['Hopp', 'Fyrkant med stigande svep', 'Minska avklingningen för att hålla stigningen tydlig'],
        ['Mynt', 'Fyrkant med kort stigande svep', 'Höj startfrekvensen för ett ljusare ljud'],
        ['Power-up', 'Triangel med långt stigande svep', 'Lägg till lite vibrato för mer rörelse'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Varför WAV är det bästa formatet för prototyper',
    },
    {
      type: 'paragraph',
      html: 'WAV-formatet stöds direkt av de flesta spelmotorer och ljudredigerare utan krav på extern komprimering.',
    },
    {
      type: 'tip',
      title: 'Lyssna i rätt spelvolym',
      html: 'Ett ljud som låter bra ensamt kan bli tröttsamt om det upprepas ofta i spelet. Testa ljudet i spelsammanhang.',
    },
    { type: 'paragraph', html: 'Lyssna också på ljudet i spelets riktiga mix: en ljus effekt kan fungera ensam men ändå maskera dialog eller musik. Kontrollera volym, klippning och längd innan ljudet används som slutgiltig tillgång.' },
    { type: 'paragraph', html: 'Jämför flera varianter med samma spelvolym och välj den som har tydligast attack utan att bli vass. Kontrollera också att start och slut inte innehåller klick, och att filens längd passar den animation eller händelse som ska trigga effekten.' },
  ],
  faqTitle: 'Vanliga Frågor',
  faq: [
    {
      question: 'Laddas mina ljud upp till en server?',
      answer: 'Nej. Syntes och WAV-generering sker helt lokalt i din webbläsare.',
    },
    {
      question: 'Får jag använda ljuden i mina spel?',
      answer: 'Ja, ljuden är fria att använda i prototyper och speldemon.',
    },
    {
      question: 'Hur fungerar tonsvepet?',
      answer: 'Reglaget beräknar slutfrekvensen proportionellt mot starttonen.',
    },
    {
      question: 'Vad gör jag om inget ljud hörs?',
      answer: 'Kontrollera att webbläsarfliken tillåter ljud och klicka på Spela ljud igen.',
    },
  ],
  howTo: [
    {
      name: 'Välj förinställning',
      text: 'Välj Explosion, Laser, Hopp, Mynt eller Power-up.',
    },
    {
      name: 'Forma signalen',
      text: 'Justera vågform, tonhöjd, längd, avklingning och filter.',
    },
    {
      name: 'Lyssna på resultatet',
      text: 'Klicka på Spela ljud för att förhandsgranska.',
    },
    {
      name: 'Ladda ner WAV',
      text: 'Klicka på Ladda ner WAV för att spara ljudfilen.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Retro Ljudeffekt Generator för Spel',
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'SEK',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Laddas mina ljud upp till en server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nej. Syntes sker helt i din webbläsare.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Hur du skapar en retro ljudeffekt',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Välj förinställning',
          text: 'Välj en startpunkt.',
        },
      ],
    },
  ],
  bibliographyTitle: 'Referenser',
  bibliography: bibliographyEntries,
};
