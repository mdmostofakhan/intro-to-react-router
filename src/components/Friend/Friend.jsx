import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';
const Friend = ({friend}) => {
  console.log(friend)
 const {name, id , email, phone} = friend;
    return (
        <div className='friends'>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>phone: {phone}</p>
            <Link to ={`/friend/:${id}`}>Show me details</Link>
        </div>
    );
};

export default Friend;