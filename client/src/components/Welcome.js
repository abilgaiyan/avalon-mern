import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './WelcomPage.css'

class Welcome extends Component {

    renderContent() {
        console.log('val', this.props.auth)
        switch (this.props.auth) {
            case null:
                console.log("Auth Value: ", this.props.auth)
                return;
            case false:
                // console.log("Auth Value: ", this.props.auth)
                return <a href="/auth/google" className="gmail_wraper"><span className="gmail_item" >Login with Google</span></a>;
            default:
                // console.log("Auth Value: ", this.props.auth)
                return <a key="1" href="/api/logout"><span className="" >Logout</span></a>
        }
    }

    render() {
        return (
            <div className="row LoginForm">
                <div className="container">

                    <div className="login-form">
                        <div className="main-div">
                            {/* <div className="panel">
                                <h2>Admin Login</h2>
                                <p>Please enter your email and password</p>
                            </div> */}
                            <form id="Login">
                                {/* <div className="form-group">
                                    <input type="email" className="form-control" id="inputEmail" placeholder="Email Address" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                                </div>
                                <div className="forgot">
                                    <a href="reset.html">Forgot password?</a>
                                </div> */}
                                {/* <button type="submit" className="btn btn-primary">Login</button> */}
                                {this.renderContent()}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { auth: state.auth };
}


export default connect(mapStateToProps)(Welcome);
