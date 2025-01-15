import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home';
import NotFound from './pages/NotFound'
import Basket from './pages/Basket';
import { useDispatch, useSelector } from "react-redux"
import { setOpened } from './redux/slices/sortSlice'

function App() {
  const dispatch = useDispatch()
  const openedSort = useSelector((state) => state.sortSlice.opened)

  const onClick = () => {
    if (openedSort) {
      dispatch(setOpened(!openedSort))
      console.log('click outside')
    }
  }

  return (
    <div
      onClick={onClick}
      className="wrapper"
    >
      <Header />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/basket' element={<Basket />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
