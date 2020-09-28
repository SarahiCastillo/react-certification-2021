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
  // const sectionRef = useRef(null);

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push(intl.formatMessage({ id: 'routes.login' }));
  }

  const GlobalStyle = createGlobalStyle`
  ${normalize()}
  `;

  const handleChange = (event) => {
    console.log('event.target.value', event.target.value);
    setNewValue(event.target.value);
  };

  return (
    <section className="homepage">
      <h1>Hello wizeliner!</h1>
      <form>
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
      {authenticated ? (
        <>
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
        <Link to={intl.formatMessage({ id: 'routes.login' })}>Login →</Link>
      )}
    </section>
  );
}

export default HomePage;
