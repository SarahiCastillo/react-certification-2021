import React from 'react';
import { withLoadingState } from '../HoC';
import Info from './Info';

const VideosList = ({ data }) => {
  return (
    <>
      {data
        ? data.items.map((item) => {
            return <Info key={item.id.videoId} video={item} />;
          })
        : 'Loading...'}
    </>
  );
};

export default withLoadingState(VideosList);
