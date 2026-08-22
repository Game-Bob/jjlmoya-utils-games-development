import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HitboxHurtboxAnimatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'animador-hitboxes-hurtboxes-sprites';
const title = 'Animador de Hitbox e Hurtbox para Sprites';
const description = 'Desenhe camadas de colisão em cada quadro do seu sprite, pré-visualize sequências com papel vegetal, ajuste coordenadas exatas em pixels e exporte JSON neutro.';

const faq = [
  {
    question: 'Qual é a diferença entre uma hitbox e uma hurtbox?',
    answer: 'Uma hitbox define a área que aplica um ataque, enquanto uma hurtbox delimita a área vulnerável que recebe o dano. As pushboxes mantêm o afastamento entre personagens e as grabboxes definem o alcance de agarres.',
  },
  {
    question: 'Os meus arquivos de sprites saem do navegador?',
    answer: 'Não. As imagens são processadas e exportadas inteiramente no seu navegador. A ferramenta salva apenas preferências de edição no armazenamento local.',
  },
  {
    question: 'Qual sistema de coordenadas o arquivo JSON exportado utiliza?',
    answer: 'Cada quadro mede suas coordenadas em pixels tomando o canto superior esquerdo como origem (0,0). As dimensões armazenam valores positivos de x, y, largura e altura com seu próprio ponto pivô.',
  },
  {
    question: 'Posso editar folhas de sprites completas e quadros avulsos?',
    answer: 'Sim. Você pode carregar uma folha PNG ou WebP informando linhas e colunas, ou selecionar várias imagens ordenadas para criar a sequência.',
  },
  {
    question: 'O arquivo exportado funciona diretamente em qualquer motor de jogo?',
    answer: 'O formato JSON é neutro. Ele registra recortes de quadros, pontos pivô e camadas geométricas sem impor uma estrutura rígida de um motor específico.',
  },
];

