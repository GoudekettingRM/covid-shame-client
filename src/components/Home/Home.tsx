import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to="/post">Plaats een afbeelding</Link>
      <Link to="/login">Login</Link>
      <Link to="/sign-up">Sign Up</Link>
    </>
  );
};

export default Home;
