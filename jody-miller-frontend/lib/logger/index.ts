/**
 * Centralized logging sink for the entire application.
 *
 * The codebase-wide rule is that raw `console.*` calls are forbidden, and all
 * logging must flow through this module. Today the implementation is a thin
 * wrapper around `console`; swap the internals for a real provider (Sentry,
 * LogRocket, an internal telemetry endpoint, etc.) without touching any call
 * site.
 */

type TLogContext = Record<string, unknown>;

type TLogLevel = "info" | "warn" | "error";

/**
 * Write a single entry to the underlying sink.
 *
 * @param level Severity of the message.
 * @param message Human-readable summary of the event.
 * @param context Optional structured metadata attached to the message.
 */
function emit(level: TLogLevel, message: string, context?: TLogContext): void {
  // eslint-disable-next-line no-console
  console[level](message, context ?? {});
}

export const logger = {
  info: (message: string, context?: TLogContext): void =>
    emit("info", message, context),
  warn: (message: string, context?: TLogContext): void =>
    emit("warn", message, context),
  error: (message: string, context?: TLogContext): void =>
    emit("error", message, context),
} as const;
