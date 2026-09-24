export const validateSignupForm = (form) => {
    const errors = {};

    if(!form.username.trim()){
        errors.username = "Please create a unique username."
        return errors;
    }

    if(form.username.trim().length <= 3){
        errors.username = "Add a valid username."
        return errors
    }

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

    if(!/[A-Z]/.test(form.password.trim())){
        errors.password = "Add an uppercase letter."
        return errors
    }

    if(!/[a-z]/.test(form.password.trim())){
        errors.password = "Add a lowercase letter."
        return errors
    }

     if(!/\d/.test(form.password.trim())){
        errors.password = "Add a digit."
        return errors
    }

     if(!/[^A-Za-z0-9]/.test(form.password.trim())){
        errors.password = "Add a special character."
        return errors
    }

    return errors;
}