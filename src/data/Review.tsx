export default class Review {
  // user,rating, comment
  /**
   *
   */
  constructor(
    public readonly user: string,
    public readonly rating: number,
    public readonly comment: string
  ) {}
}
