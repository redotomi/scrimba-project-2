import React from "react";
import '../style.css';
import NavBar from "./NavBar";
import Hero from "./Hero";
import Card from "./Card";
import { data } from "../services/data";

export default function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <section className="card-list">
        {data.map((item) => {
          return (
            <Card
              key={item.id}
              img={item.coverImg}
              rating={item.stats.rating}
              reviewCount={item.stats.reviewCount}
              country={item.location}
              title={item.title}
              price={item.price}
              openSpots={item.openSpots}
            />
          )
        })
        }
      </section>
    </div>
  );
}
