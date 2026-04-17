import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GymTrackerUI } from '../ui';

const slug = 'rastreador-de-treino-academia';
const title = 'Rastreador de Treino: Gráficos de Progresso e Diário de Força';
const description =
  'Registre suas cargas, selecione exercícios e visualize seu progresso com gráficos de força. Otimize sua sobrecarga progressiva na academia.';

const faqData = [
  {
    question: 'Qual o objetivo de rastrear o treino?',
    answer:
      'Serve para aplicar cientificamente a sobrecarga progressiva. Ao saber exatamente quanto você levantou na sessão anterior, você pode tentar superar essa marca, garantindo crescimento muscular e ganhos de força a longo prazo.',
  },
  {
    question: 'Quais dados devo registrar?',
    answer:
      'O mais importante é o peso máximo (top set) que você atingiu com boa forma para um número estabelecido de repetições. Nossa ferramenta foca no registro de peso por sessão para gerar seu gráfico de progresso.',
  },
  {
    question: 'Como os gráficos são interpretados?',
    answer:
      'Uma linha para cima indica que você está progredindo. Uma linha plana (estagnação) sugere que você precisa ajustar seu volume, intensidade ou recuperação. Uma linha constantemente para baixo pode ser um sinal de excesso de treinamento.',
  },
  {
    question: 'Onde meus dados são armazenados?',
    answer:
      'Os dados são armazenados localmente no seu navegador (Local Storage). Isso significa que sua privacidade é total e você não precisa criar uma conta, mas se você limpar os dados do navegador, o histórico será perdido.',
  },
];

