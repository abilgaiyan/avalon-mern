import React, { Component } from "react";
import { connect } from "react-redux";
import EmailPopUp from "./emailPopUp";
import * as actions from "../../../../actions";
//import EmailForm from "./EmailForm";

class EmailLogList extends Component {

    createListItem() {
        return this.props.email.map((list) => {
            return (
                <tr key={list._id}>
                    {/* <td>{list._previousCallType._previouscalltype === "Incoming" ? <i className="fa fa-sign-in" aria-hidden="true"></i> : <i className="fa fa-sign-out" aria-hidden="true"></i>}</td> */}
                    <td>{list.subject}</td>
                    <td>{list.text}</td>
                    {/* <td>{list.followupcallTime === undefined ? '' : moment(list.followupcallTime).format('hh:mm A')}</td> */}
                    <td><a data-toggle="modal" data-target="#emailLogModal"><i className="fa fa-search"></i></a></td>
                </tr>
            )
        })
    }

    render() {
        if (!this.props.email) {
            // console.clear();
            // console.log(this.props.productPlanDropdown[0].planName);
            return (<div>Loading...</div>)
        }
        else {
            return (
                <div >
                    <div className=" icon_well">
                        {/* <button type="button" className="btn btn-primary pull-right" data-toggle="modal" data-target="#emailLogModal"><i className="fa fa-plus-square"></i>Addffg</button> */}
                        <div className="clearfix"></div>
                        {/* <EmailForm /> */}
                        <EmailPopUp />
                    </div>
                    <div className="clearfix"></div>
                    <table className="table table-bordered table_list">
                        <thead>
                            <tr className="active">
                                <th>Subject</th>
                                <th>Text</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.createListItem()}
                        </tbody>
                    </table>
                </div>
            );
        }

    }
}

// renderEmail() {
//   if (!this.props.email) return;

//   //   console.log('this.props.customer')
//   //   console.log(this.props.customer)
//   //   console.log('this.props.customer')
//   //console.log(this.props.fetchCustomers())
//   const { email } = this.props;

//   return (
//     // <div key={customer._id} className="card blue-grey darken-1">
//     <div className="">
//       <div className="form-horizontal">
//         <div className="form-group">
//           <label className="control-label col-sm-2" htmlFor="pwd">
//             sub:
//           </label>
//           <div className="col-sm-10">
//             <label className="control-label" htmlFor="email">
//               {email.subject}
//             </label>
//           </div>
//         </div>
//         <div className="form-group">
//           <label className="control-label col-sm-2" htmlFor="pwd">
//             Comments:
//           </label>
//           <div className="col-sm-10">
//             <label className="control-label" htmlFor="email">
//               {email.comments}
//             </label>
//           </div>
//         </div>
//         <div className="form-group">
//           <div className="col-sm-offset-2 col-sm-10">
//             <button
//               type="submit"
//               data-toggle="modal"
//               className="btn btn-primary"
//               data-target="#myModal"
//             ><i className="fa fa-plus-square"></i>
//               Add{" "}
//             </button>
//             <EmailForm customerId={this.props.customerId} />
//           </div>
//         </div>
//       </div>

//       {/* test disgn */}
//       <a href="#" className="pull-right icon_well">
//         <button type="submit" className="btn btn-primary center-block">
//           <i className="fa fa-plus-square"></i>
//           <span>Add</span>
//         </button>
//       </a>
//       <div className="clearfix"></div>
//       <table className="table table-bordered table_list">
//         <thead>
//           <tr className="active">
//             <th>Subject</th>
//             <th>Text</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>08/25/2018</td>
//             <td><i className="fa fa-sign-in" aria-hidden="true"></i></td>
//             <td>Ron Ackerman</td>
//             <td>Ajay</td>
//             <td><i className="fa fa-search"></i></td>
//           </tr>
//           <tr>
//             <td>08/25/2018</td>
//             <td><i className="fa fa-sign-out" aria-hidden="true"></i></td>
//             <td>Ron Ackerman</td>
//             <td>Ajay</td>
//             <td><i className="fa fa-search"></i></td>
//           </tr>
//           <tr>
//             <td>08/25/2018</td>
//             <td><i className="fa fa-sign-in" aria-hidden="true"></i></td>
//             <td>Ron Ackerman</td>
//             <td>Ajay</td>
//             <td><i className="fa fa-search"></i></td>
//           </tr>
//         </tbody>
//       </table>
//       {/* test disgn */}
//     </div>

//   )
// }
// render() {
//   return <div>{this.renderEmail()}</div>;
// }


function mapStateToProps(state) {
    // console.clear();
    // console.log(state.customerEmail);
    return {
        email: state.customerEmail,
    };
}

export default connect(
    mapStateToProps,
    actions
)(EmailLogList);
