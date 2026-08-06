import type { ToolLocaleContent } from '../../../types';
import type { ItchioGameTesterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<ItchioGameTesterUI> = {
  slug: 'inspetor-jogos-web-itchio',
  title: 'Inspetor de Jogos Web Itch.io e Otimizador de Resolução ao Vivo',
  description: 'Carregue ficheiros de exportação HTML5 ou arquivos ZIP para testar viewports ao vivo, corrigir barras de rolagem, inspecionar builds Godot e Unity WebGL e gerar configurações de incorporação para Itch.io.',
  ui: {
    dropzoneTitle: 'Arraste e Solte seu Build ou Arquivo ZIP',
    dropzoneHint: 'Solte qualquer arquivo .ZIP, pasta exportada ou ficheiros de build HTML5 nesta área para inspecionar imediatamente.',
    chooseFiles: 'Selecionar Arquivo ou Pasta',
    engineDetected: 'Engine Detectada',
    compatibilityScore: 'Pontuação de Compatibilidade Itch.io',
    viewportWidth: 'Largura do Viewport (px)',
    viewportHeight: 'Altura do Viewport (px)',
    presets: 'Predefinições de Resolução Rápida',
    fitTest: 'Teste de Layout e Barras de Rolagem ao Vivo',
    copySettings: 'Copiar Configurações de Incorporação Itch.io',
    copied: 'Copiado para a Área de Transferência',
    embedMode: 'Modo de Incorporação',
    scrollbars: 'Ativar Barras de Rolagem',
    noIssuesFound: 'Todas as verificações foram concluídas com sucesso. O pacote está 100% em conformidade com os padrões Itch.io.',
    filesInspected: 'Arquivos Inspecionados',
    resetViewport: 'Redefinir Viewport',
    autoScaleToggle: 'Escalar Viewport Automaticamente para a Largura da Tela',
    scaledNotice: 'O viewport excede a largura da tela. Um zoom-out artificial foi aplicado para que o canvas completo seja visível. Desative o escalonamento automático para ver o layout real.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Diretrizes de Formatação para Exportações HTML5 de Jogos no Itch.io'
    },
    {
      type: 'paragraph',
      html: 'Publicar jogos HTML5 e WebGL no Itch.io requer configuração precisa das dimensões do viewport, estruturas de arquivos de arquivo e cabeçalhos de segurança cross-origin.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Proporção de Tela Web Padrão', value: '16:9 Horizontal' },
        { label: 'Resolução Clássica Itch', value: '960 x 540 px' },
        { label: 'Arquivo de Entrada Obrigatório', value: 'index.html na Raiz' },
        { label: 'Requisito Godot 4', value: 'Cabeçalhos COOP / COEP' }
      ]
    },
    {
      type: 'tip',
      html: 'Ao incorporar um jogo WebGL 1280x720 no Itch.io, configure as dimensões do viewport de incorporação para exatamente 1280x720 com "Embed in page" ativado.'
    }
  ],
  faq: [
    {
      question: 'Por que meu jogo Godot 4 exibe uma tela preta no Itch.io?',
      answer: 'Exportações web do Godot 4 usam multithreading WebAssembly que requer suporte SharedArrayBuffer. Ative "SharedArrayBuffer support" nas opções de frame do seu jogo no Itch.io.'
    }
  ],
  howTo: [
    { name: 'Carregar Arquivos do Jogo ou ZIP', text: 'Arraste e solte seu arquivo ZIP de exportação HTML5 ou selecione o diretório de build contendo index.html.' },
    { name: 'Revisar Relatório de Compatibilidade', text: 'Verifique o relatório de auditoria automático para posicionamento do index.html na raiz, avisos de maiúsculas e detecção de engine.' },
    { name: 'Redimensionar Viewport ao Vivo', text: 'Use os controles de resolução e os presets de proporção de tela para testar a incorporação do iframe ao vivo sem barras de rolagem.' },
    { name: 'Copiar Configurações Itch.io', text: 'Clique em Copiar Configurações para obter os valores exatos de largura e altura para a sua página de submissão de jogo no Itch.io.' }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Inspetor de Jogos Web Itch.io',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Por que meu jogo Godot 4 exibe uma tela preta no Itch.io?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Exportações web do Godot 4 usam multithreading WebAssembly que requer suporte SharedArrayBuffer. Ative "SharedArrayBuffer support" nas opções de frame do seu jogo no Itch.io.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Como auditar e testar o viewport do seu jogo no Itch.io',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Carregar Arquivos do Jogo ou ZIP',
          text: 'Arraste e solte seu arquivo ZIP de exportação HTML5 ou selecione o diretório de build contendo index.html.'
        },
        {
          '@type': 'HowToStep',
          name: 'Redimensionar Viewport ao Vivo',
          text: 'Use os controles de resolução e os presets de proporção de tela para testar a incorporação do iframe ao vivo sem barras de rolagem.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
