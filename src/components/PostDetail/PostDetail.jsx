import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData()
    console.log(post)

    return (
        <div>
            <h3>Post All detail</h3>
        </div>
    );
};

export default PostDetail;