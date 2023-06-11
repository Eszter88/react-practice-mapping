import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./App.css";

function NavBar() {
  return (
    <nav>
      <h1 className="logo">New York Times Best Sellers</h1>
      <MenuIcon sx={{ fontSize: 44 }} />
    </nav>
  );
}

export default NavBar;
