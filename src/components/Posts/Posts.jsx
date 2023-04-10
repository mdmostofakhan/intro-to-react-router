import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Posts = ({post}) => {
//   const posts = useLoaderData()
//   console.log(post);
  const {title,body,id} = post;


    return (
        <div>
            <h5>Id:{id}</h5>
            <h3>Body:{body}</h3>
            <p>Title:{title}</p>
        </div>
    );
};

export default Posts;