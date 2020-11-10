import React from "react";
import "./CharComponent.css";

const CharComponent = (props) => {
  return <div className="CharComponent">{props.letter}</div>;
};

export default CharComponent;
