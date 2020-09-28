import React from 'react';
import { useParams } from 'react-router-dom';
import { useApi } from '../../API';
import { Detail } from '../../components/Videos';

const Video = () => {
  const { id } = useParams();
  const { isLoading, data } = useApi(
    'v3/search?part=snippet&key=AIzaSyC-mlQWTios8Z6H_7_-fRnw7k16QJezOUc&q=',
    id
  );
  return <Detail isLoading={isLoading} data={data} />;
};

export default Video;
