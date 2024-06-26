import PropTypes from "prop-types";
import "./UsersList.css";
import UserItem from "./UserItem";
// import Card from "../../shared/components/UIElements/Card";
import Card from "react-bootstrap/Card";
import "./UsersList.css";

export default function UsersList(props) {
  if (props.items.length === 0) {
    return (
      //   <div className="center">
      <Card className="users-list">
        <h2>No users found.</h2>
      </Card>
      //   </div>
    );
  }

  return (
    <ul>
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
}

// Define prop types
UsersList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      places: PropTypes.number.isRequired,
    })
  ).isRequired,
};
