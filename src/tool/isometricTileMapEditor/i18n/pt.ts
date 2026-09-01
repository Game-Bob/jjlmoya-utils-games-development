import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IsometricTileMapEditorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const title = 'Editor de mapa de tiles isométrico';
const description = 'Desenhe mapas em grade de losangos com várias camadas, ajuste a geometria dos tiles e exporte o rascunho do nível em JSON ou SVG.';
const faq = [
  { question: 'O que é um mapa de tiles isométrico?', answer: 'Um mapa de tiles isométrico usa uma grade em forma de losango para sugerir espaço tridimensional em uma cena bidimensional. Colunas e linhas descrevem o plano do chão, enquanto camadas acrescentam um deslocamento de altura.' },
  { question: 'Como coloco um tile?', answer: 'Escolha um tile na paleta, mantenha Pintar selecionado, escolha a camada ativa e clique em um losango. O botão direito apaga uma célula mesmo quando Pintar está ativo.' },
  { question: 'O que muda a profundidade da camada?', answer: 'A profundidade da camada é o deslocamento vertical na tela entre camadas empilhadas. Aumente-a para representar degraus altos e reduza-a quando as camadas devem ficar próximas.' },
  { question: 'Posso usar o SVG exportado em uma engine de jogos?', answer: 'O SVG é uma referência visual com os losangos e suas cores. O JSON é melhor para reconstruir a grade lógica em uma engine porque preserva linhas, colunas, camadas e valores dos tiles.' },
  { question: 'Este editor cria um tileset pronto para produção?', answer: 'Não. Ele planeja uma grade em camadas e exporta uma descrição compacta do mapa. Não recorta texturas, configura colisões, escolhe a ordenação da engine nem garante o resultado final.' },
];
const howTo = [
  { name: 'Definir a geometria da grade', text: 'Escolha a largura e a altura do tile e depois defina colunas, linhas e camadas. Use a profundidade da camada para descrever o salto vertical entre níveis.' },
  { name: 'Escolher uma camada de desenho', text: 'Selecione uma camada antes de pintar. A camada ativa tem um contorno mais forte, enquanto as outras camadas visíveis ficam translúcidas para mostrar o contexto espacial.' },
  { name: 'Pintar o chão ou a estrutura', text: 'Escolha Grama, Pedra, Água ou Caminho e clique nas células. Troque a paleta quando a próxima célula precisar de outro material.' },
  { name: 'Corrigir o mapa localmente', text: 'Use Apagar ou o botão direito para remover um tile. Ao mudar as dimensões, as células que continuam dentro dos limites são preservadas.' },
  { name: 'Exportar o resultado do planejamento', text: 'Use JSON quando outra ferramenta reconstruirá a grade. Use SVG como referência visual rápida para uma revisão de design ou um rascunho de nível.' },
];
const softwareApplication: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any' };
const faqPage: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };

