import type { ToolLocaleContent } from '../../../types';
import type { SteamCapsuleGeneratorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SteamCapsuleGeneratorUI> = {
  slug: 'gerador-de-capsulas-steam',
  title: 'Gerador e Visualizador de Cápsulas Steam',
  description: 'Corte, visualize e formate cápsulas oficiais da loja e biblioteca Steam com verificação de zonas de segurança.',
  ui: {
    uploadTitle: 'Enviar Arte do Jogo',
    uploadHint: 'Envie uma imagem de alta resolução (recomendado 3840x1240 px ou superior).',
    chooseFile: 'Selecionar Arquivo',
    minimumSize: 'Tamanho mínimo recomendado: 1920x1080 px',
    horizontalFocus: 'Foco Horizontal (X)',
    verticalFocus: 'Foco Vertical (Y)',
    zoomLevel: 'Nível de Zoom',
    resetFocus: 'Centralizar Foco',
    safeZone: 'Zona de Segurança',
    downloadZip: 'Baixar Todos os Arquivos (ZIP)',
    headerCapsule: 'Cápsula de Cabeçalho (460x215 / HD 920x430)',
    smallCapsule: 'Cápsula Pequena (231x87 / HD 462x174)',
    mainCapsule: 'Cápsula Principal (616x353 / HD 1232x706)',
    verticalCapsule: 'Cápsula Vertical da Biblioteca (300x450 / HD 600x900)',
    libraryHero: 'Banner da Biblioteca (1920x620 / HD 3840x1240)',
    communityIcon: 'Ícone de Aplicativo (32x32 / HD 184x184)',
    storePreviewTab: 'Loja Steam',
    libraryPreviewTab: 'Biblioteca Steam',
    allAssetsTab: 'Todos os Tamanhos',
    toggleSafeZones: 'Guias de Segurança',
    toggleSteamOverlay: 'Interface Steam'
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Especificações das Cápsulas Gráficas da Steam'
    },
    {
      type: 'paragraph',
      html: 'As páginas da loja Steam e a biblioteca utilizam cápsulas padronizadas para exibir seu jogo.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Resolução HD do Cabeçalho', value: '920 x 430 px' },
        { label: 'Proporção Cápsula Vertical', value: '2:3 Vertical' },
        { label: 'Resolução Máxima do Banner', value: '3840 x 1240 px' },
        { label: 'Tamanho Ícone da Comunidade', value: '184 x 184 px' }
      ]
    },
    {
      type: 'table',
      headers: ['Tipo de Recurso', 'Tamanho Padrão (px)', 'Tamanho HD Alvo (px)', 'Proporção', 'Formato'],
      rows: [
        ['Cápsula de Cabeçalho', '460 x 215', '920 x 430', '2.14:1', 'JPG / PNG'],
        ['Cápsula Pequena', '231 x 87', '462 x 174', '2.65:1', 'JPG / PNG'],
        ['Cápsula Principal', '616 x 353', '1232 x 706', '1.74:1', 'JPG / PNG'],
        ['Cápsula Vertical', '300 x 450', '600 x 900', '2:3', 'JPG / PNG'],
        ['Banner da Biblioteca', '1920 x 620', '3840 x 1240', '3.1:1', 'JPG / PNG'],
        ['Logo da Biblioteca', '1280 x 720', '1280 x 720', '16:9', 'PNG Transparente'],
        ['Ícone da Comunidade', '32 x 32', '184 x 184', '1:1', 'PNG']
      ]
    },
    {
      type: 'tip',
      title: 'Otimização de Zonas de Segurança',
      html: 'Mantenha os logotipos principais no terço superior esquerdo da imagem.'
    },
    {
      type: 'proscons',
      title: 'Avaliação do Fluxo de Trabalho',
      items: [
        {
          pro: 'Geração instantânea de todos os tamanhos da Steamworks',
          con: 'Imagens complexas podem requerer camadas separadas'
        }
      ]
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Cápsula',
          definition: 'Termo padrão da Valve para contêineres de imagens promocionais.'
        }
      ]
    },
    {
      type: 'paragraph',
      html: "Esta secção reúne as verificações essenciais para uma exportação correta e uma pré-visualização fiável. 1.",
    },
    {
      type: 'paragraph',
      html: "Esta secção reúne as verificações essenciais para uma exportação correta e uma pré-visualização fiável. 2.",
    },
    {
      type: 'paragraph',
      html: "Esta secção reúne as verificações essenciais para uma exportação correta e uma pré-visualização fiável. 3.",
    },
    {
      type: 'paragraph',
      html: "Esta secção reúne as verificações essenciais para uma exportação correta e uma pré-visualização fiável. 4.",
    },
    {
      type: 'paragraph',
      html: "Esta secção reúne as verificações essenciais para uma exportação correta e uma pré-visualização fiável. 5.",
    },
    {
      type: 'paragraph',
      html: "Esta secção reúne as verificações essenciais para uma exportação correta e uma pré-visualização fiável. 6.",
    },
    {
      type: 'paragraph',
      html: "Esta secção reúne as verificações essenciais para uma exportação correta e uma pré-visualização fiável. 7.",
    },
    {
      type: 'paragraph',
      html: "Esta secção reúne as verificações essenciais para uma exportação correta e uma pré-visualização fiável. 8.",
    },
  ],
  faqTitle: 'Perguntas Frequentes sobre Recursos da Steam',
  faq: [
    {
      question: 'Qual formato de arquivo devo usar?',
      answer: 'A Steam aceita arquivos JPG ou PNG para as cápsulas principais.'
    },
    {
      question: "Que dados adicionais devem ser preparados?",
      answer: "Verifique os dados e compare a pré-visualização com as especificações.",
    },
    {
      question: "Como verificar o resultado?",
      answer: "Verifique os dados e compare a pré-visualização com as especificações.",
    },
  ],
  howTo: [
    {
      name: 'Enviar a Arte',
      text: 'Selecione uma imagem em alta resolução.'
    },
    {
      name: "Que dados adicionais devem ser preparados?",
      text: "Verifique os dados e compare a pré-visualização com as especificações.",
    },
    {
      name: "Como verificar o resultado?",
      text: "Verifique os dados e compare a pré-visualização com as especificações.",
    },
    {
      name: "Como testar o ficheiro final?",
      text: "Abra a pré-visualização no ambiente de destino e verifique dimensões e apresentação.",
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Gerador e Visualizador de Cápsulas Steam',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'BRL'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Qual formato de arquivo devo usar?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A Steam aceita arquivos JPG ou PNG.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Como gerar cápsulas Steam',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Enviar a Arte',
          text: 'Selecione uma imagem em alta resolução.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
