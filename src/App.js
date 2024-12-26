import React, { useState, createContext } from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home';
import NotFound from './pages/NotFound'
import Basket from './pages/Basket';

export const SearchContext = createContext()

function App() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/basket' element={<Basket />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
