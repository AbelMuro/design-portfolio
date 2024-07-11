import React from 'react';
import * as styles from './styles.module.css';

//
function Footer(){
    return(
        <footer className={styles.footer}>
            <h1>
                Book a call with me
            </h1>
            <p>
                I’d love to have a chat to see how I can help you. 
                The best first step is for us to discuss your project during a free consultation. 
                Then we can move forward from there.
            </p>
            <button>
                Free Consultation
            </button>
        </footer>
    )
}

export default Footer;