import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import IntlProvider from '../../components/i18n/I18nProvider';
import AuthProvider from '../../providers/Auth';
import NotFound from '../../pages/NotFound/NotFound.page';

describe('Not found page', () => {
  it('renturns not found page', () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <IntlProvider locale="en">
            <NotFound />
          </IntlProvider>
        </AuthProvider>
      </BrowserRouter>
    );
    expect(screen.getAllByRole('link').length).toBe(1);
    expect(screen.getAllByRole('img').length).toBe(1);
  });
});
