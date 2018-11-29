import React from 'react'
import { connect } from "react-redux";

const supportqueryPopup = (props) => {

    function SelectedCommentItem() {
        return (
            <table className="table table-hover table_list pop_up_table">
                <thead>
                    {/* <tr className="active">
                        <th>Prev. Call Date</th>
                        <th>Prev. Call Type</th>
                        <th>Call Person</th>
                        <th>Avalon Exec.</th>
                        <th>Followup Time</th>
                        <th></th>
                    </tr> */}
                </thead>
                <tbody className="text-left">
                    <tr>
                        <td><label>Subject: </label></td>
                        <td><span>{props.activeComment.qrysubject}</span></td>
                    </tr>
                    <tr>
                        <td><label>Text: </label></td>
                        <td><span>{props.activeComment.qrytext}</span></td>
                    </tr>
                    <tr>
                        <td><label>Related: </label></td>
                        <td><span>{props.activeComment.qryrelated}</span></td>
                    </tr>
                </tbody>
            </table>

        )
    }

    return (
        <div
            className="modal fade"
            id="commentPopupModal"
            role="dialog">
            <div className="modal-dialog">

                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">
                            &times;
                </button>
                        <h4 className="modal-title">Comment Details</h4>
                    </div>
                    <div className="modal-body">
                        <div>{props.activeComment !== null ? SelectedCommentItem() : ''}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    // console.clear();
    // console.log(state.commentSelected);
    return {
        activeComment: state.commentSelected
    };
}

export default connect(mapStateToProps)(supportqueryPopup);