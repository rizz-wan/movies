import * as React from "react";
import data from "../../utils/movies.json";
import { IMovie } from "../../models/movie";

export class LandingPage extends React.Component {
  movieData: IMovie[];

  constructor() {
    super({});

    this.movieData = data.movies;
  }
  render(): JSX.Element {
    return (
      <>
        <p>
          {this.movieData[0].Plot}
        </p>
      </>
    );
  }
}
