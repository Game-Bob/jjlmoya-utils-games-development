import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = { slug: 'desenvolvimento-de-jogos', title: 'Ferramentas para desenvolvimento de jogos', description: 'Ferramentas práticas no navegador para criadores indie, da arte da loja às entregas de produção.', seo: [
  { type: 'title', text: 'Ferramentas para criar seus jogos', level: 2 },
  { type: 'paragraph', html: 'Desenvolver um jogo envolve muitas decisões pequenas: uma composição precisa funcionar em vários formatos, um ícone deve continuar legível e uma tarefa deve ser repetível. Esta categoria reúne utilidades focadas para quem cria, publica e apresenta jogos.' },
  { type: 'title', text: 'Feitas para equipes independentes', level: 2 },
  { type: 'paragraph', html: 'Equipes indie alternam entre software de arte, painéis de publicação e pastas de revisão. Uma boa ferramenta reduz essa passagem, mostra as decisões importantes e mantém os arquivos fonte sob controle do criador.' },
  { type: 'list', items: ['Fluxos específicos com resultados visíveis', 'Processamento local quando possível', 'Dimensões e estados de exportação claros', 'Orientações complementares à documentação oficial'] },
  { type: 'tip', html: 'Use as ferramentas como uma etapa de conferência. Guarde os arquivos fonte e compare cada exportação com os requisitos atuais da plataforma.' },
] };
