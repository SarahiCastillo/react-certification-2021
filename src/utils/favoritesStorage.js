const favoritesStorage = {
  getFavorites(id) {
    try {
      const video = localStorage.getItem(id);
      return video;
    } catch (error) {
      console.error(`Error parsing storage item "${id}".`);
      return null;
    }
  },

  setFavorites(videoId) {
    if (videoId !== this.getFavorites(videoId)) {
      localStorage.setItem(JSON.stringify(videoId), videoId);
    }
  },
};

export { favoritesStorage };
