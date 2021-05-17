import React from 'react'
import Footer from '../Footer/Footer'
import HeroSection from '../HeroSection'
import Pricing from '../Pricing';
import { homeObjOne } from './Data'

function Home() {
    return (
        <div>
            
            <Pricing />
            <HeroSection {...homeObjOne} />
            <Footer />
        </div>
    );
}

export default Home
