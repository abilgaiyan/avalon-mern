import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import LeftSideBar from "./LeftSideBar";
import Dashboard from "./customers/Dashboard";
import CustomerDetails from "./customers/CustomerDetails";

function MainWraper(props){
    return(
      <div id="wrapper" className="dashboard_wraper container-fluid">
        <div className="row">
        {!props.leftChoice ? null : <LeftSideBar />}
            <div className= {!props.leftChoice ? "main_containt col-sm-12 col-md-12 full" : "main_containt col-sm-12 col-md-10"}>
                <Header />
                <Route exact={true} path={props.path} component={props.content} />
            </div>
            <Footer />
        </div>
      </div>
      )
  }
  
  export function CustomerList(){
    return(
      <MainWraper content={Dashboard} path="/customers/"  leftChoice = {false}/>
      )
  }
  export function CustomerDetailsWraper(){
    return(
      <MainWraper content={CustomerDetails} path="/customers/:customerId" leftChoice = {true}/>
      )
  }


export default MainWraper;
