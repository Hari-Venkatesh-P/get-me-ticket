import { Movie, MovieGroup, Query } from "../models/movie.models";
import { convertMovieListToMovieGroupList } from "./converter";

export function handleValidGetQuery(
  stateData: MovieGroup[],
  formattedQuery: any
) {
  let flattenedList: Movie[] = [];
  stateData.forEach((group) => {
    flattenedList.push(...Object.values(group));
  });
  const checkFilterCondition = (queryValues: Query[], element: Movie) => {
    return queryValues.every((query: Query) => {
      return element[query.key].toString().includes(",")
        ? element[query.key].toString().toLowerCase().includes(query.value)
        : element[query.key].toString().toLowerCase() == query.value;
    });
  };
  let filteredResuts = flattenedList.filter((element) =>
    checkFilterCondition(formattedQuery.values, element)
  );
  return convertMovieListToMovieGroupList(filteredResuts);
}

export function handleValidRankQuery(
  stateData: MovieGroup[],
  formattedQuery: any
) {
  let flattenedList: Movie[] = [];
  stateData.forEach((group) => {
    flattenedList.push(...Object.values(group));
  });
  formattedQuery.values = formattedQuery.values.sort(function (
    a: Query,
    b: Query
  ) {
    return parseInt(b.value) - parseInt(a.value);
  });
  const movieTitles = formattedQuery.values.map((ele: Query) =>
    ele.key.toLocaleLowerCase()
  );
  let updatedResults = flattenedList.filter(
    (movie) => !movieTitles.includes(movie.title.toLocaleLowerCase())
  );
  let curMovie;
  let index = -1;
  movieTitles.forEach((title: string) => {
    curMovie = flattenedList.find(
      (movie) =>
        movie.title?.toString().toLocaleLowerCase() ==
        title?.toString().toLocaleLowerCase()
    );
    index =
      formattedQuery.values.find((q: Query) => q.key == title)?.value || -1;
    if (curMovie && index != -1) {
      updatedResults = [
        ...updatedResults.slice(0, index - 1),
        curMovie,
        ...updatedResults.slice(index - 1),
      ];
      index = -1;
    }
  });
  return convertMovieListToMovieGroupList(updatedResults);
}