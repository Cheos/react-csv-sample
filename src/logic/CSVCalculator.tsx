import Movie from "../data/Movie";

export default class CSVCalculator {
  private movies: Movie[] | undefined;

  public setup(movies: Movie[]) {
    this.movies = movies;
  }

  public calculateAverageMovieLength(): number {
    const movies = this.movies;
    if (!movies?.length) {
      return 0;
    }

    const moviesCount = movies.length;
    const allMovieLength = movies
      .map((x) => x.length)
      .reduce((item, acc) => acc + item, 0);

    return allMovieLength / moviesCount;
  }

  public calculateMoviesCountInEachGenre(): Map<string, number> {
    const movies = this.movies;

    if (!movies?.length) {
      return new Map<string, number>();
    }

    const filmsByGenres = new Map<string, number>();
    for (let movie of movies) {
      for (let genre of movie.genres) {
        let genreCount = filmsByGenres.get(genre);
        filmsByGenres.set(genre, genreCount ? ++genreCount : 1);
      }
    }

    return filmsByGenres;
  }
}
