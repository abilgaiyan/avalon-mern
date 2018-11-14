import React, { Component } from "react";
import { connect } from "react-redux"

class CustomerSummary extends Component {
  render() {
    return (

      <div >
        <img
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
                  {this.props.customerSummary.avaloncustomer}
                </td>
              </tr>
              <tr>
                <td>Buying Group:</td>
                <td align="right">
                  {this.props.customerSummary.buyinggroup}
                </td>
              </tr>
              <tr>
                <td>Website Plan:</td>
                <td align="right">
                  {this.props.customerSummary.websiteplan}
                </td>
              </tr>
              <tr>
                <td>Website Status:</td>
                <td align="right">
                  {this.props.customerSummary.websitestatus}
                </td>
              </tr>
              <tr>
                <td>ASHI Feed:</td>
                <td align="right">{this.props.customerSummary.ashifeed}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  // console.clear();
  // console.log("state :", state.customerForm);
  return { customerSummary: state.customerForm };
}

//export default CustomerSummary;
export default connect(mapStateToProps)(CustomerSummary);
// connect()(SideNav);
//   mapStateToProps,
//   { fetchCustomerInfo }
