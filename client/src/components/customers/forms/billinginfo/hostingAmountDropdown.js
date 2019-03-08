import React from "react";

const hostingAmountDropdown = ({ input, label, optionData, disabled, meta: { touched, error } }) => {
    // console.clear();
    // console.log(optionData);

    let product_hostingAmountData = optionData;
    // let hostingAmountData = hostingdata;
    //console.log(product_hostingPlanData);

    let optionItems = product_hostingAmountData.map((data, index) => (
        <option key={data._id} value={data._id}>{data.hostingAmount}</option>
    ));
    //console.log("data |-", hostingdata);
    // let hostingAmountItems = hostingAmountData.map((data, index) => (
    //     <option key={data._id} value={data._id}>{data.hostingAmount}</option>
    // ));
    // console.log(optionItems);

    return (
        <div className="form-group">
            <label className="control-label col-sm-3">{label}</label>
            <div className="col-sm-9">
                <select {...input} className="form-control" disabled={disabled ? "disabled" : ""} id="hosting_amount" >
                    {optionItems}
                    {/* {hostingAmountItems} */}
                </select>
                <div className="red-text">{touched && error}</div>
            </div>
        </div>
    );
};

export default hostingAmountDropdown;
