import React, { useState, useEffect } from 'react'
import Card from './components/Card'
import Header from './components/Header'
import Skeleton from './components/Card/Skeleton'

function App() {

  const [phones, setPhones] = useState([])
  const [openSort, setOpenSort] = useState(false)
  const arrSortName = ['возрастанию цены', 'убыванию цены']
  const [activeSortName, setActiveSortName] = useState(0)
  const selected = arrSortName[activeSortName]
  const [isLoading, setIsLoading] = useState(true)

  const onClickSortName = (i) => {
    setActiveSortName(i)
    setOpenSort(false)
  }

  useEffect(() => {
    fetch('https://6616c60ced6b8fa434815662.mockapi.io/items')
      .then(res => res.json())
      .then(data => {
        setPhones(data)
        setIsLoading(false)
      })
      .catch(() => {throw new Error('Данные не получены')})
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="title">
          <h1>Все смартфоны</h1>
          <div className='sort'>
            Сортировать по: <span className='sort-list' onClick={() => setOpenSort(!openSort)}>{selected}</span>
          </div>
          <div className={`sort-block ${openSort ? 'sort-block__active' : ''}`}>
            <ul>
              {arrSortName.map((sortName, i) => (
                <li
                  onClick={() => onClickSortName(i)}
                  className={i === activeSortName ? 'active' : ''}
                >
                  {sortName}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img src="/img/search.svg" alt="" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="phones">
          {
            isLoading ? [...new Array(4)].map((_, i) => <Skeleton key={i} />) : phones.map((card, i) => <Card key={i} {...card} />)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
