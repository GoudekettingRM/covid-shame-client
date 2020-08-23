import React, { useState, FormEvent } from 'react';
import { signUp } from '../../store/session/actions';
import { useDispatch, useSelector } from 'react-redux';
import { select } from '../../store/selectors';
import { useHistory } from 'react-router';

const Signup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const token = useSelector(select.token);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (event: FormEvent): void | null => {
    event.preventDefault();
    if (!username || !email || !password) {
      alert('Please fill in all fields to create an account');
      return null;
    }
    dispatch(signUp(username, email, password));
  };

  if (token) {
    setTimeout(() => {
      history.push('/');
    }, 0);
    return <h1>Succes! Redirecting...</h1>;
  }

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <label htmlFor="username">Gebruikersnaam</label>
        <input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="email">Emailadres</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Wachtwoord</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Creëer account</button>
      </form>
    </>
  );
};

export default Signup;
