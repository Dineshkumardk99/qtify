import React from "react";
import "./NavBar.css";
import Button from "../Button/Button";
import Search from "../Search/Search";
import Logo from "../Logo/Logo";

const NavBar = () => {
  return (
    <div className="NavBar">
      <Logo />
      <Search />
      <Button />
    </div>
  );
};

export default NavBar;
