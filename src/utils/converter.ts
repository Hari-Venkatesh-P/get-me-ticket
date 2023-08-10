import { dummyData } from "../data";
import { Movie, MovieDetail, MovieGroup } from "../models/movie.models";

export function convertRawDataIntoMovie(rawData: any) {
  return {
    id: rawData["Id"],
    title: rawData["Title"],
    genre: rawData["Genre"],
    posterURL: rawData["Poster"],
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
  } as MovieDetail;
}

export function getMovieData() {
  const data: MovieGroup[] = [];
  for (let index = 0; index < 8; index = index + 4) {
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
