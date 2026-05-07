import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TournamentBracketUI } from '../ui';

const slug = 'torneio';
const title = 'Gerador de Tabela de Torneio Online Grátis e Organizador de Competições';
const description = 'Organize torneios e crie tabelas de eliminatória simples gratuitamente e sem registro. Perfeito para FIFA, Padel, eSports e jogos de tabuleiro. 100% amigável para dispositivos móveis.';

const ui: TournamentBracketUI = {
  tournamentInProgress: 'Torneio em Andamento',
  nextMatch: 'Próxima Partida',
  share: 'Compartilhar',
  backNew: 'Voltar / Novo',
  back: 'Voltar',
  newTournament: 'Novo Torneio',
  setupSubtitle: 'Configure e gere sua tabela de competição.',
  tournamentNameLabel: 'Nome do Torneio',
  tournamentNamePlaceholder: 'Ex: Torneio de Verão',
  addPlayersLabel: 'Adicionar Participantes',
  addPlayerPlaceholder: 'Nome... ou vários separados por vírgulas',
  playersLabel: 'Jogadores',
  clearAll: 'Limpar Tudo',
  emptyList: 'A lista está vazia',
  howItWorks: 'Como funciona?',
  howItWorksText: 'Adicione os participantes, dê um nome e gere. O sistema criará as partidas automaticamente e lidará com os "Byes" (passagens diretas) se houver um número ímpar.',
  historyLabel: 'Histórico',
  noHistory: 'Nenhum torneio salvo',
  noOldTournaments: 'Sem torneios anteriores',
  generateBtn: 'Gerar Tabela',
  shuffleLabel: 'Embaralhar partidas',
  scoreLabel: 'Habilitar Pontuação (Opcional)',
  dragHint: 'Arraste para mover',
  roundFinal: 'Final',
  roundSemifinal: 'Semifinais',
  roundQuarter: 'Quartas de final',
  roundPrefix: 'Rodada',
  byeLabel: 'Bye',
  waiting: 'Aguardando...',
  emptyRound: 'Rodada vazia',
  confirmClearPlayers: 'Limpar toda a lista de jogadores?',
  alertMinPlayers: 'Você precisa de pelo menos 2 jogadores.',
  alertLoadFailed: 'Não foi possível carregar o torneio.',
  confirmDeleteTournament: 'Excluir permanentemente este torneio do histórico?',
  toastShareLimit: 'Apenas torneios com até 32 jogadores podem ser compartilhados',
  toastShareError: 'Erro ao gerar o link',
  toastShareCopied: 'Link copiado para a área de transferência',
  toastShareFailed: 'Não foi possível copiar. URL:',
  toastFinished: 'Torneio Finalizado!',
  defaultName: 'Torneio'
};

const faqData = [
  { question: 'Como funciona a eliminatória simples?', answer: 'É um sistema de competição onde o participante que perde uma partida é automaticamente eliminado do torneio. Os vencedores avançam para a próxima rodada (oitavas, quartas, semifinais) até que restem apenas dois para a grande final.' },
  { question: 'O que acontece se eu tiver um número ímpar de jogadores?', answer: 'Nossa ferramenta lida automaticamente com os "BYEs". Alguns jogadores avançarão diretamente para a segunda rodada sem jogar na primeira, para que a tabela sempre termine em potências de dois (2, 4, 8, 16...).' },
  { question: 'Posso salvar e compartilhar a tabela do torneio?', answer: 'Sim, você pode compartilhar a tabela através de um link único gerado instantaneamente. Por ser uma ferramenta sem registro, os dados são mantidos no seu navegador enquanto a aba estiver aberta.' },
  { question: 'Funciona para torneios de eSports como FIFA ou LoL?', answer: 'Com certeza. Foi projetado para ser rápido e visual, ideal para gerenciar torneios rápidos de console, PC ou até mesmo jogos de tabuleiro e cartas.' },
  { question: 'Criar torneios é de graça?', answer: 'Sim, completamente grátis e sem restrições. Sem planos premium, limites de participantes, marcas d\'água ou anúncios invasivos. Tudo funciona offline no seu navegador.' },
  { question: 'Meus dados são excluídos se eu fechar o navegador?', answer: 'Não. Usamos LocalStorage para salvar automaticamente todos os seus torneios no seu dispositivo. Você pode fechar a aba, desligar o computador e voltar dias depois: seu torneio ainda estará lá.' },
  { question: 'Como funciona o botão "Próxima Partida"?', answer: 'O sistema detecta automaticamente a próxima partida pronta (ambos os participantes confirmados), mas ainda sem resultado. Ao pressionar "Próxima Partida", a visualização pula diretamente para esse confronto.' },
];

