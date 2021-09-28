import React from "react";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import Info from "../components/Info";


const MainPage = () => {
  return (
    <div className="mainpage">
      <Navbar />
      <Form />
      <Info />
    </div>
  );
};

export default MainPage;
