import React from "react";
import HeroesPh from '../img/hero-section-phs.png';

export default function Hero() {
  return (
    <section>
      <img className="heroes-photos" src={HeroesPh} alt='heroes photos' />
      <div className="heroes-text">
        <h2 className="heroes--title">Online Experiences</h2>
        <span className="heroes--p" >Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</span>
      </div>
    </section>
  );
}
