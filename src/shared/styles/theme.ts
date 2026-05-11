import { colors }     from "./colors";
import { typography } from "./typography";
import { spacing }    from "./spacing";

export const theme = {
  colors,
  typography,
  spacing,

  dark: {
    bg:       colors.gray[950],
    surface:  colors.gray[900],
    surface2: colors.gray[800],
    border:   colors.gray[800],
    text:     "#f9fafb",
    muted:    colors.gray[400],
  },

  light: {
    bg:       "#f8fafc",
    surface:  "#ffffff",
    surface2: "#f1f5f9",
    border:   "#e2e8f0",
    text:     "#0f172a",
    muted:    "#64748b",
  },
} as const;