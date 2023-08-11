export interface Movie {
  id: string;
  title: string;
  genre: string;
  posterURL: string;
  year: string;
  rated: string;
}

export interface MovieGroup {
  movieW: Movie;
  movieX?: Movie;
  movieY?: Movie;
  movieZ?: Movie;
}

export interface MovieDetail extends Movie {
  released: string;
  runtime: string;
  director: string;
  writer: string;
  plot: string;
  actors: string;
  language: string;
  country: string;
  ratings: [];
}

export interface Query {
  key: "rated" | "year" | "genre";
  value: string;
}
