import React, { Component } from "react";
// import { connect } from "react-redux";
// import { fetchCustomers } from "../../actions";
// import { Link } from "react-router-dom";

class CallLogList extends Component {
  //   componentDidMount() {
  //     this.props.fetchCallLog();
  //     // console.log(this.props.fetchCustomers());
  //   }

  //   renderCallLog() {
  // if (!this.props.customers) return;
  //console.log(this.props.fetchCustomers())
  // return this.props.customers.map(customer => {
  //   return (
  // <div key={customer._id} className="row list-group-item">
  //     <div className="col-sm-12"> <div className="col-sm-8">
  //         <p className="card-title">{customer.jewelsoftId}</p>
  //         {customer.customerName}
  //     </div>
  //         <div className="col-sm-4 card-link">
  //             <Link className="alink" to={'customers/' + customer._id}>Go To Details</Link>
  //         </div>
  //     </div>
  //     {/* }} */}
  // </div>
  // });
  // }
  render() {
    return (
      <div >
        {/* test disgn */}
        <a href="#" className="pull-right icon_well">
          <button type="submit" className="btn btn-primary center-block">
            <i className="fa fa-plus-square"></i>
            <span>Add</span>
          </button>
        </a>
        <div className="clearfix"></div>
        <table className="table table-bordered table_list">
          <thead>
            <tr className="active">
              <th>Prev. Call Date</th>
              <th>Prev. Call Type</th>
              <th>Call Person</th>
              <th>Avalon Exec.</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>08/25/2018</td>
              <td><i className="fa fa-sign-in" aria-hidden="true"></i></td>
              <td>Ron Ackerman</td>
              <td>Ajay</td>
              <td><i className="fa fa-search"></i></td>
            </tr>
            <tr>
              <td>08/25/2018</td>
              <td><i className="fa fa-sign-out" aria-hidden="true"></i></td>
              <td>Ron Ackerman</td>
              <td>Ajay</td>
              <td><i className="fa fa-search"></i></td>
            </tr>
            <tr>
              <td>08/25/2018</td>
              <td><i className="fa fa-sign-in" aria-hidden="true"></i></td>
              <td>Ron Ackerman</td>
              <td>Ajay</td>
              <td><i className="fa fa-search"></i></td>
            </tr>
          </tbody>
        </table>
        {/* test disgn */}
      </div>
      //   </div>
    );
  }
}

export default CallLogList;
// function mapStateToProps({ customers }) {
//   // console.log({customers})
//   return { customers };
// }

// export default connect(
//   mapStateToProps,
//   { fetchCustomers }
// )(CallLogList);
