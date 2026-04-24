export type ContentType = "article" | "video" | "podcast";

export interface ArchiveItem {
  id: string;
  title: string;
  type: ContentType;
  description: string;
  source: string;
  category: string;
  year: number;
  date: string;
  featured: boolean;
  externalUrl?: string;
  pdfUrl?: string;
  youtubeId?: string;
  embedUrl?: string;
  duration?: string;
}

export interface SelectedPiece {
  id: string;
  title: string;
  source: string;
  type: ContentType;
  year: number;
  personalIntro: string;
  imageUrl?: string;
  externalUrl?: string;
  pdfUrl?: string;
  youtubeId?: string;
  embedUrl?: string;
  order: number;
}

export interface PressLogo {
  id: string;
  name: string;
  order: number;
}

export interface FamilyLink {
  label: string;
  url: string;
}

export interface Bio {
  headline: string;
  biography: string;
  photoUrl?: string;
  downloadablePdfUrl?: string;
  linkedinUrl?: string;
  familyLinks: FamilyLink[];
}

export interface TimelineEvent {
  year: string;
  event: string;
}

export interface Milestone {
  text: string;
}

export interface Recognition {
  label: string;
  description: string;
}

export interface Investor {
  name: string;
  description: string;
}

export interface BoardMember {
  name: string;
  role: string;
}

export interface BtgMission {
  missionIntro: string;
  missionQuote: string;
  missionClosing: string;
}

export interface BtgHistory {
  historyIntro: string;
  timelineEvents: TimelineEvent[];
}

export interface BtgAccomplishments {
  milestones: Milestone[];
  recognitions: Recognition[];
}

export interface BtgInvestors {
  investors: Investor[];
  boardMembers: BoardMember[];
}

export interface SpeakingTopic {
  title: string;
  description: string;
}

export interface Speaking {
  topics: SpeakingTopic[];
  advisoryAreas: string[];
  contactIntro: string;
}

export interface TheDetails {
  entrepreneurial: string;
  executive: string;
  boards: string;
  government: string;
  nonprofit: string;
}

export function getSource(item: ArchiveItem): string {
  return item.source;
}

export function getCtaLabel(item: ArchiveItem): string {
  if (item.type === "video") return "Watch";
  if (item.type === "podcast") return "Listen";
  return "Read";
}

export function getItemUrl(item: ArchiveItem): string {
  if (item.type === "video" && item.youtubeId)
    return `https://youtube.com/watch?v=${item.youtubeId}`;
  if (item.type === "podcast") return item.embedUrl ?? "#";
  return item.externalUrl ?? item.pdfUrl ?? "#";
}
