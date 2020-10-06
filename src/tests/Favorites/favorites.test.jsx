import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import IntlProvider from '../../components/i18n/I18nProvider';
import AuthProvider from '../../providers/Auth';
import UseSearch from '../../providers/Search/SearchContext';
import InfoFavorites from '../../components/Videos/InfoFavorites';
import Favorites from '../../pages/Favorites/Favorites';
import '@testing-library/jest-dom/extend-expect';

describe('Favorites', () => {
  it('returns no favorites when data there is no videos saved in local storage', () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <UseSearch>
            <IntlProvider locale="en">
              <InfoFavorites />
            </IntlProvider>
          </UseSearch>
        </AuthProvider>
      </BrowserRouter>
    );

    expect(screen.getAllByRole('link').length).toBe(1);
    expect(screen.getByRole('link').getAttribute('href')).toBe('/video/undefined');
  });

  it('returns one favorite when there is only one video saved in local storage', () => {
    const id = 'HYyRZiwBWc8';
    render(
      <BrowserRouter>
        <AuthProvider>
          <UseSearch>
            <IntlProvider locale="en">
              <InfoFavorites key={{ id }} video={{ id }} />
            </IntlProvider>
          </UseSearch>
        </AuthProvider>
      </BrowserRouter>
    );

    expect(screen.getAllByRole('link').length).toBe(1);
    expect(screen.getByRole('link').getAttribute('href')).toBe('/video/[object Object]');
  });

  it('returns empty favorites page', () => {
    const { container } = render(
      <BrowserRouter>
        <AuthProvider>
          <UseSearch>
            <IntlProvider locale="en">
              <Favorites />
            </IntlProvider>
          </UseSearch>
        </AuthProvider>
      </BrowserRouter>
    );
    expect(container.outerHTML).toBe('<div></div>');
  });
});
