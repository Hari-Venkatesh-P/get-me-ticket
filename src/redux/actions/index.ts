import { Movie, MovieDetail, MovieGroup } from "../../models/movie.models";
import { UPDATE_MOVIE_DETAIL, UPDATE_MOVIE_LIST } from "./actions";

export function typedAction(type: string, payload?: any) {
  return { type, payload };
}

export function updateMovieList(details: Movie[]) {
  return typedAction(UPDATE_MOVIE_LIST, details);
}

export function updateMovieDetails(details: MovieDetail | null) {
  return typedAction(UPDATE_MOVIE_DETAIL, details);
}

export type StoreActions = ReturnType<
  typeof updateMovieList | typeof updateMovieDetails
>;
