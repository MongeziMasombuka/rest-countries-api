import React, { useState, useContext, useEffect, createContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    setLoading(true);

    let url = 'https://restcountries.com/v2/all';

    if (query && query !== 'all') {
      const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
      if (regions.includes(query)) {
        url = `https://restcountries.com/v2/region/${query}`;
      } else {
        url = `https://restcountries.com/v2/name/${query}`;
      }
    }

    try {
      const response = await fetch(url);
      const data = await response.json();

      // Handle API error response (e.g. "Not Found")
      if (data.status === 404) {
        setCountries([]);
      } else {
        setCountries(data);
      }
    } catch (error) {
      console.error('Failed to fetch countries:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, [query]);

  return (
    <AppContext.Provider value={{ loading, countries, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export { AppProvider, AppContext };
