import Papa from "papaparse";
import { IMovieData } from "../data/MovieData";

type MovieData = {
  Title: string;
  Director: string;
  Year: string;
  Genre: string;
  Length: string;
  Reviews: string;
};

export default class MovieLoader {
  public async loadMoviesData(filePath: string): Promise<IMovieData[]> {
    //const headers = ["Title", "Director", "Year", "Genre", "Length", "Reviews"];

    // Cancelation/abort logic should be added and handled
    const response = await fetch(filePath);
    const fileContent = await response.text();

    const csv = Papa.parse(fileContent, {
      header: true,
    });
    const parsedData = csv?.data;
    console.log(parsedData);

    return parsedData.map((x) => x as MovieData);
  }
}
