import { Link, Stack } from "@fluentui/react";
import * as React from "react";
import imdb from "../../../utils/img/imdb.png";
import "./index.scss";

interface IImdbProps {
  id: string;
}

export class ImdbButton extends React.Component<IImdbProps> {
  render(): JSX.Element {
    return (
      <div className="imdbButton">
        <Link
          href={`https://www.imdb.com/title/${this.props.id}`}
          target="_blank"
        >
          <Stack horizontal>
            <Stack.Item align="center">
              <h4>{"See this movie on "}</h4>
            </Stack.Item>
            <Stack.Item align="center">
              <img src={imdb} alt="imdb" width="50px" />
            </Stack.Item>
          </Stack>
        </Link>
      </div>
    );
  }
}
