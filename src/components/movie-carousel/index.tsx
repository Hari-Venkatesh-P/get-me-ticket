import MovieCard from "../movie-card";
import HVCarousel from "../../atoms/hv-carousel";
import { useCallback } from "react";
import { MovieGroup } from "../../models/movie.models";

interface MovieCarouselProps {
  data: MovieGroup[];
  onMovieCardPress: (movieId: string) => void;
}

function MovieCarousel(props: MovieCarouselProps) {
  // Dummy Data

  const { onMovieCardPress = (_: string) => {}, data } = props;
  const renderGroup = useCallback((currentGroup: MovieGroup) => {
    return (
      <>
        <MovieCard
          id={currentGroup.movieW.id}
          title={currentGroup.movieW.title}
          genre={currentGroup.movieW.genre}
          posterURL={currentGroup.movieW.posterURL}
          onCardPress={onMovieCardPress}
          year={currentGroup.movieW.year}
          rated={currentGroup.movieW.rated}
        />
        {currentGroup?.movieX && (
          <MovieCard
            id={currentGroup?.movieX.id}
            title={currentGroup?.movieX.title}
            genre={currentGroup?.movieX.genre}
            posterURL={currentGroup?.movieX.posterURL}
            onCardPress={onMovieCardPress}
            year={currentGroup?.movieX.year}
            rated={currentGroup?.movieX.rated}
          />
        )}
        {currentGroup?.movieY && (
          <MovieCard
            id={currentGroup.movieY.id}
            title={currentGroup.movieY.title}
            genre={currentGroup.movieY.genre}
            posterURL={currentGroup.movieY.posterURL}
            onCardPress={onMovieCardPress}
            year={currentGroup.movieY.year}
            rated={currentGroup.movieY.rated}
          />
        )}

        {currentGroup?.movieZ && (
          <MovieCard
            id={currentGroup.movieZ.id}
            title={currentGroup.movieZ.title}
            genre={currentGroup.movieZ.genre}
            posterURL={currentGroup.movieZ.posterURL}
            onCardPress={onMovieCardPress}
            year={currentGroup.movieZ.year}
            rated={currentGroup.movieZ.rated}
          />
        )}
      </>
    );
  }, []);

  return <HVCarousel carouselBuilder={renderGroup} data={data}></HVCarousel>;
}

export default MovieCarousel;
