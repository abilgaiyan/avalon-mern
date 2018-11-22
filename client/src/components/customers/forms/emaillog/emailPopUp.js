import React from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const EmailPopUp = (props) => {

    function createListItem() {
        return props.email.map((list) => {
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

    return (
        <div
            className="col-xs-12 col-sm-6 col-sm-offset-3 modal fade"
            id="emailLogModal"
            role="dialog">
            <div className="modal-dialog">

                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">
                            &times;
                </button>
                        <h4 className="modal-title">Email Details</h4>
                    </div>
                    <div className="modal-body">
                        <h1>HI  THIS IS MODAL</h1>
                        <p>{createListItem()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    // console.clear();
    // console.log(state.customerEmail);
    return {
        email: state.customerEmail,
    };
}

export default connect(mapStateToProps)(EmailPopUp);