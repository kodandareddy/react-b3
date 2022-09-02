import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
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
  Button,
} from "reactstrap";
import { UserContext } from "../Context/userContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(UserContext);
  console.log(context,"++")
  const history = useHistory();

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClick=()=>{
    context.setUser(null)
    history.push('/signIn')
  }
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
          // <Link to="/signIn" onClick={()} className="text-white m-2">
          //   LogOut
          // </Link>
          <Button onClick={handleClick}>
            Logout
          </Button>
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
