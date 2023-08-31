import React, { useState, useEffect } from "react";
import logo from "./../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch as faSearchSolid } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button } from "react-bootstrap";

const Nav = ({ setSearchedCity }) => {
  const [showModal, setShowModal] = useState(false);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [inputCity, setInputCity] = useState("");

  useEffect(() => {
    // Fetch and load data from stays.json
    fetch("stays.json")
      .then((response) => response.json())
      .then((data) => {
        const uniqueCities = Array.from(new Set(data.map((el) => el.city)));
        setCities(uniqueCities);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleClose = () => {
    setShowModal(false);
    setSelectedCity("");
  };

  const handleShow = () => setShowModal(true);

  const handleCityChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedCity(selectedValue);
    setInputCity(selectedValue);
  };

  const handleSearch = () => {
    setSearchedCity(selectedCity);
    handleClose();
  };

  return (
    <>
      <div className="nav-container">
      <img src={logo} alt="" className="logo" />
      <div className="search-container">
        <input
          type="text"
          placeholder="Ciudad"
          className="form-control"
          value={inputCity}
          readOnly
        />
        <input type="text" placeholder="Guess" className="form-control" />
        <FontAwesomeIcon
          icon={faSearchSolid}
          className="search-icon"
          style={{ color: "#f73808", cursor: "pointer" }}
          onClick={handleShow}
        />
      </div>
      <Modal show={showModal} onHide={handleClose} dialogClassName="modal-460w">
        <Modal.Header closeButton className="modal-header-custom">
          <Modal.Title>Buscar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-row align-items-center">
            <select
              className="form-control"
              value={selectedCity}
              onChange={handleCityChange}
            >
              <option value="">Seleccionar ciudad</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Guests"
              className="form-control ml-2"
            />
            <Button variant="danger" className="ml-" onClick={handleSearch}>
              Search
            </Button>
          </div>
        </Modal.Body>
        {/* Rest of the modal code */}
      </Modal>
      
    </div>
    <div className="stays">
      <h3>Stays in Finland</h3>
      <h6>12+stays</h6>
    </div>
    </>
  );
};

export default Nav;
