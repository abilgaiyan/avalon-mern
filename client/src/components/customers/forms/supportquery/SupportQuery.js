import React, { Component } from "react";
import { connect } from "react-redux";

// import QueryForm from "./queryForm";
class SupportQuery extends Component {
  render() {
    let emailCount = 0;
    if (!this.props.communicationLog) {
      return "Loading...";
    }
    else {
      //emailCount = this.props.communicationLog.ctype;
    }
    return (
      // <div className="info-section">
      //   <table className="table table-info no-margin">
      //     <tbody>
      //       <tr>
      //         <td>Avg Monthly Queries:</td>
      //         <td align="right">
      //           {this.props.supportQueryData.responsivestatus}
      //         </td>
      //       </tr>
      //       <tr>
      //         <td>Avg Yearly Queries:</td>
      //         <td align="right">
      //           {this.props.supportQueryData.websitedesignupdatedate}
      //         </td>
      //       </tr>
      //     </tbody>
      //   </table>
      // </div>
      <div className=" icon_well">
        {/* <button type="button" className="btn btn-primary pull-right" data-toggle="modal" data-target="#queryLogModal"><i className="fa fa-plus-square"></i>Add</button> */}
        <div className="clearfix"></div>
        {/* <QueryForm /> */}

        <label>Email Count:{emailCount}</label>
        <label>Comment Count:</label>
        <label>Call Count:</label>
      </div>
    );
  }
}

// export default SupportQuery;


function mapStateToProps(state) {
  console.clear();
  console.log(state.communicationLog);
  return {
    communicationLog: state.communicationLog,
  };
}

export default connect(
  mapStateToProps
)(SupportQuery);

