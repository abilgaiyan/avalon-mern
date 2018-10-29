import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Dashboard from "./customers/Dashboard";
import Footer from "./Footer";
import CustomerDetails from "./customers/CustomerDetails";
import LeftSideBar from "./LeftSideBar";


class WithHeader extends Component {
    render() {
        //console.log(this.props.auth !== false);
        return (
            <BrowserRouter>
                <div>
                    {/* Main Wraper Start Here */}
                    <div id="wrapper" className="dashboard_wraper container-fluid">
                        <div className="row">
                            <LeftSideBar />
                            <div className="main_containt col-sm-12 col-md-10">

                                <Header />
                                <Route exact={true} path="/customers" component={Dashboard} />
                                <Route exact={true} path="/customers/:customerId" component={CustomerDetails} />

                                {/* <Redirect push to="/customers" /> */}

                            </div>
                            <Footer />
                        </div>
                    </div>
                    {/* Main Wraper End Here */}

                </div>
            </BrowserRouter>
        );
    }
}


export default WithHeader;
