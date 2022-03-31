import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

/* Added required icons into the library */
library.add(faStar, faStarHalf);

/* A Star Component, half or full according to the rating value */
export default function Star(props) {
  return (
    <div
      id={props.id}
      className={+props.id % 1 === 0 ? "star" : `star half-star ${props.id}`}
    >
      {+props.id % 1 === 0 ? (
        <FontAwesomeIcon icon={"fa-star"} />
      ) : (
        <FontAwesomeIcon icon={"fa-star-half"} />
      )}
    </div>
  );
}
