import styles from './BasketItem.module.scss'

const BasketItem = () => {
    return (
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
    )
}

export default BasketItem