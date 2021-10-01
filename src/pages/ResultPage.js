import React, { useState } from "react";
import { useHistory } from "react-router";
import Pagination from "../components/Pagination";

const ResultPage = (props) => {
  const history = useHistory();
  const goMain = () => {
    history.push("/");
  };


  // Pagination
  const [cards, setCards] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage, setCardPerPage] = useState(3);

  
  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard)

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

      <div className="output col-md-10">{props.location.output}</div>

      <Pagination cards={currentCards} />
    </div>
  );
};

export default ResultPage;
