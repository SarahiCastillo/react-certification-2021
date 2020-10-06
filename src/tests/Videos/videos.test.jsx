import React from 'react';
import { render } from '@testing-library/react';
import API from '../../API/API';
import IntlProvider from '../../components/i18n/I18nProvider';
import AuthProvider from '../../providers/Auth';
import List from '../../components/Videos/List';
import Info from '../../components/Videos/Info';
import { routeName } from '../API/mocks/api.mocks';
import '@testing-library/jest-dom/extend-expect';

describe('Videos', () => {
  it('returns loading when data is empty', () => {
    const { container } = render(<List />);

    expect(container.outerHTML).toEqual('<div>Loading...</div>');
  });

  it('renders a video when data contains API reponse', () => {
    const idv = 'HYyRZiwBWc8';
    const id = {
      videoId: 'HYyRZiwBWc8',
    };
    const { container } = render(
      <AuthProvider>
        <IntlProvider locale="en">
          <Info key={{ idv }} video={{ id }} />
        </IntlProvider>
      </AuthProvider>
    );
    expect(container.outerHTML).toBe('<div><div id="cardsContainer"></div></div>');
  });

  it('returns loading when data is empty', async () => {
    const loading = false;
    const result = await API.get(routeName);
    const { container } = render(
      <AuthProvider>
        <IntlProvider locale="en">
          <List isLoading={{ loading }} data={{ result }} />
        </IntlProvider>
      </AuthProvider>
    );

    expect(container.outerHTML).toBe(
      '<div><div class="ui active transition visible dimmer" style="display: flex;"><div class="content"><div class="ui massive loader"></div></div></div></div>'
    );
  });
});
