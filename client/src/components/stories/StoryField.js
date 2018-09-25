import React from 'react';


const StoryFields = ({input, label, type, meta: {touched, error} }) =>{
    
    return(
        <div>
          <label>{label}</label>
          <input  {...input} type={type}   style={{margin: '5px'}} />  
          <div className="red-text" style={{marginBottom : '20px'}}>
             {touched && error}
          </div>
        </div>
    );
}

export default StoryFields;