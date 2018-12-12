import React from 'react';
import { Link } from 'react-router-dom';


function NotFound(props) {
    return (
        <div className="ErrorPage">
            <div className="Errorwraper">
                {/* <img src={require('../images/logo.png')} className="img-responsive margin-auto" /> */}
            
            <div id="MainMid" style={{margin: "15px auto"}}>
                <div className="MiddleContent text-center">
                    <h1>Oops!</h1>
                    <h3>Looking for something?</h3>
                    <p>We are sorry. The page you are trying to reach does not exist, or has been removed. </p>
                    <Link to="/customers" className="btn btn_home"> Go to Home Page</Link>
                    
                </div>
            </div>
            </div>
        </div>

    )
}

export default NotFound;

