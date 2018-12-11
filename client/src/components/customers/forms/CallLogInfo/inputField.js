import React from "react";

const inputField = props => {
    const { input, label, type, meta: { touched, error } } = props;

    // console.log({ ...props });
    if (type === "checkbox") {
        return (
            <div className="form-group">
                <label className="control-label col-sm-4">{label}</label>
                <div className="checkbox col-sm-8">
                    <label>
                        <input
                            {...input}
                            className={touched && error}
                            type={type}
                        />
                    </label>
                     {/* <div className="red-text" >
                    {touched && error}
                </div> */}
                </div>
            </div>
        );
    } else {
        return (
            <div className="form-group">
                <label className="control-label col-sm-4">{label}</label>
                <div className="col-sm-8 ">
                    <input
                        {...input}
                        className={"form-control " + (touched && error) }
                        type={type}
                    />
                     {/* <div className="red-text" >
                    {touched && error}
                </div> */}
                </div>
            </div>
        );
    }
};

export default inputField;
