import React from 'react';
import './Log.css';

const SignUp = () => {
    return(
        <div>
            <div className="main-body-container">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card card-signin my-5">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Sign Up</h5>
                                    <form className="form-signin">
                                        <div className="form-label-group">
                                        <input type="text" id="inputFName" className="form-control" placeholder="First Name" required autofocus />
                                        <label htmlFor="inputFName">First Name</label>
                                        </div>
                                        <div className="form-label-group">
                                        <input type="text" id="inputLName" className="form-control" placeholder="Last Name" required autofocus />
                                        <label htmlFor="inputLName">Last Name</label>
                                        </div>
                                        <div className="form-label-group">
                                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                                        <label htmlFor="inputEmail">Email address</label>
                                        </div>
                                        <div className="form-label-group">
                                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                                        <label htmlFor="inputPassword">Password</label>
                                        </div>
                                        <div className="form-label-group">
                                        <input type="password" id="ConfirmPassword" className="form-control" placeholder="Confirm Password" required />
                                        <label htmlFor="ConfirmPassword">Confirm Password</label>
                                        </div>
                                        <div className="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                                        </div>
                                        <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>       
            </div>
        </div>
    )
    
}

export default SignUp;