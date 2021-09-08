import { getTheme, Link, mergeStyles, Stack, Text } from "@fluentui/react";
import * as React from "react";
import { barStyles } from "../style";

interface IFooterState {
  isExpanded: boolean;
}

const footerStyles = mergeStyles({
  cursor: "pointer",
});

export class Footer extends React.Component<{}, IFooterState> {
  constructor(props: IFooterState) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }

  onFooterClick = (): void => {
    this.setState({ isExpanded: !this.state.isExpanded });
  };

  getFooterContent = (): JSX.Element => {
    if (!this.state.isExpanded)
      return (
        <Text
          className={footerStyles}
          variant={"medium"}
          onClick={this.onFooterClick}
        >
          ...
        </Text>
      );
    return (
      <Text className={footerStyles} onClick={this.onFooterClick}>
        with &hearts; from{" "}
        <Link href="https://irizwan.com/" target="_blank">
          Rizwan
        </Link>
      </Text>
    );
  };

  render(): JSX.Element {
    const theme = getTheme();
    return (
      <>
        <Stack>
          <Stack.Item align="center">{this.getFooterContent()}</Stack.Item>
        </Stack>
        <div className={barStyles(theme)}></div>
      </>
    );
  }
}
