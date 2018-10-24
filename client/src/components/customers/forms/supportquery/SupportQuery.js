import React, { Component } from "react";

class SupportQuery extends Component {
  render() {
    return (
          <div className="info-section">
            <table className="table table-info no-margin">
              <tbody>
                <tr>
                  <td>Avg Monthly Queries:</td>
                  <td align="right">
                    {this.props.supportQueryData.responsivestatus}
                  </td>
                </tr>
                <tr>
                  <td>Avg Yearly Queries:</td>
                  <td align="right">
                    {this.props.supportQueryData.websitedesignupdatedate}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    );
  }
}

export default SupportQuery;
