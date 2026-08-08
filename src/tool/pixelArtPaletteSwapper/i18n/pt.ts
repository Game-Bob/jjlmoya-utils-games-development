import type { ToolLocaleContent } from '../../../types';
import type { PixelArtPaletteSwapperUI } from '../ui';

export const content: ToolLocaleContent<PixelArtPaletteSwapperUI> = {
  slug: 'troca-paleta-pixel-art',
  title: 'Troca de Paleta para Pixel Art',
  description: 'Reduza sprites e folhas de sprites para paletas clássicas de consoles ou uma lista personalizada de cores hexadecimais no navegador.',
  ui: {
    uploadTitle: 'Arraste um sprite ou folha de sprites',
    uploadHint: 'PNG, JPEG ou WebP processados no seu dispositivo',
    chooseImage: 'Escolher imagem',
    replaceImage: 'Substituir imagem',
    paletteTitle: 'Escolher paleta',
    gameBoyPalette: 'Game Boy',
    nesPalette: 'Inspirada no NES',
    pico8Palette: 'PICO-8',
    commodore64Palette: 'Commodore 64',
    dawnBringerPalette: 'DawnBringer 16',
    customPalette: 'Cores personalizadas',
    customPaletteHint: 'Separa valores hexadecimais por vírgulas, espaços ou quebras de linha.',
    applyCustomPalette: 'Aplicar paleta',
    resetCustomPalette: 'Redefinir',
    sourcePreview: 'Original',
    resultPreview: 'Resultado reduzido',
    waitingForImage: 'Aguardando uma imagem',
    uploadToPreview: 'Envie uma imagem para visualizar',
    resultEmpty: 'As versões original e reduzida aparecerão lado a lado.',
    downloadPng: 'Baixar PNG',
    downloadDisabled: 'Envie uma imagem para habilitar a exportação.',
    colorCount: 'Cores originais',
    mappedCount: 'Cores usadas',
    imageSize: 'Tamanho da imagem',
    paletteCount: 'cores da paleta',
    preserveAlpha: 'Preservar transparência',
    zoomLabel: 'Zoom',
    processing: 'Mapeando pixels',
    invalidPalette: 'Adicione pelo menos uma cor hexadecimal válida',
    invalidImage: 'Escolha uma imagem PNG, JPEG ou WebP',
    readyStatus: 'Pronto',
    dropActive: 'Solte para carregar',
    mappedSummary: 'Mapeadas {source} cores originais para {mapped} cores da paleta',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Converta um Sprite Colorido em uma Paleta Retro Definida',
    },
    {
      type: 'paragraph',
      html: 'Uma paleta limitada é muito mais do que uma restrição técnica. Ela dá ao sprite um vocabulário de cores coerente, faz com que os elementos de uma cena pareçam pertencer ao mesmo universo e sugere o caráter visual de um console ou hardware clássico específico. Este alterador de paleta no navegador permite comparar a imagem original com uma versão reduzida enquanto você experimenta com Game Boy, inspiradas no NES, PICO-8, Commodore 64, DawnBringer 16 e listas personalizadas.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Como Funciona o Mapeamento pela Cor Mais Próxima',
    },
    {
      type: 'paragraph',
      html: 'A ferramenta lê os canais vermelho, verde e azul de cada pixel visível e compara essa cor com cada valor presente na paleta selecionada. Ela escolhe a entrada da paleta com a menor distância RGB ao quadrado e escreve a cor de substituição em um novo buffer de tela. O canal alfa é mantido separado, de modo que os pixels transparentes permanecem transparentes e as bordas parcialmente transparentes conservam sua opacidade original quando a opção Preservar transparência está ativa.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Redução de paleta',
          description: 'Cada cor original é substituída pela amostra disponível mais próxima.',
          points: [
            'Rápido e previsível para sprites, ícones, elementos de mapas e interfaces',
            'Conserva exatamente as dimensões e as posições dos pixels originais',
            'Facilita a verificação e o controle de um orçamento de cores estabelecido',
          ],
        },
        {
          title: 'Troca de paleta (Palette Swapping)',
          description: 'A mesma ilustração pode ser remapeada para outro conjunto de cores cuidadosamente escolhido.',
          points: [
            'Útil para trajes alternativos, variações de biomas e estados de dano',
            'Listas hexadecimais personalizadas permitem adequar-se à sua própria direção artística',
            'O arquivo PNG baixado está pronto para ser reimportado no seu editor',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Escolhendo uma Paleta para Pixel Art',
    },
    {
      type: 'table',
      headers: ['Paleta', 'Cores', 'Uso recomendado', 'Aspectos a considerar'],
      rows: [
        ['Game Boy', '4', 'Estilo monocromático portátil e estudos de valores bem definidos', 'A gama reduzida de valores pode fundir materiais com tonalidades próximas'],
        ['Inspirada no NES', '16', 'Sprites marcantes estilo arcade, personagens e cenários', 'Cores muito brilhantes podem se sobrepor a detalhes pequenos'],
        ['PICO-8', '16', 'Pixel art moderno com acentos de cores saturadas', 'Tonalidades muito saturadas exigem um contraste intencional'],
        ['Commodore 64', '16', 'Cenas retro suaves e estética de computadores clássicos', 'Baixo contraste se beneficia de silhuetas bem definidas'],
        ['DawnBringer 16', '16', 'Paleta artesanal versátil para uso geral em pixel art', 'Rampas de cores ainda exigem uma direção de luz clara'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Fluxo de Trabalho Prático para Folhas de Sprites',
    },
    {
      type: 'paragraph',
      html: 'Comece com a maior imagem original que você consiga editar confortavelmente, e em seguida envie o sprite ou folha de sprites exportada para cá. Selecione uma predefinição para definir o estilo visual ou cole uma lista personalizada de uma biblioteca de cores. Inspecione ambas as telas em um nível de ampliação maior para verificar se houve perda de detalhes faciais, contornos fundidos ou pontos de luz que não se destacam mais. Se o resultado parecer apagado, tente uma paleta com saltos de valor mais acentuados ou adicione uma cor de destaque intencional.',
    },
    {
      type: 'tip',
      title: 'Mantenha uma Paleta Intencional',
      html: 'Uma lista de cores maior não é automaticamente melhor. Comece com 4 a 16 cores, atribua uma função clara a cada cor e reserve os valores mais brilhantes para pontos focais ou destaques bem legíveis. O algoritmo da cor mais próxima preserva as posições dos pixels, mas não pode decidir quais cores devem estruturar a hierarquia visual do seu sprite.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Lista de Verificação para Exportação de Pixel Art',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Antes de Importar o Arquivo PNG Reduzido',
      html: 'Verifique o resultado em escala de 100 por cento e no tamanho final dentro do jogo, confirme se as bordas transparentes continuam limpas, verifique se as silhuetas importantes permanecem bem legíveis e conserve o arquivo original ao lado do exportado para poder ajustar a paleta sem ter que recomeçar do zero.',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Quantização de cor',
          definition: 'O processo de redução de um amplo conjunto de cores originais para um conjunto menor e definido.',
        },
        {
          term: 'Rampa de paleta',
          definition: 'Uma sequência ordenada de tons escuros, médios e claros usada para sombrear uma superfície ou material.',
        },
        {
          term: 'Paleta indexada',
          definition: 'Uma tabela de cores compacta em que os pixels fazem referência a índices em uma lista compartilhada em vez de armazenar cores completas.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'A ferramenta envia minhas imagens para um servidor?',
      answer: 'Não. A imagem é decodificada em uma tela no seu navegador, mapeada localmente em JavaScript e exportada diretamente como PNG. A ferramenta não possui etapa de envio externo.',
    },
    {
      question: 'Posso usar minha própria paleta personalizada?',
      answer: 'Sim. Cole códigos hexadecimais de 6 ou 3 dígitos no campo Cores personalizadas, separados por vírgulas, espaços ou quebras de linha, e selecione Aplicar paleta.',
    },
    {
      question: 'O tamanho do meu sprite é alterado?',
      answer: 'Não. O arquivo exportado mantém a largura, a altura, as posições dos pixels e os valores alfa originais quando a opção Preservar transparência está ativa.',
    },
    {
      question: 'Qual algoritmo é utilizado?',
      answer: 'Cada pixel visível é atribuído à cor mais próxima na paleta selecionada usando a distância euclidiana ao quadrado no espaço RGB. É um método rápido, determinístico e fácil de previsualizar, que não aplica pontilhado (dithering) ou correção cromática perceptual Lab.',
    },
  ],
  howTo: [
    {
      name: 'Carregar um sprite',
      text: 'Arraste um sprite ou folha de sprites PNG, JPEG ou WebP para a área de trabalho ou use o botão Escolher imagem.',
    },
    {
      name: 'Escolher uma paleta',
      text: 'Selecione uma predefinição clássica ou insira suas próprias cores hexadecimais. O resultado é atualizado instantaneamente.',
    },
    {
      name: 'Comparar e exportar',
      text: 'Inspecione a tela original e a reduzida, ajuste a ampliação e baixe o resultado em formato PNG.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Troca de Paleta para Pixel Art',
      applicationCategory: 'DesignApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'A ferramenta envia minhas imagens para um servidor?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Não. A imagem é processada localmente no navegador e exportada diretamente como PNG.',
          },
        },
        {
          '@type': 'Question',
          name: 'Posso usar minha própria paleta personalizada?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sim. Insira códigos hexadecimais no campo Cores personalizadas e aplique a paleta.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Como reduzir um sprite para uma paleta retro',
      step: [
        { '@type': 'HowToStep', name: 'Carregar um sprite', text: 'Arraste um arquivo para a área de trabalho.' },
        { '@type': 'HowToStep', name: 'Escolher uma paleta', text: 'Selecione uma predefinição ou insira suas cores.' },
        { '@type': 'HowToStep', name: 'Comparar e exportar', text: 'Inspecione o resultado e baixe o arquivo PNG.' },
      ],
    },
  ],
  bibliography: [
    {
      name: 'MDN Canvas API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
    },
    {
      name: 'Lospec Palette List',
      url: 'https://lospec.com/palette-list',
    },
    {
      name: 'W3C Portable Network Graphics Specification',
      url: 'https://www.w3.org/TR/png-3/',
    },
  ],
};
