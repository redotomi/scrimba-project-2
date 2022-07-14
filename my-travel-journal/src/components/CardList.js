import React from "react";
import Card from "./Card";
import { data } from "../services/data";

export default function CardList() {
  return (
    data.map((item) => {
      return (
        <Card
          key={item.title}
          item={item}
        />
      )
    })
  );
}
