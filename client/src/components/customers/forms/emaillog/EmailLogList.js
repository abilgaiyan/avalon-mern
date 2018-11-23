import React, { Component } from "react";
import { connect } from "react-redux";
import EmailPopUp from "./emailPopUp";
import * as actions from "../../../../actions";
import moment from 'moment';
//import EmailForm from "./EmailForm";

class EmailLogList extends Component {

    createListItem() {
        return this.props.email.map((list) => {
            return (
                <tr key={list._id} onClick={() => this.props.SelectEmail(list)}  >
                    <td>{moment(list.emaildate).format('DD MMM YYYY')}</td>
                    <td>{list.type === "In" ? <i className="fa fa-sign-in" aria-hidden="true"></i> : <i className="fa fa-sign-out" aria-hidden="true"></i>}</td>
                    <td>{list.subject}</td>
                    {/* <td>{list.text.length > 50 ? list.text.slice(1, 50) + "...." : list.text}</td> */}
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
                                <th>Date</th>
                                <th>Type</th>
                                <th>Subject</th>
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
