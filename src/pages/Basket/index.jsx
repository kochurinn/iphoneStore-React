import React from "react"
import styles from "./Basket.module.scss"
import { Link } from "react-router-dom"
import BasketItem from "../../components/BasketItem"
import { removeList } from "../../redux/slices/basketSlice"
import { useDispatch } from "react-redux"

const Basket = () => {

    const dispatch = useDispatch()

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
            <div className={styles.btn}>
                <Link to='/' className={styles.back}>Вернуться назад</Link>
                <div className={styles.pay}>Оплатить онлайн</div>
            </div>
        </div>
    )
}

export default Basket