import React, { Component } from 'react';
import { connect } from 'react-redux';
import Payments from './Payments';
import { Link } from 'react-router-dom';
import  './Header.css';

class Header extends Component {

    renderContent() {
        console.log('auth', this.props.auth);
        switch (this.props.auth) {
            case null:
                return [
                    <li key={4}><Link to="">You</Link></li>,
                    <li key={5}><Link to="/customerstories">Customer Stories</Link></li>,
                    <li key={6}><Link to="">Agencies</Link></li>,
                    <li key={7}><Link to="">Work for Us!</Link></li>,
                    <li key={8}><Link to="/aboutus">About Us</Link></li>,
                    <li key={9}><Link to="/contactus/new">Contact Us</Link></li>
                    // <li><a href="/auth/google">Login With Google</a></li>
                ]
            case false:
                // return <li><a href="/auth/google">Login With Google</a></li>   
                return [
                    <li key={4}><Link to="">You</Link></li>,
                    <li key={5}><Link to="/customerstories">Customer Stories</Link></li>,
                    <li key={6}><Link to="">Agencies</Link></li>,
                    <li key={7}><Link to="/workforus">Work for Us!</Link></li>,
                    <li key={8}><Link to="/aboutus">About Us</Link></li>,
                    <li key={9}><Link to="/contactus/new">Contact Us</Link></li>
                    // <li><a href="/auth/google">Login With Google</a></li>
                ]
            default:
                return [
                    <li key={1}><Payments /></li>,
                    <li key={3} style={{ margin: '0 10px' }}>
                        Credits: {this.props.auth.credits}
                    </li>,
                    <li key={2}><a href="/api/logout">Logout</a></li>,

                ]
        }
    }
    render() {
        //  console.log(this.props.auth);
        console.log('auth', this.props.auth);

        return (
            //   <nav>
            //   <div classNameName="nav-wrapper">
            //     <Link to={this.props.auth ? "/surveys" : "/"} classNameName="left brand-logo">Avalon</Link>
            //     <ul classNameName="right">
            //      {this.renderContent()}
            //     </ul>
            //   </div>
            // </nav>

            <div className="tt-header clearfix">
                <div className="container-fluid">
                    <div className="col-sm-3 wow fadeInLeft">
                        <Link to="/"><img src="../../../img/logo.png" alt="" /></Link>
                    </div>
                    <div className="col-sm-9">
                        <nav className="navbar navbar-default">
                            <div className="">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>

                                </div>
                                <div id="navbar" className="navbar-collapse collapse col-xs-12 pull-right  wow fadeInRight" aria-expanded="false" style={{ height: "1px" }}>
                                    <ul className="nav navbar-nav">
                                        <li key={8}><Link to="/">Home</Link></li>
                                        <li key={4}><Link to="/you">You</Link></li>
                                        <li key={5}><Link to="/customerstories">Customer Stories</Link></li>
                                        <li key={6}><Link to="/agencies">Agency</Link></li>
                                        <li key={7}><Link to="/Workforus">Work for Us!</Link></li>
                                        {/* <li key={8}><Link to="/aboutus">About Us</Link></li> */}
                                        <li key={9}><Link to="/contactus/new">Contact Us</Link></li>

                                        {this.props.auth ? <li key={10}><Link to="/story/new">Story</Link></li> : ""}
                                        {this.props.auth ? <li key={11}><Link to="/api/logout">Log Out</Link></li> : <li key={12}><a href="/auth/google">Login</a></li>}
                                        <li key={12}><Link to="/emailForm">Email Form</Link></li>

                                    </ul>

                                </div>
                            </div>
                        </nav>


                    </div>



                </div>
            </div>

        );
    }

}

// function mapStateToProps(state){
//   return { auth: state.auth};
// }
function mapStateToProps(state) {
    return { auth: state.auth };
}


export default connect(mapStateToProps)(Header);