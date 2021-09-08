import { ITheme, mergeStyles } from "@fluentui/react";

export const getShadows = (theme: ITheme): string =>
  mergeStyles({
    boxShadow: `6px 6px 12px ${theme.semanticColors.cardShadowHovered}, -6px -6px 12px ${theme.semanticColors.cardShadow} !important`,
    ".active-button:active": {
      boxShadow: `inset 6px 6px 12px ${theme.semanticColors.cardShadowHovered},inset -6px -6px 12px ${theme.semanticColors.cardShadow} !important`,
    },
  });
