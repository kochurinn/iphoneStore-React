import React from "react"
import styles from "./Basket.module.scss"

const Basket = () => {
    return (
        <div className={styles.basket}>
            <div className={styles.header}>
                <div className={styles.h1}>
                    <img src="img/basket.svg" alt="" />
                    <h1>Корзина</h1>
                </div>
                <div className={styles.cleanBasket}>
                    <img src="img/trashcan.svg" alt="" />
                    <span>Очистить корзину</span>
                </div>
            </div>
            <div className={styles.product}>
                <div className={styles.product__preview}>
                    <img className={styles.product__preview__img} src="img\ip14blue.webp" alt="" />
                    <div className={styles.product__preview__name} >
                        <span>Iphone 14</span>
                        <span>blue / 128 gb</span>
                    </div>
                </div>
                <div className={styles.product__count}>
                    <img src="img\minus_in_circle.svg" alt="" />
                    <span>2</span>
                    <img src="img\plus_in_circle.svg" alt="" />
                </div>
                <div className={styles.product__price}>770 Р</div>
                <div className={styles.product__remove}>
                    <img src="img\plus_in_circle.svg" alt="" />
                </div>
            </div>
            <div className={styles.product}>
                <div className={styles.product__preview}>
                    <img className={styles.product__preview__img} src="img\ip14blue.webp" alt="" />
                    <div className={styles.product__preview__name} >
                        <span>Iphone 14</span>
                        <span>blue / 128 gb</span>
                    </div>
                </div>
                <div className={styles.product__count}>
                    <img src="img\minus_in_circle.svg" alt="" />
                    <span>2</span>
                    <img src="img\plus_in_circle.svg" alt="" />
                </div>
                <div className={styles.product__price}>770 Р</div>
                <div className={styles.product__remove}>
                    <img src="img\plus_in_circle.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Basket