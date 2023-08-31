import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Cards = ({ ciudad, foto, superHost, type, rating, title }) => {
  return (
    <div className="card">
      <img src={foto} alt={ciudad} className="card-img" />
      <div className="info">
      {superHost && <p className="super-host">Super Host</p>}
      <p>{type}</p>
      <p><FontAwesomeIcon icon={faStar} style={{color: "#ef0101"}} />{rating}</p>
      </div>
      <h6 className="card-title">{title}</h6>
    </div>
  );
};

export default Cards;
