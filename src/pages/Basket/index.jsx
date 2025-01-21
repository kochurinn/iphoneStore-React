import React, { useEffect, useState } from "react"
import styles from "./Basket.module.scss"
import { Link } from "react-router-dom"
import BasketItem from "../../components/BasketItem"
import { removeList } from "../../redux/slices/basketSlice"
import { useDispatch, useSelector } from "react-redux"

const Basket = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.basketSlice.products)
    const [fullPrice, setFullPrice] = useState(0)

    useEffect(() => {
        setFullPrice(products.reduce((sum, obj) => sum + obj.price * obj.count, 0))
    }, [products])

    const onClickClearList = () => {
        dispatch(removeList())
    }

    return (
        <div className={styles.basket}>
            <div className={styles.header}>
                <div className={styles.h1}>
                    <img src="img/basket.svg" alt="" />
                    <h1>Корзина</h1>
                </div>
                <div className={styles.cleanBasket}>
                    <img src="img/trashcan.svg" alt="" />
                    <span onClick={onClickClearList}>Очистить корзину</span>
                </div>
            </div>
            <BasketItem />
            <div className={styles.fullPrice}>Итого: <span>{fullPrice}</span> руб.</div>
            <div className={styles.btn}>
                <Link to='/' className={styles.back}>Вернуться назад</Link>
                <div className={styles.pay}>Оплатить онлайн</div>
            </div>
        </div>
    )
}

export default Basket