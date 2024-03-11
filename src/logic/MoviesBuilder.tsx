import Movie from "../data/Movie";
import { IMovieData } from "../data/MovieData";
import Review from "../data/Review";

export default class MoviesBuilder {
  public buildMovies(data: IMovieData[]): Movie[] {
    return data.map((x) => this.buildMovie(x));
  }

  public buildMovie(movieData: IMovieData) {
    const genres: string[] = movieData.Genre.split("/");
    const reviews: Review[] = JSON.parse(movieData.Reviews);
    const lengthSplit: string[] = movieData.Length.split(" ");
    const length: number = lengthSplit?.length ? +lengthSplit[0] : 0;
    return new Movie(
      movieData.Title,
      movieData.Director,
      movieData.Year,
      genres,
      length,
      reviews
    );
  }
}
