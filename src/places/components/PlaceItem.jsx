import Card from "../../shared/components/UIElements/Card";
import "./PlaceItem.css";
import PropType from "prop-types";

export default function PlaceItem(props) {
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="place-item__info">
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>
        <div className="place-item__actions">
          <button>View on Map</button>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </Card>
    </li>
  );
}

PlaceItem.propTypes = {
  image: PropType.string.isRequired,
  title: PropType.string.isRequired,
  address: PropType.string.isRequired,
  description: PropType.string.isRequired,
  creatorId: PropType.string.isRequired,
  coordinates: PropType.object.isRequired,
};
