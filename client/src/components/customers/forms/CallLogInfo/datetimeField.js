import React, { Component } from 'react';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';


const datetimeField = ({ input: { onChange, value }, label, type, meta: { touched, error }, showTime }) => {
    // let formatter = Globalize.dateFormatter({ time: 'medium' })
    // console.log(moment(value));
    // let finalDate = moment(value).format('MMM DD YYYY')

    return (
        <div className="form-group ">
            <label className="control-label col-sm-4">{label}</label>
            <div className="col-sm-8 ">
                <DateTimePicker
                    //{...input}
                    inputProps={{ component: props => <input {...props} readOnly /> }}
                    //readOnly
                    onChange={onChange}
                    className={touched && error}
                    format="MMM DD YYYY"
                    time={showTime}
                    value={!value ? null : new Date(value)}
                //value={!input.value ? null : new Date(input.value)}
                //value={!input.value ? null : new Date(moment(input.value).format("MMM DD YYYY"))}
                />
                {/* <div className="red-text" >
                    {touched && error}
                </div> */}
            </div>
        </div>
    );
};

// const datetimeField = ({ input, label, type, meta: { touched, error }, showTime }) => {
//     // let formatter = Globalize.dateFormatter({ time: 'medium' })

//     return (
//         <div className="form-group">
//             <label className="control-label col-sm-3">{label}</label>
//             <div className="col-sm-9 ">
//                 <DateTimePicker
//                     {...input}
//                     //inputProps={{ component: props => <input {...props} readOnly /> }}
//                     //readOnly
//                     onChange={input.onChange}
//                     format="MMM DD YYYY"
//                     time={showTime}
//                     value={!input.value ? null : new Date(input.value)}
//                 //value={!input.value ? null : new Date(moment(input.value).format("MMM DD YYYY"))}
//                 />
//                 <div className="red-text" >
//                     {/* {touched && error} */}
//                 </div>
//             </div>
//         </div>
//     );
// };

export default datetimeField;