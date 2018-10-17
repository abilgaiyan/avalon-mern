import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './css/common.css';
import Search from "./Search";


class Header extends Component {
    renderHeader() {
        switch (this.props.auth) {
            case null:
                // console.log("Auth Value: ", this.props.auth)
                return;
            case false:
                // console.log("Auth Value: ", this.props.auth)
                return <li><a href="/auth/google"><i className="fa fa-sign-in fa-2x" aria-hidden="true"></i>
                    Log In</a></li>;
            default:
                // console.log("Auth Value: ", this.props.auth)
                return <li key="1"><a href="/api/logout"><i className="fa fa-sign-out fa-2x" aria-hidden="true"></i>
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
                            <form className="navbar-form navbar-left">
                                <div className="input-group">
                                    <Search />
                                    {/* <input type="text" className="form-control" placeholder="Search" name="search" /> */}
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
                                    <ul className="dropdown-menu text-center">
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
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
    };
}


export default connect(mapStateToProps)(Header);