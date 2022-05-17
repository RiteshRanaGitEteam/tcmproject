import React from 'react';
import PropType from 'prop-types'
import "./TextFieldGroup.css"

const TextFieldGroup = ({
    name,
    placeholder,
    customClass,
    value,
    lable,
    info,
    error,
    type,
    onChange,
    disabled
}) =>{
  return (
      
    <div className="form-group field-container">
        <input 
            type={type}
            className={customClass} 
            placeholder={placeholder} 
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}  
        />
        {info && <small className ="form-=text text-muted">{info}</small>}
        {error && <div className="invalid-feedback" >{error}</div> }
    </div>
  );
};

TextFieldGroup.prototype ={
    name: PropType.string.isRequired,
    placeholder: PropType.string,
    value: PropType.string.isRequired,
    lable: PropType.string,
    info: PropType.string,
    error: PropType.string,
    customClass: PropType.string,
    type: PropType.string.isRequired,
    onChange: PropType.func.isRequired,
    disabled: PropType.string,

}

TextFieldGroup.defaultProps = {
    type : 'text'
}
   
export default TextFieldGroup;