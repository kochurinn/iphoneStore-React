import React, { useState, useEffect } from "react"
import Card from '../components/Card'
import Skeleton from '../components/Card/Skeleton'

const Home = () => {

    const [phones, setPhones] = useState([])
    const [openSort, setOpenSort] = useState(false)
    const arrSortName = ['возрастанию цены', 'убыванию цены']
    const [activeSortName, setActiveSortName] = useState(0)
    const selected = arrSortName[activeSortName]
    const [isLoading, setIsLoading] = useState(true)
    const сategories = ['Все', 'Iphone 15', 'Iphone 14']
    const [activeCategory, setActiveCategory] = useState(0)

    const onClickSortName = (i) => {
        setActiveSortName(i)
        setOpenSort(false)
    }

    const onClickCategories = (i) => {
        setActiveCategory(i)
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
        <>
        <div className="title">
            <h1>Все смартфоны</h1>
            <div className='sort'>
                Сортировать по: <span className='sort-list' onClick={() => setOpenSort(!openSort)}>{selected}</span>
            </div>
            <div className={`sort-block ${openSort ? 'sort-block__active' : ''}`}>
                <ul>
                {
                    arrSortName.map((sortName, i) => (
                        <li
                            onClick={() => onClickSortName(i)}
                            className={i === activeSortName ? 'active' : ''}
                        >
                            {sortName}
                        </li>
                    ))
                }
                </ul>
            </div>
            <div>
                <img src="/img/search.svg" alt="" />
                <input type="text" placeholder="Поиск..." />
            </div>
        </div>
        <div className="сategories">
            <ul>
                {
                    сategories.map((category, i) => (
                        <li 
                            onClick={() => onClickCategories(i)}
                            className={i === activeCategory ? 'active' : ''} 
                        >
                            {category}
                        </li>
                    ))
                }
            </ul>
        </div>
        <div className="phones">
        {
            isLoading ? [...new Array(4)].map((_, i) => <Skeleton key={i} />) : phones.map((card, i) => <Card key={i} {...card} />)
        }
        </div>
        </>
    )
}

export default Home