import React from "react";
import logo from "../assets/music-logo.png";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between">
      <div className="flex items-center justify-center">
        <Link to="/">
          <img src={logo} alt="logo" className="w-40 p-2" />
        </Link>
      </div>
      <Searchbar />
    </nav>
  );
};

export default Navbar;
