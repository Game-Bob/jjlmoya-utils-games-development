import type { ToolLocaleContent } from '../../../types';
import type { AudioLoopPointFinderUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<AudioLoopPointFinderUI> = {
  slug: 'localizador-ponto-loop-audio-jogos',
  title: 'Localizador de Ponto de Loop de Áudio e Injetor de Metadados',
  description: 'Localize pontos exatos de loop de áudio, ajuste aos cruzamentos por zero para eliminar cliques e exporte arquivos WAV com metadados LOOPSTART e LOOPEND.',
  ui: {
    title: 'Localizador de Ponto de Loop de Áudio para Jogos',
    subtitle: 'Analisador interativo de forma de onda, detector de cruzamento por zero e etiquetador de metadados WAV',
    dropzoneTitle: 'Arraste o arquivo de áudio aqui ou clique para buscar',
    dropzoneSubtitle: 'Suporta faixas de áudio WAV, OGG, MP3 e FLAC',
    dropzoneButton: 'Selecionar Arquivo de Áudio',
    audioInfoTitle: 'Propriedades da Faixa de Áudio',
    durationLabel: 'Duração',
    sampleRateLabel: 'Taxa de Amostragem',
    channelsLabel: 'Canais de Áudio',
    totalSamplesLabel: 'Contagem Total de Amostras',
    loopControlsTitle: 'Configuração da Região de Loop',
    loopStartLabel: 'Marcador de Início de Loop',
    loopEndLabel: 'Marcador de Fim de Loop',
    loopDurationLabel: 'Duração do Loop',
    zeroCrossingLabel: 'Ajuste de Cruzamento por Zero',
    snapZeroCrossingButton: 'Ajustar ao Cruzamento por Zero Mais Próximo',
    playLoopButton: 'Previsualizar Loop Perfeito',
    pauseLoopButton: 'Pausar Reprodução',
    stopLoopButton: 'Parar Reprodução',
    exportWavButton: 'Exportar WAV com Metadados',
    sampleUnitLabel: 'Amostras',
    secondUnitLabel: 'Segundos',
    zoomLabel: 'Zoom da Forma de Onda',
    zoomInButton: 'Aproximar',
    zoomOutButton: 'Afasctar',
    resetZoomButton: 'Redefinir Visualização',
    noFileSelected: 'Nenhum arquivo de áudio carregado ainda',
    invalidAudioFile: 'Falha ao decodificar o arquivo de áudio',
    presetsTitle: 'Predefinições Rápidas',
    presetFullTrack: 'Loop da Faixa Completa',
    presetIntroCut: 'Ignorar 10% de Introdução',
    presetMiddleLoop: 'Seção Central 50%',
    statusLooping: 'Reprodução em Loop Ativa',
    statusPaused: 'Reprodução Em Pausa',
    statusReady: 'Áudio Carregado e Pronto',
    statusLoaded: 'Faixa de áudio carregada com sucesso',
    statusDecodeError: 'Erro ao decodificar o arquivo de áudio',
    statusSnapped: 'Marcadores ajustados aos pontos de cruzamento por zero',
    statusStopped: 'Reprodução parada',
    statusExported: 'Arquivo WAV exportado com tags de loop integradas',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Loop de Áudio Perfeito e Alinhamento de Amostras em Jogos',
    },
    {
      type: 'paragraph',
      html: 'Obter uma reprodução contínua de música de fundo em videogames requer alinhamento exato de amostras nos limites do loop. Motores modernos como Unity, Godot, Unreal Engine, FMOD e Wwise utilizam metadados integrados como LOOPSTART e LOOPEND.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Precisão de Amostragem', value: '44.1 kHz / 48 kHz' },
        { label: 'Limite de Cruzamento por Zero', value: 'Amplitude 0.00' },
        { label: 'Padrão de Metadados', value: 'RIFF smpl e INFO' },
        { label: 'Redução de Cliques', value: '100% Fase Alinhada' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Estratégia de Cruzamento por Zero',
    },
    {
      type: 'tip',
      title: 'Eliminação de Ruídos de Clique',
      html: 'Sempre alinhe os marcadores de início e fim de loop nos pontos de cruzamento por zero de inclinação positiva. Isso evita deslocamentos bruscos no alto-falante.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Comparativo de Compatibilidade de Metadados',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Marcador de Bloco RIFF smpl',
          description: 'Metadados binários integrados no cabeçalho WAV',
          points: [
            'Suportado nativamente por Godot, FMOD, Wwise e GameMaker',
            'Precisão exata por amostra sem desvio temporal',
            'Empacota os marcadores dentro do próprio arquivo WAV',
            'Elimina cliques acústicos com o ajuste por zero',
          ],
        },
        {
          title: 'Corte Manual de Áudio',
          description: 'Divisão de intro e loop em arquivos separados',
          points: [
            'Utilizado por reprodutores básicos sem leitura de metadados',
            'Sujeito a pequenas pausas e imprecisões milimétricas',
            'Requer gerenciar múltiplos arquivos no projeto',
            'Alto risco de cliques nas transições',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Tabela de Referência de Taxas de Amostragem',
    },
    {
      type: 'table',
      headers: ['Taxa Estreia', 'Amostras por Segundo', 'Uso Recomendado', 'Resolução Temporal'],
      rows: [
        ['44,100 Hz', '44,100', 'Trilha Sonora Padrão de Jogos em CD', '0.0226 ms por amostra'],
        ['48,000 Hz', '48,000', 'Jogos Modernos de PC e Consoles', '0.0208 ms por amostra'],
        ['96,000 Hz', '96,000', 'Arquivos de Áudio Master em Alta Definição', '0.0104 ms por amostra'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Injeção Automatizada de Metadados em Bytes',
    },
    {
      type: 'paragraph',
      html: 'Ao exportar faixas de áudio desta ferramenta, novas estruturas de metadatos são injetadas diretamente no cabeçalho RIFF do arquivo WAV.',
    },
    { type: 'title', level: 2, text: 'Avaliar a duração do loop e a transição de fase' },
    { type: 'paragraph', html: 'Um cruzamento por zero reduz saltos de amplitude, mas não garante sozinho uma transição musical natural. Ouça o início e o fim em sequência e confira ritmo, harmonia e cauda de reverberação durante a repetição.' },
    { type: 'paragraph', html: 'Os marcadores são armazenados em samples e não dependem do arredondamento em milissegundos. Depois da conferência auditiva, exporte o WAV e teste-o na engine que fará a reprodução no jogo.' },
  ],
  faqTitle: 'Perguntas Frequentes',
  faq: [
    {
      question: 'O que são as tags de metadados LOOPSTART e LOOPEND?',
      answer: 'LOOPSTART e LOOPEND são campos de metadados medidos em número absoluto de amostras.',
    },
    {
      question: 'Por que ocorrem cliques audíveis nos pontos de loop?',
      answer: 'Cliques ocorrem quando a forma de onda no marcador final não coincide com o nível de amplitude ou fase do início.',
    },
    {
      question: 'Meu arquivo de áudio original é enviado para algum servidor?',
      answer: 'Não. Todo o processamento e decodificação acontecem localmente na memória do seu navegador.',
    },
  ],
  howTo: [
    {
      name: 'Carregar Faixa de Áudio',
      text: 'Arraste e solte sua música ou selecione um arquivo WAV, OGG, MP3 ou FLAC.',
    },
    {
      name: 'Posicionar Marcadores',
      text: 'Ajuste o início e fim do loop através da visualização de forma de onda.',
    },
    {
      name: 'Ajustar aos Cruzamentos por Zero',
      text: 'Clique no botão de ajuste ao cruzamento por zero.',
    },
    {
      name: 'Testar e Exportar',
      text: 'Ouça a reprodução contínua e exporte o arquivo WAV.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Localizador de Ponto de Loop de Áudio para Jogos',
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
          name: 'O que são as tags de metadados LOOPSTART e LOOPEND?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'LOOPSTART e LOOPEND são campos de metadados medidos em número de amostras.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Como encontrar e injetar pontos de loop de áudio',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Carregar Faixa de Áudio',
          text: 'Arraste e solte sua música ou selecione um arquivo de áudio.',
        },
      ],
    },
  ],
  bibliographyTitle: 'Referências e Leitura Adicional',
  bibliography: bibliographyEntries,
};
