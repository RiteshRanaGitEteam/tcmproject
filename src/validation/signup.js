import  Validator from 'validator';
import isEmpty from '../utils/is-Empty';


export default function validateSignupInput (data) {
    let errors = {};

    data.name = !isEmpty(data.name)? data.name : '';
    data.organization = !isEmpty(data.organization)? data.organization : '';
    data.email = !isEmpty(data.email)? data.email : '';
    data.password = !isEmpty(data.password)? data.password : '';
    data.password2 = !isEmpty(data.password2)? data.password2 : '';

    if(!Validator.isLength(data.name, {min: 2, max: 30})){
        errors.name ="name must be  between 2 and 30 characters"; 
    }

    if(Validator.isEmpty(data.name)){
        errors.name = "Name feild is required";
    }
    if(!Validator.isLength(data.organization, {min: 2, max: 30})){
        errors.organization ="name must be  between 2 and 30 characters"; 
    }

    if(Validator.isEmpty(data.organization)){
        errors.organization = "Name feild is required";
    }
    if(Validator.isEmpty(data.email)){
        errors.email = "Email feild is required";
    } else if(!Validator.isEmail(data.email)){
        errors.email = "eamil is invalid";
    }
    if(Validator.isEmpty(data.password)){
        errors.password = "password feild is required";
    }
    if(!Validator.isLength(data.password, {min: 6, max: 30 })){
        errors.password = "password must atlest 6 characters";
    }
    if(Validator.isEmpty(data.password2)){
        errors.password2 = "confirm password feild is required";
    } else if(!Validator.equals(data.password, data.password2)){
        errors.password2 = "passwords must match";
    }

    const isValid =  isEmpty(errors);
    return {
        
        errors,
        isValid
    };
}