import React from 'react';

import './Comment.css'
import { Link, useNavigate } from 'react-router-dom';

const Comment = ({comment}) => {
    // console.log(comment)
    const {name, body, id} = comment;

    const navigate = useNavigate()
    const handleNavigation = () => {
            navigate(`/comment/${id}`)
    }


    return (
        <div className='comments'>
            <h2>Name:{name}</h2>
            <p>Body:{body}</p>
            <Link to={`/comment/${id}`}>Show Comments Detail</Link>
           <Link to={`/comment/${id}`}> <button>Comment Details</button></Link>
            <button onClick={handleNavigation}>How comment box</button>
        </div>
    );
};

export default Comment;