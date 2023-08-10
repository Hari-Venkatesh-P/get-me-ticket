import MovieCard from "../movie-card";
import HVCarousel from "../../atoms/hv-carousel";
import { useCallback } from "react";
import { MovieGroup } from "../../models/movie.models";
import { getMovieData } from "../../utils/converter";

interface MovieCarouselProps {
  onMovieCardPress: (movieId: string) => void;
}

function MovieCarousel(props: MovieCarouselProps) {
  // Dummy Data
  const data = getMovieData() || [];
  
  const { onMovieCardPress = (_: string) => {} } = props;
  const renderGroup = useCallback((currentGroup: MovieGroup) => {
    return (
      <>
        <MovieCard
          id={currentGroup.movieW.id}
          title={currentGroup.movieW.title}
          genre={currentGroup.movieW.genre}
          posterURL={currentGroup.movieW.posterURL}
          onCardPress={onMovieCardPress}
        />
        <MovieCard
          id={currentGroup.movieX.id}
          title={currentGroup.movieX.title}
          genre={currentGroup.movieX.genre}
          posterURL={currentGroup.movieX.posterURL}
          onCardPress={onMovieCardPress}
        />
        <MovieCard
          id={currentGroup.movieY.id}
          title={currentGroup.movieY.title}
          genre={currentGroup.movieY.genre}
          posterURL={currentGroup.movieY.posterURL}
          onCardPress={onMovieCardPress}
        />
        <MovieCard
          id={currentGroup.movieZ.id}
          title={currentGroup.movieZ.title}
          genre={currentGroup.movieZ.genre}
          posterURL={currentGroup.movieZ.posterURL}
          onCardPress={onMovieCardPress}
        />
      </>
    );
  }, []);

  return <HVCarousel carouselBuilder={renderGroup} data={data}></HVCarousel>;
}

export default MovieCarousel;
