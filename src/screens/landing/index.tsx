import { useCallback, useEffect, useState } from "react";
import MovieCarousel from "../../components/movie-carousel";
import MovieDetailModal from "../../components/movie-detail-modal";
import { MovieGroup } from "../../models/movie.models";
import {
  convertMovieListToMovieGroupList,
  getMovieDataList,
  getMovieDetails,
} from "../../utils/converter";
import debounce from "lodash.debounce";
import "./styles.css";
import { validateQuery } from "../../utils/validators";
import { handleValidGetQuery, handleValidRankQuery } from "../../utils/helpers";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { GET } from "../../utils/constansts";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Clear";
import { useDispatch, useSelector } from "react-redux";
import { updateMovieDetails, updateMovieList } from "../../redux/actions";
import { initialReducerState } from "../../redux/reducer";

function LandingScreen() {
  const dispatch = useDispatch();

  const [query, setQuery] = useState<string>("");
  const [data, setData] = useState<MovieGroup[]>([]);

  const movieList = useSelector(
    (state: initialReducerState) => state.movieList
  );

  const movieDetails = useSelector(
    (state: initialReducerState) => state.movieDetails
  );

  useEffect(() => {
    dispatch(updateMovieList(getMovieDataList()));
  }, []);

  useEffect(() => {
    const res = validateQuery(query);
    if (res) {
      handleValidQuery(res);
    } else {
      setData(convertMovieListToMovieGroupList(movieList));
    }
  }, [movieList, query]);

  const onMoviewPress = useCallback((id: string) => {
    dispatch(updateMovieDetails(getMovieDetails(id)));
  }, []);

  const handleValidQuery = useCallback(
    (formattedQuery: any) => {
      if (formattedQuery.operation == GET) {
        setData([...handleValidGetQuery(movieList, formattedQuery)]);
      } else {
        setData([...handleValidRankQuery(movieList, formattedQuery)]);
      }
    },
    [data, movieList]
  );

  const clearQuery = useCallback(() => {
    setQuery("");
  }, []);

  const debouncedFilter = useCallback(
    debounce((query) => {
      setQuery(query);
    }, 50),
    []
  );

  return (
    <>
      <div className="textFieldContainer">
        <TextField
          sx={{ width: 250 }}
          value={query}
          id="outlined-basic"
          size="small"
          label="Search"
          variant="outlined"
          onChange={(e) => debouncedFilter(e.target.value)}
          InputProps={{
            endAdornment:
              query.length > 0 ? (
                <InputAdornment position="end">
                  <IconButton aria-label="Clear" onClick={() => clearQuery()}>
                    <DeleteIcon />
                  </IconButton>
                </InputAdornment>
              ) : (
                <></>
              ),
          }}
        />
      </div>
      <MovieCarousel onMovieCardPress={onMoviewPress} data={data} />
      {movieDetails != null && (
        <MovieDetailModal
          {...movieDetails}
          onModalClose={() => dispatch(updateMovieDetails(null))}
        />
      )}
    </>
  );
}

export default LandingScreen;
