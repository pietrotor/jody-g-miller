import React from "react";
import { Page, View, Text, Image, StyleSheet } from "@react-pdf/renderer";
import {
  PDF_COLORS,
  PDF_FONT_FAMILY,
  PDF_FONT_SIZE,
  PDF_LABEL_TRACKING,
  PDF_LETTER_SPACING,
  PDF_LINE_HEIGHT,
  PDF_PAGE,
  PDF_PORTRAIT_BORDER,
  PDF_RULE_THICKNESS,
  PDF_SPACING,
} from "../../constants";
import Masthead from "../Masthead";
import PageFooter from "../PageFooter";
import StatItem from "../StatItem";
import type { ICoverPageProps } from "../../types";

const PORTRAIT_WIDTH_PT = 180;
const PORTRAIT_ASPECT_RATIO = 3 / 4;
const PORTRAIT_HEIGHT_PT = PORTRAIT_WIDTH_PT / PORTRAIT_ASPECT_RATIO;

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
  hero: {
    flexDirection: "row",
    marginTop: PDF_SPACING.xl,
    alignItems: "flex-start",
    gap: PDF_SPACING.xl,
  },
  heroLeft: {
    flex: 1,
    paddingRight: PDF_SPACING.lg,
  },
  nameLine: {
    fontFamily: PDF_FONT_FAMILY.serif,
    fontSize: PDF_FONT_SIZE.display,
    fontWeight: 500,
    color: PDF_COLORS.heading,
    lineHeight: PDF_LINE_HEIGHT.tight,
    letterSpacing: PDF_LETTER_SPACING.heading,
  },
  positioning: {
    fontFamily: PDF_FONT_FAMILY.sans,
    fontSize: PDF_FONT_SIZE.sm,
    fontWeight: 400,
    color: PDF_COLORS.accent,
    lineHeight: PDF_LINE_HEIGHT.relaxed,
    marginTop: PDF_SPACING.md,
  },
  headline: {
    fontFamily: PDF_FONT_FAMILY.serif,
    fontSize: PDF_FONT_SIZE.xl,
    fontWeight: 400,
    fontStyle: "italic",
    color: PDF_COLORS.heading,
    lineHeight: PDF_LINE_HEIGHT.snug,
    marginTop: PDF_SPACING.lg,
  },
  shortBio: {
    fontFamily: PDF_FONT_FAMILY.sans,
    fontSize: PDF_FONT_SIZE.sm,
    fontWeight: 300,
    color: PDF_COLORS.body,
    lineHeight: PDF_LINE_HEIGHT.relaxed,
    marginTop: PDF_SPACING.lg,
  },
  portraitWrap: {
    width: PORTRAIT_WIDTH_PT,
    height: PORTRAIT_HEIGHT_PT,
    overflow: "hidden",
    borderWidth: PDF_PORTRAIT_BORDER,
    borderColor: PDF_COLORS.border,
    backgroundColor: PDF_COLORS.surfaceContainer,
  },
  portrait: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  portraitPlaceholder: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  portraitPlaceholderText: {
    fontFamily: PDF_FONT_FAMILY.sans,
    fontSize: PDF_FONT_SIZE.xxs,
    color: PDF_COLORS.sage,
    textTransform: "uppercase",
    letterSpacing: PDF_LABEL_TRACKING,
    textAlign: "center",
    paddingHorizontal: PDF_SPACING.md,
  },
  credentialsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: PDF_SPACING.xl,
    flexWrap: "wrap",
    gap: PDF_SPACING.md,
  },
  credentialsLabel: {
    fontFamily: PDF_FONT_FAMILY.sans,
    fontSize: PDF_FONT_SIZE.xxs,
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: PDF_LABEL_TRACKING,
    color: PDF_COLORS.sage,
  },
  credentialsSep: {
    width: 12,
    height: PDF_RULE_THICKNESS,
    backgroundColor: PDF_COLORS.accentDark,
  },
  credentialItem: {
    fontFamily: PDF_FONT_FAMILY.serif,
    fontSize: PDF_FONT_SIZE.sm,
    fontStyle: "italic",
    color: PDF_COLORS.heading,
  },
  credentialDot: {
    fontFamily: PDF_FONT_FAMILY.sans,
    fontSize: PDF_FONT_SIZE.sm,
    color: PDF_COLORS.border,
  },
  statsStrip: {
    flexDirection: "row",
    marginTop: PDF_SPACING.xl2,
    borderTopWidth: PDF_RULE_THICKNESS,
    borderTopColor: PDF_COLORS.border,
    borderBottomWidth: PDF_RULE_THICKNESS,
    borderBottomColor: PDF_COLORS.border,
    backgroundColor: PDF_COLORS.surfaceContainer,
  },
});

export default function CoverPage({
  name,
  positioning,
  headline,
  photoSrc,
  mediaCredentials,
  nameLabel,
  stats,
  shortBio,
}: ICoverPageProps): React.ReactElement {
  return (
    <Page size={PDF_PAGE.size} style={styles.page}>
      <Masthead nameLabel={nameLabel} />

      <View style={styles.hero}>
        <View style={styles.heroLeft}>
          <Text style={styles.nameLine}>{name}</Text>
          <Text style={styles.positioning}>{positioning}</Text>
          <Text style={styles.headline}>&ldquo;{headline}&rdquo;</Text>
          <Text style={styles.shortBio}>{shortBio}</Text>
        </View>

        <View style={styles.portraitWrap}>
          {photoSrc ? (
            <Image src={photoSrc} style={styles.portrait} />
          ) : (
            <View style={styles.portraitPlaceholder}>
              <Text style={styles.portraitPlaceholderText}>
                Jody Greenstone{"\n"}Miller
              </Text>
            </View>
          )}
        </View>
      </View>

      <View style={styles.credentialsRow}>
        <Text style={styles.credentialsLabel}>Featured in</Text>
        <View style={styles.credentialsSep} />
        {mediaCredentials.map((source, index) => (
          <React.Fragment key={source}>
            <Text style={styles.credentialItem}>{source}</Text>
            {index < mediaCredentials.length - 1 && (
              <Text style={styles.credentialDot}>·</Text>
            )}
          </React.Fragment>
        ))}
      </View>

      <View style={styles.statsStrip}>
        {stats.map((stat, index) => (
          <StatItem
            key={stat.label}
            stat={stat}
            showLeftBorder={index > 0}
          />
        ))}
      </View>

      <PageFooter websiteLabel="jodygreenstonemiller.com" />
    </Page>
  );
}
