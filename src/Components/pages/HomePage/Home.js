import React,{ useState } from 'react'
import Footer from '../Footer/Footer'
import HeroSection from '../HeroSection'
import Pricing from '../Pricing';
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data'
import { auth } from '../../../firebase-config';
import { onAuthStateChanged } from "firebase/auth";
import Dashboard from "../../Dashboard/Dashboard";

function Home() {
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    
    

    return (
        <div>
            {user ?
            (<Dashboard></Dashboard>) :
            (<div>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjTwo} />
            <Pricing />
            <HeroSection {...homeObjFour} />
            <Footer />
            </div>)}
        </div>
    );
}

export default Home
