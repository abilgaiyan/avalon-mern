import React from "react";

const productPlanDropdown = ({ input, label, optionData, hostingdata, disabled, meta: { touched, error } }) => {
    // console.clear();
    // console.log(optionData);

    let productPlanData = optionData;
    console.log("data |-", productPlanData);
    let optionItems = productPlanData.map((data, index) => (
        <option key={data._id}>{data.planName}</option>
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

export default productPlanDropdown;
