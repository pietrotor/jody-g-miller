import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import {
  PDF_COLORS,
  PDF_FONT_FAMILY,
  PDF_FONT_SIZE,
  PDF_LABEL_TRACKING,
  PDF_PAGE,
  PDF_SPACING,
} from "../../constants";
import Rule from "../Rule";
import type { IPageFooterProps } from "../../types";

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: PDF_PAGE.padding.bottom / 2,
    left: PDF_PAGE.padding.left,
    right: PDF_PAGE.padding.right,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: PDF_SPACING.sm,
  },
  label: {
    fontFamily: PDF_FONT_FAMILY.sans,
    fontSize: PDF_FONT_SIZE.xxs,
    fontWeight: 400,
    textTransform: "uppercase",
    letterSpacing: PDF_LABEL_TRACKING,
    color: PDF_COLORS.sage,
  },
});

export default function PageFooter({
  websiteLabel,
}: IPageFooterProps): React.ReactElement {
  return (
    <View style={styles.wrapper} fixed>
      <Rule color={PDF_COLORS.border} />
      <View style={styles.row}>
        <Text style={styles.label}>{websiteLabel}</Text>
        <Text
          style={styles.label}
          render={({ pageNumber, totalPages }) =>
            `Page ${pageNumber} of ${totalPages}`
          }
        />
      </View>
    </View>
  );
}
