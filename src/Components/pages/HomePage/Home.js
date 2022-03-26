import {onAuthStateChanged} from "firebase/auth";
import React, {useState} from 'react'

import {auth} from '../../../firebase-config';
import Dashboard from "../../Dashboard/Dashboard";
import Footer from '../Footer/Footer'
import HeroSection from '../HeroSection'
import Pricing from '../Pricing';

import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data'

function Home() {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => { setUser(currentUser); });

    return (
        <div>
            {
    user
        ? (<Dashboard>
           </Dashboard>) :
            (<div>
            <HeroSection {...homeObjOne} />
           <HeroSection {
             ...homeObjThree
           } />
            <HeroSection {...homeObjTwo} /><Pricing />
           <HeroSection { ...homeObjFour } />
            <Footer />
           </div>)}
        </div>);
}

export default Home
