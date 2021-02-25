import React from 'react'
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

class Register extends React.Component {

    render() {
        return(
            <div className="register-form">
                Sign up
                <InputField
                    type='text'
                    placeholder='Username'
                    value=''
                    onChange=''
                    />
                    <InputField
                    type='password'
                    placeholder='Password'
                    value=''
                    onChange=''
                    />
                    <InputField
                    type='password'
                    placeholder='Repeat Password'
                    value=''
                    onChange=''
                    />
                    <SubmitButton
                        text ='Register'
                        onClick=''
                        />
            </div>
        )
    }

}

export default Register;