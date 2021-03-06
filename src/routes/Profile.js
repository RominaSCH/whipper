import React from "react";
import { useHistory } from "react-router";
import { authService } from "../fireb";

const Profile = () => {
    const history = useHistory();
    const onLogOutClick = () => {
        authService.signOut()
        history.push("/");
    };
    return (
        <>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    );
};
export default Profile;