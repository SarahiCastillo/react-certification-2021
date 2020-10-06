import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import IntlProvider from '../../components/i18n/I18nProvider';
import AuthProvider from '../../providers/Auth';
import Home from '../../pages/Home';

describe('Home page', () => {
  it('renders when the user is not logged', () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <IntlProvider locale="en">
            <Home />
          </IntlProvider>
        </AuthProvider>
      </BrowserRouter>
    );

    expect(screen.getAllByRole('link').length).toBe(1);
  });
});
