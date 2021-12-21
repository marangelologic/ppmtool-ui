import React from "react";
import { Link } from "react-router-dom";

const CreateAwardButton = () => {
  return (
    <React.Fragment>
      <Link to="/addAward" className="btn btn-lg btn-info">
        Create a new Award
      </Link>
    </React.Fragment>
  );
};

export default CreateAwardButton;
