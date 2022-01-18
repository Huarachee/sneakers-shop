import React from "react";

import styles from "./Card.module.scss";


function Card({ sneakersImg, sneakersName, sneakersPrice }) {
    return(
        <div className={styles.cardContainer}>
            <div className={styles.cardImgContainer}>
                <img src={sneakersImg} alt="" />
            </div>
            <div className={styles.line}></div>
            <div className={styles.infoCardContainer}>
                <h4 className={styles.cardTitle}>{sneakersName}</h4>
                <div className={styles.cardPrice}>
                    <p>Цена:</p>
                    <span>{sneakersPrice}</span>
                </div>
                <div className={styles.cardBtn}>
                    <button className={styles.lookAtBtn}>Посмотреть</button>
                    <button className={styles.addBtn}>В корзину</button>
                </div>
            </div>
            
        </div>
    );
}

export default Card;