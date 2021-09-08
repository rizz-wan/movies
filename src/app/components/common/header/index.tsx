import * as React from "react";
import { barStyles } from "../style";
import "./index.scss";

export class Header extends React.Component {
  render(): JSX.Element {
    return (
      <div className={`header ${barStyles}`}>
        <h1>moVies</h1>
      </div>
    );
  }
}
