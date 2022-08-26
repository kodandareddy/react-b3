import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { UserContext } from "../Context/userContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(UserContext);
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Navbar color="info" light expand="md">
      <NavbarBrand>
        <Link to="/">GitHyb Finder App</Link>
      </NavbarBrand>
      <NavbarText className="text-white">{context?.user?.email}</NavbarText>

      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar></Collapse>
      <div className="flex">
        {context?.user?.accessToken ? (
          <Link to="/signIn" className="text-white m-2">
            LogOut
          </Link>
        ) : (
          <Link to="/signIn" className="text-white m-2">
            LogIn
          </Link>
        )}
      {!context?.user?.accessToken && <Link to="/signUp" className="text-white">
          Create Account
        </Link>}
      </div>
    </Navbar>
  );
};

export default Header;
