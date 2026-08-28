import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GameUiAccessibilityTesterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'testador-estresse-acessibilidade-ui-jogos';
const title = 'Testador de Estresse de Acessibilidade para UI de Jogos';
const description = 'Inspecione capturas de tela de jogos localmente com simulações de daltonismo, sondas de contraste HUD, desfoque, redução de escala e mapas de calor de bordas.';

const faq = [
  {
    question: 'Esta ferramenta certifica a acessibilidade da minha interface?',
    answer: 'Não. Ela combina simulações de visão de cores, medições de contraste e guias de revisão visual. Use os resultados para orientar o design e os testes com jogadores.',
  },
  {
    question: 'Minha captura de tela é enviada para algum servidor?',
    answer: 'Não. A imagem é decodificada, analisada e transformada inteiramente no seu navegador. Apenas as configurações de exibição são salvas localmente.',
  },
  {
    question: 'O que devo medir com as duas sondas de cor?',
    answer: 'Escolha duas cores que devem comunicar significados diferentes, como indicadores de aliado e inimigo, estados ativo e inativo ou níveis de raridade.',
  },
  {
    question: 'Por que uma boa taxa de contraste ainda exige revisão manual?',
    answer: 'Um par pode ter bom contraste numérico, mas um ícone pequeno, texto fino ou fundo em movimento ainda podem ser difíceis de identificar no jogo.',
  },
  {
    question: 'O que o mapa de calor mostra?',
    answer: 'O mapa de calor destaca áreas onde a separação de cores diminui acentuadamente após a simulação selecionada.',
  },
];

