import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import {
  PDF_COLORS,
  PDF_FONT_FAMILY,
  PDF_FONT_SIZE,
  PDF_LINE_HEIGHT,
  PDF_SPACING,
} from "../../constants";
import type { ISpeakingTopicItemProps } from "../../types";

const styles = StyleSheet.create({
  container: {
    marginBottom: PDF_SPACING.md,
  },
  containerLast: {
    marginBottom: 0,
  },
  title: {
    fontFamily: PDF_FONT_FAMILY.serif,
    fontSize: PDF_FONT_SIZE.base,
    fontWeight: 400,
    fontStyle: "italic",
    color: PDF_COLORS.heading,
    lineHeight: PDF_LINE_HEIGHT.snug,
  },
  description: {
    fontFamily: PDF_FONT_FAMILY.sans,
    fontSize: PDF_FONT_SIZE.xs,
    fontWeight: 300,
    color: PDF_COLORS.body,
    lineHeight: PDF_LINE_HEIGHT.normal,
    marginTop: PDF_SPACING.xs,
  },
});

export default function SpeakingTopicItem({
  topic,
  isLast,
}: ISpeakingTopicItemProps): React.ReactElement {
  return (
    <View style={isLast ? styles.containerLast : styles.container} wrap={false}>
      <Text style={styles.title}>{topic.title}</Text>
      <Text style={styles.description}>{topic.description}</Text>
    </View>
  );
}
