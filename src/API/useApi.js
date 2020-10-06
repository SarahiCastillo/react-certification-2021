import { useState, useEffect } from 'react';
import API from './API';

const useApi = (entity, id) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    API.getEntity(entity, id).then((response) => {
      setData(response);
      setIsLoading(false);
    });
  }, [entity, id]);

  return { isLoading, data };
};

export default useApi;
