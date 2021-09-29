import React from "react";

const Card = ({item}) => {

  return (
    <div className="card col-md-4 mx-3 my-5" style={{width: "25rem"}}>
      <div className="card-body">
        <h5 className="card-title"> {item[0]} </h5>
        <p className="card-text"> {item[1]}</p>
        <p className="card-text"> {item[2]}</p>
        <p className="card-text"> {item[3]}</p>
        <p className="card-text"> {item[4]}</p>
        <p className="card-text"> {item[5]}</p>
      </div>
    </div>
  );
};

export default Card;
