import type { IPlatformBridge } from '../../platform/contracts/IPlatformBridge';
import type { ProjectSummary } from '../types';
import type { WorkspaceProjectConfig } from '../types/WorkspaceProjectConfig';

export type JsonPrimitive = string | number | boolean | null;

export type JsonValue = JsonPrimitive | JsonObject | JsonValue[];

export interface JsonObject {
  [key: string]: JsonValue;
}

export interface DesktopToolCapabilityDescriptor {
  readonly id: string;
  readonly title: string;
}

export interface DesktopToolCommandDescriptor {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly defaultShortcut?: string;
  readonly requiresProject?: boolean;
}

export interface DesktopToolArtifactTypeDescriptor {
  readonly type: string;
  readonly title: string;
  readonly schemaVersion: number;
  readonly multiple?: boolean;
}

export interface DesktopToolManifest {
  readonly id: string;
  readonly version: string;
  readonly name: string;
  readonly description: string;
  readonly capabilities: readonly DesktopToolCapabilityDescriptor[];
  readonly commands: readonly DesktopToolCommandDescriptor[];
  readonly inputs: readonly DesktopToolArtifactTypeDescriptor[];
  readonly outputs: readonly DesktopToolArtifactTypeDescriptor[];
}

export interface DesktopToolActivityEvent {
  readonly severity: 'info' | 'warn' | 'error' | 'success';
  readonly message: string;
}

export interface DesktopToolRuntimeContext {
  readonly project: ProjectSummary | null;
  readonly projectConfig: WorkspaceProjectConfig | null;
  readonly platform: IPlatformBridge;
  readonly signal: AbortSignal;
  readonly reportActivity: (event: DesktopToolActivityEvent) => void;
}

export interface DesktopToolView {
  mount(target: Element): void | Promise<void>;
  dispose(): void | Promise<void>;
}

export interface DesktopToolSurface {
  show(view: DesktopToolView): void | Promise<void>;
  clear(): void | Promise<void>;
}

export interface DesktopToolMountContext extends DesktopToolRuntimeContext {
  readonly surface: DesktopToolSurface;
}

export type DesktopToolDeactivationReason =
  | 'tool-switch'
  | 'project-change'
  | 'application-suspend'
  | 'dispose';

export interface DesktopToolInstance<TSession extends JsonObject = JsonObject> {
  mount(context: DesktopToolMountContext, restoredSession?: Readonly<TSession>): Promise<void>;
  updateContext(context: DesktopToolRuntimeContext): Promise<void>;
  activate(): Promise<void>;
  deactivate(reason: DesktopToolDeactivationReason): Promise<void>;
  isCommandEnabled(commandId: string): boolean;
  executeCommand(commandId: string, payload?: JsonValue): Promise<JsonValue | undefined>;
  serializeSession(): TSession;
  dispose(): Promise<void>;
}

export interface DesktopToolModule<TSession extends JsonObject = JsonObject> {
  readonly manifest: DesktopToolManifest;
  create(): DesktopToolInstance<TSession>;
}
