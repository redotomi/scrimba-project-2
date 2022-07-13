import React from "react";
import Nadador from '../img/nadador.png';
import Star from '../img/Star.png';

export default function Card() {
  return (
    <div className="card">
      <img src={Nadador} alt='Picxture of a swimmmer' className="card--image" />
      <div className="card--stats">
        <img src={Star} alt='star' className="card--star" />
        <span>5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p><span className="bold">From $136</span> / person</p>
    </div>
  );
}
