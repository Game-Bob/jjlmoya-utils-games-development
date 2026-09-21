export type PlatformErrorCode =
    | 'CANCELLED'
    | 'PERMISSION_DENIED'
    | 'INVALID_PATH'
    | 'NOT_FOUND'
    | 'COMMAND_UNAVAILABLE'
    | 'IO_ERROR'
    | 'FILE_TOO_LARGE'
    | 'WATCHER_ERROR'
    | 'INTERNAL_ERROR';

export interface PlatformErrorPayload {
    code: PlatformErrorCode;
    message: string;
}

const PLATFORM_ERROR_CODES = new Set<PlatformErrorCode>([
    'CANCELLED',
    'PERMISSION_DENIED',
    'INVALID_PATH',
    'NOT_FOUND',
    'COMMAND_UNAVAILABLE',
    'IO_ERROR',
    'FILE_TOO_LARGE',
    'WATCHER_ERROR',
    'INTERNAL_ERROR'
]);

export class PlatformError extends Error {
    readonly code: PlatformErrorCode;

    constructor(code: PlatformErrorCode, message: string) {
        super(message);
        this.name = 'PlatformError';
        this.code = code;
    }

    static fromUnknown(error: unknown): PlatformError {
        if (error instanceof PlatformError) {
            return error;
        }
        if (isPlatformErrorPayload(error)) {
            return new PlatformError(error.code, error.message);
        }
        if (error instanceof Error) {
            const unavailable = error.message.includes('not found') || error.message.includes('unknown command');
            return new PlatformError(unavailable ? 'COMMAND_UNAVAILABLE' : 'INTERNAL_ERROR', error.message);
        }
        return new PlatformError('INTERNAL_ERROR', String(error));
    }
}

function isPlatformErrorPayload(value: unknown): value is PlatformErrorPayload {
    if (!value || typeof value !== 'object') {
        return false;
    }
    const candidate = value as Partial<PlatformErrorPayload>;
    return typeof candidate.message === 'string'
        && typeof candidate.code === 'string'
        && PLATFORM_ERROR_CODES.has(candidate.code as PlatformErrorCode);
}
