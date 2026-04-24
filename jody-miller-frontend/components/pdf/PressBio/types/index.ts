import type {
  IBioExperience,
  IBioEducation,
  IBioSpeakingTopic,
  IBioStat,
} from "@/lib/bio-data";

export type TPressBioPhoto =
  | { data: Buffer; format: "png" | "jpg" }
  | string
  | null;

export interface IPressBioData {
  name: string;
  positioning: string;
  headline: string;
  biographyParagraphs: string[];
  photoSrc: TPressBioPhoto;
  mediaCredentials: string[];
  stats: IBioStat[];
  experience: IBioExperience[];
  speakingTopics: IBioSpeakingTopic[];
  advisoryAreas: string[];
  education: IBioEducation[];
  contact: {
    website: string;
    path: string;
  };
  nameLabel: string;
}

export interface IPressBioDocumentProps {
  data: IPressBioData;
}

export interface IPageFooterProps {
  websiteLabel: string;
}

export interface ISectionLabelProps {
  children: string;
  color?: string;
}

export interface IRuleProps {
  color?: string;
  width?: string | number;
  marginVertical?: number;
}

export interface IStatItemProps {
  stat: IBioStat;
  showLeftBorder: boolean;
}

export interface IExperienceItemProps {
  experience: IBioExperience;
  isLast: boolean;
}

export interface ISpeakingTopicItemProps {
  topic: IBioSpeakingTopic;
  isLast: boolean;
}

export interface IAdvisoryBulletProps {
  text: string;
}

export interface IMastheadProps {
  nameLabel: string;
}

export interface ICoverPageProps {
  name: string;
  positioning: string;
  headline: string;
  photoSrc: TPressBioPhoto;
  mediaCredentials: string[];
  nameLabel: string;
  stats: IBioStat[];
  shortBio: string;
}

export interface IBiographyPageProps {
  biographyParagraphs: string[];
  nameLabel: string;
  websiteLabel: string;
}

export interface IExperiencePageProps {
  experience: IBioExperience[];
  nameLabel: string;
  websiteLabel: string;
}

export interface ISpeakingEducationPageProps {
  speakingTopics: IBioSpeakingTopic[];
  advisoryAreas: string[];
  education: IBioEducation[];
  contact: {
    website: string;
    path: string;
  };
  nameLabel: string;
  websiteLabel: string;
}
