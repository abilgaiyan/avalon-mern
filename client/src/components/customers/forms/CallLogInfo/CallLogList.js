import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../actions";
import { Link, withRouter } from "react-router-dom";
import moment from 'moment';
// import { fetchCustomers } from "../../actions";
// import { Link } from "react-router-dom";
import CallLogInfoForm from "./CallLogInfoForm";
import CallLogPopUp from "./callLogPopUp";

class CallLogList extends Component {


  createListItem() {
    return this.props.callloginfoList.map((list) => {
      return (
        <tr key={list._id}
          onClick={() => this.props.SelectCallLog(list)}>
          <td>{moment(list.previousCallDate).format('DD MMM YYYY')}</td>
          <td>{list._previousCallType._previouscalltype === "Incoming" ? <i className="fa fa-sign-in" aria-hidden="true"></i> : <i className="fa fa-sign-out" aria-hidden="true"></i>}</td>
          <td>{list.callPerson}</td>
          <td>{list.avalonExcutive}</td>
          <td>{list.followupcallTime === undefined ? '' : moment(list.followupcallTime).format('hh:mm A')}</td>
          <td><a data-toggle="modal" data-target="#callLogPopupModal"><i className="fa fa-search"></i></a></td>
          {/* <td><i className="fa fa-search"></i></td> */}
        </tr>
      )
    })
  }

  render() {
    if (!this.props.callloginfoList) {
      // console.clear();
      // console.log(this.props.productPlanDropdown[0].planName);
      return (<div>Loading...</div>)
    }
    else {
      return (
        <div >

          <div className=" icon_well">
            <button type="button" className="btn btn-primary pull-right" data-toggle="modal" data-target="#callLogModal"><i className="fa fa-plus-square"></i>Add</button>
            <div className="clearfix"></div>
            <CallLogInfoForm />
            <CallLogPopUp />
          </div>




          <div className="clearfix"></div>
          <table className="table table-bordered table_list">
            <thead>
              <tr className="active">
                <th>Prev. Call Date</th>
                <th>Prev. Call Type</th>
                <th>Call Person</th>
                <th>Avalon Exec.</th>
                <th>Followup Time</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.createListItem()}
            </tbody>
          </table>
          {/* test disgn */}
        </div>
        //   </div>
      );
    }

  }
}

function mapStateToProps(state) {
  // console.clear();
  // console.log(state.callloginfoListReducer);
  return {
    callloginfoList: state.callloginfoListReducer
  };
}

export default connect(mapStateToProps, actions)(CallLogList);
// function mapStateToProps({ customers }) {
//   // console.log({customers})
//   return { customers };
// }

// export default connect(
//   mapStateToProps,
//   { fetchCustomers }
// )(CallLogList);
