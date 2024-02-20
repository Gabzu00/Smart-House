import React from "react"
import styles from "./Panel.module.css"
import Card from "../card/Card"

export const Panel = () =>{
  return(
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.ellipseOne}></div>
        <div className={styles.ellipseTwo}></div>
        <Card />
      </div>
    </section>
  )
}