export const content: ToolLocaleContent<IsometricTileMapEditorUI> = {
  slug: 'editor-de-mapa-de-tiles-isometrico', title, description,
  ui: {
    controlsTitle: 'Controles do mapa', geometryTitle: 'Geometria da grade', tileWidthLabel: 'Largura do tile', tileHeightLabel: 'Altura do tile', columnsLabel: 'Colunas', rowsLabel: 'Linhas', layersLabel: 'Camadas', layerDepthLabel: 'Profundidade da camada', toolsTitle: 'Modo de desenho', paintLabel: 'Pintar', eraseLabel: 'Apagar', paletteTitle: 'Paleta de tiles', grassLabel: 'Grama', stoneLabel: 'Pedra', waterLabel: 'Água', pathLabel: 'Caminho', layersTitle: 'Camada ativa', layerLabel: 'Camada', hideLayerLabel: 'Ocultar', showLayerLabel: 'Mostrar', mapTitle: 'Mapa isométrico', mapHelp: 'Escolha um tile e uma camada, depois clique nos losangos. O botão direito apaga qualquer célula.', mapAriaLabel: 'Mapa de tiles isométrico editável', summaryTitle: 'Leitura do mapa', filledLabel: 'Células preenchidas', coverageLabel: 'Cobertura', activeLayerLabel: 'Camada ativa', selectedLabel: 'Tile selecionado', emptyCellLabel: 'Vazia', cellLabel: 'Célula', clearLabel: 'Limpar mapa', resetLabel: 'Redefinir geometria', exportJsonLabel: 'Exportar JSON', exportSvgLabel: 'Exportar SVG', statusReady: 'Pronto para desenhar', statusSaved: 'Salvo localmente', statusCleared: 'Mapa limpo', statusReset: 'Geometria redefinida', statusExported: 'Arquivo exportado', statusPainted: 'Tile colocada', statusErased: 'Tile apagado', statusLayerHidden: 'Camada ocultada', statusLayerShown: 'Camada exibida', legendTitle: 'Legenda do mapa', legendEmpty: 'Célula vazia', legendFilled: 'Célula desenhada', modelNote: 'Este editor descreve uma grade lógica em camadas. Ele não importa um tileset, calcula colisões, configura a ordenação específica da engine nem garante a posição final dos pixels.', privacyDisclosure: 'Seu mapa fica neste navegador. Nenhum dado do mapa ou de telemetria é enviado.',
  },
  seo: [
    { type: 'title', level: 2, text: 'Use uma grade isométrica para planejar espaço e altura' },
    { type: 'paragraph', html: 'Um mapa isométrico é útil quando um nível precisa de posições do chão legíveis e de uma sensação de altura sem virar uma cena 3D completa. A grade de losangos torna o movimento por linhas e colunas visível, enquanto as camadas permitem esboçar pontes, plataformas, telhados ou salas empilhadas.' },
    { type: 'paragraph', html: 'Este editor mantém a geometria explícita. A largura e a altura do tile controlam o losango, colunas e linhas controlam a área do chão e a profundidade da camada controla quanto cada nível sobe na tela. As células que permanecem dentro dos limites são preservadas ao mudar as dimensões.' },
    { type: 'title', level: 2, text: 'Crie um blockout útil em cinco passagens' },
    { type: 'list', items: ['Ajuste as proporções do tile à linguagem visual do projeto.', 'Pinte primeiro um material de chão para manter legíveis as áreas de movimento.', 'Use uma camada para pontes, telhados e plataformas elevadas em vez de indicar altura apenas pela cor.', 'Oculte as camadas superiores ou mude para Apagar para corrigir as células inferiores com segurança.', 'Exporte JSON para reconstrução e SVG para uma revisão visual.'] },
    { type: 'title', level: 2, text: 'Leia linhas, colunas e camadas separadamente' },
    { type: 'paragraph', html: 'Linhas e colunas indicam onde uma célula está no plano lógico e devem permanecer estáveis mesmo quando o losango muda de tamanho. Camadas são uma segunda coordenada: duas células podem compartilhar linha e coluna, mas ocupar alturas diferentes. Separar esses conceitos facilita reconstruir o mapa na engine.' },
    { type: 'table', headers: ['Sinal', 'Significado', 'Próxima decisão'], rows: [['Cobertura baixa', 'A maioria das células ainda está vazia.', 'Defina a área jogável antes de adicionar decoração.'], ['Várias camadas em uma coluna', 'O mapa contém espaço empilhado.', 'Verifique se ordenação e colisões distinguem essas alturas.'], ['Losango muito largo', 'O deslocamento horizontal domina a grade.', 'Reduza a largura do tile ou aumente o viewport de referência.'], ['Degrau de camada muito profundo', 'As mudanças de altura ficam muito fortes.', 'Use menos camadas ou confirme que os assets suportam essa elevação.']] },
    { type: 'title', level: 2, text: 'Escolha a exportação certa para a próxima tarefa' },
    { type: 'paragraph', html: 'JSON é a entrega estruturada: preserva a geometria, o número de camadas, o estado de desenho e cada valor de tile. SVG é a entrega de apresentação: mostra os losangos coloridos para uma revisão, uma tarefa ou um documento de planejamento. Nenhuma exportação contém o tileset original ou metadados da engine.' },
    { type: 'tip', title: 'O que este blockout não pode provar', html: 'Um mapa de losangos convincente não prova que sprites serão ordenados corretamente, que personagens poderão atravessar alturas ou que um tileset se conectará sem emendas. Teste assets reais, colisões, eixo de ordenação e câmera na engine alvo.' },
  ],
  faqTitle: 'Dúvidas sobre mapas de tiles isométricos', faq, bibliographyTitle: 'Referências sobre mapas de tiles', bibliography: bibliographyEntries, howTo, schemas: [softwareApplication, faqPage, howToSchema],
};
