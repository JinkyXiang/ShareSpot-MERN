import "./UserItem.css";
import PropTypes from "prop-types";
import Avatar from "../../shared/components/Avatar";

export default function UserItem(props) {
  return (
    <li className="user-item">
      <div className="user-item__content">
        <div className="user-item__image">
          <Avatar image={props.image} alt={props.name} />
        </div>
        <div className="user-item__info">
          <h2>{props.name}</h2>
          <h3>
            {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
          </h3>
        </div>
      </div>
    </li>
  );
}

UserItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeCount: PropTypes.number.isRequired,
};
