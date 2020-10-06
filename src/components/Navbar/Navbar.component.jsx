/* eslint-disable react/button-has-type */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import { useAuth } from '../../providers/Auth';
import './Navbar.styles.css';

function Navbar() {
  const intl = useIntl();
  const { authenticated, logout } = useAuth();
  const history = useHistory();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push(intl.formatMessage({ id: 'routes.login' }));
  }

  return (
    <div>
      <nav>
        <div className="menu">
          <Link to={intl.formatMessage({ id: 'routes.home' })} data-testid="home">
            <span role="img" aria-label="author emoji">
              🏠{' '}
            </span>
          </Link>
        </div>
        <div className="menu">
          <Link to={intl.formatMessage({ id: 'routes.videos' })} data-testid="videos">
            <FormattedMessage id="sections.videos" />
          </Link>
        </div>
        <div className="menu">
          <Link
            to={intl.formatMessage({ id: 'routes.myVideos' })}
            data-testid="favoritos"
          >
            <FormattedMessage id="sections.myVideos" />
          </Link>
        </div>
        <div className="menu">
          {authenticated ? (
            <>
              <Link
                to={intl.formatMessage({ id: 'routes.login' })}
                onClick={deAuthenticate}
                data-testid="islogged"
              >
                <span role="img" aria-label="author emoji">
                  👤{' '}
                </span>
                <FormattedMessage id="logout" />
              </Link>
            </>
          ) : (
            <Link to={intl.formatMessage({ id: 'routes.login' })} data-testid="notlogged">
              <span role="img" aria-label="author emoji">
                👤{' '}
              </span>
              <FormattedMessage id="login" />
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
