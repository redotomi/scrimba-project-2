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
              {...item}
            />
          )
        })
        }
      </section>
    </div>
  );
}
