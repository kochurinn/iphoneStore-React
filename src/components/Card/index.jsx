import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addProductOnMain, removeProduct } from '../../redux/slices/basketSlice'

function Card({id, title, subtitle, price, imgUrl}) {

  const dispatch = useDispatch()
  const products = useSelector(state => state.basketSlice.products)

  const [numberOfAddedItems, setNumberOfAddedItems] = useState(false)

  let thisProduct

  useEffect(() => {
    thisProduct = products.find(obj => obj.id === id)

    if (thisProduct) {
      setNumberOfAddedItems(thisProduct.added)
    }
  }, [products])

  const onClickAdd = () => {
    setNumberOfAddedItems(!numberOfAddedItems)

    const objParams = {
      id,
      title,
      subtitle,
      price,
      imgUrl
    }

    if (!numberOfAddedItems) {
      dispatch(addProductOnMain(objParams))
    }
    if (numberOfAddedItems) {
      dispatch(removeProduct(objParams))
    }
  }

  return (
      <div className="phones__elem">
         <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="Layer 54" id="Layer_54"><path class="cls-1" d="M16,28.72a3,3,0,0,1-2.13-.88L3.57,17.54a8.72,8.72,0,0,1-2.52-6.25,8.06,8.06,0,0,1,8.14-8A8.06,8.06,0,0,1,15,5.68l1,1,.82-.82h0a8.39,8.39,0,0,1,11-.89,8.25,8.25,0,0,1,.81,12.36L18.13,27.84A3,3,0,0,1,16,28.72ZM9.15,5.28A6.12,6.12,0,0,0,4.89,7a6,6,0,0,0-1.84,4.33A6.72,6.72,0,0,0,5,16.13l10.3,10.3a1,1,0,0,0,1.42,0L27.23,15.91A6.25,6.25,0,0,0,29,11.11a6.18,6.18,0,0,0-2.43-4.55,6.37,6.37,0,0,0-8.37.71L16.71,8.8a1,1,0,0,1-1.42,0l-1.7-1.7a6.28,6.28,0,0,0-4.4-1.82Z"/></g></svg>
        <img className="phones__elem-productImg" src={imgUrl} alt="" />
        <p>{title}</p>
        <div className="phones__elem-price">
          <div>
            <span>ЦЕНА:</span>
            <b>{price} руб.</b>
          </div>
          {numberOfAddedItems && (
            <div onClick={onClickAdd} className="checkmark">
              <img src="/img/checkmark.png" alt="" />
            </div>
          )}
          {!numberOfAddedItems && <img onClick={onClickAdd} src="/img/plus.svg" alt=""/>}
        </div>
      </div>
  )
}
export default Card