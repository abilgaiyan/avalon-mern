import React, { Component } from "react";
import { connect } from "react-redux"

class CustomerSummary extends Component {

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  render() {
    if (!this.props.customerSummary.logourl) {
      return (<div>Loading...</div>)
    }
    else {
      return (
        <div >
          <img
            //src={this.props.customerSummary.logourl}
            src={this.props.customerSummary.logourl}
            className="img-responsive pull-right"
          />
          <p>
            {this.props.customerSummary.Name} <br />
            {this.props.customerSummary.city},{this.props.customerSummary.state}{" "}
            <br />
            {this.props.customerSummary.contactPersonName}
          </p>
          <div className="info-section">
            <table className="table table-info no-margin">
              <tbody>
                <tr>
                  <td>Avalon Customer:</td>
                  <td align="right">
                    {this.props.customerSummary.customerType === "Customer" ? "Yes" : "No"}
                  </td>
                </tr>
                <tr>
                  <td>Buying Group:</td>
                  <td align="right">
                    {this.props.customerSummary._buyinggroups.join(', ')}
                  </td>
                </tr>
                <tr>
                  <td>Website Plan:</td>
                  <td align="right">
                    {this.props.customerSummary._billingInfo === null ? "" : this.props.customerSummary._billingInfo._productPlan._productPlan}
                  </td>
                </tr>
                <tr>
                  <td>Website Status:</td>
                  <td align="right">
                    {this.props.customerSummary._avalonInfo === null ? "" : this.props.customerSummary._avalonInfo._websitestatus._websitestatus}
                  </td>
                </tr>
                <tr>
                  <td>ASHI Feed:</td>
                  <td align="right">{this.props.customerSummary._productInfo === null ? "" : this.props.customerSummary._productInfo._ashiProductStatus._ashiProductStatus}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  // console.clear();
  // console.log("state :", state.buyingGroup);
  return {
    customerSummary: state.customerForm,
  };
}

//export default CustomerSummary;
export default connect(mapStateToProps)(CustomerSummary);
// connect()(SideNav);
//   mapStateToProps,
//   { fetchCustomerInfo }
