import React from "react";
import { useHistory } from "react-router";

const ResultPage = (props) => {
  const history = useHistory();
  const goMain = () => {
    history.push("/");
  };

  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="logobutton btn btn-outline-primary btn-lg mt-5 p-3 "
          onClick={goMain}
        >
          <i className="fas fa-arrow-left"></i> Return To Main Page
        </button>
      </div>

      <div className="output col-md-10">
          {props.location.output}
     </div>
    </div>
  );
};

export default ResultPage;
