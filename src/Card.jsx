import React from "react";
import "./App.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Card(props) {
  return (
    <div>
      <div className="card-item">
        <button className="btn-circle">{props.index}</button>
        <h3 className="article-sub">{props.sub}</h3>
        <h2 className="article-title">{props.title}</h2>
        <p className="article-text">{props.text}</p>
      </div>
      <button className="square-btn">
        Read More
        <ArrowForwardIcon className="arrow-icon" />
      </button>
    </div>
  );
}

export default Card;