const howToData = [
  {
    name: 'Selecione o exercício',
    text: 'Escolha entre exercícios fundamentais como Agachamento, Supino ou Levantamento Terra no menu suspenso.',
  },
  {
    name: 'Insira o peso',
    text: 'Após sua série mais pesada, insira os quilogramos/libras levantados no campo correspondente.',
  },
  {
    name: 'Pressione Adicionar',
    text: 'Salve sua marca. O sistema atualizará automaticamente seu histórico e seu gráfico de progresso.',
  },
  {
    name: 'Analise sua evolução',
    text: 'Consulte o gráfico periodicamente para identificar estagnações e motivar-se ao ver seu crescimento real de força.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<GymTrackerUI & Record<string, string>> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Referências Científicas',
  bibliography: [
    {
      name: 'Journal of Strength and Conditioning Research - Progressive Overload Study',
      url: 'https://journals.lww.com/nsca-jscr/Fulltext/2010/10000/The_Mechanisms_of_Muscle_Hypertrophy_and_Their.40.aspx',
    },
    {
      name: 'National Academy of Sports Medicine - Progressive Overload Explained',
      url: 'https://blog.nasm.org/progressive-overload-explained',
    },
    {
      name: 'Science of Strength - Data Tracking in Resistance Training',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30558493/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Monitoramento de Treino: A Chave para o Progresso Real',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'No mundo do fitness e fisiculturismo, existe um princípio fundamental que separa aqueles que obtêm resultados incríveis daqueles que estagnam rapidamente: <strong>sobrecarga progressiva (progressive overload)</strong>. No entanto, é impossível aplicar este princípio de forma eficaz se você não mantiver registros detalhados de seus levantamentos. Neste guia, exploraremos por que rastrear seu treino é vital, como usar nosso <strong>gym workout tracker</strong> para maximizar seus ganhos e as bases científicas que apoiam esta prática.',
    },
    {
      type: 'title',
      text: 'O que é Sobrecarga Progressiva?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A sobrecarga progressiva é o aumento gradual do estresse aplicado ao corpo durante o exercício físico. Para que um músculo cresça ou se torne mais forte, ele deve ser submetido a um estímulo maior do que aquele a que está acostumado. Se você vai à academia e sempre levanta o mesmo peso, com as mesmas repetições e o mesmo tempo de descanso, seu corpo não terá nenhum motivo biológico para se adaptar e crescer.',
    },
    {
      type: 'list',
      items: [
        'Aumento de peso: Levantar mais carga do que na sessão anterior.',
        'Aumento de repetições: Fazer mais repetições com o mesmo peso.',
        'Aumento de volume: Realizar mais séries totais por grupo muscular.',
        'Redução de descanso: Fazer o mesmo trabalho em menos tempo.',
        'Melhoria da forma: Executar o exercício com controle superior e maior amplitude de movimento.',
      ],
    },
    {
      type: 'title',
      text: 'Por que o Registro Manual é Superior à Memória',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Muitos atletas cometem o erro de confiar em sua memória para lembrar quanto levantaram na semana passada. No entanto, em um treino típico que inclui entre 5 e 10 exercícios diferentes, é muito fácil esquecer se você fez 80 kg ou 82,5 kg no supino, ou se conseguiu fazer 10 repetições ou 12. Essa falta de precisão leva à mediocridade.',
    },
    {
      type: 'tip',
      title: 'O Poder de Visualizar o Progresso',
      html: 'Ver uma linha subindo em um gráfico dá o impulso necessário para tentar aquela repetição extra que marca a diferença entre a estagnação e o crescimento muscular consistente.',
    },
    {
      type: 'title',
      text: 'Exercícios Fundamentais para Rastreamento',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Embora todos os exercícios sejam valiosos, certos movimentos compostos oferecem a melhor visão de sua força geral e desenvolvimento físico. Estes são os que você deve priorizar em seu rastreamento: <strong>Supino Reto</strong> para empurrar horizontalmente, <strong>Desenvolvimento (Overhead Press)</strong> para empurrar verticalmente, <strong>Barra Fixa (Pull-ups)</strong> para puxar e <strong>Elevação Pélvica (Hip Thrust)</strong> para os glúteos.',
    },
    {
      type: 'title',
      text: 'Como Analisar seus Gráficos de Progresso',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Uma vez registrados vários treinos, você começará a ver padrões: uma <strong>linha ascendente constante</strong> indica o caminho certo, um <strong>platô</strong> sugere que você precisa ajustar o volume ou o descanso, e uma <strong>tendência de queda</strong> pode ser um sinal de fadiga acumulada.',
    },
    {
      type: 'title',
      text: 'A Psicologia do Sucesso na Academia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Treinar é um desafio tanto mental quanto físico. Ao usar uma ferramenta visual que mostra que hoje você está 1% mais forte do que há quinze dias, você está alimentando seu sistema de recompensa de dopamina. Isso cria um ciclo de feedback positivo que transforma o treino em um hábito sustentável.',
    },
  ],
  ui: {
    exerciseLabel: 'Exercício',
    pushCategory: 'Empurrar (Push)',
    pullCategory: 'Puxar (Pull)',
    gluteCategory: 'Glúteos',
    customExerciseCategory: 'Personalizado',
    addCustomExercisetitle: 'Adicionar exercício',
    newExerciseLabel: 'Novo exercício',
    exercisePlaceholder: 'Nome do exercício...',
    addBtn: 'Adicionar',
    registerWeightLabel: 'Registrar Peso',
    weightPlaceholder: '00.0',
    startBtn: 'Iniciar',
    resetBtn: 'Reiniciar',
    okBtn: 'OK',
    noData: 'Sem dados',
    recordLabel: 'Recorde',
    lastLabel: 'Último',
    historyTitle: 'Registros',
    exportBtn: 'Exportar',
    confirmDeletetitle: 'Limpar histórico?',
    confirmDeleteText: 'Esta ação não pode ser desfeita. Todos os registros do exercício selecionado serão excluídos.',
    deleteBtn: 'Excluir',
    cancelBtn: 'Cancelar',
    units: 'kg',

    benchPress: 'Supino Reto',
    overheadPress: 'Desenvolvimento',
    pushPress: 'Push Press',
    inclineDbPress: 'Supino Inclinado com Halteres',
    dipsTriceps: 'Paralélas (Tríceps)',
    tricepsExtensions: 'Tríceps na Polia',
    pullUp: 'Barra Fixa',
    barbellRow: 'Remada Curvada',
    latPulldown: 'Puxada no Pulley',
    dbRow: 'Remada com Halter',
    facePulls: 'Face Pulls',
    bicepsCurl: 'Rosca Direta com Barra',
    hipThrust: 'Elevação Pélvica',
    rdl: 'Levantamento Stiff',
    lunges: 'Passada/Afundo',
    gluteKick: 'Glúteo na Polia',
    hipAbduction: 'Abdução de Quadril (Máquina)',
    stepUp: 'Step Up',
  },
};
