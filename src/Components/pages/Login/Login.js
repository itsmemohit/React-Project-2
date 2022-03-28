import "./Login.css";
import { LockClosedIcon } from '@heroicons/react/solid'
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { GrFingerPrint } from "react-icons/gr";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import { auth } from "../../../firebase-config";
import Dashboard from "../../Dashboard/Dashboard";
import Footer from "../Footer/Footer";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

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

  return (
    <div>
      {user ? (
        <Dashboard />
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
            </div>
            <div className="loginsection">
              <h3>Enter your details</h3>
              <Form>
                <FormGroup>
                  <Label for="email"></Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    type="email"
                    onChange={(event) => {
                      setLoginEmail(event.target.value);
                    }}
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
        // <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        //   <div className="max-w-md w-full space-y-8">
        //     <div>

        //       <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        //     </div>
        //     <form className="mt-8 space-y-6">
        //       <input type="hidden" name="remember" defaultValue="true" />
        //       <div className="rounded-md shadow-sm -space-y-px">
        //         <div>
        //           <label htmlFor="email" className="sr-only">
        //             Email address
        //           </label>
        //           <input
        //             id="email"
        //             name="email"
        //             type="email"
        //             autoComplete="email"
        //             required
        //             className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        //             placeholder="Email address"
        //             onChange={(event) => {
        //               setLoginEmail(event.target.value);
        //             }}
        //           />
        //         </div>
        //         <div>
        //           <label htmlFor="password" className="sr-only">
        //             Password
        //           </label>
        //           <input
        //             id="password"
        //             name="password"
        //             type="password"
        //             autoComplete="current-password"
        //             required
        //             className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        //             placeholder="Password"
        //             onChange={(event) => {
        //               setLoginPassword(event.target.value);
        //             }}
        //           />
        //         </div>
        //       </div>

        //       <div className="flex items-center justify-between">
        //         <div className="text-sm">
        //           <p className="font-medium text-indigo-600 hover:text-indigo-500">
        //             <Link to="/sign-up">Don't have an account?</Link>
        //           </p>
        //         </div>
        //       </div>

        //       <div>
        //         <button
        //           type="submit"
        //           className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        //           onClick={login}
        //         >
        //           <span className="absolute left-0 inset-y-0 flex items-center pl-3">
        //             <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
        //           </span>
        //           Sign in
        //         </button>
        //       </div>
        //     </form>
        //   </div>
        // </div>
      )}

      <Footer />
    </div>
  );
}

export default Login;
