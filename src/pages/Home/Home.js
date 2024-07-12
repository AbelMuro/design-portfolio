import React from 'react';
import HeaderBar from './HeaderBar';
import Introduction from './Introduction';
import Skills from './Skills';
import Author from './Author';
import ImageCarousel from './ImageCarousel';
import Footer from './Footer'

function Home() {
    return(
        <>
            <HeaderBar/>
            <Introduction/>
            <Skills/>
            <Author/>
            <ImageCarousel/>
            <Footer/>
            <HeaderBar/>
        </>
    )
}

export default Home;