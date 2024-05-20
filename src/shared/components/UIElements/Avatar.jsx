import PropTypes from "prop-types";
import "./Avatar.css";

export default function Avatar(props) {
  return (
    <div className={`avatar ${props.className}`} style={props.style}>
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </div>
  );
}

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};
