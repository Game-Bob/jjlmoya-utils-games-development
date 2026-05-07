import type { ToolDefinition } from '../types';

export interface ToolExportValidationResult {
  passed: boolean;
  failures: string[];
}

function validateComponentType(
  toolId: string,
  componentName: string,
  component: unknown,
  failures: string[],
): void {
  if (typeof component !== 'function') {
    failures.push(`${toolId}: ${componentName} is not a function (${typeof component})`);
  }
}

async function validateComponentExecution(
  toolId: string,
  componentName: string,
  fn: () => Promise<unknown>,
  failures: string[],
): Promise<void> {
  try {
    const result = await fn();
    if (!result || typeof result !== 'object') {
      failures.push(`${toolId}: ${componentName} import returned invalid result`);
    }
  } catch (error) {
    failures.push(`${toolId}: ${componentName} execution error - ${error instanceof Error ? error.message : 'unknown'}`);
  }
}

export async function validateToolExports(tools: ToolDefinition[]): Promise<ToolExportValidationResult> {
  const failures: string[] = [];

  for (const tool of tools) {
    validateComponentType(tool.entry.id, 'Component', tool.Component, failures);
    validateComponentType(tool.entry.id, 'SEOComponent', tool.SEOComponent, failures);
    validateComponentType(tool.entry.id, 'BibliographyComponent', tool.BibliographyComponent, failures);

    const componentFn = tool.Component as () => Promise<unknown>;
    const seoFn = tool.SEOComponent as () => Promise<unknown>;
    const bibFn = tool.BibliographyComponent as () => Promise<unknown>;

    await validateComponentExecution(tool.entry.id, 'Component', componentFn, failures);
    await validateComponentExecution(tool.entry.id, 'SEOComponent', seoFn, failures);
    await validateComponentExecution(tool.entry.id, 'BibliographyComponent', bibFn, failures);
  }

  return {
    passed: failures.length === 0,
    failures,
  };
}
