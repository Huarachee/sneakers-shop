import React from "react";
import { Link } from "react-router-dom";

import styles from "./Footer.module.scss";

function Footer() {
    return(
        <div className={styles.footerContent}>
            <div className={styles.container}>
                <Link to="/" exact>
                    <h3 className={styles.footerContentTitle}>
                        Sneakers shop
                    </h3>
                </Link>
                <p className={styles.copyright}>© Все права защищены 2022.</p>
            </div>
            
        </div>
    );
    
}

export default Footer;