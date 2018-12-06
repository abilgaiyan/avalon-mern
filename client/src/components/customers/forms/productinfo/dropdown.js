import React from "react";

const dropdown = ({ input, label, optionData, disabled, meta: { touched, error } }) => {
    // console.clear();
    // console.log(optionData);

    let ashiprdstatusData = optionData;

    let optionItems = ashiprdstatusData.map((data, index) => (
        <option key={data._id} value={data._id}>{data._ashiProductStatus}</option>
    ));


    return (
        <div className="form-group">
            <label className="control-label col-sm-4">{label}</label>
            <div className="col-sm-8">
                <select {...input} className="form-control" disabled={disabled ? "disabled" : ""}>
                    {optionItems}
                    {/* {hostingAmountItems} */}
                </select>
                <div className="red-text">{touched && error}</div>
            </div>
        </div>
    );
};

export default dropdown;
