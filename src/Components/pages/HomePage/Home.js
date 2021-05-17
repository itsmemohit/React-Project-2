import React from 'react'
import Footer from '../Footer/Footer'
import HeroSection from '../HeroSection'
import Pricing from '../Pricing';
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data'

function Home() {
    return (
        <div>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjTwo} />
            <Pricing />
            <HeroSection {...homeObjFour} />
            <Footer />
        </div>
    );
}

export default Home
