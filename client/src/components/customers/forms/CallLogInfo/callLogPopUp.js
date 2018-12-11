import React from 'react'
import { connect } from "react-redux";
import moment from 'moment';

const CallLogPopUp = (props) => {

    function SelectedCallLogItem() {
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
                        <td><label>Call Date: </label></td>
                        <td><span>{moment(props.activeCallLog.previousCallDate).format('MMM DD YYYY')}</span></td>
                    </tr>
                    <tr>
                        <td><label>Call Type: </label></td>
                        <td><span>{props.activeCallLog._previousCallType._previouscalltype}</span></td>
                    </tr>
                    <tr>
                        <td><label>Customer Contact: </label></td>
                        <td><span>{props.activeCallLog.callPerson}</span></td>
                    </tr>
                    <tr>
                        <td><label>Avalon Executive: </label></td>
                        <td><span>{props.activeCallLog.avalonExcutive}</span></td>
                    </tr>
                    <tr>
                        <td><label>Subject: </label></td>
                        <td><span>{props.activeCallLog.topic}</span></td>
                    </tr>
                    <tr>
                        <td><label>Requet Summary: </label></td>
                        <td><span>{props.activeCallLog.summary}</span></td>
                    </tr>
                    <tr>
                        <td><label>Executive Response: </label></td>
                        <td><span>{props.activeCallLog.comments}</span></td>
                    </tr>
                    <tr>
                        <td><label>Followup Call Date: </label></td>
                        <td><span>{moment(props.activeCallLog.followupcalldate).format('MMM DD YYYY')}</span></td>
                    </tr>
                    <tr>
                        <td><label>Followup Call Time: </label></td>
                        <td><span>{moment(props.activeCallLog.followupcallTime).format('hh:mm A')}</span></td>
                    </tr>
                    <tr>
                        <td><label>Followup Regarding: </label></td>
                        <td><span>{moment(props.activeCallLog.followupcallTime).format('hh:mm A')}</span></td>
                    </tr>
                </tbody>
            </table>
            // <div>
            //     <label>Previous Call Date: </label> <span>{moment(props.activeCallLog.previousCallDate).format('MMM DD YYYY')}</span><br />
            //     <label>Previous Call Type: </label> <span>{props.activeCallLog._previousCallType._previouscalltype}</span><br />
            //     <label>Call Person: </label> <span>{props.activeCallLog.callPerson}</span><br />
            //     <label>Avalon Executive: </label> <span>{props.activeCallLog.avalonExcutive}</span><br />
            //     <label>Topic: </label> <span>{props.activeCallLog.topic}</span><br />
            //     <label>Summary: </label> <span>{props.activeCallLog.summary}</span><br />
            //     <label>Comments: </label> <span>{props.activeCallLog.comments}</span><br />
            //     <label>Followup Call Date: </label> <span>{moment(props.activeCallLog.followupcalldate).format('MMM DD YYYY')}</span><br />
            //     <label>Followup Call Time: </label> <span>{moment(props.activeCallLog.followupcallTime).format('hh:mm A')}</span><br />
            // </div>
        )
    }

    return (
        <div
            className="modal fade"
            id="callLogPopupModal"
            role="dialog">
            <div className="modal-dialog">

                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">
                            &times;
                </button>
                        <h4 className="modal-title">Call Log Details</h4>
                    </div>
                    <div className="modal-body">
                        <div>{props.activeCallLog !== null ? SelectedCallLogItem() : ''}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    // console.clear();
    // console.log(state.callloginfoListReducer);
    return {
        activeCallLog: state.callLogSelected
    };
}

export default connect(mapStateToProps)(CallLogPopUp);