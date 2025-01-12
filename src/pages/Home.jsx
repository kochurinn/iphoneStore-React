import React, { useState, useEffect } from "react"
import Card from '../components/Card'
import Skeleton from '../components/Card/Skeleton'
import Categories from "../components/Categories"
import Sort from "../components/Sort"
import Pagination from "../components/Pagination"
import { useSelector } from "react-redux"

const Home = () => {

    const activeCategoryType = useSelector((state) => state.filterSlice.categoryType)
    const sortBy = useSelector((state) => state.sortSlice.sortBy)
    const activePage = useSelector((state) => state.paginationSlice.activePage)

    const [phones, setPhones] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const searchValue = ''
    
    useEffect(() => {
        setIsLoading(true)
        fetch(`
            https://6616c60ced6b8fa434815662.mockapi.io/items?${
            `page=${activePage + 1}&limit=4&`
            }${
            activeCategoryType ? `category=${activeCategoryType}&` : ''
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
    }, [activeCategoryType, sortBy, activePage])

    const skeletons = [...new Array(4)].map((_, i) => <Skeleton key={i} />)
    const filterPhonesBySearch = phones.filter(phone => phone.title.toLowerCase().includes(searchValue.toLowerCase()))
    const cards = filterPhonesBySearch.map((card, i) => <Card key={i} {...card} />)
    
    return (
        <>
        <div className="title">
            <h1>Все смартфоны</h1>
            <Sort />
        </div>
        <Categories />
        <div className="phones">
        {
            isLoading ? skeletons : cards
        }
        </div>
        <Pagination />
        </>
    )
}

export default Home