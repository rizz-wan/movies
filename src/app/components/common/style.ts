import { ITheme, mergeStyles } from "@fluentui/react";

export const barStyles = (theme: ITheme): string => {
  return mergeStyles({
    height: "50px",
    backgroundColor: theme.palette.neutralSecondary,
  });
};
