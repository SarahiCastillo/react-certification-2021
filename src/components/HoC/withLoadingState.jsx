import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const withLoadingState = (WrappedComponent) => {
  const ComponentWithLoader = ({ isLoading, ...props }) => {
    if (isLoading) {
      return (
        <Dimmer active>
          <Loader size="massive" />
        </Dimmer>
      );
    }

    return <WrappedComponent {...props} />;
  };

  return ComponentWithLoader;
};

export default withLoadingState;