const howTo = [
  { name: 'Carregar arte de animação', text: 'Selecione uma folha de sprites PNG/WebP ou imagens ordenadas. O processamento é realizado localmente no seu dispositivo.' },
  { name: 'Definir os quadros', text: 'Informe o número de linhas e colunas para folhas de sprites e confira a tira de quadros.' },
  { name: 'Desenhar camadas de colisão', text: 'Escolha uma camada de hitbox, hurtbox, pushbox ou sensor e desenhe retângulos ou círculos sobre o quadro.' },
  { name: 'Refinar movimento no tempo', text: 'Ajuste coordenadas numéricas, copie formas para quadros vizinhos e use o papel vegetal para comparar o movimento.' },
  { name: 'Exportar projeto', text: 'Baixe o arquivo JSON neutro e uma folha de contatos PNG. Mantenha as imagens originais junto ao arquivo JSON.' },
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

export const content: ToolLocaleContent<HitboxHurtboxAnimatorUI> = {
  slug,
  title,
  description,
  ui: {
    onboarding: 'Carregue uma animação, confirme o recorte dos quadros e desenhe as áreas de ataque, dano ou colisão física.',
    privacyNote: 'Mesa de animação local. As imagens não são enviadas para servidores.',
    loadSprite: 'Colocar arte na mesa de trabalho',
    loadHint: 'Escolha uma folha de sprites ou várias imagens PNG/WebP ordenadas.',
    chooseImages: 'Escolher imagens de sprite',
    slicingTitle: 'Divisão de quadros',
    rowsLabel: 'Linhas',
    columnsLabel: 'Colunas',
    applySlicing: 'Recortar quadros',
    playbackTitle: 'Prévia do movimento',
    previousFrame: 'Quadro anterior',
    play: 'Reproduzir',
    pause: 'Pausar',
    nextFrame: 'Próximo quadro',
    fpsLabel: 'Quadros por segundo',
    onionPrevious: 'Vegetal anterior',
    onionNext: 'Vegetal seguinte',
    layerTitle: 'Camadas de colisão',
    typeHitbox: 'Hitbox',
    typeHurtbox: 'Hurtbox',
    typePushbox: 'Pushbox',
    typeGrabbox: 'Grabbox',
    typeSensor: 'Sensor',
    typeCustom: 'Personalizado',
    shapeRectangle: 'Retângulo',
    shapeCircle: 'Círculo',
    drawShape: 'Desenhar',
    selectShape: 'Selecionar',
    stageLabel: 'Mesa de trabalho',
    emptyStage: 'Carregue imagens para começar a desenhar camadas de colisão.',
    frameReadout: 'Quadro {current} de {total}',
    timelineTitle: 'Tira de quadros',
    inspectorTitle: 'Inspetor de forma',
    noSelection: 'Selecione uma forma para editar suas dimensões exatas.',
    nameLabel: 'Nome da camada',
    xLabel: 'X em pixels',
    yLabel: 'Y em pixels',
    widthLabel: 'Largura em pixels',
    heightLabel: 'Altura em pixels',
    radiusLabel: 'Raio em pixels',
    duplicateShape: 'Duplicar',
    mirrorShape: 'Espelhar horizontalmente',
    deleteShape: 'Excluir forma',
    copyPrevious: 'Copiar quadro anterior aqui',
    copyAll: 'Copiar este quadro para todos',
    pivotTitle: 'Pivô do quadro',
    pivotXLabel: 'Pivô X',
    pivotYLabel: 'Pivô Y',
    exportTitle: 'Exportar projeto',
    exportJson: 'Baixar JSON',
    importJson: 'Importar JSON',
    exportContactSheet: 'Baixar folha de contatos',
    resetProject: 'Limpar camadas',
    undo: 'Desfazer',
    redo: 'Refazer',
    statusReady: 'A mesa de trabalho está pronta.',
    statusImageLoaded: '{count} arquivos de imagem carregados.',
    statusShapeCreated: 'Forma de colisão adicionada.',
    statusShapeUpdated: 'Forma atualizada.',
    statusImported: 'Projeto importado.',
    statusExported: 'Exportação pronta.',
    statusError: 'Não foi possível ler o arquivo.',
    framesBadge: '{count} quadros',
    shapesBadge: '{count} formas',
    coverageBadge: '{percent}% coberto',
    coordinatesNote: 'As coordenadas usam o canto superior esquerdo de cada quadro como origem (0,0).',
    localOnlyDisclosure: 'O JSON salva nomes de imagem, recortes, pivôs e geometrias sem conter dados de pixels.',
    limitationDisclosure: 'As camadas definem regiões geométricas de design. Teste o comportamento no seu motor de jogo.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Projete hitboxes e hurtboxes alinhadas ao movimento do sprite',
    },
    {
      type: 'paragraph',
      html: 'Configurar colisões torna-se complexo quando cada quadro é analisado isoladamente. Este editor reúne a imagem do sprite, camadas de colisão, papel vegetal e a linha do tempo para garantir a fluidez do movimento.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Escolha cada camada segundo a lógica do jogo',
    },
    {
      type: 'table',
      headers: ['Camada', 'Função principal', 'Ponto a verificar'],
      rows: [
        ['Hitbox', 'Área que aplica um ataque ou efeito', 'Aparece apenas nos quadros ativos previstos?'],
        ['Hurtbox', 'Área que recebe dano ou ataques', 'Acompanha o corpo do personagem sem lacunas?'],
        ['Pushbox', 'Área de colisão física entre personagens', 'Permanece estável para evitar solavancos?'],
        ['Grabbox', 'Alcance para iniciar um agarre', 'O tempo coincide com a animação visual?'],
        ['Sensor', 'Área de detecção de interações', 'O nome está suficientemente claro?'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Compreender e aplicar o sistema de coordenadas',
    },
    {
      type: 'paragraph',
      html: 'O projeto exportado mede X e Y a partir do canto superior esquerdo de cada quadro recortado. As dimensões são valores positivos em pixels.',
    },
    {
      type: 'tip',
      title: 'Verifique a sequência completa da animação',
      html: 'Reproduza a animação completa após alterar um quadro para garantir transições suaves.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Use a folha de contatos no trabalho em equipe',
    },
    {
      type: 'paragraph',
      html: 'A folha de contatos PNG exibe todos os quadros e suas camadas de cor em uma só imagem, facilitando a comunicação no time.',
    },
  ],
  faq,
  bibliographyTitle: 'Referências para desenvolvimento de colisões',
  bibliography: bibliographyEntries,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
};
