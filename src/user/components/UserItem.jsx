import "./UserItem.css";
import PropTypes from "prop-types";
import Avatar from "../../shared/components/UIElements/Avatar";
import { Link } from "react-router-dom";
// import Card from "../../shared/components/UIElements/Card";
import Card from "react-bootstrap/Card";

export default function UserItem(props) {
  return (
    <li className="user-item">
      <Card>
        <Link to={`/${props.id}/places`}>
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
}

UserItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeCount: PropTypes.number.isRequired,
};
