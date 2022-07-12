import React from "react";
import Logo from '../img/Vector.png'

export default function NavBar() {
  return (
    <nav className="navbar">
      <img src={Logo} alt='Airbnb logo' />
    </nav>
  );
}
