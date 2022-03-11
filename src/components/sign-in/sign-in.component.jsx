import React from "react";
import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: ''});
        } catch (error) {
            console.log(error);
        }

    };










    handleChange = event => {
        // Pull value and name properties off of event.target
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit} action="">
                    <FormInput 
                        type="email" 
                        name="email" 
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}
                        // Instead of rendering a label here under FormInput component, the label is rendered in the component based on label property passed here.
                        label="email"
                    />
                    <FormInput 
                        type="password"
                        name="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                        label="password"
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        {/* Making signInWithGoogle available on sign in page. isGoogleSignIn is a prop that gets passed to the button, on the button itself, through a conditional and string interpolation, the isGoogleSignIn class is rendered on the CustomButton */}
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn type="button">Sign In With Google</CustomButton>
                    </div>


                </form>
            </div>
        )
    }
}

export default SignIn;