import * as React from "react";
import data from "../../utils/movies.json";
import { IMovie } from "../../models/movie";
import { getShadows } from "../../styles/commonStyles";
import { getTheme } from "@fluentui/react";
import "./index.scss";

export class LandingPage extends React.Component {
  movieData: IMovie[];

  constructor() {
    super({});

    this.movieData = data.movies;
  }
  render(): JSX.Element {
    const theme = getTheme();

    return (
      <div className="landingPage">
        <div className="ms-Grid" dir="ltr">
          <div className="ms-Grid-row">
            {this.movieData.map((movieData) => {
              return (
                <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg4">
                  <div className={`card ${getShadows(theme)}`}>
                    <img alt="poster" src={movieData.Poster} width="100%" />
                    {movieData.Title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
