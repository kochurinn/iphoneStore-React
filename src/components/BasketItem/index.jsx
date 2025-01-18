import { useDispatch, useSelector } from 'react-redux'
import styles from './BasketItem.module.scss'
import { removeProduct, plusCount, minusCount } from '../../redux/slices/basketSlice'
import { useEffect } from 'react'

const BasketItem = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.basketSlice.products)

    const onClickRemove = (product) => {
        dispatch(removeProduct(product))
    }

    const onClickPlus = (product) => {
        dispatch(plusCount(product, product.count))
    }

    const onClickMinus = (product) => {
        dispatch(minusCount(product))
    }

    useEffect(() => {
        console.log(products)
    }, [products])

    return (
        <div>
            {
                products.map((product) => (
                    <div key={product.id} className={styles.product}>
                        <div className={styles.product__preview}>
                            <img className={styles.product__preview__img} src={product.imgUrl} alt="" />
                            <div className={styles.product__preview__name} >
                                <span>{product.title}</span>
                                <span>{product.subtitle}</span>
                            </div>
                        </div>
                        <div className={styles.product__count}>
                            <img
                                src="img\minus_in_circle.svg"
                                alt=""
                                onClick={() => onClickMinus(product)}
                            />
                            <span>{product.count}</span>
                            <img
                                src="img\plus_in_circle.svg"
                                alt="" 
                                onClick={() => onClickPlus(product)}
                            />
                        </div>
                        <div className={styles.product__price}>{product.price} руб.</div>
                        <div 
                            className={styles.product__remove}
                            onClick={() => onClickRemove(product)}
                        >
                            <img src="img\plus_in_circle.svg" alt="" />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default BasketItem