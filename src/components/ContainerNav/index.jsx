import React from 'react'

//styles
import styles from "./containernav.module.css"

function ContainerNav() {
  return (
    <div className={styles.nav__container}>
        <div className={styles.nav__bar}>
            <span className={styles.logo__name}>Where in the world?</span> 
            <button className={styles.dark__btn}>Dark</button>
        </div>
    </div>
  )
}

export default ContainerNav