import React, { useState } from "react";
import { useHistory } from "react-router";
import { engineContext } from "../context/engineContext";
import { useContext } from "react";

const AddPage = () => {
  const { AddRecord } = useContext(engineContext);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");

  // ARRANGING DATE

  const todayFunc = (digit) => ("0" + digit).slice(-2);
  const today = new Date();
  const date = `${todayFunc(today.getDate())} /${todayFunc(
    today.getMonth() + 1
  )} /${today.getFullYear()}`;

  // MainPage sayfasına Dönüş
  const history = useHistory();
  const backMain = () => {
    history.push("/");
  };

  // Add Record

  const handleAdd = (e) => {
    if (!name || !country || !city || !email) {
      e.preventDefault();
      alert("All the fields must be filled appropriately....");
    } else {
      e.preventDefault();
      AddRecord([name, "Lorem Corps", email, date, country, city]);
      setName("");
      setCountry("");
      setCity("");
      setEmail("");
    }
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
      <form className="addpage w-md-50 text-light mt-5" onSubmit={handleAdd}>
        <div className="form-group mt-3">
          <label htmlFor="namesurname" className="h5 text-primary fs-2">
            Name Surname
          </label>
          <input
            id="namesurname"
            type="text"
            value={name}
            className="form-control mt-2"
            pattern="[a-zA-Z\s]{4,60}"
            placeholder="Enter name and surname"
            minLength="4"
            maxLength="60"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="country" className="h5 text-primary fs-2">
            Country
          </label>
          <input
            id="country"
            type="text"
            value={country}
            className="form-control mt-2"
            pattern="[a-zA-Z\s]+"
            placeholder="Enter a country"
            minLength="2"
            maxLength="40"
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="city" className="h5 text-primary fs-2">
            City
          </label>
          <input
            id="city"
            type="text"
            value={city}
            className="form-control mt-2"
            pattern="[a-zA-Z\s]+"
            placeholder="Enter a city"
            minLength="2"
            maxLength="40"
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label for="email" className="h5 text-primary fs-3">
            Email
          </label>
          <input
            id="email"
            type="email"
            value = {email}
            className="form-control mt-2"
            placeholder="Enter an e-mail (abc@xyz.com)"
            onChange={(e) => setEmail(e.target.value)}
            required
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
