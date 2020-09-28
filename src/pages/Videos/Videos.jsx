import React from 'react';
import { useApi } from '../../API';
import { List } from '../../components/Videos';
import { useSearch } from '../../providers/Search';

const Videos = () => {
  const { value } = useSearch();
  const { isLoading, data } = useApi('v3/search?part=snippet&key=[AppID]&q=', value);

  return <List isLoading={isLoading} data={data} />;
};

export default Videos;
