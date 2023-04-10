import React from 'react';

import './Comment.css'

const Comment = ({comment}) => {
    console.log(comment)
    const {name, body, email,} = comment;
    return (
        <div className='comments'>
            <h2>Name:{name}</h2>
            <p>Body:{body}</p>
            <p>Email:{email}</p>
        </div>
    );
};

export default Comment;