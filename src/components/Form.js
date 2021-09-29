import React, { useState } from "react";
import { useContext } from "react";
import { useHistory } from "react-router";
import { engineContext } from "../context/engineContext";
import Card from "./Card";

const Form = () => {
  const { data } = useContext(engineContext);
  
  // Addpage ve ResultPage sayfalarına gidiş
  
  const history = useHistory();
  const goAddPage = () => {
    history.push("/addpage");
  };
  const goResult = ({text}) => {
    history.push("/resultpage")
  }
  
  const [text, setText] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Fill in the gap...");
    } else {
      setText(text);
    }
  };


  return (
    <div className="search-bar input-group d-flex flex-column align-items-center">
      <div className="form-outline d-flex w-50 mb-5">
        <input
          type="search"
          id="form1 "
          className="form-control form-control-lg searchinput"
          placeholder="Enter name/surname"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button type="button" className="btn btn-info" onClick={handleClick}>
          <i className="fas fa-search"></i>
        </button>
      </div>

      <div>
        <button
          type="button"
          className="btn btn-lg btn-secondary"
          onClick={goAddPage}
        >
          <i className="fas fa-plus"></i> Add New Record
        </button>
      </div>

      <div className="row col-md-9 d-flex">
        {data
          .filter((val) => {
            if (text === "") {
              return null;
            } else if (val[0].toLowerCase().includes(text.toLowerCase())) {
              return val;
            }
          })
          .slice(0, 3)
          .map((item, index) => (
            <Card key={index} item={item} />
          ))}

        {text ? (
          <div className="d-flex justify-content-center mt-5">
            <button
              type="button"
              className="btn btn-lg btn-secondary"
              onClick={goResult}
            >
              Click to Load More
            </button>
          </div>
        ) : null}

      </div>
    </div>
  );
};

export default Form;
