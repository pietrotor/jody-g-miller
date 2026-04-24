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
import type { IStatItemProps } from "../../types";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: PDF_SPACING.sm,
    paddingVertical: PDF_SPACING.md,
  },
  containerBordered: {
    borderLeftWidth: PDF_RULE_THICKNESS,
    borderLeftColor: PDF_COLORS.border,
  },
  value: {
    fontFamily: PDF_FONT_FAMILY.serif,
    fontSize: PDF_FONT_SIZE.xl2,
    fontWeight: 400,
    color: PDF_COLORS.heading,
    lineHeight: PDF_LINE_HEIGHT.tight,
  },
  label: {
    fontFamily: PDF_FONT_FAMILY.sans,
    fontSize: PDF_FONT_SIZE.xxs,
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: PDF_LABEL_TRACKING,
    color: PDF_COLORS.sage,
    marginTop: PDF_SPACING.xs,
  },
});

export default function StatItem({
  stat,
  showLeftBorder,
}: IStatItemProps): React.ReactElement {
  return (
    <View
      style={[
        styles.container,
        showLeftBorder ? styles.containerBordered : {},
      ]}
    >
      <Text style={styles.value}>
        {stat.end}
        {stat.suffix}
      </Text>
      <Text style={styles.label}>{stat.label}</Text>
    </View>
  );
}
