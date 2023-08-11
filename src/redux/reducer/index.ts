import { produce } from "immer";
import { combineReducers } from "redux";
import { Movie, MovieDetail, MovieGroup } from "../../models/movie.models";
import { UPDATE_MOVIE_DETAIL, UPDATE_MOVIE_LIST } from "../actions/actions";
import { StoreActions } from "../actions";

export interface initialReducerState {
  movieList: Movie[];
  movieDetails: MovieDetail | null;
}

const initialCheckInState: initialReducerState = {
  movieList: [],
  movieDetails: null,
};

export default function defaultReducer(
  state: initialReducerState = initialCheckInState,
  action: StoreActions
) {
  return produce(state, (current) => {
    switch (action.type) {
      case UPDATE_MOVIE_LIST:
        current.movieList = action.payload;
        break;
      case UPDATE_MOVIE_DETAIL:
        current.movieDetails = action.payload;
        break;
      default:
        break;
    }
  });
}

const reducers = {
  data: defaultReducer,
};

export const rootReducer = combineReducers(reducers);

export type RootState = ReturnType<typeof rootReducer>;
