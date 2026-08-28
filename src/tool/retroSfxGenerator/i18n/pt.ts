import type { ToolLocaleContent } from '../../../types';
import type { RetroSfxGeneratorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<RetroSfxGeneratorUI> = {
  slug: 'gerador-efeitos-sonoros-retro-jogos',
  title: 'Gerador de Efeitos Sonoros Retrô para Jogos',
  description: 'Crie efeitos sonoros retrô para jogos no navegador com predefinições rápidas, controles de onda, osciloscópio ao vivo e exportação WAV.',
  ui: {
    waveformLabel: 'Forma de onda',
    waveformSquare: 'Quadrada',
    waveformSawtooth: 'Dente de serra',
    waveformSine: 'Senoidal',
    waveformTriangle: 'Triangular',
    waveformNoise: 'Ruído',
    presetLabel: 'Banco de sons rápidos',
    presetExplosion: 'Explosão',
    presetLaser: 'Laser',
    presetJump: 'Salto',
    presetCoin: 'Moeda',
    presetPowerUp: 'Power-up',
    frequencyLabel: 'Frequência inicial',
    frequencyEndLabel: 'Frequência final',
    durationLabel: 'Duração',
    decayLabel: 'Decaimento',
    sweepLabel: 'Varrimento de tom',
    vibratoLabel: 'Vibrato',
    lowpassLabel: 'Passa-baixas',
    highpassLabel: 'Passa-altas',
    noiseMixLabel: 'Mistura de ruído',
    toneSection: 'Tom',
    dynamicsSection: 'Dinâmica',
    filterSection: 'Textura',
    playButton: 'Reproduzir som',
    stopButton: 'Parar',
    downloadButton: 'Baixar WAV',
    randomizeButton: 'Aleatório',
    resetButton: 'Redefinir',
    waveformPreviewLabel: 'Forma de onda ao vivo',
    generatedLabel: 'Gerado',
    statusReady: 'Pronto para ouvir',
    statusPlaying: 'Reproduzindo no navegador',
    statusStopped: 'Reprodução parada',
    statusDownloaded: 'WAV baixado',
    statusAudioBlocked: 'A reprodução requer permissão de áudio na aba do navegador',
    statusGenerating: 'Renderizando som',
    presetHint: 'Escolha um ponto de partida e ajuste o sinal com os controles abaixo.',
    monoWavHint: '44.1 kHz · WAV mono de 16 bits',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Crie áudio para jogos durante uma Game Jam sem sair do navegador',
    },
    {
      type: 'paragraph',
      html: 'Um bom efeito sonoro para jogos precisa comunicar uma ação instantaneamente. Uma subida de tom expressa um salto ou power-up, uma queda rápida sugere um laser e um som ruidoso com decaimento simula uma explosão. Este gerador converte esses padrões arcade em áudio editável no navegador.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Predefinições', value: '5 padrões iniciais' },
        { label: 'Osciladores', value: '5 formas de onda' },
        { label: 'Formato exportado', value: 'WAV PCM de 16 bits' },
        { label: 'Processamento', value: 'No navegador' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'O que cada controle altera',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Tom e movimento',
          description: 'Os controles de tom definem a identidade do som.',
          points: [
            'A frequência inicial estabelece o tom base do oscilador',
            'O varrimento de tom move a frequência até o valor final',
            'O vibrato adiciona uma oscilação suave de tom',
            'Diferentes formas de onda criam texturas harmônicas únicas',
          ],
        },
        {
          title: 'Forma e textura',
          description: 'A dinâmica e os filtros definem o encerramento do som.',
          points: [
            'A duração controla o tempo total do efeito',
            'O decaimento reduz a amplitude gradualmente',
            'O filtro passa-baixas suaviza frequências altas',
            'O filtro passa-altas remove frequências graves',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Receitas práticas para eventos de jogos',
    },
    {
      type: 'table',
      headers: ['Evento', 'Predefinição útil', 'Primeiro ajuste recomendado'],
      rows: [
        ['Explosão', 'Ruído em baixa frequência', 'Aumentar a duração e diminuir o filtro passa-baixas'],
        ['Laser', 'Dente de serra com varrimento descendente', 'Encurtar a duração e elevar o filtro passa-altas'],
        ['Salto', 'Quadrada com varrimento ascendente', 'Reduzir o decaimento para manter o tom perceptível'],
        ['Moeda', 'Quadrada com varrimento curto', 'Elevar a frequência inicial para um som brilhante'],
        ['Power-up', 'Triangular com varrimento longo', 'Adicionar um pouco de vibrato para dar movimento'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Por que o WAV é ideal para protótipos',
    },
    {
      type: 'paragraph',
      html: 'O formato WAV é aceito nativamente em motores de jogos e editores de áudio sem necessidade de bibliotecas adicionais.',
    },
    {
      type: 'tip',
      title: 'Teste no volume real do jogo',
      html: 'Sons isolados podem soar ótimos, mas ser cansativos quando repetidos com frequência no jogo. Teste diretamente na engine.',
    },
    { type: 'paragraph', html: 'Ouça o som também na mixagem real do jogo: um efeito brilhante pode funcionar sozinho e ainda mascarar diálogos ou música. Confira volume, clipping e duração antes de tratá-lo como asset final.' },
  ],
  faqTitle: 'Perguntas Frequentes',
  faq: [
    {
      question: 'Os meus sons são enviados para um servidor?',
      answer: 'Não. A síntese e a codificação do WAV ocorrem inteiramente no seu navegador.',
    },
    {
      question: 'Posso usar esses sons no meu jogo?',
      answer: 'Sim, os sons gerados são adequados para protótipos, game jams e jogos independentes.',
    },
    {
      question: 'Como funciona o varrimento de tom?',
      answer: 'O controle calcula a frequência final de forma proporcional em relação ao tom inicial.',
    },
    {
      question: 'O que fazer se não houver som?',
      answer: 'Verifique se a aba do navegador tem permissão para áudio e clique em Reproduzir som novamente.',
    },
  ],
  howTo: [
    {
      name: 'Escolha uma predefinição',
      text: 'Selecione Explosão, Laser, Salto, Moeda ou Power-up.',
    },
    {
      name: 'Ajuste o sinal',
      text: 'Modifique a onda, tom, duração, decaimento e filtros.',
    },
    {
      name: 'Ouça o resultado',
      text: 'Clique em Reproduzir som para ouvir em tempo real.',
    },
    {
      name: 'Baixe o arquivo WAV',
      text: 'Clique em Baixar WAV para salvar o arquivo no seu computador.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Gerador de Efeitos Sonoros Retrô para Jogos',
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Os meus sons são enviados para um servidor?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Não. A síntese ocorre inteiramente no seu navegador.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Como criar um efeito sonoro retrô',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Escolha uma predefinição',
          text: 'Selecione um padrão inicial.',
        },
      ],
    },
  ],
  bibliographyTitle: 'Referências',
  bibliography: bibliographyEntries,
};
