import { createContext, useEffect, useState } from "react";


export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
      const [favorites, setFavorites] = useState([]);
      const [searchResults, setSearchResults] = useState([]);
      const [darkMode, setDarkMode] = useState(false);


      useEffect(() => {
            localStorage.setItem('favorites', JSON.stringify(favorites));
      }, [favorites]);

      useEffect(() => {
            localStorage.setItem('searchResults', JSON.stringify(searchResults));
      }, [searchResults]);

      return (
            <MovieContext.Provider value={{ favorites, setFavorites, searchResults, setSearchResults, darkMode, setDarkMode }}>
                  {children}
            </MovieContext.Provider>
      );

};