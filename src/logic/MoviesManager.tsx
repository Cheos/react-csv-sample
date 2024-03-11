import Movie from "../data/Movie";
import IMovieAvgRating from "../data/MovieAvgRating";
import { IMovieData } from "../data/MovieData";
import CSVCalculator from "./CSVCalculator";
import JSONCalculator from "./JSONCalculator";
import MoviesBuilder from "./MoviesBuilder";
import MovieLoader from "./MoviesLoader";

interface IMoviesLoader {
  loadMoviesData(filePath: string): Promise<IMovieData[]>;
}

interface IMoviesBuilder {
  buildMovies(data: IMovieData[]): Movie[];
}

interface ICSVCalculator {
  setup(movies: Movie[]): void;
  calculateAverageMovieLength(): number;
  calculateMoviesCountInEachGenre(): Map<string, number>;
}

interface IJSONCalculator {
  setup(movies: Movie[]): void;
  calculateAvgRatingByMovie(): IMovieAvgRating[];
  findMoviesWithMaxAvgRating(): IMovieAvgRating[];
}

export default class MoviesManager {
  private movies: Movie[] = []; // should be replaced with some state managment

  // Dependecies:
  //    It would be better to use some Dependecies Injection system
  //    instaed of the creation instances by hands
  constructor(
    private readonly loader: IMoviesLoader,
    private readonly modelBuilder: IMoviesBuilder,
    private readonly csvCalculator: ICSVCalculator,
    private readonly jsonCalculator: IJSONCalculator
  ) {}

  public async loadMovies() {
    // Cancelation/abort logic should be added and handled
    const data = await this.loader.loadMoviesData("movies.csv");
    this.movies = this.modelBuilder.buildMovies(data);
    // Use simple approach just for test task
    // It would be better to replace `setup` with some state/storage managment system
    this.csvCalculator.setup(this.movies);
    this.jsonCalculator.setup(this.movies);
  }

  public calculateAverageMovieLength(): number {
    return this.csvCalculator.calculateAverageMovieLength();
  }

  public calculateMoviesCountInEachGenre(): Map<string, number> {
    return this.csvCalculator.calculateMoviesCountInEachGenre();
  }

  public calculateAvgRatingByMovie(): IMovieAvgRating[] {
    return this.jsonCalculator.calculateAvgRatingByMovie();
  }

  public findMovieWithMaxAvgRating(): IMovieAvgRating {
    const allMovies = this.jsonCalculator.findMoviesWithMaxAvgRating();
    return allMovies[allMovies.length - 1];
  }

  public findAllMovieWithMaxAvgRating(): IMovieAvgRating[] {
    return this.jsonCalculator.findMoviesWithMaxAvgRating();
  }

  public static async RunSample() {
    const movieManager = new MoviesManager(
      new MovieLoader(),
      new MoviesBuilder(),
      new CSVCalculator(),
      new JSONCalculator()
    );

    // Cancelation/abort logic should be added and handled
    await movieManager.loadMovies();
    console.log("--- Movie Info ---");

    const avgLength = movieManager.calculateAverageMovieLength();
    console.info(`--- AverageMovieLength: ${avgLength}`);

    console.info(`--- MoviesCountByGenres: `);
    const moviesCountByGenres = movieManager.calculateMoviesCountInEachGenre();
    moviesCountByGenres.forEach((v, k) => {
      console.info(`${k}: ${v}`);
    });

    console.info(`--- AvgRatingByMovie: `);
    const avgRatingByMovies = movieManager.calculateAvgRatingByMovie();
    avgRatingByMovies.forEach((x) => {
      console.info(`${x.title}: ${x.avgRating}`);
    });

    const moviewWithMaxAvgRating = movieManager.findMovieWithMaxAvgRating();
    console.info(
      `--- OneMovieWithMaxAvgRating: ${moviewWithMaxAvgRating.title}: ${moviewWithMaxAvgRating.avgRating}`
    );

    console.info(`--- All movies with Max AvgRating: `);
    const allMoviesWithMaxAvgRating =
      movieManager.findAllMovieWithMaxAvgRating();
    allMoviesWithMaxAvgRating.forEach((x) => {
      console.info(`${x.title}: ${x.avgRating}`);
    });
  }
}
