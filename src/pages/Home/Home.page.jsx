import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { useIntl } from 'react-intl';
import { useAuth } from '../../providers/Auth';
import { useSearch } from '../../providers/Search';
import './Home.styles.css';

function HomePage() {
  const { setNewValue } = useSearch();
  const { authenticated, logout } = useAuth();
  const intl = useIntl();
  const history = useHistory();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push(intl.formatMessage({ id: 'routes.login' }));
  }

  const GlobalStyle = createGlobalStyle`
  ${normalize()}
  `;

  function search() {
    history.push(intl.formatMessage({ id: 'routes.videos' }));
  }

  const handleChange = (event) => {
    setNewValue(event.target.value);
  };

  return (
    <section className="homepage">
      {authenticated ? (
        <>
          <h1>Hello wizeliner!</h1>
          <form onSubmit={search}>
            <GlobalStyle />
            <div id="inputSearch">
              <input
                onChange={handleChange}
                name="searchInput"
                type="text"
                required
                placeholder="Search videos"
              />
            </div>
            <Link to={intl.formatMessage({ id: 'routes.videos' })}>
              <span role="img" aria-label="author emoji">
                🔍{' '}
              </span>
            </Link>
          </form>
          <h2>Welcome back</h2>
          <span>
            <Link to={intl.formatMessage({ id: 'routes.home' })} onClick={deAuthenticate}>
              ← Logout
            </Link>
            <span className="separator" />
            <Link to="/videos">View videos →</Link>
          </span>
        </>
      ) : (
        <span>
          <h2 data-testid="texto">Hello stranger!</h2>
          <Link to={intl.formatMessage({ id: 'routes.login' })} data-testid="notlogged">
            Login →
          </Link>
        </span>
      )}
    </section>
  );
}

export default HomePage;
