import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useIntl } from 'react-intl';
import AuthProvider from '../../providers/Auth';
import SearchProvider from '../../providers/Search';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import Videos from '../../pages/Videos';
import Video from '../../pages/Video';
import Favorites from '../../pages/Favorites';
import Private from '../Private';
import Fortune from '../Fortune';
import Layout from '../Layout';
import Navbar from '../Navbar';
import { random } from '../../utils/fns';
import { withI18n } from '../i18n';

function App() {
  const intl = useIntl();

  useLayoutEffect(() => {
    const { body } = document;

    function rotateBackground() {
      const xPercent = random(100);
      const yPercent = random(100);
      body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
    }

    const intervalId = setInterval(rotateBackground, 3000);
    body.addEventListener('click', rotateBackground);

    return () => {
      clearInterval(intervalId);
      body.removeEventListener('click', rotateBackground);
    };
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <SearchProvider>
          <Layout>
            <Switch>
              <Route
                path={intl.formatMessage({ id: 'routes.videos' })}
                exact
                component={Videos}
              />
              <Route
                path={intl.formatMessage({ id: 'routes.video-detail' })}
                component={Video}
              />

              <Private
                path={intl.formatMessage({ id: 'routes.myVideos' })}
                component={Favorites}
              />

              <Route
                path={intl.formatMessage({ id: 'routes.login' })}
                component={LoginPage}
              />

              <Route
                path={intl.formatMessage({ id: 'routes.home' })}
                component={HomePage}
              />

              <Route path="*" component={NotFound} />
            </Switch>
            <Fortune />
          </Layout>
        </SearchProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default withI18n(App);
