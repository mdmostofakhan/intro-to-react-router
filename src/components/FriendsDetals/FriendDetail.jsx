import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData()

    console.log(friend)
    return (
        <div>
            <h3>Everthing friend data </h3>
            <h3>Name: {friend.name}</h3>
            <p>Phone: {friend.phone}</p>
            
        </div>
    );
};

export default FriendDetail;