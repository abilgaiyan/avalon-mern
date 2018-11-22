import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import LeftSideBar from "./LeftSideBar";
import Dashboard from "./customers/Dashboard";
import CustomerDetails from "./customers/CustomerDetails";



class MainWraper extends Component {
  constructor(props) {
    super(props);
    this.state = { Toggle: false }
    this.LeftsidebarToggle = this.LeftsidebarToggle.bind(this);
  }

  LeftsidebarToggle = () => {
    this.setState(state => ({
      Toggle: !this.state.Toggle
    }));
  }

  render() {
    return (
      <div id="wrapper" className={"dashboard_wraper container-fluid" + (this.state.Toggle ? " toggle_menu" : "")}>
        <div className="row">
          {!this.props.leftChoice ? null : <LeftSideBar onPress={this.LeftsidebarToggle} />}
          <div className={"main_containt col-sm-12" + (!this.props.leftChoice || this.state.Toggle ? " col-md-12 full" : " col-md-10")}>

            <Header />
            <Route exact={true} path={this.props.path} component={this.props.content} />
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

// function MainWraper(props) {
//   return (
//     <div id="wrapper" className="dashboard_wraper container-fluid">
//       <div className="row">
//         {!props.leftChoice ? null : <LeftSideBar />}
//         <button type="button" onClick={LeftsidebarToggle}>Toggle Sidebar</button>
//         <div className={"main_containt col-sm-12" + (!props.leftChoice ? " col-md-12 full" : " col-md-10")}>
//           <Header />
//           <Route exact={true} path={props.path} component={props.content} />
//         </div>
//         <Footer />
//       </div>
//     </div>
//   )
// }

export function CustomerList() {
  return (
    <MainWraper content={Dashboard} path="/customers/" leftChoice={false} />
  )
}
export function CustomerDetailsWraper() {
  return (
    <MainWraper content={CustomerDetails} path="/customers/:customerId" leftChoice={true} />
  )
}


export default MainWraper;
