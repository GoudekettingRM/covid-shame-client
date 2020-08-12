import React from 'react';
import PostPage from './components/PostPage/Post';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { Redirect, Switch, Route, RouteComponentProps } from 'react-router';
import './App.css';

function App() {
  // const protectedRoutes = (
  //   Component: any,
  //   routerProps: RouteComponentProps,
  // ) => {
  //   return token ? <Component {...routerProps} /> : <Redirect to="/login" />;
  // };

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/post" exact component={PostPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/sign-up" exact component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
