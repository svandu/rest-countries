import React, {useState, useEffect} from "react";

//axios
import axios from "axios";

//styles
import styles from "./individualcard.module.css";

function IndividualCard() {
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
    <div className={styles.card__maincontainer}>
    <button className={styles.back__btn}>Back</button>

  {countries.map((country) => (
      <div className={styles.country__info} key={country.id}>
        <img
          src={country.flags.png}
          className={styles.flag__img}
          alt="flag image"
        />

        <div className={styles.about__country}>

          <div className={styles.info__partone}>
            <p className="name continents--name">Belgium</p>  
            <p className="para nativename">
              Native Name: <span className="country--detail"> Beigie</span>
            </p>
            <p className="para population">
              Population: <span className="country--detail">11,319,511</span>
            </p>
            <p className="para region">
              Region: <span className="country--detail">Europe</span>
            </p>
            <p className="para subregion">
              Sub Region:{" "}
              <span className="country--detail"> Western Europe</span>
            </p>
            <p className="para capital">
              Capital: <span className="country--detail"> Brussels</span>
            </p>
          </div>

          <div className={styles.info__parttwo}>
            <p className="para topleveldomain">
              Top Level Domain: <span className="country--detail">.be</span>
            </p>
            <p className="para nativename">
              Currencies: <span className="country--detail">Euro</span>
            </p>
            <p className="para nativename">
              Language:{" "}
              <span className="country--detail">Dutch, French, German</span>
            </p>
          </div>
        </div>
      </div>
  ))}

  </div>
  );
}

export default IndividualCard;
