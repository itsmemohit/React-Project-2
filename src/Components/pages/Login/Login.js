import "./Login.css";

import {onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import React from "react";
import {useState} from "react";
import {GrFingerPrint} from "react-icons/gr";
import {Link} from "react-router-dom";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

import {auth} from "../../../firebase-config";
import Dashboard from "../../Dashboard/Dashboard";
import Footer from "../Footer/Footer";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => { setUser(currentUser); });

  const login = async () => {
    try {
      const user =
          await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user);
      alert(auth.currentUser.email);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {
    user
        ? (<Dashboard>
           </Dashboard>
      ) : (
        <div className="LoginPage">
          <div className="row formoutline">
            <div className="logosection">
              <h1>
                <strong>CARDX</strong>
           </h1>
              <h1>
                <GrFingerPrint size="72" className="logo" />
           </h1>
            </div><div className = "loginsection">
           <h3>Enter your details<
               /h3>
              <Form>
                <FormGroup>
                  <Label for="email"></Label><
           Input
    id = "email"
    name = "email"
    placeholder = "Enter your email address"
    type = "email"
                    onChange={
      (event) => { setLoginEmail(event.target.value); }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password"></Label>
                  <Input
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    type="password"
                    onChange={(event) => {
                      setLoginPassword(event.target.value);
                    }}
                  />
                </FormGroup>
                <Button
                  className="loginbutton"
                  style={{ display: "block" }}
                  color="primary"
                  onClick={login}
                >
                  Login
                </Button>
                <div
                  style={{
      textAlign: "center",
                  }}
                >
                  Don 't have an account?
                  <Link to="/sign-up">Sign up Here</Link>
                </div>
              </Form>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Login;
