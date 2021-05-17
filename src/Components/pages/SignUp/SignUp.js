import React from 'react'
import Footer from '../Footer/Footer'
import HeroSection from '../HeroSection'
import { homeObjThree } from './Data'

function SignUp() {
    return (
        <div>
            
            
            <HeroSection {...homeObjThree} />
            <Footer />
        </div>
    );
}

export default SignUp;
