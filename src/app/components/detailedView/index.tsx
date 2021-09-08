import * as React from "react";
import data from "../../utils/movies.json";
import { IMovie } from "../../models/movie";
import { getShadows } from "../../styles/commonStyles";
import {
  getTheme,
  IconButton,
  Separator,
  Text,
} from "@fluentui/react";
import "./index.scss";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/stringHelper";
import { ImdbButton } from "../common";

export class DetailedView extends React.Component {
  movieData: IMovie[];
  movieId: string;

  constructor() {
    super({});
    this.movieId = window.location.pathname.split("/").reverse()[0];
    this.movieData = data.movies;
    window.scrollTo(0, 0);
  }

  getListingType = (listingType: string): string => {
    if (listingType === "NOW_SHOWING") return "Now Showing";
    return "Upcoming";
  };

  render(): JSX.Element {
    const theme = getTheme();
    const selectedMovie = this.movieData.filter((movie) => {
      return movie.imdbID === this.movieId;
    });

    return (
      <div className="detailedView">
        <div className={`card ${getShadows(theme)}`}>
          <Link to="/">
            <IconButton
              iconProps={{ iconName: "back" }}
              title="Emoji"
              ariaLabel="Emoji"
            />
          </Link>
        </div>
        <div className={`card ${getShadows(theme)}`}>
          <div className="ms-Grid" dir="ltr">
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm12 ms-lg6 ms-xl4">
                <img alt="poster" src={selectedMovie[0].Poster} width="100%" />
              </div>
              <div className="ms-Grid-col ms-sm12 ms-lg6 ms-xl8">
                <Text>{this.getListingType(selectedMovie[0].listingType)}</Text>
                {" at "}
                <Text>{capitalizeFirstLetter(selectedMovie[0].Location)}</Text>
                <div className="movieTitle">
                  <h3>{selectedMovie[0].Title}</h3>
                </div>
                <Text>
                  {"Language: " +
                    capitalizeFirstLetter(selectedMovie[0].Language)}
                </Text>
                <div>
                  <Text>{"IMDB Rating: " + selectedMovie[0].imdbRating}</Text>
                </div>
                <Separator>Plot</Separator>
                <h4>{selectedMovie[0].Plot}</h4>
                <Separator />
                <Text>
                  {"Watch it now with " +
                    selectedMovie[0].SoundEffects[0] +
                    " and " +
                    selectedMovie[0].SoundEffects[0] +
                    " sound effects"}
                </Text>
                <ImdbButton id={this.movieId} />
              </div>
            </div>
          </div>
          <h2>Stills from the movie</h2>
          <div className="ms-Grid" dir="ltr">
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm12 ms-lg4">
                <img
                  alt="poster"
                  src={selectedMovie[0].Stills[0]}
                  width="100%"
                />
              </div>
              <div className="ms-Grid-col ms-sm12 ms-lg4">
                <img
                  alt="poster"
                  src={selectedMovie[0].Stills[1]}
                  width="100%"
                />
              </div>
              <div className="ms-Grid-col ms-sm12 ms-lg4">
                <img
                  alt="poster"
                  src={selectedMovie[0].Stills[2]}
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
