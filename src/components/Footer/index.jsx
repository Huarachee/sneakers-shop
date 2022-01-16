import React from "react";

import styles from "./Footer.module.scss";

function Footer() {
    return(
        <div className={styles.footerContent}>
            <div className={styles.container}>
                <h3 className={styles.footerContentTitle}>
                    Sneakers shop
                </h3>
                <p className={styles.copyright}>© Все права защищены 2022.</p>
            </div>
            
        </div>
    );
    
}

export default Footer;