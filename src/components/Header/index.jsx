import React from "react";
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';


function Header() {
    return(
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.headerContent}>
                    <Link className="link" to="/" exact>
                        <div className={styles.logo}>
                            Sneakers shop
                        </div>
                    </Link>
                    <menu>
                        <ul>
                            <li>Кроссовки</li>
                            <li>Новинки</li>
                            <li>Распродажа</li>
                        </ul>
                    </menu>
                    <Link className="link" to="/cart" exact>
                        <div className={styles.cart}>
                            Корзина
                        </div>
                    </Link>
                </div>
                
            </div>
        </div>
    );
}

export default Header;