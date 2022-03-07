import React from "react";
import './custom-button.styles.scss';


// Pull children off the props that get passed into our button component (?)
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in': ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;