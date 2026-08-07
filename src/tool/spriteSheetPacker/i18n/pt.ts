import type { ToolLocaleContent } from '../../../types';
import type { SpriteSheetPackerUI } from '../ui';

export const content: ToolLocaleContent<SpriteSheetPackerUI> = {
  slug: 'empacotador-e-extrator-de-sprite-sheet',
  title: 'Empacotador e Extrator de Sprite Sheet',
  description:
    'Otimize o desempenho de jogos 2D alinhando frames de animação em atlas de textura ou extraindo sprites de folhas existentes.',
  ui: {
    packerTab: 'Estúdio de Empacotamento',
    extractorTab: 'Extrator de Sprites',
    dropZoneTitle: 'Arraste e Solte os Frames',
    dropZoneSubtitle: 'Envie imagens PNG ou WebP para gerar seu atlas de textura otimizado',
    selectFilesButton: 'Selecionar Imagens',
    clearAllButton: 'Limpar Área de Trabalho',
    downloadZipButton: 'Baixar Pacote (ZIP)',
    copyJsonButton: 'Copiar JSON do Atlas',
    downloadSheetPngButton: 'Baixar Textura PNG',
    paddingLabel: 'Espaçamento de Frames (px)',
    borderExtrusionLabel: 'Extrusão de Borda (px)',
    maxTextureSizeLabel: 'Dimensão Máxima da Textura',
    powerOfTwoLabel: 'Forçar Potência de 2 (POT)',
    trimTransparencyLabel: 'Cortar Transparência',
    exportFormatLabel: 'Formato do Motor Alvo',
    presetPixelArt: 'Preset Pixel Art 16x16',
    presetHdUi: 'Preset Atlas HD UI 1024',
    presetMobile: 'Preset Mobile WebGL 2048',
    formatGenericHash: 'JSON Genérico (Hash)',
    formatGenericArray: 'JSON Genérico (Array)',
    formatUnity: 'Motor Unity 2D',
    formatGodot: 'Motor Godot 2D',
    formatPhaser: 'Motor Phaser / PixiJS',
    formatCss: 'CSS Web Frontend',
    previewTitle: 'Pré-visualização do Atlas de Textura',
    efficiencyBadge: 'Eficiência da Textura',
    drawCallsBadge: 'Redução de Draw Calls',
    totalFramesBadge: 'Frames Empacotados',
    textureSizeBadge: 'Dimensão do Atlas',
    flipbookTitle: 'Reprodutor Flipbook de Animação',
    flipbookFpsLabel: 'Velocidade da Animação (FPS)',
    playAnimation: 'Iniciar Sequência',
    pauseAnimation: 'Pausar Sequência',
    extractorModeGrid: 'Corte por Grade Fixa',
    extractorModeAlpha: 'Corte Automático por Canal Alfa',
    frameWidthLabel: 'Largura do Frame (px)',
    frameHeightLabel: 'Altura do Frame (px)',
    marginLabel: 'Margem Externa (px)',
    spacingLabel: 'Espaçamento da Grade (px)',
    extractFramesButton: 'Extrair Imagens',
    extractedCountLabel: 'Sprites Extraídos',
    codeSnippetTitle: 'Código de Integração do Motor',
    copySnippetButton: 'Copiar Código',
    copiedToast: 'Copiado para a Área de Transferência',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Otimização de Renderização e Draw Calls em Motores de Jogos 2D',
    },
    {
      type: 'paragraph',
      html: 'Agrupar múltiplos frames individuais em um único atlas de textura reduz drasticamente o número de instruções draw calls enviadas do processador para a placa gráfica GPU.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '95%', label: 'Redução de Draw Calls' },
        { value: '4x', label: 'Processamento GPU Mais Rápido' },
        { value: '60 FPS', label: 'Meta Estável em Dispositivos Móveis' },
        { value: '100%', label: 'Processamento Local no Navegador' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Comparativo entre Imagens Avulsas e Atlas de Textura',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Arquivos de Frames Avulsos',
          description: 'Arquivos PNG ou WebP armazenados separadamente',
          points: [
            'Gera uma instrução draw call separada para cada frame exibido na tela',
            'Provoca trocas frequentes de contexto na placa de vídeo GPU',
            'Aumenta o número de requisições HTTP em jogos para web',
            'Queda de taxa de quadros em dispositivos móveis',
          ],
        },
        {
          title: 'Atlas de Textura Empacotado',
          description: 'Imagem PNG única combinada com dados de coordenadas JSON',
          points: [
            'Agrupa centenas de sprites em uma única instrução draw call da GPU',
            'Maximiza a largura de banda da memória VRAM e a velocidade de renderização',
            'Reduz requisições agrupando textura e dados em um único download',
            'Garante 60 FPS fluídos em todas as plataformas',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Matemática da Extrusão de Bordas e Movimento Subpixel',
    },
    {
      type: 'paragraph',
      html: 'Aplicar 1 a 2 pixels de extrusão de borda duplica os pixels externos da imagem, evitando linhas visíveis quando a câmera se move em subpixels.',
    },
    {
      type: 'tip',
      title: 'Estratégia de Extrusão de Bordas',
      html: 'Utilize extrusão de bordas para impedir que pixels vizinhos vazem ao movimentar a câmera 2D.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Dimensões Recomendadas de Textura por Plataforma',
    },
    {
      type: 'table',
      headers: ['Plataforma Alvo', 'Tamanho Máximo Recomendado', 'Requisito Potência de 2', 'Perfil de Memória'],
      rows: [
        ['Navegadores Móveis', '2048 x 2048 px', 'Obrigatório em WebGL 1.0', 'Baixa Largura de Banda'],
        ['PC / Consoles', '4096 x 4096 px', 'Recomendado', 'Alta Capacidade de GPU'],
        ['Consoles Portáteis Retro', '1024 x 1024 px', 'Requisito Estrito', 'Limites de VRAM Rigorosos'],
      ],
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Garante 100% de compatibilidade com drivers antigos e WebGL 1.0',
          con: 'Pode deixar espaço transparente não utilizado com poucos sprites',
        },
        {
          pro: 'Suporta geração automática de mipmaps por hardware',
          con: 'Exige ajuste fino de margem em formatos irregulares',
        },
        {
          pro: 'Otimiza a alocação de memória VRAM na placa gráfica',
          con: 'Aumenta ligeiramente a área de textura inicial',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Termos Chave no Empacotamento de Sprites',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Draw Call',
          definition: 'Instrução enviada pelo processador para a placa gráfica desenhar geometrias e texturas.',
        },
        {
          term: 'Bin Packing',
          definition: 'Técnica algorítmica para organizar elementos retangulares de forma otimizada em espaço mínimo.',
        },
        {
          term: 'Border Extrusion',
          definition: 'Duplicação dos pixels da borda para fora evitando imperfeições ao mover a câmera.',
        },
        {
          term: 'Flipbook Animation',
          definition: 'Reprodução sequencial rápida de quadros estáticos para simular movimento contínuo.',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Lista de Controle de Desempenho',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Regras de Produção',
      html: 'Agrupe animações em atlas compartilhados e utilize potências de dois para builds em WebGL.',
    },
  ],
  faq: [
    {
      question: 'O que é um sprite sheet e por que é essencial em jogos 2D?',
      answer:
        'Um sprite sheet é um arquivo de imagem composto contendo múltiplos frames de animação. Isso permite desenhar vários elementos em uma única instrução da GPU.',
    },
    {
      question: 'Como funciona o processamento local nesta ferramenta?',
      answer:
        'Suas imagens são processadas localmente no seu navegador através da API Canvas HTML5 sem enviar dados a servidores externos.',
    },
    {
      question: 'Posso extrair frames de uma folha de sprites existente?',
      answer:
        'Sim. Mude para o modo Extrator, envie sua folha e ajuste o tamanho da grade para recortar cada imagem.',
    },
  ],
  howTo: [
    {
      name: 'Enviar Imagens',
      text: 'Arraste e solte seus arquivos PNG ou WebP na área de carregamento.',
    },
    {
      name: 'Ajustar Configurações',
      text: 'Configure o espaçamento, a extrusão de borda e a dimensão máxima da textura.',
    },
    {
      name: 'Pré-visualizar e Baixar',
      text: 'Verifique a animação no reprodutor flipbook e baixe seu arquivo ZIP.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Empacotador e Extrator de Sprite Sheet',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'O que é um sprite sheet e por que é essencial em jogos 2D?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Um sprite sheet é um arquivo de imagem composto contendo múltiplos frames de animação que permite desenhar vários elementos em uma única instrução da GPU.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Como empacotar e extrair sprite sheets',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Enviar Imagens',
          text: 'Arraste e solte seus arquivos PNG ou WebP na área de carregamento.',
        },
      ],
    },
  ],
  bibliography: [
    {
      name: 'Godot Engine 2D Sprite Sheets Documentation',
      url: 'https://docs.godotengine.org/en/stable/tutorials/2d/2d_sprite_animation.html',
    },
    {
      name: 'Unity Sprite Atlas Manual',
      url: 'https://docs.unity3d.com/Manual/class-SpriteAtlas.html',
    },
  ],
};
