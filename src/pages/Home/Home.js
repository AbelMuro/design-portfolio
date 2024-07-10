import React from 'react';
import HeaderBar from './HeaderBar';
import Introduction from './Introduction';
import Skills from './Skills';
import Author from './Author';

function Home() {
    return(
        <>
            <HeaderBar/>
            <Introduction/>
            <Skills/>
            <Author/>
        </>
    )
}

export default Home;