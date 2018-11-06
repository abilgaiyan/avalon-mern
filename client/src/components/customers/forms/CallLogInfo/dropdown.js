import React from "react";

const dropdown = ({ input, label, optionData, meta: { touched, error } }) => {

    let previousCallTypeData = optionData;

    // console.clear();
    // console.log(previousCallTypeData);


    let optionItems = previousCallTypeData.map((data, index) => (
        <option key={data._id} value={data._id}>{data._previouscalltype}</option>
    ));


    return (
        <div className="form-group">
            <label className="control-label col-sm-3">{label}</label>
            <div className="col-sm-9">
                <select {...input} className="form-control">
                    {optionItems}
                    {/* {hostingAmountItems} */}
                </select>
                <div className="red-text">{touched && error}</div>
            </div>
        </div>
    );
};

export default dropdown;
