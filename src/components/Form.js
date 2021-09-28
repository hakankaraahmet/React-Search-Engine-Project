import React from "react";

const Form = () => {
  return (
    <div className="search-bar input-group">
      <div className="form-outline d-flex w-50">
        <input
          type="search"
          id="form1 "
          className="form-control me-3"
          placeholder="Enter name/surname"
        />
        <button type="button" className="btn btn-primary">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default Form;
