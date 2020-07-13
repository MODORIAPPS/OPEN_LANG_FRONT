import React from "react";
import BuildIcon from "@material-ui/icons/Build";
import "../styles/Preparing.scss";

const Preparing = (props) => {
  return (
    <div className="Preparing">
      <div className="Preparing-content">
        <BuildIcon fontSize="large" className="Preparing-icon" />
        <h3>개발중</h3>
      </div>
    </div>
  );
};

export default Preparing;
