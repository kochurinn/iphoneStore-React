import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home';
import NotFound from './pages/NotFound'
import Basket from './pages/Basket';
import { store } from './redux/store';
import { Provider } from 'react-redux';

function App() {

  return (
    <div className="wrapper">
      <Provider store={store}>
        <Header />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/basket' element={<Basket />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </div>
      </Provider>
    </div>
  );
}

export default App;
