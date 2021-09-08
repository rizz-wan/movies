import * as React from "react";
import data from "../../utils/movies.json";
import { IMovie } from "../../models/movie";
import { getShadows } from "../../styles/commonStyles";
import { getTheme, Rating, RatingSize, Stack, Text } from "@fluentui/react";
import "./index.scss";
import { Link } from "react-router-dom";

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
        <Stack horizontal wrap>
          {this.movieData.map((movieData, index) => {
            return (
              <div className="ms-Grid-col ms-sm12 ms-lg6 ms-xl4" key={index}>
                <div className={`card ${getShadows(theme)}`}>
                  <img alt="poster" src={movieData.Poster} width="100%" />
                  <Text>{this.getListingType(movieData.listingType)}</Text>
                  <div className="movieTitle">
                    <h3>
                      <Link to={`/detail/${movieData.imdbID}`}>
                        {movieData.Title}
                      </Link>
                    </h3>
                  </div>
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
        </Stack>
      </div>
    );
  }
}
