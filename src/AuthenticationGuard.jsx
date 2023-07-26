import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";

export const AuthenticationGuard = ({ component }) => {
    const Component = withAuthenticationRequired(component, {
        // Show a message while the user waits to be redirected to the login page.
        onRedirecting: () => (<div>Redirecting you to the login page...</div>)
    });

    return <Component />;
};