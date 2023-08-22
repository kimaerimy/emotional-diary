import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, image, title, summary, genres }) {
  return (
    <div>
      <img src={image} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g, idx) => (
          <li key={idx}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
};

export default Movie;
