import React from "react";

const CustomerDropdown = ({
  input,
  label,
  optionData,
  meta: { touched, error }
}) => {
  console.log(optionData);

  let planets = optionData;
  console.log("planet |-" + planets);
  let optionItems = planets.map((planet, index) => (
    <option key={index}>{planet}</option>
  ));

  return (
    <div className="form-group">
      <label className="control-label col-sm-2">{label}</label>
      <div className="col-sm-10">
        <select {...input} className="form-control">
          {optionItems}
        </select>
        <div className="red-text" style={{ marginBottom: "20px" }}>
          {touched && error}
        </div>
      </div>
    </div>
  );
};

export default CustomerDropdown;
