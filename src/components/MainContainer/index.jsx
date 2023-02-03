import React, { useState, useEffect } from "react";

//axios
import axios from "axios";

//styles
import styles from "./maincontainer.module.css";

//link
import { Link } from "react-router-dom";

function MainContainer() {

  //search filter 

  const [countries, setCountries] = useState([]);
  const [searchApiData, setSearchApiData] = useState([]);
  const [filterVal, setFilterVal] = useState('');

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        console.log(res);
        setCountries(res.data);
        setSearchApiData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleFilter=(e) => {
    if(e.target.value == '' ){
      setCountries(searchApiData)
    }else {
      const filterResult = searchApiData.filter(item => item.continents.toString().toLowerCase().includes(e.target.value.toString().toLowerCase()))

      setCountries(filterResult)
    }
    setFilterVal(e.target.value);
  }

//jsx

  return (
    <div className={styles.main__container}>

    <div className={styles.search__filter}>
            
        {/* search field */}
        <div className={styles.search__field}>
            <input type="text" placeholder="search for a country..." className={styles.search__bar} value={filterVal} onInput={(e)=>handleFilter(e)} /> 
        </div>

        {/* filter field */}

        <div className={styles.filter__container}>
            <select name="filter" className={styles.country__filter}>
              <option value="filter_by_region">Filter by Region</option>
            </select>
        </div>

    </div>

    {/* container cards */}

      {countries.map((country) => (

        <Link to='/IndividualCard'>
          <div className={styles.cards} key={country.id}>
            <img src={country.flags.png} className={styles.cards__img} />
            <span className="name continents--name">{country.continents}</span>

            <div className="countries--details">
              <p className="para population">Poppulation: <span className="country--detail">{country.population}</span></p>
              <p className="para region">Region: <span className="country--detail">{country.region}</span></p>
              <p className="para capital">Capital: <span className="country--detail">{country.capital}</span></p>
            </div>
          </div>
        </Link>
      ))}     

    </div>
  );
}

export default MainContainer;
