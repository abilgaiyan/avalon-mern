import React, { Component } from "react";
import { connect } from "react-redux"

class CustomerSummary extends Component {
  render() {

    return (
      <div >
        <div className="row">
          <div className="col-sm-8">
            <p>
              {this.props.customerSummary.Name} <br />
              {this.props.customerSummary.city},{this.props.customerSummary.state}{" "}
              <br />
              {this.props.customerSummary.contactPersonName}
            </p>
            <p className="text_with_icon">
              <div className={this.props.customerSummary.websiteUrl ? '' : 'hide'}> <i className="fas fa-globe"></i> <a href={"//" + this.props.customerSummary.websiteUrl} target="_blank">{this.props.customerSummary.websiteUrl}</a> <br /></div>
              <div className={this.props.customerSummary.mobileNumber ? '' : 'hide'}><i className="fas fa-phone fa-flip-horizontal"></i> {this.props.customerSummary.mobileNumber}<br /></div>
              <div className={this.props.customerSummary.contactpersonEmail ? '' : 'hide'}><i className="fas fa-envelope"></i> {this.props.customerSummary.contactpersonEmail}</div>
            </p>
          </div>
          <div className="col-sm-4">
            <div className="logo_wraper">
              <img alt={this.props.customerSummary.Name}
                //src={this.props.customerSummary.logourl}
                src={this.props.customerSummary.logourl}
                className="img-responsive "
              />
            </div>
          </div>
        </div>
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
                  {this.props.customerSummary._buyinggroups === null || this.props.customerSummary._buyinggroups === undefined ? "" : this.props.customerSummary._buyinggroups.join(', ')}
                  {/* {this.props.customerSummary._buyinggroups.join(', ')} */}
                </td>
              </tr>
              <tr>
                <td>Website Plan:</td>
                <td align="right">
                  {/* {this.props.customerSummary._billingInfo === null ? "" : this.props.customerSummary._billingInfo._productPlan._productPlan} */}
                  {this.props.customerSummary._billingInfo === null || this.props.customerSummary._billingInfo === undefined ? "" : this.props.customerSummary._billingInfo._productPlan === undefined ? "" : this.props.customerSummary._billingInfo._productPlan._productPlan}
                </td>
              </tr>
              <tr>
                <td>Website Status:</td>
                <td align="right">
                  {this.props.customerSummary._avalonInfo === null || this.props.customerSummary._avalonInfo === undefined ? "" : this.props.customerSummary._avalonInfo._websitestatus === undefined ? "" : this.props.customerSummary._avalonInfo._websitestatus._websitestatus}
                </td>
              </tr>
              <tr>
                <td>ASHI Feed:</td>
                <td align="right">{this.props.customerSummary._productInfo === null || this.props.customerSummary._productInfo === undefined ? "" : this.props.customerSummary._productInfo._ashiProductStatus._ashiProductStatus}</td>
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
  return {
    customerSummary: state.customerForm,
    buyingGroup: state.buyingGroup
  };
}

//export default CustomerSummary;
export default connect(mapStateToProps)(CustomerSummary);
// connect()(SideNav);
//   mapStateToProps,
//   { fetchCustomerInfo }
