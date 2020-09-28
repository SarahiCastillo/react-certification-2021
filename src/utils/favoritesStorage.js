const favoritesStorage = {
  getFavorites(id) {
    try {
      const video = localStorage.getItem(id);
      console.log('store videos', video);
      return video;
    } catch (error) {
      console.error(`Error parsing storage item "${id}".`);
      return null;
    }
  },

  setFavorites(videoId) {
    console.log('adding', videoId);
    if (videoId !== this.getFavorites(videoId)) {
      localStorage.setItem(JSON.stringify(videoId), JSON.stringify(videoId));
    }
  },
};

export { favoritesStorage };
