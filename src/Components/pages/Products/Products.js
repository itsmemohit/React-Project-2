import React from 'react'
import Footer from '../Footer/Footer'
import HeroSection from '../HeroSection'
import { homeObjFour } from './Data'

function Products() {
    return (
        <div>
            <HeroSection {...homeObjFour} />
            <Footer />
        </div>
    );
}

export default Products;
