import React from "react";
import { View } from "@react-pdf/renderer";
import { PDF_COLORS, PDF_RULE_THICKNESS } from "../../constants";
import type { IRuleProps } from "../../types";

export default function Rule({
  color = PDF_COLORS.border,
  width = "100%",
  marginVertical = 0,
}: IRuleProps): React.ReactElement {
  return (
    <View
      style={{
        width,
        height: PDF_RULE_THICKNESS,
        backgroundColor: color,
        marginTop: marginVertical,
        marginBottom: marginVertical,
      }}
    />
  );
}
