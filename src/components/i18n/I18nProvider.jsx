import React, { useContext, useState, useMemo } from 'react';
import { IntlProvider } from 'react-intl';
import { english, spanish } from './translations';

const i18nContext = React.createContext(null);

const messages = {
  en: english,
  es: spanish,
};

export const useI18n = () => {
  const context = useContext(i18nContext);

  if (!context) {
    throw new Error('i18nContext is not present');
  }

  return context;
};

const I18nProvider = ({ children }) => {
  const [locale, setLocale] = useState('en');

  const contextValue = useMemo(() => ({ locale, setLocale }), [locale, setLocale]);

  return (
    <i18nContext.Provider value={contextValue}>
      <IntlProvider messages={messages[locale]} locale={locale} defaultLocale="en">
        {children}
      </IntlProvider>
    </i18nContext.Provider>
  );
};

export default I18nProvider;
