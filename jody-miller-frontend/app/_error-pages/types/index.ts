import type { ReactNode } from "react";

export interface IErrorPageContent {
  code: string;
  label: string;
  title: string;
  description: string;
}

export interface IErrorPageShellProps {
  content: IErrorPageContent;
  children: ReactNode;
}

export interface IErrorBoundaryError extends Error {
  digest?: string;
}
