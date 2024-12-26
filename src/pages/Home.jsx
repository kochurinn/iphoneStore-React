import React, { useState, useEffect } from "react"
import Card from '../components/Card'
import Skeleton from '../components/Card/Skeleton'
import Categories from "../components/Categories"
import Sort from "../components/Sort"
import Search from "../components/Search"
import Pagination from "../components/Pagination"

const Home = () => {

    const [phones, setPhones] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [activeCategory, setActiveCategory] = useState(0)
    const [activeSortName, setActiveSortName] = useState(0)
    const [categoryBy, setCategoryBy] = useState(null)
    const [sortBy, setSortBy] = useState('asc')
    const [searchValue, setSearchValue] = useState('')
    const [activePage, setActivePage] = useState(0)

    const onClickCategories = (i, categoryId) => {
        setActiveCategory(i)
        setCategoryBy(categoryId)
    }

    const onClickSortName = (i, sortType) => {
        setActiveSortName(i)
        setSortBy(sortType)
    }

    const onChangeSearch = (value) => {
        setSearchValue(value)
    }

    const onChangeActivePage = (page) => {
        setActivePage(page)
    }
    
    useEffect(() => {
        setIsLoading(true)
        fetch(`
            https://6616c60ced6b8fa434815662.mockapi.io/items?${
            `page=${activePage + 1}&limit=4&`
            }${
            categoryBy ? `category=${categoryBy}&` : ''
            }${
            sortBy ? `sortBy=price&order=${sortBy}` : ''
            }
        `)
        .then(res => res.json())
        .then(data => {
            setPhones(data)
            setIsLoading(false)
            console.log("Запрос выполнен")
        })
        .catch(() => {throw new Error('Данные не получены')})
    }, [activeCategory, activeSortName, categoryBy, sortBy, activePage])

    const skeletons = [...new Array(4)].map((_, i) => <Skeleton key={i} />)
    const filterPhonesBySearch = phones.filter(phone => phone.title.toLowerCase().includes(searchValue.toLowerCase()))
    const cards = filterPhonesBySearch.map((card, i) => <Card key={i} {...card} />)
    
    return (
        <>
        <div className="title">
            <h1>Все смартфоны</h1>
            <Sort 
                value={activeSortName} 
                onChange={onClickSortName} 
            />
            <Search 
                onChangeSearch={onChangeSearch}
                searchValue={searchValue}
            />
        </div>
        <Categories 
            value={activeCategory} 
            onChange={onClickCategories}
        />
        <div className="phones">
        {
            isLoading ? skeletons : cards
        }
        </div>
        <Pagination 
            onChange={onChangeActivePage}
            value={activePage}
        />
        </>
    )
}

export default Home