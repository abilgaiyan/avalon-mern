import React, { Component } from "react";

class TargetAreasForm extends Component {
  render() {
    return (
     
          <div className="info-section">
            <table class="table table-info no-margin">
              <tbody>
                <tr>
                  <td>Responsive Status:</td>
                  <td align="right">
                    {this.props.targetAreasData.responsivestatus}
                  </td>
                </tr>
                <tr>
                  <td>Website Design Update Date:</td>
                  <td align="right">
                    {this.props.targetAreasData.websitedesignupdatedate}
                  </td>
                </tr>
                <tr>
                  <td>JewelExchange:</td>
                  <td align="right">
                    {this.props.targetAreasData.jewelexchange}
                  </td>
                </tr>
                <tr>
                  <td>JewelExchange Plan:</td>
                  <td align="right">
                    {this.props.targetAreasData.jewelexchangeplan}
                  </td>
                </tr>
                <tr>
                  <td>SSL/HTTPS:</td>
                  <td align="right">{this.props.targetAreasData.sslhttps}</td>
                </tr>
                <tr>
                  <td>Add on Module Deployed:</td>
                  <td align="right">
                    {this.props.targetAreasData.addonmoduledeployed}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        
    );
  }
}

export default TargetAreasForm;
