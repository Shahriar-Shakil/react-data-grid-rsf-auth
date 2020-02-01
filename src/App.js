import React, {lazy, Suspense} from "react";
import {Redirect, Switch, Route} from "react-router-dom";
import {useSelector} from "react-redux";
import {Spin} from "antd";
import {LoginForm} from "./components/authentication/login/index";
import {RegisterForm} from "./components/authentication/registration";
const Dashboard = lazy(() => import("./components/dashboard"));
export function PrivateRoute({children, ...rest}) {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  return (
    <Route
      {...rest}
      render={({location}) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {from: location}
            }}
          />
        )
      }
    />
  );
}

function App() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  return (
    <div className="Apps">
      <Suspense
        fallback={
          <div className="spinner-container">
            <Spin size="large" />
          </div>
        }
      >
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/sign-up">
            <RegisterForm />
          </Route>

          <PrivateRoute path="/">
            {isAuthenticated && <Redirect to="/dashboard" />}

            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
          </PrivateRoute>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
