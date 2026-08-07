import type { ToolLocaleContent } from '../../../types';
import type { SaveFileEditorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SaveFileEditorUI> = {
  slug: 'editor-salvamento-jogo',
  title: 'Editor e Ofuscador de Save de Jogo',
  description: 'Descriptografe, inspecione, edite payloads JSON e criptografe arquivos de save de jogos usando Base64, máscara XOR ou texto simples 100% localmente no navegador.',
  ui: {
    title: 'Editor e Ofuscador de Save de Jogo',
    subtitle: 'Inspecione, modifique e criptografe arquivos de save locais com segurança e sem envio a servidores',
    dropSaveFile: 'Arraste e solte o arquivo de save aqui',
    orSelectFile: 'ou clique para selecionar um arquivo local',
    encryptionMethod: 'Formato de Criptografia',
    methodBase64: 'Codificação Base64',
    methodXor: 'Máscara XOR + Base64',
    methodRaw: 'JSON Simples / Não Criptografado',
    xorKeyLabel: 'Chave Secreta XOR',
    xorKeyPlaceholder: 'ex. MinhaChaveSecreta2026',
    jsonRawTitle: 'Payload JSON Decodificado (Editor em Tempo Real)',
    encodeAndDownload: 'Criptografar e Baixar Arquivo',
    copyEncoded: 'Copiar Texto Criptografado',
    copiedNotice: 'Copiado para a Área de Transferência!',
    decodedKeysCount: 'Total de Parâmetros',
    dataSize: 'Tamanho do Payload',
    detectedFormat: 'Formato Detectado',
    exportPreviewLabel: 'Pré-visualização da Saída Criptografada',
    decodePanelTitle: 'Decodificação e Editor JSON em Tempo Real',
    exportPanelTitle: 'Payload de Saída Re Criptografado',
    decodeError: 'Falha ao decodificar o arquivo de save',
    bytesUnit: 'B',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Segurança e Protocolos de Ofuscação em Saves de Jogos',
    },
    {
      type: 'paragraph',
      html: 'Os videogames serializam o progresso do jogador em formatos de armazenamento persistentes para manter inventários, níveis desbloqueados e atributos ao longo das sessões. Para evitar modificações diretas em editores de texto por parte dos usuários, os estúdios ofuscam arquivos de save com esquemas de codificação binária como Base64 ou máscaras XOR bit a bit combinadas com uma chave secreta. Durante os testes de controle de qualidade QA e depuração de operações ao vivo, as equipes de desenvolvimento precisam da capacidade imediata de inspecionar estruturas JSON brutas, forçar estados limite de teste e re-criptografar os dados modificados para implantação sem a necessidade de recompilar executáveis.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Privacidade de Processamento', value: '100% Local' },
        { label: 'Decodificadores Suportados', value: 'Base64 / XOR / JSON' },
        { label: 'Latência', value: '0 ms' },
        { label: 'Risco de Vazamento', value: 'Zero' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Comparação de Esquemas de Ofuscação',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Codificação Base64',
          description: 'Conversão rápida para evitar edições simples sem oferecer segurança criptográfica real.',
        },
        {
          title: 'Máscara XOR + Base64',
          description: 'Prática comum no desenvolvimento indie. Mistura bytes com uma chave secreta contra editores de memória.',
        },
        {
          title: 'Payload JSON Simples',
          description: 'Save legível sem criptografia. Ideal para prototipagem e builds de depuração.',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Práticas de Teste de QA para Saves',
    },
    {
      type: 'tip',
      title: 'Melhores Práticas em Testes de QA',
      html: 'Mantenha chaves de depuração separadas para builds internas. Use inspetores locais para testar limites sem recompilar o código do jogo.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Diretrizes de Parâmetros do Jogo',
    },
    {
      type: 'table',
      headers: ['Tipo de Dado', 'Formato Recomendado', 'Caso de Uso', 'Camada de Ofuscação'],
      rows: [
        ['Inteiros Numéricos', 'Inteiro 32-bit', 'Moedas, Nível, XP, Munição', 'Máscara XOR'],
        ['Flags Booleanas', 'Booleano Padrão', 'Tutorial Concluído, Chefe Derrotado', 'Base64 / XOR'],
        ['Objetos Aninhados', 'Hierarquia JSON', 'Inventário, Habilidades', 'Base64'],
        ['Timestamps', 'ISO 8601 UTC', 'Login Diário, Timestamp de Save', 'Máscara XOR'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Engenharia Reversa e Anti Adulteração',
    },
    {
      type: 'paragraph',
      html: 'Embora a ofuscação no cliente evite edições casuais, XOR e Base64 não são criptografia forte. Ferramentas de análise de memória como RenderDoc ou x64dbg podem inspecionar rotinas de geração de chaves em código compilado. Para jogos competitivos, assinaturas HMAC ou validações no servidor são necessárias para detectar alterações.',
    },
  ],
  faqTitle: 'Perguntas Frequentes',
  faq: [
    {
      question: 'Meus arquivos são enviados para algum servidor?',
      answer: 'Não. Todo o processo acontece 100% no seu navegador.',
    },
    {
      question: 'Como funciona a ofuscação XOR no Unity ou Godot?',
      answer: 'A ofuscação XOR aplica operações bit a bit nos bytes da string JSON usando uma chave secreta.',
    },
  ],
  howTo: [
    {
      name: 'Carregar Arquivo',
      text: 'Envie seu arquivo de save criptografado.',
    },
    {
      name: 'Selecionar Método',
      text: 'Escolha o formato e digite a chave secreta.',
    },
    {
      name: 'Editar JSON',
      text: 'Modifique os valores no editor em tempo real.',
    },
    {
      name: 'Exportar e Baixar',
      text: 'Baixe o novo arquivo modificado para testar.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Editor de Save de Jogo',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'BRL',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Meus arquivos são enviados para algum servidor?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Não. Todo o processo acontece 100% no seu navegador.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Como Editar Saves de Jogos',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Carregar Arquivo',
          text: 'Envie seu arquivo de save criptografado.',
        },
      ],
    },
  ],
  bibliographyTitle: 'Referências e Leituras Adicionais',
  bibliography: bibliographyEntries,
};
