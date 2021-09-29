import React, { useState } from "react";
import { useHistory } from "react-router";

const AddPage = () => {
  // const [name, setName] = useState("");
  // const [country, setCountry] = useState("");
  // const [city, setCity] = useState("");
  // const [email, setEmail] = useState("");

  // MainPage sayfasına Dönüş
  const history = useHistory();
  const backMain = () => {
    history.push("/");
  };

  return (
    <div className="addpage w-25 m-auto mt-5">
      <button
        type="submit"
        className="logobutton btn btn-outline-primary btn-lg mt-5 p-3 "
        onClick={backMain}
      >
        <i className="fas fa-arrow-left"></i> Return To Main Page
      </button>
      <form className="addpage w-md-50 text-light mt-5">
        <div className="form-group mt-3">
          <label htmlFor="namesurname" className="h6 text-dark">
            Name Surname
          </label>
          <input
            id="namesurname"
            type="text"
            className="form-control mt-2"
            pattern="[a-zA-Z\s]+"
            placeholder="Enter name and surname"
            minLength="4"
            maxLength="60"
            // onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="country" className="h6 text-dark">
            Country
          </label>
          <input
            id="country"
            type="text"
            className="form-control mt-2"
            pattern="[a-zA-Z\s]+"
            placeholder="Enter a country"
            minLength="2"
            maxLength="40"
            // onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="city" className="h6 text-dark">
            City
          </label>
          <input
            id="city"
            type="text"
            className="form-control mt-2"
            pattern="[a-zA-Z\s]+"
            placeholder="Enter a city"
            minLength="2"
            maxLength="40"
            // onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label for="email" className="h6 text-dark">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="form-control mt-2"
            placeholder="Enter an e-mail (abc@xyz.com)"
            // onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="d-flex mt-5">
          <button type="submit" class="btn btn-primary w-25 addbutton">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPage;
