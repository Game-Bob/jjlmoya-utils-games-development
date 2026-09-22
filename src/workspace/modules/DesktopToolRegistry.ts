import type {
  DesktopToolArtifactTypeDescriptor,
  DesktopToolCapabilityDescriptor,
  DesktopToolCommandDescriptor,
  DesktopToolModule,
} from './DesktopToolModule';

const MODULE_ID_PATTERN = /^[a-z][A-Za-z0-9]*$/;
const MEMBER_ID_PATTERN = /^[a-z][a-z0-9.-]*$/;
const VERSION_PATTERN = /^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/;

export class DesktopToolRegistryError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'DesktopToolRegistryError';
  }
}

export class DesktopToolRegistry {
  private readonly modules: ReadonlyMap<string, DesktopToolModule>;

  constructor(entries: readonly DesktopToolModule[]) {
    const modules = new Map<string, DesktopToolModule>();
    for (const module of entries) {
      validateDesktopToolModule(module);
      if (modules.has(module.manifest.id)) {
        throw new DesktopToolRegistryError(`Duplicate module id: ${module.manifest.id}`);
      }
      modules.set(module.manifest.id, module);
    }
    this.modules = modules;
  }

  public list(): readonly DesktopToolModule[] {
    return [...this.modules.values()];
  }

  public has(moduleId: string): boolean {
    return this.modules.has(moduleId);
  }

  public get(moduleId: string): DesktopToolModule | undefined {
    return this.modules.get(moduleId);
  }

  public require(moduleId: string): DesktopToolModule {
    const module = this.get(moduleId);
    if (!module) throw new DesktopToolRegistryError(`Unknown module id: ${moduleId}`);
    return module;
  }
}

export function validateDesktopToolModule(module: DesktopToolModule): void {
  const { manifest } = module;
  requireText(manifest.id, 'manifest.id');
  if (!MODULE_ID_PATTERN.test(manifest.id)) {
    throw new DesktopToolRegistryError(`Invalid manifest.id: ${manifest.id}`);
  }
  requireText(manifest.version, `${manifest.id}.version`);
  if (!VERSION_PATTERN.test(manifest.version)) {
    throw new DesktopToolRegistryError(`Invalid module version for ${manifest.id}: ${manifest.version}`);
  }
  requireText(manifest.name, `${manifest.id}.name`);
  requireText(manifest.description, `${manifest.id}.description`);
  validateCapabilities(manifest.id, manifest.capabilities);
  validateCommands(manifest.id, manifest.commands);
  validateArtifactTypes(manifest.id, 'inputs', manifest.inputs);
  validateArtifactTypes(manifest.id, 'outputs', manifest.outputs);
  if (typeof module.create !== 'function') {
    throw new DesktopToolRegistryError(`Module ${manifest.id} must expose create()`);
  }
}

function validateCapabilities(
  moduleId: string,
  capabilities: readonly DesktopToolCapabilityDescriptor[],
): void {
  validateMembers(moduleId, 'capability', capabilities, (capability) => {
    requireText(capability.title, `${moduleId}.capabilities.${capability.id}.title`);
  });
}

function validateCommands(
  moduleId: string,
  commands: readonly DesktopToolCommandDescriptor[],
): void {
  validateMembers(moduleId, 'command', commands, (command) => {
    requireText(command.title, `${moduleId}.commands.${command.id}.title`);
  });
}

function validateArtifactTypes(
  moduleId: string,
  direction: 'inputs' | 'outputs',
  artifacts: readonly DesktopToolArtifactTypeDescriptor[],
): void {
  const seen = new Set<string>();
  for (const artifact of artifacts) {
    requireText(artifact.type, `${moduleId}.${direction}.type`);
    requireText(artifact.title, `${moduleId}.${direction}.${artifact.type}.title`);
    if (seen.has(artifact.type)) {
      throw new DesktopToolRegistryError(
        `Duplicate ${direction} artifact type in ${moduleId}: ${artifact.type}`,
      );
    }
    if (!Number.isInteger(artifact.schemaVersion) || artifact.schemaVersion < 1) {
      throw new DesktopToolRegistryError(
        `Invalid schema version for ${moduleId}.${direction}.${artifact.type}`,
      );
    }
    seen.add(artifact.type);
  }
}

function validateMembers<T extends { readonly id: string }>(
  moduleId: string,
  kind: 'capability' | 'command',
  members: readonly T[],
  validate: (member: T) => void,
): void {
  const seen = new Set<string>();
  for (const member of members) {
    requireText(member.id, `${moduleId}.${kind}.id`);
    if (!MEMBER_ID_PATTERN.test(member.id)) {
      throw new DesktopToolRegistryError(`Invalid ${kind} id in ${moduleId}: ${member.id}`);
    }
    if (seen.has(member.id)) {
      throw new DesktopToolRegistryError(`Duplicate ${kind} id in ${moduleId}: ${member.id}`);
    }
    validate(member);
    seen.add(member.id);
  }
}

function requireText(value: string, path: string): void {
  if (!value || value.trim() !== value) {
    throw new DesktopToolRegistryError(`Expected non-empty trimmed text at ${path}`);
  }
}
