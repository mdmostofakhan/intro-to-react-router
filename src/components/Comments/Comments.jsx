import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Comment from '../Comment/Comment';
import './Comm.css'

const Comments = () => {
    const comments = useLoaderData()
    console.log(comments);
    return (
        <div>
            <h2>Are you sure comment box:{comments.length}</h2>
            <div className='comment'>
                {
                    comments.map(comment => <Comment
                    key={comment.id}
                    comment={comment}
                    ></Comment> )
                }
            </div>
        </div>
    );
};

export default Comments;