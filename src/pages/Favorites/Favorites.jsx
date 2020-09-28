import React from 'react';
import InfoFavorites from '../../components/Videos/InfoFavorites';

const Favorites = () => {
  const storage = Object.values(localStorage);
  const ids = storage.filter((id) => {
    if (id !== 'true') {
      return <InfoFavorites video={id} />;
    }
  });

  return (
    <>
      {ids
        ? ids.map((idv) => {
            return <InfoFavorites key={idv} video={idv} />;
          })
        : 'No favorites added...'}
    </>
  );
};

export default Favorites;
