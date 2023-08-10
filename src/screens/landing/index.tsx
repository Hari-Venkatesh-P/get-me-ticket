import { useCallback, useState } from "react";
import MovieCarousel from "../../components/movie-carousel";
import MovieDetailModal from "../../components/movie-detail-modal";
import { MovieDetail } from "../../models/movie.models";
import { getMovieDetails } from "../../utils/converter";

function LandingScreen() {
  const [movieDetails, setMoviewDetails] = useState<MovieDetail | null>(null);

  const onMoviewPress = useCallback((id: string) => {
    setMoviewDetails(getMovieDetails(id));
  }, []);

  return (
    <>
      <MovieCarousel onMovieCardPress={onMoviewPress} />
      {movieDetails != null && <MovieDetailModal {...movieDetails} />}
    </>
  );
}

export default LandingScreen;
