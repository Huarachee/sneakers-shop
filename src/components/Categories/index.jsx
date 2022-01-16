import React from "react";

import styles from "./Categories.module.scss";


function Categories() {
    return(
        <div className={styles.categoriesContainer}>
            <ul>
                <li>Все</li>
                <li>Для бега</li>
                <li>Для осени</li>
                <li>Для зимы</li>
            </ul>
        </div>
    );
}

export default Categories;