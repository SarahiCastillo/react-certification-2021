import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import IntlProvider from '../../components/i18n/I18nProvider';
import AuthProvider from '../../providers/Auth';
import SearchProvider from '../../providers/Search/SearchContext';
import Provider from '../../components/Private/Private.component';
import Video from '../../pages/Video/Video';
import Videos from '../../pages/Videos/Videos';

describe('Private', () => {
  it('renders Video as private page', () => {
    const route = '/video/:id';
    render(
      <BrowserRouter>
        <AuthProvider>
          <SearchProvider>
            <IntlProvider locale="en">
              <Provider path={{ route }} component={{ Video }} />
            </IntlProvider>
          </SearchProvider>
        </AuthProvider>
      </BrowserRouter>
    );
  });

  it('renders Videos as private page', () => {
    const route = '/videos';
    render(
      <BrowserRouter>
        <AuthProvider>
          <SearchProvider>
            <IntlProvider locale="en">
              <Provider path={{ route }} component={{ Videos }} />
            </IntlProvider>
          </SearchProvider>
        </AuthProvider>
      </BrowserRouter>
    );
  });
});
