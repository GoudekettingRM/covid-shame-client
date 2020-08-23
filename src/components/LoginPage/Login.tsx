import React, { useState, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { login } from '../../store/session/actions';
import { select } from '../../store/selectors';
import { useHistory } from 'react-router';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const token = useSelector(select.token);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = async (event: FormEvent): Promise<void | null> => {
    event.preventDefault();
    if (!email) {
      alert('Please enter your email');
      return null;
    }
    if (!password) {
      alert('Please enter your password');
      return null;
    }

    await dispatch(login(email, password));

    setEmail('');
    setPassword('');
  };

  if (token) {
    setTimeout(() => {
      history.push('/');
    }, 0);
    return <h1>Succes! Redirecting...</h1>;
  }

  return (
    <>
      <h1>Log in</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log in</button>
      </form>
    </>
  );
};

export default Login;
