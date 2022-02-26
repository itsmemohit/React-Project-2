import React from 'react';
import Footer from '../Footer/Footer';
import './Login.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { GrFingerPrint } from 'react-icons/gr';
import { Link } from 'react-router-dom';


function Login() {
    return (
        <div>
            <div className="LoginPage">
                <div className="row formoutline">
                    <div className="logosection">
                        <h1><strong>CARDX</strong></h1>
                        <h1><GrFingerPrint size="72" className="logo"/></h1>
                    </div>
                    <div className="loginsection">
                        <h3>Enter your details</h3>
                        <Form>
                            <FormGroup>
                                <Label for="email">
                                Email
                                </Label>
                                <Input
                                id="email"
                                name="email"
                                placeholder="Enter your email address"
                                type="email"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">
                                    Password
                                    </Label>
                                    <Input
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    type="password"
                                    />
                            </FormGroup>
                            <Button className="loginbutton" style={{display:'block'}} color="primary">
                                Login
                            </Button>
                            <div style={{textAlign: 'center'}}>Don't have an account?<Link to='/sign-up'>Sign up Here</Link></div>
                        </Form>
                    </div>
                </div>
            </div>
                        <Footer />
                    </div>
    );
}

export default Login;
