import React from 'react'

//styles
import styles from "./filter.module.css";

function Filter() {
  return (
    <div className={styles.filter__container}>
        <select name="filter" className={styles.country__filter}>
          <option value="filter_by_region">Filter by Region</option>
        </select>
    </div>
  )
}

export default Filter;