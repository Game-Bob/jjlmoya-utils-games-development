import type { ToolLocaleContent } from '../../../types';
import type { SteamBbcodeTranslatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SteamBbcodeTranslatorUI> = {
  slug: 'steam-bbcode-translator',
  title: 'Steam BBCode, Markdown and HTML Converter',
  description: 'Convert between Steam BBCode, Markdown, and HTML in both directions with automatic syntax detection, nested list support, and a live preview.',
  ui: {
    editorLabel: 'Paste your markup',
    editorHint: 'BBCode, Markdown, or HTML is detected automatically as you type.',
    detectedLabel: 'Detected',
    detectedEmpty: 'Waiting for text',
    bbcode: 'Steam BBCode',
    markdown: 'Markdown',
    html: 'HTML',
    clear: 'Clear',
    copy: 'Copy output',
    copied: 'Copied to clipboard',
    characters: 'Characters',
    blocks: 'Blocks',
    privacyNote: 'Runs in your browser. Nothing is uploaded.',
    persistenceNote: 'Last draft saved locally',
    previewLabel: 'Preview',
    previewEmpty: 'Your formatted preview will appear here.'
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Why store descriptions need a markup converter'
    },
    {
      type: 'paragraph',
      html: 'Steam store descriptions use a small BBCode vocabulary inside the Steamworks editor. A press kit, documentation site, itch.io page, or product website may instead expect Markdown or HTML. Rebuilding the same description by hand is slow and makes small mistakes easy to miss, especially when a feature list contains a second level of bullets. This converter lets developers paste any of the three supported syntaxes and produces the other two while keeping the original text in view.'
    },
    {
      type: 'title',
      level: 2,
      text: 'What the markup converter converts'
    },
    {
      type: 'paragraph',
      html: 'The converter understands the common structural and inline tags used in store copy: h1, h2, and h3 headings; bold, italic, underline, and strike-through emphasis; links; code; quotes; spoilers; and unordered or ordered lists. It detects whether the pasted text is Steam BBCode, Markdown, or HTML, then generates the other two formats automatically. Headings, emphasis, links, blockquotes, code fences, and indented Markdown lists can therefore travel in either direction without a manual source or destination setting.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Input syntaxes', value: '3' },
        { label: 'Outputs per paste', value: '2' },
        { label: 'List depth', value: 'Nested' },
        { label: 'Data handling', value: 'Browser only' }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'How nested lists stay intact'
    },
    {
      type: 'paragraph',
      html: 'A flat regular-expression replacement can turn every [*] marker into the same bullet level. That is where many hand conversions break: a child feature becomes a sibling, or a closing list tag is placed too early. This tool first reads list boundaries and item markers as a lightweight tree. Markdown indentation and HTML list elements are then generated from that tree, so a child list remains inside its parent item. When the input is Markdown or HTML, the same structure is read back to rebuild Steam list and item tags.'
    },
    {
      type: 'table',
      headers: ['Steam BBCode', 'Markdown', 'HTML'],
      rows: [
        ['[h1]Title[/h1]', '# Title', '&lt;h1&gt;Title&lt;/h1&gt;'],
        ['[b]Important[/b]', '**Important**', '&lt;strong&gt;Important&lt;/strong&gt;'],
        ['[i]Note[/i]', '*Note*', '&lt;em&gt;Note&lt;/em&gt;'],
        ['[url=https://example.com]Link[/url]', '[Link](https://example.com)', '&lt;a href="https://example.com"&gt;Link&lt;/a&gt;'],
        ['[list][*]One[*]Two[/list]', '- One\n- Two', '&lt;ul&gt;&lt;li&gt;One&lt;/li&gt;&lt;li&gt;Two&lt;/li&gt;&lt;/ul&gt;']
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Markdown and HTML are not identical targets'
    },
    {
      type: 'paragraph',
      html: 'Markdown is portable and readable in source form, but its exact feature set depends on the destination renderer. Underline and spoiler tags therefore use inline HTML when Markdown has no broadly consistent equivalent. HTML is more explicit and is usually the better target for a press kit that controls its own page styles. Use the preview as a quick inspection, then check the destination platform because its sanitizer, link policy, or Markdown flavor may impose additional restrictions.'
    },
    {
      type: 'tip',
      title: 'A practical publishing check',
      html: 'After translating, compare the rendered outputs with the source document. Check heading hierarchy, link destinations, nested list indentation, and any text that was inside a platform-specific tag. The converter flags unmatched or unsupported markup so you have a short review list before publishing to Steam, a press kit, or another destination.'
    },
    {
      type: 'title',
      level: 2,
      text: 'A private workflow for store copy'
    },
    {
      type: 'paragraph',
      html: 'Descriptions often contain unreleased names, pricing plans, launch dates, or press contacts. This tool performs its conversion in the browser and does not upload the text. The privacy benefit does not replace a destination review: never paste secrets into an external editor, and remember that the final website, CMS, or store account has its own retention and access rules.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Limitations to keep in mind'
    },
    {
      type: 'proscons',
      title: 'Pros and cons of conversion',
      items: [
        {
          pro: 'Nested lists are represented structurally instead of by blind tag replacement.',
          con: 'Unsupported custom tags are kept visible or flagged for manual review.'
        },
        {
          pro: 'The output updates as you type and can be copied or downloaded immediately.',
          con: 'Platform-specific image widgets and Steam-only shortcodes are outside the baseline mapping.'
        },
        {
          pro: 'HTML preview output is escaped and generated from the parsed structure.',
          con: 'A destination platform can still sanitize or restyle valid Markdown and HTML differently.'
        }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Markup conversion glossary'
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'BBCode',
          definition: 'A bracket-tag markup syntax used by Steam and many community systems to add limited formatting to text.'
        },
        {
          term: 'Markdown',
          definition: 'A readable plain-text markup syntax whose exact rendering features vary between platforms.'
        },
        {
          term: 'HTML',
          definition: 'The structural markup language used by browsers to describe headings, links, lists, and other document elements.'
        },
        {
          term: 'Nested list',
          definition: 'A list placed inside a parent list item, commonly used for sub-features or grouped steps.'
        }
      ]
    }
  ],
  faqTitle: 'Frequently asked questions about markup conversion',
  faq: [
    {
      question: 'Does the converter send my description to a server?',
      answer: 'No. The conversion runs in your browser. The tool does not need an upload or account connection to process the text.'
    },
    {
      question: 'Can it convert nested Steam lists?',
      answer: 'Yes. List and item structure is parsed before Markdown or HTML is generated, so child lists remain nested inside their parent item.'
    },
    {
      question: 'Can I start with Markdown or HTML instead of Steam BBCode?',
      answer: 'Yes. Paste Steam BBCode, Markdown, or HTML into the single editor. The syntax is detected automatically and the other two formats are generated.'
    },
    {
      question: 'Why does Markdown output sometimes contain HTML?',
      answer: 'Markdown has no universal underline or spoiler syntax. The converter uses small inline HTML elements for those cases so the meaning is not silently lost.'
    },
    {
      question: 'Will the output look identical on every platform?',
      answer: 'Not necessarily. Markdown flavors, HTML sanitizers, CSS, and link policies differ. Use the built-in preview as a structural check and verify the final destination.'
    },
    {
      question: 'What happens to an unsupported Steam tag?',
      answer: 'The tag is kept visible as text and a review note is shown. This makes it easier to find platform-specific markup that needs a manual decision.'
    }
  ],
  howTo: [
    {
      name: 'Paste any supported markup',
      text: 'Paste Steam BBCode, Markdown, or HTML into the single editor.'
    },
    {
      name: 'Let the converter detect the syntax',
      text: 'The tool identifies the source syntax and generates the other two formats as you type.'
    },
    {
      name: 'Inspect both results',
      text: 'Use the rendered preview and the two output panels to check headings, links, and nested lists.'
    },
    {
      name: 'Copy the format you need',
      text: 'Copy the Markdown, HTML, or Steam BBCode result into your destination editor.'
    }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Steam BBCode, Markdown and HTML Converter',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can it convert nested Steam lists?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. List and item structure is parsed before Markdown or HTML is generated, so child lists remain nested inside their parent item.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to convert between Steam BBCode, Markdown and HTML',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Paste any supported markup',
          text: 'Paste Steam BBCode, Markdown, or HTML into the single editor.'
        },
        {
          '@type': 'HowToStep',
          name: 'Inspect both results',
          text: 'Review the two automatically generated formats and the rendered preview.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
