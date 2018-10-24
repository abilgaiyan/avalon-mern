import React, { Component } from "react";

class CustomerSummary extends Component {
  render() {
    return (
      <div id="Summary" className="panel-collapse collapse in">
        <div className="panel-body">
          <img
            src={this.props.customerSummary.logourl}
            className="img-responsive pull-right"
          />
          <p>
            {this.props.customerSummary.customerName} <br />
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
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   //console.log("state :", state);
//   return { customerSummary: state.customersummary };
// }

export default CustomerSummary;
// connect()(SideNav);
//   mapStateToProps,
//   { fetchCustomerInfo }
