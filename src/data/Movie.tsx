import Review from "./Review";

export default class Movie {
  // Title,Director,Year,Genre,Length,Reviews
  constructor(
    public readonly title: string,
    public readonly director: string,
    public readonly year: string,
    public readonly genres: string[],
    public readonly length: number,
    public readonly reviews: Review[]
  ) {}
}
