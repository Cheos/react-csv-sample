import Movie from "../data/Movie";
import IMovieAvgRating from "../data/MovieAvgRating";

export default class JSONCalculator {
  private movies: Movie[] | undefined;

  public setup(movies: Movie[]) {
    this.movies = movies;
  }

  public calculateAvgRatingByMovie(): IMovieAvgRating[] {
    const movies = this.movies;
    if (!movies?.length) {
      return [];
    }

    const avgRatingForMovie: IMovieAvgRating[] = [];

    for (let movie of movies) {
      if (!movie.reviews?.length) {
        avgRatingForMovie.push({ title: movie.title, avgRating: 0 });
        continue;
      }

      const ratingsCount = movie.reviews.length;
      const allRatingSum = movie.reviews
        .map((x) => x.rating)
        .reduce((item, acc) => acc + item, 0);
      const avg = allRatingSum / ratingsCount;
      avgRatingForMovie.push({ title: movie.title, avgRating: avg });
    }

    // It could be done with another way: pushing items with correct order
    return avgRatingForMovie.sort((a, b) => a.avgRating - b.avgRating);
  }

  public findMoviesWithMaxAvgRating(): IMovieAvgRating[] {
    const movies = this.movies;
    if (!movies?.length) {
      return [];
    }

    const moviesWithAvgRaing = this.calculateAvgRatingByMovie();

    if (!moviesWithAvgRaing) {
      return [];
    }

    const moviesCount = moviesWithAvgRaing.length;
    const lastMovie = moviesWithAvgRaing[moviesCount - 1];
    const maxAvgRating = lastMovie.avgRating;
    const moviesWithMaxAvgRating: IMovieAvgRating[] = [lastMovie];

    if (moviesCount === 1) {
      return moviesWithMaxAvgRating;
    }

    for (let i = moviesCount - 2; i >= 0; i++) {
      const movie = moviesWithAvgRaing[i];
      if (movie.avgRating === maxAvgRating) {
        moviesWithMaxAvgRating.push(movie);
      } else {
        break;
      }
    }

    return moviesWithMaxAvgRating;
  }
}
