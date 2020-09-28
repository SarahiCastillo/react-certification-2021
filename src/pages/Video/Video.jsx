import React from 'react';
import { useParams } from 'react-router-dom';
import { useApi } from '../../API';
import { Detail } from '../../components/Videos';

const Video = () => {
  const { id } = useParams();
  const { isLoading, data } = useApi('v3/search?part=snippet&key=[AppID]&q=', id);
  return <Detail isLoading={isLoading} data={data} />;
};

export default Video;
