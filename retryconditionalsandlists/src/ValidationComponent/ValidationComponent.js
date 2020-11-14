import React from "react";

const ValidationComponent = (props) => {
  if (props.length < 5 && props.length > 0) {
    return (
      <div>
        <h3>Text too Short!</h3>
      </div>
    );
  } else if (props.length > 20) {
    return (
      <div>
        <h3>Text too Long!</h3>
      </div>
    );
  } else {
    return null;
  }
};

export default ValidationComponent;
