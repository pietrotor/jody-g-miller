import React from "react";
import { Page, View, Text, StyleSheet } from "@react-pdf/renderer";
import {
  PDF_COLORS,
  PDF_FONT_FAMILY,
  PDF_FONT_SIZE,
  PDF_LETTER_SPACING,
  PDF_LINE_HEIGHT,
  PDF_PAGE,
  PDF_SPACING,
} from "../../constants";
import Masthead from "../Masthead";
import PageFooter from "../PageFooter";
import SectionLabel from "../SectionLabel";
import type { IBiographyPageProps } from "../../types";

const SECTION_TITLE_COLUMN_WIDTH = "30%";
const PARAGRAPH_SPACING = PDF_SPACING.md;

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
  sectionRow: {
    flexDirection: "row",
    marginTop: PDF_SPACING.xl,
  },
  sectionTitleCol: {
    width: SECTION_TITLE_COLUMN_WIDTH,
    paddingRight: PDF_SPACING.lg,
  },
  sectionBodyCol: {
    flex: 1,
  },
  sectionTitle: {
    fontFamily: PDF_FONT_FAMILY.serif,
    fontSize: PDF_FONT_SIZE.xl2,
    fontWeight: 400,
    fontStyle: "italic",
    color: PDF_COLORS.heading,
    lineHeight: PDF_LINE_HEIGHT.tight,
    letterSpacing: PDF_LETTER_SPACING.heading,
    marginTop: PDF_SPACING.sm,
  },
  paragraph: {
    fontFamily: PDF_FONT_FAMILY.sans,
    fontSize: PDF_FONT_SIZE.sm,
    fontWeight: 300,
    color: PDF_COLORS.body,
    lineHeight: PDF_LINE_HEIGHT.loose,
    marginBottom: PARAGRAPH_SPACING,
  },
});

export default function BiographyPage({
  biographyParagraphs,
  nameLabel,
  websiteLabel,
}: IBiographyPageProps): React.ReactElement {
  return (
    <Page size={PDF_PAGE.size} style={styles.page}>
      <Masthead nameLabel={nameLabel} />

      <View style={styles.sectionRow}>
        <View style={styles.sectionTitleCol}>
          <SectionLabel color={PDF_COLORS.accent}>Biography</SectionLabel>
          <Text style={styles.sectionTitle}>A life in work.</Text>
        </View>
        <View style={styles.sectionBodyCol}>
          {biographyParagraphs.map((paragraph, index) => (
            <Text key={index} style={styles.paragraph}>
              {paragraph}
            </Text>
          ))}
        </View>
      </View>

      <PageFooter websiteLabel={websiteLabel} />
    </Page>
  );
}
