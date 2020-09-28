import React from 'react';
import I18nProvider from './I18nProvider';

const withI18n = (WrappedComponent) => {
  const i18nComponent = (props) => {
    return (
      <I18nProvider>
        <WrappedComponent {...props} />
      </I18nProvider>
    );
  };

  return i18nComponent;
};

export default withI18n;
