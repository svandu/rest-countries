import React from 'react'

//styles
import styles from "./searchfilter.module.css"

function SearchFilter() {
  return (
    <div className={styles.filter__container}>
        <input type="text" className={styles.search__bar} placeholder='search for a country' />
    </div>
  )
}

export default SearchFilter