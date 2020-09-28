import React from 'react';
// import { Grid } from 'semantic-ui-react';
import { withLoadingState } from '../HoC';
import Info from './Info';

const VideosList = ({ data }) => {
  console.log('data.items.', data.items);
  return (
    // <Grid stackable columns={4}>
    <>
      {data
        ? data.items.map((item) => {
            return <Info key={item.id.videoId} video={item} />;
          })
        : 'Loading...'}
    </>
    // </Grid>
  );
};

export default withLoadingState(VideosList);
