import { dummyData } from "../data";
import { Movie, MovieDetail, MovieGroup } from "../models/movie.models";

export function convertRawDataIntoMovie(rawData: any) {
  return {
    id: rawData["Id"],
    title: rawData["Title"],
    genre: rawData["Genre"],
    posterURL: rawData["Poster"],
    year: rawData["Year"],
    rated: rawData["Rated"],
  } as Movie;
}

export function convertRawDataIntoMovieDetail(rawData: any) {
  return {
    id: rawData["Id"],
    title: rawData["Title"],
    genre: rawData["Genre"],
    posterURL: rawData["Poster"],
    rated: rawData["Rated"],
    released: rawData["Released"],
    runtime: rawData["Runtime"],
    director: rawData["Director"],
    writer: rawData["Writer"],
    plot: rawData["Plot"],
    actors: rawData["Actors"],
    language: rawData["Language"],
    country: rawData["Country"],
    ratings: rawData["Ratings"],
    year: rawData["Year"].toString(),
  } as MovieDetail;
}

export function getMovieData() {
  const data: MovieGroup[] = [];
  for (let index = 0; index < 12; index = index + 4) {
    data.push({
      movieW: convertRawDataIntoMovie(dummyData[index]),
      movieX: convertRawDataIntoMovie(dummyData[index + 1]),
      movieY: convertRawDataIntoMovie(dummyData[index + 2]),
      movieZ: convertRawDataIntoMovie(dummyData[index + 3]),
    } as MovieGroup);
  }
  return data;
}

export function getMovieDetails(id: string) {
  let result = null;
  const filteredData = dummyData.find((ele) => ele["Id"] == id);
  result = convertRawDataIntoMovieDetail(filteredData);
  return result;
}

export function convertMovieListToMovieGroupList(input: Movie[]) {
  const data: MovieGroup[] = [];
  let i = 0;
  let holder: any = {};
  while (i < 12) {
    if (input[i]) holder.movieW = input[i];
    if (input[i + 1]) holder.movieX = input[i + 1];
    if (input[i + 2]) holder.movieY = input[i + 2];
    if (input[i + 3]) holder.movieZ = input[i + 3];
    if (Object.keys(holder).length > 0) data.push(holder);
    holder = {};
    i = i + 4;
  }
  return data;
}
