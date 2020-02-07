import React, {lazy, Suspense, useEffect} from "react";
import {Redirect, Switch, Route} from "react-router-dom";
import {useSelector} from "react-redux";
import {Spin} from "antd";
import {LoginForm} from "./components/authentication/login/index";
import {RegisterForm} from "./components/authentication/registration";
import {useHistory} from "react-router-dom";
const Dashboard = lazy(() => import("./components/dashboard"));
export function PrivateRoute({children, ...rest}) {
  const isAuthenticated = useSelector((state) => state.userData.loggedIn);
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
  let history = useHistory();
  const isAuthenticated = useSelector((state) => state.userData.loggedIn);
  useEffect(() => {
    isAuthenticated && history.push("/dashboard");
  }, [isAuthenticated]);
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
