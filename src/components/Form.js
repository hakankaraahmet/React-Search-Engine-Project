import React, { useState } from "react";
import { useContext } from "react";
import { useHistory } from "react-router";
import { engineContext } from "../context/engineContext";
import Card from "./Card";

const Form = () => {
  const {data}  = useContext(engineContext);
  // console.log(data)

  const history = useHistory();
  const goAddPage = () => {
    history.push("/addpage");
  };

  const [text, setText] = useState("");
  // console.log(text);

  const handleClick = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Fill in the gap...");
    } else {
      setText(text);
      // setText("");
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
          .map((item, index) => (
            <Card key={index} item={item} />
          ))}
      </div>
    </div>
  );
};

export default Form;
