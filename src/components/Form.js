import React, { useState } from "react";
import { useContext } from "react";
import { engineContext } from "../context/engineContext";
import Card from "./Card";

const Form = ({ getData }) => {
  const data = useContext(engineContext);

  const [text, setText] = useState("");
  // console.log(text);
  const [result, setResult] = useState("");
  // console.log(result);

  const handleClick = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Fill in the gap...");
    } else {
      setResult(text);
      setText("");
    }
  };

  return (
    <div className="search-bar input-group d-flex flex-column align-items-center">
      <div className="form-outline d-flex w-50 mb-5">
        <input
          type="search"
          id="form1 "
          className="form-control me-3"
          placeholder="Enter name/surname"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          <i className="fas fa-search"></i>
        </button>
      </div>

      <div className="row col-md-8 d-flex">
        {data.data
          .filter((val) => {
            if (result === "") {
              return null;
            } else if (val[0].toLowerCase().includes(result.toLowerCase())) {
              return val;
            }
          })
          .map((item, index) => (
            <Card key={index} item={item} />
          ))}
      </div>
    </div>
  );
};

export default Form;
