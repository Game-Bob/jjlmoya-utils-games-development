import type { ToolLocaleContent } from '../../../types';
import type { SteamBbcodeTranslatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SteamBbcodeTranslatorUI> = {
  slug: 'conversor-bbcode-steam',
  title: 'Conversor de BBCode da Steam, Markdown e HTML',
  description: 'Converta entre BBCode da Steam, Markdown e HTML em ambas as direções com deteção automática de sintaxe e pré-visualização.',
  ui: {
    editorLabel: 'Cole o seu texto formatado',
    editorHint: 'BBCode, Markdown ou HTML é detetado automaticamente ao digitar.',
    detectedLabel: 'Detetado',
    detectedEmpty: 'A aguardar texto',
    bbcode: 'Steam BBCode',
    markdown: 'Markdown',
    html: 'HTML',
    clear: 'Limpar',
    copy: 'Copiar resultado',
    copied: 'Copiado para a área de transferência',
    characters: 'Caracteres',
    blocks: 'Blocos',
    privacyNote: 'Executado no navegador. Nada é enviado.',
    persistenceNote: 'Último rascunho guardado localmente',
    previewLabel: 'Pré-visualização',
    previewEmpty: 'A sua pré-visualização formatada aparecerá aqui.'
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Por que as descrições de loja precisam de um conversor'
    },
    {
      type: 'paragraph',
      html: 'As descrições da loja Steam usam BBCode. Kits de imprensa e sites de documentação preferem Markdown ou HTML. Esta ferramenta converte automaticamente entre os três formatos.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Formatos e marcadores suportados'
    },
    {
      type: 'paragraph',
      html: 'Suporta cabeçalhos, negrito, itálico, links, listas, citações e spoilers.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Formatos de entrada', value: '3' },
        { label: 'Saídas geradas', value: '2' },
        { label: 'Profundidade de lista', value: 'Aninhada' },
        { label: 'Processamento', value: 'Local' }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Listas aninhadas preservadas'
    },
    {
      type: 'paragraph',
      html: 'Uma árvore de estrutura garante que os subitens permaneçam dentro do item pai.'
    },
    {
      type: 'table',
      headers: ['Steam BBCode', 'Markdown', 'HTML'],
      rows: [
        ['[h1]Título[/h1]', '# Título', '&lt;h1&gt;Título&lt;/h1&gt;'],
        ['[b]Importante[/b]', '**Importante**', '&lt;strong&gt;Importante&lt;/strong&gt;'],
        ['[i]Nota[/i]', '*Nota*', '&lt;em&gt;Nota&lt;/em&gt;'],
        ['[url=https://example.com]Link[/url]', '[Link](https://example.com)', '&lt;a href="https://example.com"&gt;Link&lt;/a&gt;'],
        ['[list][*]Um[*]Dois[/list]', '- Um\n- Dois', '&lt;ul&gt;&lt;li&gt;Um&lt;/li&gt;&lt;li&gt;Dois&lt;/li&gt;&lt;/ul&gt;']
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Diferenças entre Markdown e HTML'
    },
    {
      type: 'paragraph',
      html: 'Quando o Markdown não suporta sublinhado nativamente, o conversor utiliza elementos HTML inline.'
    },
    {
      type: 'tip',
      title: 'Verificação antes da publicação',
      html: 'Compare o resultado na pré-visualização com o seu documento original antes de publicar na Steam.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Privacidade dos seus dados'
    },
    {
      type: 'paragraph',
      html: 'Todo o processamento é feito localmente no seu navegador sem envio para servidores.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Limitações'
    },
    {
      type: 'proscons',
      title: 'Considerações',
      items: [
        {
          pro: 'Estrutura de listas mantida.',
          con: 'Tags personalizadas requerem revisão manual.'
        }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Glossário'
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'BBCode',
          definition: 'Sintaxe baseada em colchetes usada na Steam.'
        },
        {
          term: 'Markdown',
          definition: 'Formato de texto simples e legível.'
        },
        {
          term: 'HTML',
          definition: 'Linguagem de marcação padrão para a web.'
        }
      ]
    },
    { type: 'title', level: 2, text: 'Revisar a conversão antes de publicar' },
    { type: 'paragraph', html: 'Identifique primeiro o formato usado pelo texto de origem e depois compare títulos, links, listas e imagens na prévia. Exibir um resultado não significa que cada tag específica do Steam tenha uma equivalência completa no formato de destino.' },
    { type: 'paragraph', html: 'Guarde uma cópia do texto original e teste o resultado na página da loja onde ele será publicado. Listas aninhadas, links externos e widgets sem equivalente podem exigir revisão manual. O conversor analisa a estrutura no navegador, mas não avalia a qualidade editorial nem a segurança das URLs.' },
    { type: 'paragraph', html: 'Antes de copiar a saída, confira também links externos, tags fora do padrão e imagens no contexto real da página da loja. Uma estrutura convertida corretamente ainda precisa de revisão editorial e verificação de segurança dos endereços.' },
    { type: 'paragraph', html: 'Compare a conversão com a prévia da página Steam antes de publicar. Confira quebras de linha, listas aninhadas, links, imagens e tags desconhecidas, pois um formato não suportado pode aparecer como texto simples. Mantenha a fonte original para acompanhar ajustes manuais e teste o texto final na página que os jogadores realmente verão.' },
    { type: 'paragraph', html: 'Se a aparência na loja for diferente do editor, examine cada bloco de formatação especial separadamente. Registre os elementos substituídos ou removidos e revise títulos, imagens e chamadas para ação em telas grandes e pequenas.' },
  ],
  faqTitle: 'Perguntas frequentes',
  faq: [
    {
      question: 'O meu texto é enviado para um servidor?',
      answer: 'Não. A conversão ocorre totalmente no seu navegador.'
    },
    {
      question: 'Suporta listas aninhadas?',
      answer: 'Sim. A estrutura é analisada antes da conversão.'
    },
    {
      question: "Que configuração deve ser verificada antes da publicação? 1",
      answer: "Verifique dimensões, ambiente de destino e pré-visualização antes de publicar o ficheiro.",
    },
    {
      question: "Que configuração deve ser verificada antes da publicação? 2",
      answer: "Verifique dimensões, ambiente de destino e pré-visualização antes de publicar o ficheiro.",
    },
    {
      question: "Que configuração deve ser verificada antes da publicação? 3",
      answer: "Verifique dimensões, ambiente de destino e pré-visualização antes de publicar o ficheiro.",
    },
    {
      question: "Que configuração deve ser verificada antes da publicação? 4",
      answer: "Verifique dimensões, ambiente de destino e pré-visualização antes de publicar o ficheiro.",
    },
  ],
  howTo: [
    {
      name: 'Cole o texto',
      text: 'Cole BBCode da Steam, Markdown ou HTML.'
    },
    {
      name: 'Deteção automática',
      text: 'Os outros dois formatos serão gerados imediatamente.'
    },
    {
      name: "Que configuração deve ser verificada antes da publicação? 1",
      text: "Verifique dimensões, ambiente de destino e pré-visualização antes de publicar o ficheiro.",
    },
    {
      name: "Que configuração deve ser verificada antes da publicação? 2",
      text: "Verifique dimensões, ambiente de destino e pré-visualização antes de publicar o ficheiro.",
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Conversor de BBCode da Steam, Markdown e HTML',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'O meu texto é enviado para um servidor?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Não. A conversão ocorre totalmente no seu navegador.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Como converter BBCode da Steam, Markdown e HTML',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Cole o texto',
          text: 'Cole BBCode da Steam, Markdown ou HTML.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
