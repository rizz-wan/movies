import * as React from "react";
import data from "../../utils/movies.json";
import { IMovie } from "../../models/movie";
import { getShadows } from "../../styles/commonStyles";
import {
  ActionButton,
  Dropdown,
  getTheme,
  IDropdownOption,
  ITheme,
  Rating,
  RatingSize,
  SearchBox,
  Stack,
  Text,
} from "@fluentui/react";
import "./index.scss";
import { Link } from "react-router-dom";

interface ILandingPageState {
  movieName: string;
  sort: boolean | undefined;
  language: string;
  location: string;
}

export class LandingPage extends React.Component<{}, ILandingPageState> {
  movieData: IMovie[];
  refinedMovieData: IMovie[];
  locationOptions: IDropdownOption[];
  languageOptions: IDropdownOption[];

  constructor(props: ILandingPageState) {
    super(props);

    this.state = {
      movieName: "*",
      sort: undefined,
      language: "all",
      location: "all",
    };

    this.movieData = this.refinedMovieData = data.movies;
    this.locationOptions = [
      { key: "all", text: "All locations" },
      { key: "pune", text: "PUNE" },
      { key: "delhi", text: "DELHI" },
      { key: "bangalore", text: "BANGALORE" },
      { key: "chennai", text: "CHENNAI" },
    ];
    this.languageOptions = [
      { key: "all", text: "All languages" },
      { key: "english", text: "ENGLISH" },
      { key: "hindi", text: "HINDI" },
    ];
  }

  getListingType = (listingType: string): string => {
    if (listingType === "NOW_SHOWING") return "Now Showing";
    return "Upcoming";
  };

  onSort = (): void => {
    if (!this.state.sort) this.setState({ sort: true });
    else this.setState({ sort: !this.state.sort });
  };

  onMovieChange = (
    event?: React.ChangeEvent<HTMLInputElement>,
    newValue?: string
  ): void => {
    if (newValue?.trim() === "" || newValue === undefined)
      this.setState({ movieName: "*" });
    else this.setState({ movieName: newValue?.trim() as string });
  };

  onLanguageChange = (
    event: React.FormEvent<HTMLDivElement>,
    option?: IDropdownOption,
    index?: number
  ): void => {
    this.setState({ language: option ? (option.key as string) : "all" });
  };
  onLocationChange = (
    event: React.FormEvent<HTMLDivElement>,
    option?: IDropdownOption,
    index?: number
  ): void => {
    this.setState({ location: option ? (option.key as string) : "all" });
  };

  getResultsSection = (theme: ITheme): JSX.Element => {
    if (!this.refinedMovieData.length)
      return (
        <Stack horizontalAlign="center">
          <span>Uh oh! we don't have an such movie.</span>
        </Stack>
      );
    return (
      <Stack horizontal wrap>
        {this.refinedMovieData.map((movieData, index) => {
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
    );
  };

  render(): JSX.Element {
    const theme = getTheme();
    this.refinedMovieData = this.movieData.filter((movie) => {
      return (
        (movie.Location.toLowerCase() === this.state.location.toLowerCase() ||
          this.state.location.toLowerCase() === "all") &&
        (movie.Language.toLowerCase() === this.state.language.toLowerCase() ||
          this.state.language.toLowerCase() === "all") &&
        (movie.Title.toLowerCase().includes(
          this.state.movieName.toLowerCase()
        ) ||
          this.state.movieName.toLowerCase() === "*")
      );
    });
    if (this.state.sort !== undefined) {
      if (this.state.sort)
        this.refinedMovieData = this.refinedMovieData.sort((a, b) =>
          a.Title !== b.Title ? (a.Title < b.Title ? -1 : 1) : 0
        );
      else
        this.refinedMovieData = this.refinedMovieData.sort((a, b) =>
          a.Title !== b.Title ? (a.Title < b.Title ? 1 : -1) : 0
        );
    }
    return (
      <div className="landingPage">
        <div className="ms-Grid" dir="ltr">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12 ms-xl6">
              <div className={`card ${getShadows(theme)} filters`}>
                <Stack wrap horizontal horizontalAlign="space-between">
                  <Stack.Item align="center">
                    <SearchBox
                      placeholder="Search"
                      underlined={true}
                      onChange={this.onMovieChange}
                    />
                  </Stack.Item>
                  <Stack.Item align="center">
                    <ActionButton
                      iconProps={{ iconName: "sort" }}
                      allowDisabledFocus
                      onClick={(): void => this.onSort()}
                    >
                      Sort Alphabetically
                    </ActionButton>
                  </Stack.Item>
                </Stack>
              </div>
            </div>
            <div className="ms-Grid-col ms-sm12 ms-xl6">
              <div className={`card ${getShadows(theme)} filters`}>
                <Stack wrap horizontal horizontalAlign="space-between">
                  <Stack.Item align="center">
                    <Dropdown
                      placeholder="Select a language"
                      options={this.languageOptions}
                      onChange={this.onLanguageChange}
                    />
                  </Stack.Item>
                  <Stack.Item align="center">
                    <Dropdown
                      placeholder="Select a location"
                      options={this.locationOptions}
                      onChange={this.onLocationChange}
                    />
                  </Stack.Item>
                </Stack>
              </div>
            </div>
          </div>
        </div>
        {this.getResultsSection(theme)}
      </div>
    );
  }
}
