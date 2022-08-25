import React, { useState } from "react";
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
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(prev=> !prev)
  };
  return (
    <Navbar color="info" light expand="md">
      <NavbarBrand>
        <Link to="/">
        GitHyb Finder App
        </Link>
        </NavbarBrand>
      <NavbarText className="text-white">
        
        Kodanda Rama</NavbarText>

      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
       
      </Collapse>
      <div className="flex">
      <Link to="/signIn" className="text-white m-2">
        SignIn
      </Link>
      <Link to="/signUp"  className="text-white">
        signUp
      </Link>

      </div>
     
    </Navbar>
  );
};

export default Header;