const howTo = [
  { name: 'Carregar captura de tela', text: 'Selecione uma imagem PNG, JPEG ou WebP do jogo. A imagem permanece na memória local do seu navegador.' },
  { name: 'Escolher lente de simulação', text: 'Compare o original com simulações de daltonismo, escala de cinza ou contraste reduzido.' },
  { name: 'Aplicar estresse visual', text: 'Adicione desfoque, reduza a escala de renderização, amplie os pixels ou ative o mapa de calor de bordas.' },
  { name: 'Amostrar dois sinais críticos', text: 'Selecione a Sonda A ou B e clique na imagem original para comparar duas cores.' },
  { name: 'Exportar observações', text: 'Consulte o guia de revisão, adicione notas e baixe uma folha comparativa e um relatório JSON.' },
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

export const content: ToolLocaleContent<GameUiAccessibilityTesterUI> = {
  slug,
  title,
  description,
  ui: {
    onboarding: 'Carregue uma captura de tela do jogo, escolha uma lente de simulação e compare dois sinais visuais que os jogadores precisam diferenciar claramente.',
    privacyNote: 'Análise local. As capturas de tela não são enviadas para servidores.',
    dropTitle: 'Arraste uma captura do jogo para a bancada de teste',
    dropHint: 'Solte uma imagem aqui ou escolha do seu dispositivo. Use um momento real do jogo com fundos e elementos visuais reais.',
    chooseImage: 'Escolher captura',
    replaceImage: 'Substituir captura',
    supportedFiles: 'PNG, JPEG ou WebP até 16 MB. Imagens grandes são ajustadas para 1600 px.',
    lensLabel: 'Lente de simulação',
    lensOriginal: 'Original',
    lensProtanopia: 'Protanopia',
    lensDeuteranopia: 'Deuteranopia',
    lensTritanopia: 'Tritanopia',
    lensAchromatopsia: 'Escala de cinza',
    lensReducedContrast: 'Contraste reduzido',
    lensDesaturation: 'Dessaturação',
    compareLabel: 'Modo de comparação',
    compareSideBySide: 'Lado a lado',
    compareSplit: 'Lente dividida',
    comparePress: 'Pressionar para revelar',
    holdOriginal: 'Segure para ver original',
    splitPosition: 'Posição da lente',
    stressLabel: 'Controles de estresse de sinal',
    blurLabel: 'Desfoque em pixels',
    downscaleLabel: 'Prévia de tela pequena',
    downscaleFull: 'Total',
    downscaleHalf: 'Metade',
    downscaleQuarter: 'Um quarto',
    downscaleEighth: 'Um oitavo',
    zoomLabel: 'Zoom de inspeção',
    heatmapLabel: 'Mapa de calor de bordas',
    heatmapHint: 'Destaca perdas de separação de cores sob a lente ativa.',
    originalView: 'Sinal original',
    simulatedView: 'Sinal simulado',
    emptyCanvas: 'Selecione uma captura para ativar a comparação. A imagem permanece no seu dispositivo.',
    sampleTitle: 'Sondas de sinal crítico',
    sampleInstructions: 'Selecione A ou B e clique na imagem original para amostrar as cores.',
    sampleA: 'Sonda A',
    sampleB: 'Sonda B',
    sampleAName: 'Significado da sonda A',
    sampleBName: 'Significado da sonda B',
    manualColor: 'Definir cor diretamente',
    sampleAInitial: 'Marcador aliado',
    sampleBInitial: 'Marcador inimigo',
    noSample: 'Aguardando captura',
    originalContrast: 'Contraste original',
    simulatedContrast: 'Contraste simulado',
    separationRetained: 'Separação mantida',
    statusStrong: 'Sinal bem distinto',
    statusWatch: 'Verificar no contexto',
    statusReview: 'Revisar design do sinal',
    statusPending: 'Sem dados',
    measurementLabel: 'Medição',
    heuristicLabel: 'Heurística',
    manualReviewLabel: 'Status de revisão',
    measurementHint: 'Calcula a taxa de contraste de luminância relativa WCAG para as duas cores amostradas.',
    heuristicHint: 'Compara a distância de cores antes e depois da simulação de visão.',
    promptTitle: 'Guia de revisão da interface',
    promptColorOnly: 'Os jogadores conseguem identificar elementos sem depender apenas da cor?',
    promptChangingBackground: 'O texto permanece legível sobre fundos claros, escuros ou em movimento?',
    promptMinimap: 'Os ícones do minimapa se diferenciam por forma ou padrão além da cor?',
    promptStates: 'Os estados selecionado, desativado e recarga são inequívocos?',
    promptShape: 'Um ícone, texto ou som reforça cada sinal de cor?',
    findingLabel: 'Nota da equipe',
    findingPlaceholder: 'Exemplo: O contorno do inimigo desaparece sobre o efeito vermelho',
    addFinding: 'Adicionar nota',
    findingsEmpty: 'Nenhuma nota registrada até o momento.',
    exportSheet: 'Baixar folha comparativa',
    exportReport: 'Baixar relatório JSON',
    resetTool: 'Reiniciar sessão',
    uploadError: 'Não foi possível ler a imagem. Escolha um arquivo PNG, JPEG ou WebP válido.',
    fileTooLarge: 'A imagem excede 16 MB. Escolha um arquivo menor.',
    imageReady: 'Captura carregada. Selecione duas sondas de cor para começar.',
    reportDownloaded: 'Relatório JSON baixado.',
    sheetDownloaded: 'Folha comparativa baixada.',
    localOnlyDisclosure: 'Processamento 100% local no seu navegador. Nenhuma imagem é enviada.',
    limitationDisclosure: 'Esta ferramenta auxilia na revisão de design, mas não substitui testes com jogadores.',
    reportTitle: 'Relatório de revisão de acessibilidade de UI de jogo',
    reportFindingReview: 'O par de cores perdeu contraste significativo sob a simulação.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Avaliar a acessibilidade da UI do seu jogo sem enviar imagens',
    },
    {
      type: 'paragraph',
      html: 'As interfaces de jogos precisam ser legíveis em condições visuais dinâmicas. Este testador local permite analisar capturas de tela diretamente no navegador por meio de simulações de daltonismo.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Medições, heurísticas e avaliação humana',
    },
    {
      type: 'table',
      headers: ['Tipo de evidência', 'O que esta ferramenta oferece', 'O que ela não garante'],
      rows: [
        ['Medição', 'Taxa de contraste e luminância relativa WCAG para duas cores', 'Conformidade automática de todo o jogo'],
        ['Simulação', 'Transformações para protanopia, deuteranopia e tritanopia', 'A experiência visual exata de cada jogador'],
        ['Heurística', 'Desfoque, redução de escala e detecção de perda de bordas', 'Avaliação automática da qualidade da UI'],
        ['Revisão manual', 'Guia de perguntas e relatórios exportáveis', 'Substituição de testes reais com jogadores'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Amostre cores que influenciam as decisões do jogador',
    },
    {
      type: 'paragraph',
      html: 'Foque seus testes em pares de cores vitais para o jogo, como aliado e inimigo. Se o contraste diminuir na simulação, adicione ícones ou formas de suporte.',
    },
    {
      type: 'tip',
      title: 'Teste capturas de momentos intensos do jogo',
      html: 'Utilize imagens tiradas durante a ação real do jogo em vez de artes estáticas limpas para obter resultados mais realistas.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Use o relatório exportado no trabalho em equipe',
    },
    {
      type: 'paragraph',
      html: 'O relatório JSON e a folha comparativa PNG podem ser anexados às tarefas de desenvolvimento para facilitar a correção de problemas de UI.',
    },
    { type: 'paragraph', html: 'Registre a cena, a resolução e o par de cores analisado. A simulação ajuda a encontrar problemas de design cedo, mas não substitui testes com cenas reais, telas diferentes e pessoas com condições visuais variadas.' },
    { type: 'paragraph', html: 'Veja a mesma interface na escala final e durante o movimento. Anote quais sinais desaparecem quando o fundo muda e combine cor com forma, padrão, texto ou som. Assim, o relatório gera ações concretas de design em vez de ficar limitado a um único número de contraste.' },
  ],
  faq,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
  bibliography: bibliographyEntries,
};
