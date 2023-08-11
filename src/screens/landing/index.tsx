import { useCallback, useEffect, useState } from "react";
import MovieCarousel from "../../components/movie-carousel";
import MovieDetailModal from "../../components/movie-detail-modal";
import { MovieDetail, MovieGroup } from "../../models/movie.models";
import { getMovieData, getMovieDetails } from "../../utils/converter";
import debounce from "lodash.debounce";
import "./styles.css";
import { validateQuery } from "../../utils/validators";
import { handleValidGetQuery, handleValidRankQuery } from "../../utils/helpers";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { GET } from "../../utils/constansts";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Clear";

function LandingScreen() {
  const [movieDetails, setMoviewDetails] = useState<MovieDetail | null>(null);

  const [query, setQuery] = useState<string>("");

  const [stateData, setStateData] = useState<MovieGroup[]>([]);

  const [data, setData] = useState<MovieGroup[]>([]);

  useEffect(() => {
    setStateData([...getMovieData()]);
    setData([...getMovieData()]);
  }, []);

  const onMoviewPress = useCallback((id: string) => {
    setMoviewDetails(getMovieDetails(id));
  }, []);

  const handleValidQuery = useCallback(
    (formattedQuery: any) => {
      if (formattedQuery.operation == GET) {
        setData([...handleValidGetQuery(stateData, formattedQuery)]);
      } else {
        setData([...handleValidRankQuery(stateData, formattedQuery)]);
      }
    },
    [data, stateData]
  );

  const debouncedFilter = useCallback(
    debounce((query) => {
      setQuery(query);
      const res = validateQuery(query);
      if (res) {
        handleValidQuery(res);
      } else {
        setData(stateData);
      }
    }, 50),
    [stateData]
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
                  <IconButton aria-label="Clear" onClick={() => setQuery("")}>
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
      {movieDetails != null && <MovieDetailModal {...movieDetails} />}
    </>
  );
}

export default LandingScreen;
