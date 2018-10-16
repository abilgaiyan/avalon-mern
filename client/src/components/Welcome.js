import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Welcome extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                // console.log("Auth Value: ", this.props.auth)
                return;
            case false:
                // console.log("Auth Value: ", this.props.auth)
                return <li><a href="/auth/google" style={{ display: 'inline-block' }}><img src={require('../images/google_button.png')} className="img-responsive" style={{ margin: 'auto 20px 30px' }} /></a></li>;
            default:
                // console.log("Auth Value: ", this.props.auth)
                return <li key="1"><a href="/api/logout">Logout</a></li>
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-6 col-sm-offset-3 well">
                    <ul className="right list-unstyled text-center">
                        {this.renderContent()}
                        <li><a href="/auth/google" style={{ display: 'inline-block' }}><img src={require('../images/avalonjpg.jpg')} className="img-responsive" /></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { auth: state.auth };
}


export default connect(mapStateToProps)(Welcome);
