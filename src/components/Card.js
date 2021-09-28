import React from "react";
import { useContext } from 'react';
import { engineContext } from '../context/engineContext';



const Card = ({item}) => {

    const {cols} = useContext(engineContext);

  return (
    <div className="card" style={{width: "25rem"}}>
      <div className="card-body">
        <h5 className="card-title">{cols[0]}: {item[0]} </h5>
        <p className="card-text">{cols[1]}: {item[1]}</p>
        <p className="card-text">{cols[2]}: {item[2]}</p>
        <p className="card-text">{cols[3]}: {item[3]}</p>
        <p className="card-text">{cols[4]}: {item[4]}</p>
        <p className="card-text">{cols[5]}: {item[5]}</p>
      </div>
    </div>
  );
};

export default Card;
