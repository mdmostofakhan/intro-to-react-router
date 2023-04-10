import React from 'react';
import { Link } from 'react-router-dom';

const Posts = ({post}) => {

//   console.log(post);
  const {title,body,id} = post;


    return (
        <div>
            <h5>Id:{id}</h5>
            <h3>Body:{body}</h3>
           <Link to={`/post/${id}`}>Show Details</Link>
           <button>Show Post Details</button>
        </div>
    );
};

export default Posts;