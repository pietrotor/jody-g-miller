import React from "react";
import { Text, StyleSheet } from "@react-pdf/renderer";
import {
  PDF_COLORS,
  PDF_FONT_FAMILY,
  PDF_FONT_SIZE,
  PDF_LABEL_TRACKING,
} from "../../constants";
import type { ISectionLabelProps } from "../../types";

const styles = StyleSheet.create({
  label: {
    fontFamily: PDF_FONT_FAMILY.sans,
    fontWeight: 500,
    fontSize: PDF_FONT_SIZE.xxs,
    textTransform: "uppercase",
    letterSpacing: PDF_LABEL_TRACKING,
  },
});

export default function SectionLabel({
  children,
  color = PDF_COLORS.sage,
}: ISectionLabelProps): React.ReactElement {
  return <Text style={[styles.label, { color }]}>{children}</Text>;
}
