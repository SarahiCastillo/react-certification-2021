import '@testing-library/jest-dom/extend-expect';
import { favoritesStorage } from '../../utils/favoritesStorage';

describe('Local storage', () => {
  it('stores the id of a video', () => {
    const mockFn = jest.fn();
    const id = mockFn('HYyRZiwBWc8');
    favoritesStorage.setFavorites(id);
    expect(mockFn).toBeCalledTimes(1);
  });

  it('stores the id of a video', () => {
    const mockFn = jest.fn();
    const id = mockFn('HYyRZiwBWc8');
    favoritesStorage.getFavorites(id);
    expect(mockFn).toBeCalledTimes(1);
  });
});
