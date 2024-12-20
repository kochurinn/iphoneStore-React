import React, { useState, useEffect } from "react"
import Card from '../components/Card'
import Skeleton from '../components/Card/Skeleton'
import Categories from "../components/Categories"
import Sort from "../components/Sort"

const Home = () => {

    const [phones, setPhones] = useState([])
    
    
    
    const [isLoading, setIsLoading] = useState(true)
    

    

    

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
            <Sort />
            <div>
                <img src="/img/search.svg" alt="" />
                <input type="text" placeholder="Поиск..." />
            </div>
        </div>
        <Categories />
        <div className="phones">
        {
            isLoading ? [...new Array(4)].map((_, i) => <Skeleton key={i} />) : phones.map((card, i) => <Card key={i} {...card} />)
        }
        </div>
        </>
    )
}

export default Home