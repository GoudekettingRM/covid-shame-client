import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { select } from '../../store/selectors';
import { logout } from '../../store/session/actions';

const NavBar: React.FC = () => {
  const token = useSelector(select.token);
  const dispatch = useDispatch();

  const onLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      {token ? (
        <>
          <Link to="/post">Plaats een afbeelding</Link>
          <button onClick={() => onLogoutClick()}>logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Inloggen</Link>
          <Link to="/sign-up">Aanmelden</Link>
        </>
      )}
    </nav>
  );
};

export default NavBar;