const howTo = [
  { name: 'Insira os participantes', text: 'Escreva os nomes dos jogadores ou equipes que participarão da competição.' },
  { name: 'Gere a tabela', text: 'Clique no botão gerar. O sistema criará automaticamente os confrontos e as rodadas necessárias.' },
  { name: 'Atualize os resultados', text: 'Clique no participante vencedor de cada partida para que ele avance automaticamente para a próxima fase da tabela.' },
  { name: 'Finalize', text: 'Assim que o torneio estiver completo, o campeão final é exibido.' },
];

const seo = [
  {
    type: 'title' as const,
    text: 'Gerador de Tabela de Torneio Online Grátis e Organizador de Competições',
    level: 2 as const
  },
  {
    type: 'paragraph' as const,
    html: 'Gerencie suas competições de esportes, videogames ou jogos de tabuleiro com o organizador de torneios mais completo, gratuito e sem registro. Crie tabelas de eliminatória simples visuais e interativas em segundos, com um <strong>sistema de pontuação integrado</strong>, histórico automático e navegação inteligente por partidas. Tudo funciona offline, diretamente no seu navegador.'
  },
  {
    type: 'title' as const,
    text: 'Como Criar um Torneio de Eliminatória Simples?',
    level: 2 as const
  },
  {
    type: 'paragraph' as const,
    html: '<strong>Dê um nome ao seu torneio</strong>, adicione participantes (um por um ou colando uma lista separada por vírgulas), embaralhe as partidas se desejar, gere a tabela, gerencie os resultados tocando no vencedor de cada partida e use o botão "Próxima Partida" para navegar entre os confrontos pendentes.'
  },
  {
    type: 'title' as const,
    text: 'Recursos Avançados',
    level: 2 as const
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Entrada em massa:</strong> Adicione vários participantes de uma vez separados por vírgulas.',
      '<strong>Placares exatos:</strong> Sistema de pontuação com resultados como 3-1 ou 21-19.',
      '<strong>Navegação inteligente:</strong> O botão "Próxima Partida" pula para o próximo confronto pendente.',
      '<strong>Tabela arrastável:</strong> Visualização desktop com rolagem livre para grandes torneios.',
      '<strong>Histórico persistente:</strong> Todos os torneios salvos automaticamente no seu navegador.',
      '<strong>Walkovers Automáticos:</strong> Byes e passagens diretas resolvidos sem entrada manual.',
      '<strong>Compartilhe por URL:</strong> Gere um link compactado para enviar a tabela para qualquer pessoa.',
    ]
  },
  {
    type: 'title' as const,
    text: 'Perfeito para Qualquer Competição',
    level: 2 as const
  },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: 'Videogames & eSports',
        description: 'Perfeito para FIFA, FC25, Valorant, League of Legends, Street Fighter, Tekken, Super Smash Bros ou Rocket League.',
        icon: 'mdi:controller-classic',
        points: ['Partidas rápidas', 'Sem limite de equipes', 'Compartilhável instantaneamente']
      },
      {
        title: 'Esportes & Esportes de Raquete',
        description: 'Gerencie tabelas de Padel, Tênis, Ping Pong, Badminton, Futsal ou Basquete 3x3.',
        icon: 'mdi:trophy-outline',
        points: ['Placares integrados', 'Visualização móvel otimizada', 'Chega de papel']
      },
      {
        title: 'Jogos de Tabuleiro & Cartas',
        description: 'Organize torneios de Magic: The Gathering, Pokémon TCG, Yu-Gi-Oh!, Catan, Xadrez ou Dominó.',
        icon: 'mdi:cards-playing-outline',
        points: ['Até 64 jogadores', 'Histórico de rodadas', 'Gestão de byes']
      },
    ]
  },
  {
    type: 'title' as const,
    text: 'O que são "Byes" ou Passagens Diretas?',
    level: 2 as const
  },
  {
    type: 'paragraph' as const,
    html: 'Em um torneio de eliminatória simples ideal, o número de participantes deve ser uma potência de 2 (4, 8, 16, 32...). Quando você tem um número ímpar ou que não é potência de 2 — por exemplo, 7, 10 ou 13 jogadores —, o sistema atribui automaticamente <strong>"Byes"</strong> na primeira rodada. Um "Bye" significa que um participante avança diretamente para a próxima fase sem jogar. Nosso algoritmo calcula e atribui essas passagens de forma justa e automática.'
  },
  {
    type: 'title' as const,
    text: 'Instantâneo, Grátis e Sem Cadastro',
    level: 2 as const
  },
  {
    type: 'paragraph' as const,
    html: 'Zero fricção. Sem contas, sem instalações, sem espera. Adicione participantes e gere seu torneio instantaneamente. Tudo é salvo automaticamente no seu navegador via <strong>LocalStorage</strong>: feche a aba, desligue o computador e volte dias depois. Seu torneio e histórico completo ainda estarão lá.'
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) },
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })) },
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'SportsApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } },
];

export const content: ToolLocaleContent<TournamentBracketUI> = { slug, title, description, ui, seo, faq: faqData, bibliography, howTo, schemas };
