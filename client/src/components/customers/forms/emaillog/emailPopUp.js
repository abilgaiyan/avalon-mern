import React from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const EmailPopUp = (props) => {

    function SelectedEmailItem() {
        return (
            <div>
                {/* <label>Customer Id: </label> <span>{props.emailSelected.customerid}</span><br /> */}
                <label>From: </label> <span>{props.emailSelected.from}</span><br />
                <label>To: </label> <span>{props.emailSelected.to}</span><br />
                <label>Email Date: </label> <span>{props.emailSelected.emaildate}</span><br />
                <label>Subject: </label> <span>{props.emailSelected.subject}</span><br />
                {/* <label>Text: </label> <span>{props.emailSelected.text}</span><br /> */}
                <label>Html: </label> <div className="well render_email_html" dangerouslySetInnerHTML={{ __html: props.emailSelected.html }}></div>
            </div>
        )
    }

    return (
        <div
            className="modal fade"
            id="emailLogModal"
            role="dialog">
            <div className="modal-dialog modal-lg">

                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">
                            &times;
                </button>
                        <h4 className="modal-title">Email Details</h4>
                    </div>
                    <div className="modal-body">
                        <div>{props.emailSelected !== null ? SelectedEmailItem() : ''}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    // console.clear();
    // console.log(state.emailSelected);
    return {
        email: state.customerEmail,
        emailSelected: state.emailSelected
    };
}

export default connect(mapStateToProps)(EmailPopUp);