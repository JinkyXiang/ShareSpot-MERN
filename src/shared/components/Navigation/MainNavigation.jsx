// MainNavigation component is a child of MainHeader component, contain links
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";

import "./MainNavigation.css";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";

export default function MainNavigation() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawer = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen ? <Backdrop onClick={closeDrawer} /> : null}
      {drawerIsOpen ? (
        <SideDrawer>
          <NavLinks />
        </SideDrawer>
      ) : null}
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
}

MainNavigation.propTypes = {
  children: PropTypes.node,
};
