import React, { Component } from "react";
import Multiselect from 'react-widgets/lib/Multiselect';

const MultiselectField = ({ input, label, optionData, valueField, textField, disabled, meta: { touched, error } }) => {

    let buyingGrpData = optionData;

    // let optionItems = buyingGrpData.map((data, index) => (
    //     { id: data._id, name: data._buyinggroups }
    // ));

    // let ListItem = ({ item }) => (
    //     <span>
    //         {item.name}
    //     </span>
    // );

    let optionItems = buyingGrpData.map((data, index) => (
        data._buyinggroups
    ));
    //console.log(optionItems)



    return (
        <div className="form-group col-sm-6">
            <label className="control-label col-sm-4">{label}</label>
            <div className="col-sm-8 text-left">
                <Multiselect disabled={disabled ? true : ""}
                    {...input}
                    onBlur={() => input.onBlur()}
                    value={input.value || []} // requires value to be an array
                    data={optionItems}
                    valueField={valueField}
                //textField='name'
                //itemComponent={ListItem}
                />
                <div className="red-text">{touched && error}</div>
            </div>
        </div>
    );
};

export default MultiselectField;
