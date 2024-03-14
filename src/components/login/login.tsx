import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";


function Login() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        checkUser()
    }, [])

    const checkUser = async () => {
        const user = await Auth.currentAuthenticatedUser();
        setUser(user);
    }

    if (!user) return null

    return (
        <div>
            <h1>Login Successfull</h1>
            <p>{user.username}</p>
            <p>{user.attributes.email}</p>
        </div>
    )
}

export default withAuthenticator(Login)