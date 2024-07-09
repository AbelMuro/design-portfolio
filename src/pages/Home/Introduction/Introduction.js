import React from 'react';
import * as styles from './styles.module.css';

function Introduction(){
    return(
        <section className={styles.introduction}>
            <h1>
                Design solutions made easy
            </h1>
            <p>
                With over ten years of experience in various design disciplines, 
                I’m your one-stop shop for your design needs.
            </p>
        </section>
    )
}

export default Introduction;