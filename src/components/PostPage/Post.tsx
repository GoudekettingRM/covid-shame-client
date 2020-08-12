import React from 'react';
import UploadImage from './UploadImage';
import { Link } from 'react-router-dom';

const PostPage: React.FC = () => {
  return (
    <>
      <h1>Plaats een afbeelding van een overtreder!</h1>
      <Link to="/">Home</Link>
      <UploadImage />
    </>
  );
};

export default PostPage;
