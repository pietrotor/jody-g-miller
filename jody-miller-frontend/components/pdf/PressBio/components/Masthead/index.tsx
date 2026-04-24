import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import {
  PDF_COLORS,
  PDF_FONT_FAMILY,
  PDF_FONT_SIZE,
  PDF_LABEL_TRACKING,
  PDF_SPACING,
} from "../../constants";
import Rule from "../Rule";
import type { IMastheadProps } from "../../types";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: PDF_SPACING.md,
  },
  label: {
    fontFamily: PDF_FONT_FAMILY.sans,
    fontSize: PDF_FONT_SIZE.xxs,
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: PDF_LABEL_TRACKING,
    color: PDF_COLORS.sage,
  },
  monogram: {
    fontFamily: PDF_FONT_FAMILY.serif,
    fontSize: PDF_FONT_SIZE.md,
    fontStyle: "italic",
    color: PDF_COLORS.heading,
  },
});

export default function Masthead({
  nameLabel,
}: IMastheadProps): React.ReactElement {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.label}>{nameLabel}</Text>
        <Text style={styles.monogram}>jgm.</Text>
      </View>
      <Rule color={PDF_COLORS.heading} />
    </View>
  );
}
