import React from "react";
import '../style.css'

export default function Card(props) {
  return (
    <div className="card">
      <img className="card-image" src={`../img/${props.item.imageUrl}`} alt='Picture of the place' />
      <div className="card-info">
        <span className="card--location">{props.item.location.toUpperCase()}</span>
        <a className="card--map-link" href={props.item.googleMapsUrl}>View on Google Maps</a>
        <h2 className="card--title">{props.item.title}</h2>
        <span>{props.item.startDate} - {props.item.endDate}</span>
        <p>{props.item.description}</p>

      </div>
    </div>
  );
}
