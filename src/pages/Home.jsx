import React, { useState, useEffect, useCallback } from "react"
import Card from '../components/Card'
import Skeleton from '../components/Card/Skeleton'
import Categories from "../components/Categories"
import Sort from "../components/Sort"
import Pagination from "../components/Pagination"
import { useSelector, useDispatch } from "react-redux"
import { fetchProducts } from '../redux/slices/cardsSlice'
import debounce from "../utils/debounce"

const Home = () => {
    
    const dispatch = useDispatch()
    const activeCategoryType = useSelector((state) => state.filterSlice.categoryType)
    const sortBy = useSelector((state) => state.sortSlice.sortBy)
    const activePage = useSelector((state) => state.paginationSlice.activePage)
    const searchValue = useSelector((state) => state.searchSlice.searchValue)
    const { phones, status } = useSelector((state) => state.cardsSlice)

    const [localSearchValue, setLocalSearchValue] = useState('')

    const getProducts = () => {
        dispatch(fetchProducts({
            activeCategoryType,
            sortBy,
            activePage
        }))
    }

    useEffect(() => {
        getProducts()
    }, [])
    
    // useEffect(() => {
    //     // axios.get(`
    //     //     https://6616c60ced6b8fa434815662.mockapi.io/items?${
    //     //     `page=${activePage + 1}&limit=4&`
    //     //     }${
    //     //     activeCategoryType ? `category=${activeCategoryType}&` : ''
    //     //     }${
    //     //     sortBy ? `sortBy=price&order=${sortBy}` : ''
    //     //     }`
    //     // ).then((res) => {
    //     //     setPhones(res.data)
    //     //     setIsLoading(false)
    //     // })
    //     // .catch(() => {throw new Error('Данные не получены')})
    // }, [activeCategoryType, sortBy, activePage])

    const updateSearchValueWithDelay = useCallback(debounce(setLocalSearchValue, 250), [])

    useEffect(() => {
        updateSearchValueWithDelay(searchValue)
    }, [searchValue]);

    const skeletons = [...new Array(4)].map((_, i) => <Skeleton key={i} />)
    const filterPhonesBySearch = phones.filter(phone => phone.title.toLowerCase().includes(localSearchValue.toLowerCase()))
    const cards = filterPhonesBySearch.map((card, i) => <Card key={i} {...card} />)
    
    return (
        <>
        <div className="title">
            <h1>Все смартфоны</h1>
            <Sort />
        </div>
        <Categories />
        {
            status === 'error' ? (
                <div className="phones__error">
                    <h2>Извините, товары не найдены.</h2>
                    <p>Скорее всего ошибка на нашей стороне и мы уже пытаемся решить вопрос.</p>
                </div>
            ) : <div className="phones">{status === 'loading' ? skeletons : cards}</div>
        }
        <Pagination />
        </>
    )
}

export default Home