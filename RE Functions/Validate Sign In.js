export const validateSignInFields = (form ) => {
    const errors = {};

    if(!form.email.trim()){
        errors.email = "Please enter your email."
        return errors;
    }

    if(form.email.trim() && !form.email.trim().includes("@")){
        errors.email = "Please enter a valid email.";
        return errors;
    }

    if(!form.password.trim()){
        errors.password = "Please enter your password."
        return errors;
    }

    if(form.password.trim().length < 8){
        errors.password = "Password length is more than 8."
        return errors;
    }

    return errors;
}