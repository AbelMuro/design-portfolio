import React, {useRef} from 'react';
import images from './images';
import icons from './icons';
import * as styles from './styles.module.css';

function ImageCarousel(){
    const intervalRef = useRef();
    const carouselRef = useRef();

    const handleLeftDown = () => {
        if(intervalRef.current)
            handleUp();

        intervalRef.current = setInterval(() => {
            const currentScroll = carouselRef.current.scrollLeft;
            if(currentScroll - 5 > 0)
                carouselRef.current.scrollLeft -= 5;
        }, 5)        
    }

    const handleRightDown = () => {
        if(intervalRef.current)
            handleUp();

        const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

        intervalRef.current = setInterval(() => {
            const currentScroll = carouselRef.current.scrollLeft;
            if(currentScroll + 5 < maxScroll)
               carouselRef.current.scrollLeft += 5;  
        }, 5)
    }

    const handleUp = () => {
        clearInterval(intervalRef.current);
    }


    return(
        <section className={styles.container}>
            <h1>
                My Work
            </h1>
                <div className={styles.carousel} ref={carouselRef}>
                    <img className={styles.slide} src={images['slide1']}/>
                    <img className={styles.slide} src={images['slide2']}/>
                    <img className={styles.slide} src={images['slide3']}/>
                    <img className={styles.slide} src={images['slide4']}/>
                    <img className={styles.slide} src={images['slide5']}/>                    
                </div>

            <div className={styles.buttons}>
                <button onMouseDown={handleLeftDown} onMouseUp={handleUp}>
                    <img src={icons['left']}/>
                </button>
                <button onMouseDown={handleRightDown} onMouseUp={handleUp}>
                    <img src={icons['right']}/>
                </button>
            </div>
        </section>
    )
}

export default ImageCarousel;