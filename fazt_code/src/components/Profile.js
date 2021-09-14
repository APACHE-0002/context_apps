import React, { useContext } from 'react';
import {UserContext} from '../context/User/UserContext';

export const Profile = () => {
    const { selectedUser } = useContext(UserContext);

    return(
        <>
            {selectedUser ? (<div></div>) : (<h1>No user selected</h1>)}
        </>
    )
}