import React from "react";
import { Page, View, Text, StyleSheet } from "@react-pdf/renderer";
import {
  PDF_COLORS,
  PDF_FONT_FAMILY,
  PDF_FONT_SIZE,
  PDF_LABEL_TRACKING,
  PDF_LETTER_SPACING,
  PDF_LINE_HEIGHT,
  PDF_PAGE,
  PDF_RULE_THICKNESS,
  PDF_SPACING,
} from "../../constants";
import Masthead from "../Masthead";
import PageFooter from "../PageFooter";
import SectionLabel from "../SectionLabel";
import SpeakingTopicItem from "../SpeakingTopicItem";
import AdvisoryBullet from "../AdvisoryBullet";
import type { ISpeakingEducationPageProps } from "../../types";

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
  sectionHeader: {
    marginTop: PDF_SPACING.lg,
  },
  sectionTitle: {
    fontFamily: PDF_FONT_FAMILY.serif,
    fontSize: PDF_FONT_SIZE.xl2,
    fontWeight: 400,
    fontStyle: "italic",
    color: PDF_COLORS.heading,
    lineHeight: PDF_LINE_HEIGHT.tight,
    letterSpacing: PDF_LETTER_SPACING.heading,
    marginTop: PDF_SPACING.xs,
  },
  twoColumn: {
    flexDirection: "row",
    marginTop: PDF_SPACING.md,
  },
  column: {
    flex: 1,
    paddingRight: PDF_SPACING.lg,
  },
  columnRight: {
    flex: 1,
    paddingLeft: PDF_SPACING.lg,
    borderLeftWidth: PDF_RULE_THICKNESS,
    borderLeftColor: PDF_COLORS.border,
  },
  subsectionLabel: {
    fontFamily: PDF_FONT_FAMILY.sans,
    fontSize: PDF_FONT_SIZE.xxs,
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: PDF_LABEL_TRACKING,
    color: PDF_COLORS.sage,
    marginBottom: PDF_SPACING.md,
  },
  educationSection: {
    marginTop: PDF_SPACING.lg,
    paddingTop: PDF_SPACING.md,
    borderTopWidth: PDF_RULE_THICKNESS,
    borderTopColor: PDF_COLORS.border,
  },
  educationRow: {
    flexDirection: "row",
  },
  educationLeft: {
    width: "36%",
  },
  educationRight: {
    flex: 1,
  },
  educationHeading: {
    fontFamily: PDF_FONT_FAMILY.serif,
    fontSize: PDF_FONT_SIZE.md,
    fontWeight: 400,
    color: PDF_COLORS.heading,
    lineHeight: PDF_LINE_HEIGHT.snug,
  },
  educationLine: {
    fontFamily: PDF_FONT_FAMILY.sans,
    fontSize: PDF_FONT_SIZE.sm,
    fontWeight: 300,
    color: PDF_COLORS.body,
    lineHeight: PDF_LINE_HEIGHT.relaxed,
  },
  contactSection: {
    marginTop: PDF_SPACING.lg,
    paddingTop: PDF_SPACING.sm,
    paddingBottom: PDF_SPACING.sm,
    paddingHorizontal: PDF_SPACING.md,
    backgroundColor: PDF_COLORS.heading,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contactLabel: {
    fontFamily: PDF_FONT_FAMILY.sans,
    fontSize: PDF_FONT_SIZE.xxs,
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: PDF_LABEL_TRACKING,
    color: "rgba(244, 241, 234, 0.45)",
  },
  contactHeading: {
    fontFamily: PDF_FONT_FAMILY.serif,
    fontSize: PDF_FONT_SIZE.sm,
    fontWeight: 400,
    fontStyle: "italic",
    color: PDF_COLORS.background,
    lineHeight: PDF_LINE_HEIGHT.snug,
    marginTop: 2,
  },
  contactLink: {
    fontFamily: PDF_FONT_FAMILY.sans,
    fontSize: PDF_FONT_SIZE.sm,
    fontWeight: 500,
    color: PDF_COLORS.accent,
  },
});

export default function SpeakingEducationPage({
  speakingTopics,
  advisoryAreas,
  education,
  contact,
  nameLabel,
  websiteLabel,
}: ISpeakingEducationPageProps): React.ReactElement {
  const contactUrl = `${contact.website}${contact.path}`;

  return (
    <Page size={PDF_PAGE.size} style={styles.page}>
      <Masthead nameLabel={nameLabel} />

      <View style={styles.sectionHeader}>
        <SectionLabel color={PDF_COLORS.accent}>
          Speaking &amp; Advisory
        </SectionLabel>
        <Text style={styles.sectionTitle}>
          On stage, in the boardroom.
        </Text>
      </View>

      <View style={styles.twoColumn}>
        <View style={styles.column}>
          <Text style={styles.subsectionLabel}>Speaking Topics</Text>
          {speakingTopics.map((topic, index) => (
            <SpeakingTopicItem
              key={topic.title}
              topic={topic}
              isLast={index === speakingTopics.length - 1}
            />
          ))}
        </View>

        <View style={styles.columnRight}>
          <Text style={styles.subsectionLabel}>Advisory Areas</Text>
          {advisoryAreas.map((area) => (
            <AdvisoryBullet key={area} text={area} />
          ))}
        </View>
      </View>

      <View style={styles.educationSection} wrap={false}>
        <View style={styles.educationRow}>
          <View style={styles.educationLeft}>
            <Text style={styles.educationHeading}>Education</Text>
          </View>
          <View style={styles.educationRight}>
            {education.map((edu) => (
              <Text key={edu.institution} style={styles.educationLine}>
                {edu.degree}, {edu.institution}
              </Text>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.contactSection} wrap={false}>
        <View>
          <Text style={styles.contactLabel}>
            Press &amp; Speaking Inquiries
          </Text>
          <Text style={styles.contactHeading}>
            Contact for interviews &amp; engagements
          </Text>
        </View>
        <Text style={styles.contactLink}>{contactUrl} ›</Text>
      </View>

      <PageFooter websiteLabel={websiteLabel} />
    </Page>
  );
}
