import React from 'react'
import SubmitButton from "./SubmitButton";

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        // By using states we can associate the name property of the <input> with the state variable and we can initialize values
        this.state = ({username: '', password: '', password2: ''})
    }

    onChange = (e) => {
        // If using states to handle, this line will index the state variable with the same name as the calling-event's
        // (the calling input field's) name property and update the state's value to the <input>'s new value
        this.setState({[e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();

        // Since using states means `this.state` holds the current state of each input field, we can simply convert to JSON and its ready for POST
        const data = JSON.stringify(this.state);

        /*
        // If using the FormData instead, it will only take what is currently the value of the <input>, and not its state
        const formData = new FormData(e.target);
        // You can see here that this successfully gets/prints the JSON formatted form. However, if you were to try to
        // set the state in the constructor initially and submit the form before writing any values in the fields,
        // the output will be all empty fields (ex: {"username": "",....}) although username's state is 'some initial value'
        console.log(JSON.stringify(Object.fromEntries(formData)));
        */

        fetch('/api/register/', {
            method: 'POST',

            body: data
        })
            .then(response => {
                // reset form
                // document.getElementById("comment-form").reset()
                // display success message
                // document.getElementById("success").style.display = "block"
                alert(response);
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return(
            // The name property of every field needs to be the same as the state so that the relation is established
            <form
                onSubmit={this.onSubmit}
                className="register-form input">
                Sign up
                <input
                    name='username'
                    type='text'
                    placeholder='Username'
                    onChange={this.onChange}
                />
                <input
                    name='password'
                    type='password'
                    placeholder='Password'
                    onChange={this.onChange}
                />
                <input
                    name='password2'
                    type='password'
                    placeholder='Repeat Password'
                    onChange={this.onChange}
                />
                <SubmitButton
                    type='submit'
                    text='Register'
                />
            </form>
        )
    }
}

export default RegisterForm;