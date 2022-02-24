import React from 'react';
import Footer from '../Footer/Footer';
import './SignUp.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { GrFingerPrint } from 'react-icons/gr';
import { Link } from 'react-router-dom';


function SignUp() {
    return (
        <div>
            <div className="SignUpPage">
                <div className="row formoutline">
                    <div className="logosection">
                        <h1><strong>CARDX</strong></h1>
                        <h1><GrFingerPrint size="72" className="logo"/></h1>
                    </div>
                    <div className="signupsection">
                        <h3>Create Account</h3>
                        <Form>
                            <FormGroup>
                                <Label for="name">
                                Name
                                </Label>
                                <Input
                                id="name"
                                name="name"
                                placeholder="Enter your full name"
                                type="name"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="nmail">
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
                            <FormGroup>
                                <Label for="confirmPassword">
                                Confirm Password
                                </Label>
                                <Input
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Re-Enter your password"
                                type="confirmPassword"
                                />
                            </FormGroup>
                            <Button className="signupbutton" style={{display:'block'}} color="primary">
                                Sign Up
                            </Button>
                            <div style={{textAlign: 'center'}}>Already have an account?<Link to='/'>Login Here</Link></div>
                        </Form>
                    </div>
                </div>
            </div>
                        <Footer />
                    </div>
    );
}

export default SignUp;
