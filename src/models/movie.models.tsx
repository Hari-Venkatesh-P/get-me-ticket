export interface Movie {
  id: string;
  title: string;
  genre: string;
  posterURL: string;
}

export interface MovieGroup {
  movieW: Movie;
  movieX: Movie;
  movieY: Movie;
  movieZ: Movie;
}

export interface MovieDetail extends Movie {
  rated: string;
  released: string;
  runtime: string;
  director: string;
  writer: string;
  plot: string;
  actors: string;
  language: string;
  country: string;
  ratings : []
}
