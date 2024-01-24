import React from "react";

function Card(props) {
  return (
    <div className="card" style={{ minWidth: "18rem", maxWidth: "100%" }}>
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a
          href={props.Github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary d-block mt-3"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Card;
