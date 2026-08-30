import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = { slug: 'game-development', title: '游戏开发工具', description: '面向独立开发者的实用浏览器工具，帮助准备商店美术并完成制作交付。', seo: [
  { type: 'title', text: '为游戏创作者准备的工具', level: 2 },
  { type: 'paragraph', html: '游戏开发由许多小决定组成：构图要适应多种商店尺寸，图标要一眼可读，制作任务也要容易重复。本分类为制作、发布和展示游戏的人整理了目标明确的工具，把繁琐工作变成清晰的浏览器操作。' },
  { type: 'title', text: '适合独立开发者', level: 2 },
  { type: 'paragraph', html: '独立团队经常在美术软件、发布面板和审核文件夹之间切换。好的工具可以缩短交接过程，让关键决定可见，并让创作者继续掌握源文件。' },
  { type: 'list', items: ['结果清晰的专注流程', '适合时在浏览器本地处理', '明确的尺寸和导出状态', '补充官方平台文档的说明'] },
  { type: 'tip', html: '把这些工具当作发布前检查层，保留源文件，并将结果与平台当前要求进行比较。' },
] };
