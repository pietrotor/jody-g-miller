import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import {
  PDF_COLORS,
  PDF_FONT_FAMILY,
  PDF_FONT_SIZE,
  PDF_LABEL_TRACKING,
  PDF_LINE_HEIGHT,
  PDF_RULE_THICKNESS,
  PDF_SPACING,
} from "../../constants";
import type { IExperienceItemProps } from "../../types";

const EXPERIENCE_DESCRIPTION_FONT_SIZE = 9;
const EXPERIENCE_LEFT_COL_WIDTH = "34%";
const EXPERIENCE_ITEM_PADDING_Y = PDF_SPACING.md;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: EXPERIENCE_ITEM_PADDING_Y,
    paddingBottom: EXPERIENCE_ITEM_PADDING_Y,
  },
  containerBordered: {
    borderBottomWidth: PDF_RULE_THICKNESS,
    borderBottomColor: PDF_COLORS.border,
  },
  left: {
    width: EXPERIENCE_LEFT_COL_WIDTH,
    paddingRight: PDF_SPACING.md,
  },
  right: {
    flex: 1,
  },
  org: {
    fontFamily: PDF_FONT_FAMILY.serif,
    fontSize: PDF_FONT_SIZE.md,
    fontWeight: 400,
    color: PDF_COLORS.heading,
    lineHeight: PDF_LINE_HEIGHT.snug,
  },
  roleLine: {
    fontFamily: PDF_FONT_FAMILY.sans,
    fontSize: PDF_FONT_SIZE.xs,
    fontWeight: 400,
    color: PDF_COLORS.accent,
    marginTop: PDF_SPACING.xs,
  },
  period: {
    fontFamily: PDF_FONT_FAMILY.sans,
    fontSize: PDF_FONT_SIZE.xs,
    fontWeight: 300,
    color: PDF_COLORS.sage,
    marginTop: 2,
  },
  type: {
    fontFamily: PDF_FONT_FAMILY.sans,
    fontSize: PDF_FONT_SIZE.xxs,
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: PDF_LABEL_TRACKING,
    color: PDF_COLORS.sage,
  },
  description: {
    fontFamily: PDF_FONT_FAMILY.sans,
    fontSize: EXPERIENCE_DESCRIPTION_FONT_SIZE,
    fontWeight: 300,
    color: PDF_COLORS.body,
    lineHeight: PDF_LINE_HEIGHT.normal,
    marginTop: PDF_SPACING.xs,
  },
});

export default function ExperienceItem({
  experience,
  isLast,
}: IExperienceItemProps): React.ReactElement {
  return (
    <View
      style={[styles.container, isLast ? {} : styles.containerBordered]}
      wrap={false}
    >
      <View style={styles.left}>
        <Text style={styles.org}>{experience.org}</Text>
        <Text style={styles.roleLine}>{experience.role}</Text>
        <Text style={styles.period}>{experience.period}</Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.type}>{experience.type}</Text>
        <Text style={styles.description}>{experience.description}</Text>
      </View>
    </View>
  );
}
