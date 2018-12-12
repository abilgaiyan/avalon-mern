import React from "react";


const StateDropdown = ({
    input,
    label,
    optionData,
    disabled,
    meta: { touched, error }
}) => {
    //console.log(optionData);

    if (optionData !== null) {
        let optionItems = optionData.sort((a, b) => {
            if (a.StateCode.toLowerCase() < b.StateCode.toLowerCase()) //sort string ascending
                return -1
            if (a.StateCode.toLowerCase() > b.StateCode.toLowerCase())
                return 1
            return 0 //default return value (no sorting)
        }).map((planet, index) => (
            <option key={planet._id} value={planet.StateCode}>{planet.StateCode}-{planet.StateName}</option>
        ));

        return (
            <div className="form-group col-sm-6">
                <label className="control-label col-sm-4">{label}</label>
                <div className="col-sm-8">
                    <select {...input} className="form-control" disabled={disabled ? "disabled" : ""} >
                        {optionItems}
                    </select>
                    {/* <div className="red-text">{touched && error}</div> */}
                </div>
            </div >
        );
    } else {

        return (
            <div className="form-group">
                <label className="control-label col-sm-3">{label}</label>
                <div className="col-sm-9">
                    <select className="form-control" disabled={disabled ? "disabled" : ""} >
                        <option key="0">Select State</option>
                    </select>
                </div>
            </div>
        );
    }




};

export default StateDropdown;