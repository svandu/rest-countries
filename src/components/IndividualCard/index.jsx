import React, {useState, useEffect} from "react";

//axios
import axios from "axios";

//links
import { Link } from "react-router-dom"

//styles
import styles from "./individualcard.module.css";

function IndividualCard() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/all`)
      .then((res) => {
        console.log(res);
        setCountries(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div className={styles.card__maincontainer}>

    <Link to='/MainContainer'>
        <button className={styles.back__btn}>Back</button>  
    </Link>

  {countries.map((country) => (
      <div className={styles.country__info} key={country.id}>
        <img
          src={country.flags.png}
          className={styles.flag__img}
          alt="flag image"
        />

        <div className={styles.about__country}>

          <div className={styles.info__partone}>
            <p className="name continents--name">{country.continents}</p>  
            <p className="para nativename">
              Native Name: <span className="country--detail"></span>
            </p>
            <p className="para population">
              Population: <span className="country--detail">{country.population}</span>
            </p>
            <p className="para region">
              Region: <span className="country--detail">{country.region}</span>
            </p>
            <p className="para subregion">
              Sub Region:{" "}
              <span className="country--detail">{country.subregion}</span>
            </p>
            <p className="para capital">
              Capital: <span className="country--detail">{country.capital}</span>
            </p>
          </div>

          <div className={styles.info__parttwo}>
            <p className="para topleveldomain">
              Top Level Domain: <span className="country--detail"></span>
            </p>
            <p className="para currencies">
              Currencies: <span className="country--detail"></span>
            </p>
            <p className="para language">
              Language:{" "}
              <span className="country--detail">{country.language}</span>
            </p>
          </div>
        </div>
      </div>
  ))}

  </div>
  );
}

export default IndividualCard;
