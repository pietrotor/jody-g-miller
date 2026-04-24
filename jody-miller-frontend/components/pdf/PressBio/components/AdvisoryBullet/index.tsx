import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import {
  PDF_COLORS,
  PDF_FONT_FAMILY,
  PDF_FONT_SIZE,
  PDF_LINE_HEIGHT,
  PDF_SPACING,
} from "../../constants";
import type { IAdvisoryBulletProps } from "../../types";

const BULLET_DASH_WIDTH = 14;
const BULLET_DASH_HEIGHT = 0.75;
const BULLET_DASH_TOP_OFFSET = 7;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: PDF_SPACING.sm,
  },
  dash: {
    width: BULLET_DASH_WIDTH,
    height: BULLET_DASH_HEIGHT,
    backgroundColor: PDF_COLORS.accent,
    marginTop: BULLET_DASH_TOP_OFFSET,
    marginRight: PDF_SPACING.md,
  },
  text: {
    flex: 1,
    fontFamily: PDF_FONT_FAMILY.sans,
    fontSize: PDF_FONT_SIZE.sm,
    fontWeight: 300,
    color: PDF_COLORS.body,
    lineHeight: PDF_LINE_HEIGHT.relaxed,
  },
});

export default function AdvisoryBullet({
  text,
}: IAdvisoryBulletProps): React.ReactElement {
  return (
    <View style={styles.container} wrap={false}>
      <View style={styles.dash} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
