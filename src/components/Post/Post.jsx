import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Posts from '../Posts/Posts';

const Post = () => {
    const posts = useLoaderData()
    console.log(posts)

    return (
        <div>
            <h3>Hear to the posts:{posts.length}</h3>
             <div>
             {
                posts.map(post => <Posts
                 key={post.id}
                 post = {post}
                ></Posts>)
             }
             </div>
        </div>
    );
};

export default Post;