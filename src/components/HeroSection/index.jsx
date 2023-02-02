import React from "react";
import SearchFilter from "../SearchFilter";
import Filter from '../Filter';
import ContainerCards  from '../ContainerCards';

//styles
import styles from "./herosection.module.css";

function HeroSection() {
  return (
    <div className={styles.hero__container}>
      <div className={styles.search__filter}>
        <SearchFilter />
        <Filter />
      </div>
      <div className={styles.cards__field}>
        <ContainerCards />
      </div>
    </div>
  );
}

export default HeroSection;
