import React, { useState, UseEffect, useEffect } from "react";
import axios from "axios";

//styles
import styles from "./containercards.module.css";

function ContainerCards() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        console.log(res);
        setCountries(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.cards__container}>

      {countries.map((country) => (
        <div className={styles.cards} key={country.id}>
          <img src={country.flags.png} className={styles.cards__img} />
          <span className={styles.continents__name}>{country.continents}</span>

          <div className={styles.countries__details}>
            <p className={styles.population}>Population: <span className={styles.country__population}>{country.population}</span></p>
            <p className={styles.region}>Region: <span className={styles.country__region}>{country.region}</span></p>
            <p className={styles.capital}>Capital: <span className={styles.country__capital}>{country.capital}</span></p>
          </div>
        </div>
      ))}     
      
      {/* <ul>
        {countries.map((country) => (
          <li key={country.id}>{country.continents}</li>
        ))}
      </ul> */}


    </div>
  );
}

export default ContainerCards;
