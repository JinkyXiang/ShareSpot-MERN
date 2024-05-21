// Main Header, shell provides styling for the header
import "./MainHeader.css";
import PropTypes from "prop-types";

export default function MainHeader(props) {
  return <header className="main-header">{props.children}</header>;
}

MainHeader.propTypes = {
  children: PropTypes.node.isRequired,
};
