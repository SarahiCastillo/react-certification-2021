import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import IntlProvider from '../../components/i18n/I18nProvider';
import AuthProvider from '../../providers/Auth';
import App from '../../components/App/App.component';

describe('App', () => {
  it('renders app', () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <IntlProvider locale="en">
            <App />
          </IntlProvider>
        </AuthProvider>
      </BrowserRouter>
    );
    expect(screen.getAllByRole('link').length).toBe(5);
    expect(screen.getByTestId('home').getAttribute('href')).toBe('/');
    expect(screen.getByTestId('videos').getAttribute('href')).toBe('/videos');
    expect(screen.getByTestId('favoritos').getAttribute('href')).toBe('/favorites');
  });
});
