import { Movie, Query } from "../models/movie.models";
import { convertMovieListToMovieGroupList } from "./converter";

export function handleValidGetQuery(stateData: Movie[], formattedQuery: any) {
  let flattenedList: Movie[] = [...stateData];
  const checkFilterCondition = (queryValues: Query[], element: Movie) => {
    return queryValues.every((query: Query) => {
      return element[query.key].toString().includes(",")
        ? element[query.key].toString().toLowerCase().includes(query.value)
        : element[query.key].toString().toLowerCase() === query.value;
    });
  };
  let filteredResuts = flattenedList.filter((element) =>
    checkFilterCondition(formattedQuery.values, element)
  );
  return convertMovieListToMovieGroupList(filteredResuts);
}

export function handleValidRankQuery(stateData: Movie[], formattedQuery: any) {
  let flattenedList: Movie[] = [...stateData];
  formattedQuery.values = formattedQuery.values.sort(function (
    a: Query,
    b: Query
  ) {
    return parseInt(a.value) - parseInt(b.value);
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
        movie.title?.toString().toLocaleLowerCase() ===
        title?.toString().toLocaleLowerCase()
    );
    index =
      formattedQuery.values.find((q: Query) => q.key === title)?.value || -1;
    if (curMovie && index !== -1) {
      updatedResults = [
        ...updatedResults.slice(0, index - 1),
        curMovie,
        ...updatedResults.slice(index - 1),
      ];
      console.log({ updatedResults });
      index = -1;
    }
  });
  return convertMovieListToMovieGroupList(updatedResults);
}

export function constructQueryString(query: any) {
  const queryArray = query.values;
  const params: any = {};
  queryArray.forEach((element: Query) => {
    params[element.key] = element.value;
  });
  return Object.keys(params)
    .map((key) => key + "=" + params[key])
    .join("&");
}
