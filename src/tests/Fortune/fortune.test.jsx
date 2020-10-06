import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import IntlProvider from '../../components/i18n/I18nProvider';
import AuthProvider from '../../providers/Auth';
import Fortune from '../../components/Fortune';

describe('Private', () => {
  it('renders Video as private page', () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <IntlProvider locale="en">
            <Fortune />
          </IntlProvider>
        </AuthProvider>
      </BrowserRouter>
    );
  });
});
