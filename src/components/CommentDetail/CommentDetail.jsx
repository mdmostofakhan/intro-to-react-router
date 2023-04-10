import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const CommentDetail = () => {
    const comment = useLoaderData()
    console.log(comment)

    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(-1)
    }
    return (
        <div>
            <h4>How you Comment box:{comment.id}</h4> 
            <p>{comment.email}</p>
            <button onClick={handleNavigate}>Go Back</button>
        </div>
    );
};

export default CommentDetail;