import React from "react";

const Wanted = (props) => {
  return (
    <div className="poster">
      <div className="data">
        <img src={props.image} alt={props.title} />
        <h2>{props.title}</h2>
        <h3>{props.description}</h3>
      </div>
      <div className="contact">
        <p>{props.tel}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Wanted;
