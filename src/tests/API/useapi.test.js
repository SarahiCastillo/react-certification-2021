import useApi from '../../API/useApi';
import { entity, apiResponseVideo } from './mocks/api.mocks';
import '@testing-library/jest-dom/extend-expect';

describe('API', () => {
  it('calls the API with search value', async () => {
    const id = 'HYyRZiwBWc8';
    const { data } = await useApi(entity, id);
    await expect(data).toEqual(apiResponseVideo);
  });
});
