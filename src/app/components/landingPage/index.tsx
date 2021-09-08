import * as React from "react";
import data from "../../utils/movies.json";
import { IMovie } from "../../models/movie";
import { getShadows } from "../../styles/commonStyles";
import { getTheme, Rating, RatingSize, Text } from "@fluentui/react";
import "./index.scss";

export class LandingPage extends React.Component {
  movieData: IMovie[];

  constructor() {
    super({});

    this.movieData = data.movies;
  }

  getListingType = (listingType: string): string => {
    if (listingType === "NOW_SHOWING") return "Now Showing";
    return "Upcoming";
  };

  render(): JSX.Element {
    const theme = getTheme();

    return (
      <div className="landingPage">
        <div className="ms-Grid" dir="ltr">
          <div className="ms-Grid-row">
            {this.movieData.map((movieData) => {
              return (
                <div className="ms-Grid-col ms-sm12 ms-lg6 ms-xl4">
                  <div className={`card ${getShadows(theme)}`}>
                    <img alt="poster" src={movieData.Poster} width="100%" />
                    <Text>{this.getListingType(movieData.listingType)}</Text>
                    <div className="movieTitle"><h3>{movieData.Title}</h3></div>
                    <Rating
                      max={10}
                      size={RatingSize.Small}
                      defaultRating={parseFloat(movieData.imdbRating)}
                      readOnly
                    />
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
