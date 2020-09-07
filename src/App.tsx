import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Switch, Route, RouteComponentProps } from 'react-router';
import PostPage from './components/PostPage/Post';
import Home from './components/HomePage/Home';
import Login from './components/LoginPage/Login';
import Signup from './components/SignupPage/Signup';
import axios from './network/axiosConfig';
import { select } from './store/selectors';
import useStyles from './AppStyles';
import NavBar from './components/NavBar/NavBar';
import { logout } from './store/session/actions';

function App() {
  const token = useSelector(select.token);

  const dispatch = useDispatch();
  const classes = useStyles();

  const checkTokenValidity = async () => {
    if (token) {
      const { data } = await axios.post('/login/verify-jwt', { token });

      if (!data.tokenValid) {
        dispatch(logout());
        alert('Your session has ended, please re-login to continue.');
      }
    }
  };
  const protectedRoutes = (
    Component: any,
    routerProps: RouteComponentProps,
  ) => {
    checkTokenValidity();
    return token ? <Component {...routerProps} /> : <Redirect to="/login" />;
  };

  return (
    <div className={classes.app}>
      <NavBar />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/post"
            exact
            render={(routerProps: RouteComponentProps) => {
              return protectedRoutes(PostPage, routerProps);
            }}
          />
          <Route path="/login" exact component={Login} />
          <Route path="/sign-up" exact component={Signup} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
