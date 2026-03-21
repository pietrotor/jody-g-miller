export type ContentType = "article" | "video" | "podcast";

interface BaseArchiveItem {
  id: string;
  title: string;
  description: string;
  category: string;
  year: number;
  date: string;
  featured?: boolean;
}

export interface Article extends BaseArchiveItem {
  type: "article";
  publication: string;
  pdfUrl?: string;
  externalUrl?: string;
}

export interface Video extends BaseArchiveItem {
  type: "video";
  publication: string;
  youtubeId: string;
}

export interface Podcast extends BaseArchiveItem {
  type: "podcast";
  show: string;
  embedUrl?: string;
  duration?: string;
}

export type ArchiveItem = Article | Video | Podcast;

export interface SelectedPiece {
  id: string;
  title: string;
  publication: string;
  year: number;
  personalIntro: string;
  pdfUrl?: string;
  externalUrl?: string;
}

export function getSource(item: ArchiveItem): string {
  if (item.type === "podcast") return item.show;
  return item.publication;
}

export function getCtaLabel(item: ArchiveItem): string {
  if (item.type === "video") return "Watch";
  if (item.type === "podcast") return "Listen";
  return "Read";
}

export function getItemUrl(item: ArchiveItem): string {
  if (item.type === "video") return `https://youtube.com/watch?v=${item.youtubeId}`;
  if (item.type === "podcast") return item.embedUrl ?? "#";
  return item.externalUrl ?? item.pdfUrl ?? "#";
}
