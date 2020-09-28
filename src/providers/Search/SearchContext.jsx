import React, { useState, useContext, useCallback } from 'react';

const SearchContext = React.createContext({
  value: {},
  setValue: () => {},
});

function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error(`Can't use "useSearch" without a SearchProvider!`);
  }
  return context;
}

function SearchProvider({ children }) {
  const [value, setValue] = useState('wizeline');

  const setNewValue = useCallback((newValue) => {
    setValue(newValue);
  }, []);

  return (
    <SearchContext.Provider value={{ value, setNewValue }}>
      {children}
    </SearchContext.Provider>
  );
}

export { useSearch };
export default SearchProvider;
