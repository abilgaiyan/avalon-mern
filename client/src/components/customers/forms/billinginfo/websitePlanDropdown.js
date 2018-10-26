import React from "react";

const websitePlanDropdown = ({ input, label, optionData, disabled, meta: { touched, error } }) => {
    // console.log(optionData);

    let WebsitePlanData = optionData;
    // console.log("data |-" + WebsitePlanData);
    let optionItems = WebsitePlanData.map((data, index) => (
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

export default websitePlanDropdown;
