import React from "react";

const CustomerDropdown = ({
  input,
  label,
  optionData,
  disabled,
  meta: { touched, error }
}) => {
  //console.log(optionData);

  let DropDownLists = optionData;
  // console.log("dropdownElement |-" + DropDownLists);
  let optionItems = DropDownLists.map((dropdownElement, index) => (
    <option key={index}>{dropdownElement}</option>
  ));

  return (
    <div className="form-group">
      <label className="control-label col-sm-3">{label}</label>
      <div className="col-sm-9">
        <select {...input} className={"form-control " + (touched && error)} disabled={disabled ? "disabled" : ""}>
          {optionItems}
        </select>
        {/* <div className="red-text">{touched && error}</div> */}
      </div>
    </div>
  );
};

export default CustomerDropdown;
