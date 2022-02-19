import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GrFingerPrint } from 'react-icons/gr';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
 
    return (
        <IconContext.Provider value={{ color: '#fff'}}>
        <div className="navbar">
            <div className="navbar-container container">
                <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    <GrFingerPrint className='navbar-icon' />
                    CARDX
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes/> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item" >
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Products' className="nav-links" onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className="nav-btn">
                        {button ? (
                            <Link to="/sign-up" className='btn-link'>
                                <Button buttonStyle='btn--outline'>SIGN UP</Button>
                            </Link>
                        ) : <Link to="/sign-up" className='btn-link'>
                                <Button buttonStyle='btn--outline'  onClick={closeMobileMenu}
                                        buttonSize='btn--mobile'>SIGN UP</Button>
                            </Link>}
                    </li>
                </ul>
            </div>
            
        </div>
        </IconContext.Provider>
    )
}

export default Navbar
