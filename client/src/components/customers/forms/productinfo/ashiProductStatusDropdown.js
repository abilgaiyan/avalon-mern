import React from "react";

const ashiProductStatusDropdown = ({ input, label, optionData, disabled, meta: { touched, error } }) => {
    // console.log(optionData);

    let AshiProductStatusData = optionData;
    // console.log("data |-" + AshiProductStatusData);
    let optionItems = AshiProductStatusData.map((data, index) => (
        <option key={index}>{data}</option>
    ));

    return (
        <div className="form-group">
            <label className="control-label col-sm-3">{label}</label>
            <div className="col-sm-9">
                <select {...input} className="form-control" disabled={disabled ? "disabled" : ""}>
                    {optionItems}
                </select>
                <div className="red-text">{touched && error}</div>
            </div>
        </div>
    );
};

export default ashiProductStatusDropdown;
