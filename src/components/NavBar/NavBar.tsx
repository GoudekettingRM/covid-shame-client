import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { select } from '../../store/selectors';
import { logout } from '../../store/session/actions';
import useStyles from './NavBarStyles';

const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const token = useSelector(select.token);
  const dispatch = useDispatch();

  const classes = useStyles();

  const onLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <nav className={classes.navBar}>
      {open ? (
        <div style={{ width: '250px' }} className={classes.sidebar}>
          <button
            className={classes.closeButton}
            onClick={() => setOpen(!open)}>
            Close
          </button>
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
        </div>
      ) : (
        <button className={classes.openButton} onClick={() => setOpen(!open)}>
          Open
        </button>
      )}
    </nav>
  );
};

export default NavBar;
