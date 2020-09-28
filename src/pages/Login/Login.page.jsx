import React from 'react';
import { useIntl } from 'react-intl';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import './Login.styles.css';

function LoginPage() {
  const intl = useIntl();
  const history = useHistory();
  const { login, authenticated, logout } = useAuth();

  function authenticate(event) {
    event.preventDefault();
    login();
    history.push(intl.formatMessage({ id: 'routes.videos' }));
  }

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push(intl.formatMessage({ id: 'routes.login' }));
  }

  return (
    <section className="login">
      {authenticated ? (
        <>
          <h2>Hi Wizeliner, You are login!</h2>
          <span>
            <Link to={intl.formatMessage({ id: 'routes.home' })} onClick={deAuthenticate}>
              ← Logout
            </Link>
            <span className="separator" />
            <Link to="/videos">View videos →</Link>
          </span>
        </>
      ) : (
        <>
          <h1>Welcome back!</h1>
          <form onSubmit={authenticate} className="login-form">
            <div className="form-group">
              <label htmlFor="username">
                <strong>username </strong>
                <input required type="text" id="username" />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="password">
                <strong>password </strong>
                <input required type="password" id="password" />
              </label>
            </div>
            <button type="submit">login</button>
          </form>
        </>
      )}
    </section>
  );
}

export default LoginPage;
