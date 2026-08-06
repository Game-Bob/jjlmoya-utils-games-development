import { createSteamContent } from './shared';

export const content = createSteamContent({
  slug: 'gerador-de-capsulas-steam',
  title: 'Gerador de cápsulas Steam',
  description: 'Crie quatro prévias para Steam a partir de uma imagem mestre, ajuste o ponto focal, confira as zonas seguras e baixe PNG ou ZIP localmente.',
  ui: { uploadTitle: 'Solte sua arte mestre', uploadHint: 'Uma imagem em alta resolução vira um conjunto completo de prévias dentro do navegador.', chooseFile: 'Escolher arte', minimumSize: 'Tamanho mínimo', supportedFormats: 'PNG, JPEG ou WebP', invalidImage: 'Escolha uma imagem com pelo menos 1920 por 1080 pixels.', sourcePreview: 'Arte mestre', focalPoint: 'Ponto focal', focalHint: 'Clique na arte ou use os controles para manter o assunto principal em cada recorte.', horizontalFocus: 'Horizontal', verticalFocus: 'Vertical', resetFocus: 'Centralizar foco', outputPreview: 'Conjunto de saídas Steam', safeZone: 'Zona segura', dimensions: 'pixels', downloadPng: 'PNG', downloadZip: 'Baixar ZIP', buildingZip: 'Criando seu arquivo ZIP local...', zipReady: 'Conjunto de cápsulas pronto', localOnly: 'Privacidade por padrão. Sua arte fica neste navegador.', headerCapsule: 'Cápsula de cabeçalho', mainCapsule: 'Cápsula principal', verticalCapsule: 'Cápsula vertical', communityIcon: 'Ícone da comunidade', ready: 'Pronto', downloadError: 'Não foi possível criar o arquivo. Tente os botões PNG.', },
  seo: [
    { type: 'title', text: 'Crie um conjunto coerente de cápsulas Steam', level: 2 },
    { type: 'paragraph', html: 'Uma ilustração pode funcionar no formato largo e cortar o personagem no formato vertical. Esta ferramenta mostra quatro recortes da mesma imagem mestre: cabeçalho 460 por 215, principal 616 por 353, vertical 374 por 448 e ícone quadrado 184 por 184 pixels. O ponto focal define qual parte da composição continua visível.' },
    { type: 'paragraph', html: 'O arquivo é processado localmente com canvas. Ele não é enviado e não há conta. Ao mover o marcador, as quatro prévias mudam juntas para que você confira logo, rosto, personagem e contraste antes de exportar.' },
    { type: 'title', text: 'Fluxo prático para arte de jogos', level: 2 },
    { type: 'list', items: ['Comece com uma imagem mestre de pelo menos 1920 por 1080 pixels.', 'Coloque o marcador no assunto visual, não sempre no centro geométrico.', 'Confira primeiro as versões vertical e quadrada.', 'Use as zonas seguras como margem e compare os modelos atuais do Steamworks.'] },
    { type: 'paragraph', html: 'As zonas seguras são guias de composição, não uma garantia para todas as telas do Steam. Mantenha logos e títulos longe das bordas carregadas e confira as regras da Valve para texto nas cápsulas.' },
    { type: 'tip', html: 'Guarde uma master com espaço ao redor do assunto. Se um recorte precisar de outra posição para o logo, altere a fonte e gere o conjunto novamente.' },
  ],
  faq: [
    { question: 'A imagem sai do meu dispositivo?', answer: 'Não. Ela é lida e desenhada no navegador. Não existe upload nem conta.' },
    { question: 'Que imagem mestre devo usar?', answer: 'PNG, JPEG ou WebP com pelo menos 1920 por 1080 pixels oferece mais espaço.' },
    { question: 'O que muda com o ponto focal?', answer: 'Ele desloca o recorte da fonte para todas as saídas e protege o assunto principal.' },
    { question: 'As zonas seguras são oficiais?', answer: 'São guias práticas. Compare os arquivos com os modelos atuais do Steamworks antes de publicar.' },
  ],
  howTo: [
    { name: 'Escolha uma master', text: 'Solte um PNG, JPEG ou WebP com pelo menos 1920 por 1080 pixels.' },
    { name: 'Ajuste o foco', text: 'Clique na prévia ou mova os controles horizontal e vertical.' },
    { name: 'Revise os quatro recortes', text: 'Confira cabeçalho, principal, vertical e ícone quadrado.' },
    { name: 'Baixe o conjunto', text: 'Baixe PNGs individuais ou crie um ZIP local.' },
  ],
});
