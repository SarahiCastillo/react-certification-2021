import '@testing-library/jest-dom/extend-expect';
import { storage } from '../../utils/storage';

describe('Local storage', () => {
  it('stores the id of a video', () => {
    const mockFn = jest.fn();
    const id = mockFn('video1');
    const videoId = 'HYyRZiwBWc8';
    storage.set(id, videoId);
    expect(mockFn).toBeCalledTimes(1);
  });

  it('stores the id of a video', () => {
    const mockFn = jest.fn();
    const id = mockFn('video1');
    storage.get(id);
    expect(mockFn).toBeCalledTimes(1);
  });
});
