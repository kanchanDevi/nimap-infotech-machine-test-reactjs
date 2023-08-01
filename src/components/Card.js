import { IMAGE_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Card = ({
  id,
  vote_average,
  backdrop_path,
  poster_path,
  original_title
}) => {
  return (
    <Link to={`/movie/${id}`} className="items">
      {" "}
      {/* Link to the movie details page */}
      <div className="cards">
        <img src={IMAGE_URL + poster_path} alt="im" className="images" />
        <p className="title">{original_title}</p>
        <p className="rating">Rating: {vote_average}</p>
      </div>
    </Link>
  );
};

export default Card;
