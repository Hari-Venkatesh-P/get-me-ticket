import { useCallback, useMemo } from "react";
import HVModal from "../../atoms/hv-modals";
import { MovieDetail } from "../../models/movie.models";
import Typography from "@mui/material/Typography";
import "./styles.css";
import Tooltip from "@mui/material/Tooltip";

interface MovieDetailModalProps extends MovieDetail {
  onModalClose?: () => void;
}

function MovieDetailModal(props: MovieDetailModalProps) {
  const {
    onModalClose = () => {},
    title,
    genre,
    language,
    runtime,
    rated,
    released,
    actors,
    writer,
    director,
    plot,
    ratings,
  } = props;

  const modalSecondaryDescription = useMemo(() => {
    const totalMinutes = parseInt(runtime.split(" ")[0]);
    return `${Math.floor(totalMinutes / 60)}h  ${
      totalMinutes % 60
    }m, ${genre}, ${rated} Certified,  ${released}`;
  }, [runtime, genre, rated, released]);

  const crewAndCast = useMemo(() => {
    const result = [];
    actors.split(",").forEach((element) => {
      result.push({ name: element.trim(), role: "Actor" });
    });
    result.push(
      { name: writer, role: "Writer" },
      { name: director, role: "Director" }
    );
    return result;
  }, [actors, writer, director]);

  const CastAnCrewComponent = useCallback(() => {
    return (
      <>
        <br />
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {"Cast and Crew"}
        </Typography>
        <div className="avatar-parent-container">
          {crewAndCast.map((element) => {
            return (
              <div className="avatar-container">
                <Tooltip title={element.name}>
                  <div className="avatar">{element.name[0]}</div>
                </Tooltip>
                <Typography variant="body2" color="text.secondary">
                  {element.name.split(" ")[0]}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {element.role}
                </Typography>
              </div>
            );
          })}
        </div>
      </>
    );
  }, [crewAndCast]);

  const AboutComponent = useCallback(() => {
    return (
      <>
        <br />
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {"About the movie"}
        </Typography>
        <Typography id="modal-modal-title" variant="subtitle1" component="h2">
          {plot}
        </Typography>
      </>
    );
  }, [crewAndCast]);

  const ReviewComponent = useCallback(() => {
    return (
      <>
        <br />
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {"Top Reviews"}
        </Typography>
        {ratings.map((element: any) => {
          return (
            <div className="rating-container">
              {"#" + element.Source + "  " + element.Value}
            </div>
          );
        })}
      </>
    );
  }, [crewAndCast]);

  const modalContentBuilder = useCallback(() => {
    return (
      <>
        <AboutComponent />
        <CastAnCrewComponent />
        <ReviewComponent />
      </>
    );
  }, [crewAndCast]);

  return (
    <HVModal
      modalTitle={title}
      modalDescription={language}
      modalSecondaryDescription={modalSecondaryDescription}
      modalContentBuilder={modalContentBuilder}
      onModalClose={onModalClose}
    />
  );
}

export default MovieDetailModal;
