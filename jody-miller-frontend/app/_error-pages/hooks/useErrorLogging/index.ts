"use client";

import { useEffect } from "react";
import { logger } from "@/lib/logger";
import { ERROR_LOG_TAG } from "../../constants";
import type { IErrorBoundaryError } from "../../types";

/**
 * Side-effect hook used by an error boundary to report the received error
 * through the centralized logger. The call site stays declarative and the
 * hook handles the reporting/telemetry detail so it can evolve independently
 * (e.g. hooking into Sentry) without touching the page component.
 *
 * @param error The error object delivered by Next.js to an `error.tsx` boundary.
 */
export function useErrorLogging(error: IErrorBoundaryError): void {
  useEffect(() => {
    logger.error(`${ERROR_LOG_TAG}: ${error.message}`, {
      name: error.name,
      digest: error.digest,
      stack: error.stack,
    });
  }, [error]);
}
