import React from "react";
import styles from './Header.module.scss';


function Header() {
    return(
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.headerContent}>
                    <div className={styles.logo}>
                        Sneakers shop
                    </div>
                    <menu>
                        <ul>
                            <li>Кроссовки</li>
                            <li>Новинки</li>
                            <li>Распродажа</li>
                        </ul>
                    </menu>
                    <div className={styles.cart}>
                        Корзина
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Header;