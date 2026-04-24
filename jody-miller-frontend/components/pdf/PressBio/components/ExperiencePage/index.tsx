import React from "react";
import { Page, View, Text, StyleSheet } from "@react-pdf/renderer";
import {
  PDF_COLORS,
  PDF_FONT_FAMILY,
  PDF_FONT_SIZE,
  PDF_LETTER_SPACING,
  PDF_LINE_HEIGHT,
  PDF_PAGE,
  PDF_RULE_THICKNESS,
  PDF_SPACING,
} from "../../constants";
import Masthead from "../Masthead";
import PageFooter from "../PageFooter";
import SectionLabel from "../SectionLabel";
import ExperienceItem from "../ExperienceItem";
import type { IExperiencePageProps } from "../../types";

const styles = StyleSheet.create({
  page: {
    backgroundColor: PDF_COLORS.background,
    paddingTop: PDF_PAGE.padding.top,
    paddingRight: PDF_PAGE.padding.right,
    paddingBottom: PDF_PAGE.padding.bottom,
    paddingLeft: PDF_PAGE.padding.left,
    fontFamily: PDF_FONT_FAMILY.sans,
    color: PDF_COLORS.body,
  },
  header: {
    marginTop: PDF_SPACING.xl,
    marginBottom: PDF_SPACING.md,
  },
  title: {
    fontFamily: PDF_FONT_FAMILY.serif,
    fontSize: PDF_FONT_SIZE.xl2,
    fontWeight: 400,
    fontStyle: "italic",
    color: PDF_COLORS.heading,
    lineHeight: PDF_LINE_HEIGHT.tight,
    letterSpacing: PDF_LETTER_SPACING.heading,
    marginTop: PDF_SPACING.sm,
  },
  list: {
    borderTopWidth: PDF_RULE_THICKNESS,
    borderTopColor: PDF_COLORS.border,
    marginTop: PDF_SPACING.md,
  },
});

export default function ExperiencePage({
  experience,
  nameLabel,
  websiteLabel,
}: IExperiencePageProps): React.ReactElement {
  return (
    <Page size={PDF_PAGE.size} style={styles.page}>
      <Masthead nameLabel={nameLabel} />

      <View style={styles.header}>
        <SectionLabel color={PDF_COLORS.accent}>
          Professional Experience
        </SectionLabel>
        <Text style={styles.title}>A legacy of leadership.</Text>
      </View>

      <View style={styles.list}>
        {experience.map((item, index) => (
          <ExperienceItem
            key={item.id}
            experience={item}
            isLast={index === experience.length - 1}
          />
        ))}
      </View>

      <PageFooter websiteLabel={websiteLabel} />
    </Page>
  );
}
