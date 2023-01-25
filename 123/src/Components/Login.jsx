import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import '../Styles/Login.css'
import axios from "axios";
import AuthService from "../Services/auth-service";

const Login = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [passwordError, setpasswordError] = useState("");
    const [emailError, setemailError] = useState("");
    const [notify, setNotify] = useState({variant: "", text: ""})

    const handleValidation = (event) => {
        let formIsValid = true;

        if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            formIsValid = false;
            setemailError("Email Not Valid");
            return false;
        } else {
            setemailError("");
            formIsValid = true;
        }

        return formIsValid;
    };

    const loginSubmit = (e) => {
        setNotify({variant: "", text: ""})
        e.preventDefault();
         if (handleValidation()){
            AuthService.login(email,password).then(res => {
                if(res.data.Status === 0){
                    setNotify({variant:"success", text:"Success"})
                }
                else{
                    setNotify({variant:"danger", text:res.data.ResultMessage})
                }
            })
         }
    };

    return (
        <div className="container">
            <div className="row d-flex justify-content-center form_wrapper">
                <div className="col-md-4 align-middle form">
                    {
                        notify ?
                            <Alert variant={notify.variant}>
                                {notify.text}
                            </Alert> : false
                    }
                    <form id="loginform" onSubmit={loginSubmit}>
                        <div className="form-group">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="EmailInput"
                                name="EmailInput"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                onChange={(event) => setEmail(event.target.value)}
                            />
                            <small id="emailHelp" className="text-danger form-text">
                                {emailError}
                            </small>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                onChange={(event) => setPassword(event.target.value)}
                            />
                            <small id="passworderror" className="text-danger form-text">
                                {passwordError}
                            </small>
                        </div>
                        <div className="form-group form-check">

                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;