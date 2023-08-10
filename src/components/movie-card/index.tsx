import HVCard from "../../atoms/hv-cards";
import { Movie } from "../../models/movie.models";

interface MovieProps extends Movie {
  onCardPress: (id: string) => void;
}

function MovieCard(props: MovieProps) {
  const { id, title, genre, posterURL, onCardPress } = props;
  return (
    <HVCard
      id={id}
      isCardImageURL={posterURL}
      cardTitle={title}
      cardSubTitle={genre}
      cardStyles={{
        maxWidth: 220,
        minWidth: 220,
        height: 400,
        padding: 1,
        margin: 3,
        borderRadius: 2,
      }}
      onCardPress={onCardPress}
    />
  );
}

export default MovieCard;
