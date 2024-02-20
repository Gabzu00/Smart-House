import React from "react"
import styles from "./Card.module.css";
import cardInfo from "../../data/cardInfo.json"

function Card (){
  return(
      <div className={styles.container}>
        {cardInfo.map((info, id) => {
          return (
            <div key={id} className={styles.info}>
              <img src={info.image} className={styles.cardImg}/>
              <h1 className={styles.title}>{info.title}</h1>
              <p className={styles.description}>{info.description}</p>
            </div>
          );
        })}
      </div>
    );
}

export default Card;