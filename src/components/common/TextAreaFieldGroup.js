import React from 'react';
import PropType from 'prop-types'

const TextAreaFieldGroup = ({
    name,
    placeholder,
    value,
    customClass,
    info,
    error,
    onChange,

}) =>{

  return (
    <div className="form-group">
        <textarea 
            placeholder={placeholder}
            className={customClass} 
            name={name}
            value={value}
            onChange={onChange}
            
        />
        {info && <small className ="form-=text text-muted">{info}</small>}
        {error && <div className="invalid-feedback" >{error}</div> }
    </div>
  );
};

TextAreaFieldGroup.prototype ={
    name: PropType.string.isRequired,
    placeholder: PropType.string,
    value: PropType.string.isRequired,
    customClass: PropType.string,
    info: PropType.string,
    error: PropType.string,
    
    onChange: PropType.func.isRequired,
   

}


   
export default TextAreaFieldGroup;