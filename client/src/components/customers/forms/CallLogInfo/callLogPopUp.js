import React from 'react'
import { connect } from "react-redux";
import moment from 'moment';

const CallLogPopUp = (props) => {

    function SelectedCallLogItem() {
        return (
            <div>
                <label>Previous Call Date: </label> <span>{moment(props.activeCallLog.previousCallDate).format('DD MMM YYYY')}</span><br />
                <label>Previous Call Type: </label> <span>{props.activeCallLog._previousCallType._previouscalltype}</span><br />
                <label>Call Person: </label> <span>{props.activeCallLog.callPerson}</span><br />
                <label>Avalon Executive: </label> <span>{props.activeCallLog.avalonExcutive}</span><br />
                <label>Topic: </label> <span>{props.activeCallLog.topic}</span><br />
                <label>Summary: </label> <span>{props.activeCallLog.summary}</span><br />
                <label>Comments: </label> <span>{props.activeCallLog.comments}</span><br />
                <label>Followup Call Date: </label> <span>{moment(props.activeCallLog.followupcalldate).format('DD MMM YYYY')}</span><br />
                <label>Followup Call Time: </label> <span>{moment(props.activeCallLog.followupcallTime).format('hh:mm A')}</span><br />
            </div>
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
    console.clear();
    console.log(state.callloginfoListReducer);
    return {
        activeCallLog: state.callLogSelected
    };
}

export default connect(mapStateToProps)(CallLogPopUp);