import React from "react";

const inputField = props => {
    const { input, label, type, meta: { touched, error }, removeErrorClass } = props;
    const tel = <input
        {...input}
        className={"form-control " + (touched && error)}
        type={type}
        onClick={removeErrorClass}
        maxLength="10"
    />
    const nonTel = <input
        {...input}
        className={"form-control " + (touched && error)}
        type={type}
        onClick={removeErrorClass}
    />
    // console.log({ ...props });
    if (type === "checkbox") {
        return (
            <div className="form-group col-sm-6">
                <label className="control-label col-sm-4">{label}</label>
                <div className="checkbox col-sm-8">
                    <label>
                        <input
                            {...input}
                            className={" " + touched && error}
                            type={type}
                        />
                    </label>
                    {/* <div className="red-text">{touched && error}</div> */}
                </div>
            </div>
        );
    } else {
        return (
            <div className="form-group col-sm-6">
                <label className="control-label col-sm-4">{label}</label>
                <div className="col-sm-8 ">
                    {label === "Telephone 1" || "Mobile" || "Telephone 2" ? tel : nonTel}
                    {/* <div className="red-text" >
                        {touched && error}
                    </div> */}
                </div>
            </div>
        );
    }
};

export default inputField;
