import { getTheme, Stack, Toggle } from "@fluentui/react";
import * as React from "react";
import { barStyles } from "../style";
import "./index.scss";

interface IHeaderState {
  onThemeChange: () => void;
}

export class Header extends React.Component<IHeaderState> {
  onChange = (
    event: React.MouseEvent<HTMLElement>,
    checked?: boolean
  ): void => {
    this.props.onThemeChange();
  };
  render(): JSX.Element {
    const theme = getTheme();

    return (
      <div className={`header ${barStyles(theme)}`}>
        <Stack horizontal horizontalAlign="space-between">
          <Stack.Item align="center">
            <h1>moVies</h1>
          </Stack.Item>
          <Stack.Item align="center">
            <Toggle onText="Dark" offText="Light" onChange={this.onChange} />
          </Stack.Item>
        </Stack>
      </div>
    );
  }
}
