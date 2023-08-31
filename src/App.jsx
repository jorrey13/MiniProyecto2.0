// App.js
import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Cards from "./components/Cards";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [data, setData] = useState([]);
  const [searchedCity, setSearchedCity] = useState(""); // Define searchedCity here

  const getData = async () => {
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredData = searchedCity
    ? data.filter((el) => el.city === searchedCity)
    : data;

  return (
    <div className="main-container">
      <Nav setSearchedCity={setSearchedCity} />
      <main>
        <div className="container text-center card-container">
          {filteredData.map((el, i) => {
            return (
              <Cards
                ciudad={el.city}
                foto={el.photo}
                superHost={el.superHost}
                type={el.type}
                rating={el.rating}
                title={el.title}
                key={i}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
