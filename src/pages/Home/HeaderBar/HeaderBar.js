import React from 'react';
import images from './images';
import * as styles from './styles.module.css';

function HeaderBar(){
    return(
        <header className={styles.header}>
            <img src={images['logo']} className={styles.header_logo}/>
            <button type='button' className={styles.header_button}>
                Free Consultation
            </button>
        </header>
    )
}

export default HeaderBar;