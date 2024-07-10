import React from 'react';
import images from './images';
import * as styles from './styles.module.css';


// i was working on the tablet responsiveness of this component
function Author(){
    return(
        <article className={styles.author}>
            <img src={images['amy']}/>
            <div className={styles.author_details}>
                <h1>
                    I’m Amy, and I’d love to work on your next project
                </h1>
                <p>
                    I love working with others to create beautiful design solutions. 
                    I’ve designed everything from brand illustrations to complete mobile apps. 
                    I’m also handy with a camera!
                </p>
                <button>
                    Free Consultation
                </button>                
            </div>

        </article>
    )
}

export default Author;