import "./Navbar.css";

import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { MdFingerprint } from "react-icons/md";
import { Link } from "react-router-dom";

import { auth } from "../../firebase-config";

import { Button } from "./Button";

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
    window.addEventListener("resize", showButton);
    return () => window.removeEventListener("resize", showButton);
  }, []);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    console.log("I'm called", currentUser);
    setUser(currentUser);
  });

  console.log(auth.currentUser, auth);
  var name = "Hey!, " + auth.currentUser?.email;

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      alert(auth.currentUser.email);
    } catch (error) {
      console.log(error.message);
    }
  };
  const logout = async () => {
    await signOut(auth);
  };

  // if(auth.currentUser)
  // navigate('/home');
  return (
    <>
      <IconContext.Provider
        value={{
          color: "#fff",
        }}
      >
        <nav className="navbar">
          {!user ? (
            <div className="navbar-container container">
              <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                <MdFingerprint className="navbar-icon" />
                <Link className="nav-item">CARDX</Link>
              </Link>

              <div className="menu-icon" onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </div>
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/services"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    {" "}
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/products"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Products
                  </Link>
                </li>
                <li className="nav-btn">
                  {button ? (
                    <Link to="/sign-up" className="btn-link">
                      <Button buttonStyle="btn--outline">SIGN UP</Button>
                    </Link>
                  ) : (
                    <Link to="/sign-up" className="btn-link">
                      <Button
                        buttonStyle="btn--outline"
                        buttonSize="btn--mobile"
                        onClick={closeMobileMenu}
                      >
                        SIGN UP
                      </Button>
                    </Link>
                  )}
                </li>

                <li className="nav-btn">
                  {button ? (
                    <Link to="/login" className="btn-link">
                      <Button buttonStyle="btn--outline">LOGIN</Button>
                    </Link>
                  ) : (
                    <Link to="/login" className="btn-link">
                      <Button
                        buttonStyle="btn--outline"
                        onClick={closeMobileMenu}
                        buttonSize="btn--mobile"
                      >
                        LOGIN
                      </Button>
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          ) : (
            <div className="navbar-container container">
              <div className="nav-btn">
                {button ? (
                  <Link to="/" className="btn-link">
                    <Button onClick={logout} buttonStyle="btn--outline">
                      LOGOUT
                    </Button>
                  </Link>
                ) : (
                  <Link to="/" className="btn-link">
                    <Button
                      buttonStyle="btn--outline"
                      onClick={closeMobileMenu}
                      buttonSize="btn--mobile"
                    >
                      LOGOUT
                    </Button>
                  </Link>
                )}
              </div>

              <div className="greeting" style={{ color: "white" }}>
                {name}
              </div>
            </div>
          )}
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
