export type OutputFormat = 'markdown' | 'html';
export type TranslationDirection = 'bbcode-to-output' | 'output-to-bbcode';
export type MarkupSyntax = 'bbcode' | 'markdown' | 'html';

export interface TranslationStats {
  characters: number;
  tags: number;
  blocks: number;
}

export interface TranslationResult {
  output: string;
  warnings: string[];
  stats: TranslationStats;
}

export interface AutoTranslationResult {
  detected: MarkupSyntax;
  outputs: Partial<Record<MarkupSyntax, TranslationResult>>;
}

export interface TextNode {
  kind: 'text';
  value: string;
}

export interface TagNode {
  kind: 'tag';
  name: string;
  value?: string | undefined;
  children: Node[];
}

export type Node = TextNode | TagNode;

export const STORAGE_KEY = 'steam-bbcode-translator-draft-v1';
