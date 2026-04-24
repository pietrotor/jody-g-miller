import React from "react";
import { Document } from "@react-pdf/renderer";
import { registerPressBioFonts } from "./utils/registerFonts";
import { getCoverShortBio } from "./utils/buildPressBioData";
import CoverPage from "./components/CoverPage";
import BiographyPage from "./components/BiographyPage";
import ExperiencePage from "./components/ExperiencePage";
import SpeakingEducationPage from "./components/SpeakingEducationPage";
import type { IPressBioDocumentProps } from "./types";

registerPressBioFonts();

export default function PressBioDocument({
  data,
}: IPressBioDocumentProps): React.ReactElement {
  const websiteLabel = data.contact.website;
  const shortBio = getCoverShortBio(data.biographyParagraphs);

  return (
    <Document
      title={`${data.name} — Press Bio`}
      author={data.name}
      subject="Press Bio"
      keywords="press bio, journalism, speaking, advisory"
    >
      <CoverPage
        name={data.name}
        positioning={data.positioning}
        headline={data.headline}
        photoSrc={data.photoSrc}
        mediaCredentials={data.mediaCredentials}
        nameLabel={data.nameLabel}
        stats={data.stats}
        shortBio={shortBio}
      />
      <BiographyPage
        biographyParagraphs={data.biographyParagraphs}
        nameLabel={data.nameLabel}
        websiteLabel={websiteLabel}
      />
      <ExperiencePage
        experience={data.experience}
        nameLabel={data.nameLabel}
        websiteLabel={websiteLabel}
      />
      <SpeakingEducationPage
        speakingTopics={data.speakingTopics}
        advisoryAreas={data.advisoryAreas}
        education={data.education}
        contact={data.contact}
        nameLabel={data.nameLabel}
        websiteLabel={websiteLabel}
      />
    </Document>
  );
}
