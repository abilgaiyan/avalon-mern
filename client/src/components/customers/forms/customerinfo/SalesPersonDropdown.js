import React from "react";


const SalesPersonDropdown = ({
    input,
    label,
    optionData,
    disabled,
    meta: { touched, error }
}) => {
    //console.log(optionData);

    let planets = optionData;
    // console.log("planet |-" , planets);

    let optionItems = planets.map((planet, index) => (
        <option key={planet.sales_person_code}>{planet.Salesmen_Name}</option>
    ));

    return (
        <div className="form-group">
            <label className="control-label col-sm-3">{label}</label>
            <div className="col-sm-9">
                <select {...input} className="form-control" disabled={disabled ? "disabled" : ""} id="sales_person">
                    {optionItems}
                </select>
                <div className="red-text">{touched && error}</div>
            </div>
        </div>
    );
};

export default SalesPersonDropdown;