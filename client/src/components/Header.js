import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {

    renderHeader() {
        switch (this.props.auth) {
            case null:
                // console.log("Auth Value: ", this.props.auth)
                return;
            case false:
                // console.log("Auth Value: ", this.props.auth)
                return <li><a href="/auth/google"><i class="fa fa-sign-in fa-2x" aria-hidden="true"></i>
                    Log In</a></li>;
            default:
                // console.log("Auth Value: ", this.props.auth)
                return <li key="1"><a href="/api/logout"><i class="fa fa-sign-out fa-2x" aria-hidden="true"></i>
                    Log Out</a></li>
        }
    }
    render() {
        return (
            <div className="content-heading clearfix ">
                <nav className="navbar navbar-default navbar-fixed-top ">
                    <div className="container-fluid">
                        <div className="navbar-header col-sm-4">
                            <a className="navbar-brand" href="#">Welcome Ajay Jha</a>
                        </div>
                        <div className="col-sm-4">
                            <form className="navbar-form navbar-left" action="/action_page.php">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search" name="search" />
                                    <div className="input-group-btn">
                                        <button className="btn btn-default" type="submit">
                                            <i className="glyphicon glyphicon-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-sm-4 text-right">
                            <button className="btn btn-success navbar-btn">ADD NEW CUSTOMER</button>
                            <ul className="nav navbar-nav navbar-right user_wraper">
                                <li className="dropdown">
                                    <a className="user_item dropdown-toggle" data-toggle="dropdown">
                                        <span className="glyphicon glyphicon-user"></span>
                                    </a>
                                    <ul class="dropdown-menu text-center">
                                        {this.renderHeader()}
                                    </ul>
                                </li>
                                {/* <li>{this.renderHeader()}</li> */}
                            </ul>


                        </div>
                    </div>
                </nav>
            </div>



        );
    }
    // renderContent() {
    //     console.log('auth1235436', this.props.auth);
    //     switch (this.props.auth) {
    //         case null:
    //             return [
    //                 <li key={4}><Link to="">You</Link></li>,
    //                 <li key={5}><Link to="/customerstories">Customer Stories</Link></li>,
    //                 <li key={6}><Link to="">Agencies</Link></li>,
    //                 <li key={7}><Link to="">Work for Us!</Link></li>,
    //                 <li key={8}><Link to="/aboutus">About Us</Link></li>,
    //                 <li key={9}><Link to="/contactus/new">Contact Us</Link></li>
    //                 // <li><a href="/auth/google">Login With Google</a></li>
    //             ]
    //         case false:
    //             // return <li><a href="/auth/google">Login With Google</a></li>   
    //             return [
    //                 <li key={4}><Link to="">You</Link></li>,
    //                 <li key={5}><Link to="/customerstories">Customer Stories</Link></li>,
    //                 <li key={6}><Link to="">Agencies</Link></li>,
    //                 <li key={7}><Link to="/workforus">Work for Us!</Link></li>,
    //                 <li key={8}><Link to="/aboutus">About Us</Link></li>,
    //                 <li key={9}><Link to="/contactus/new">Contact Us</Link></li>
    //                 // <li><a href="/auth/google">Login With Google</a></li>
    //             ]
    //         default:
    //             return [
    //                 <li key={1}><Payments /></li>,
    //                 <li key={3} style={{ margin: '0 10px' }}>
    //                     Credits: {this.props.auth.credits}
    //                 </li>,
    //                 <li key={2}><a href="/api/logout">Logout</a></li>,

    //             ]
    //     }
    // }
    // render() {
    //     //  console.log(this.props.auth);
    //     console.log('auth', this.props.auth);

    //     return (
    //         //   <nav>
    //         //   <div classNameName="nav-wrapper">
    //         //     <Link to={this.props.auth ? "/surveys" : "/"} classNameName="left brand-logo">Avalon</Link>
    //         //     <ul classNameName="right">
    //         //      {this.renderContent()}
    //         //     </ul>
    //         //   </div>
    //         // </nav>

    //         <div className="tt-header clearfix">
    //             <div className="container-fluid">
    //                 <div className="col-sm-3 wow fadeInLeft">
    //                     <Link to="/"><img src="../../../img/logo.png" alt="" /></Link>
    //                 </div>
    //                 <div className="col-sm-9">
    //                     <nav className="navbar navbar-default">
    //                         <div className="">
    //                             <div className="navbar-header">
    //                                 <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
    //                                     <span className="sr-only">Toggle navigation</span>
    //                                     <span className="icon-bar"></span>
    //                                     <span className="icon-bar"></span>
    //                                     <span className="icon-bar"></span>
    //                                 </button>

    //                             </div>
    //                             <div id="navbar" className="navbar-collapse collapse col-xs-12 pull-right  wow fadeInRight" aria-expanded="false" style={{ height: "1px" }}>
    //                                 <ul className="nav navbar-nav">
    //                                     <li key={8}><Link to="/">Home</Link></li>
    //                                     <li key={4}><Link to="/you">You</Link></li>
    //                                     <li key={5}><Link to="/customerstories">Customer Stories</Link></li>
    //                                     <li key={6}><Link to="/agencies">Agency</Link></li>
    //                                     <li key={7}><Link to="/Workforus">Work for Us!</Link></li>
    //                                     {/* <li key={8}><Link to="/aboutus">About Us</Link></li> */}
    //                                     <li key={9}><Link to="/contactus/new">Contact Us</Link></li>

    //                                     {this.props.auth ? <li key={10}><Link to="/story/new">Story</Link></li> : ""}
    //                                     {this.props.auth ? <li key={11}><Link to="/api/logout">Log Out</Link></li> : <li key={12}><a href="/auth/google">Login</a></li>}
    //                                     <li key={13}><Link to="/emailForm">Email Form</Link></li>

    //                                 </ul>

    //                             </div>
    //                         </div>
    //                     </nav>


    //                 </div>



    //             </div>
    //         </div>

    //     );
    // }

}

// function mapStateToProps(state){
//   return { auth: state.auth};
// }
function mapStateToProps(state) {
    return { auth: state.auth };
}


export default connect(mapStateToProps)(Header);