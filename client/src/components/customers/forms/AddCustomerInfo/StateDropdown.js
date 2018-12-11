import React from "react";


const StateDropdown = ({
    input,
    label,
    optionData,
    disabled,
    meta: { touched, error }
}) => {
    //console.log(optionData);

    let planets = optionData;
    // console.log("planet |-", planets);
    if (planets !== null) {
        let optionItems = planets.map((planet, index) => (
            <option key={planet._id} value={planet.StateCode}>{planet.StateName}</option>
        ));

        return (
            <div className="form-group col-sm-6">
                <label className="control-label col-sm-4">{label}</label>
                <div className="col-sm-8">
                    <select {...input} className="form-control" disabled={disabled ? "disabled" : ""} >
                        {optionItems}
                    </select>
                    <div className="red-text">{touched && error}</div>
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