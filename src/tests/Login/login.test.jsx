import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import IntlProvider from '../../components/i18n/I18nProvider';
import AuthProvider from '../../providers/Auth';
import Login from '../../pages/Login/Login.page';

describe('Login', () => {
  it('renders login page', () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <IntlProvider locale="en">
            <Login />
          </IntlProvider>
        </AuthProvider>
      </BrowserRouter>
    );

    expect(screen.getAllByRole('button').length).toBe(1);
    expect(screen.getAllByRole('textbox').length).toBe(1);
    expect(screen.getAllByRole('heading').length).toBe(1);
  });
});
