function Cart() {
    return (
        <div className="overlay">
            <div className="cart">
                <div className="cart__title">
                    <h2>Корзина</h2>
                    <div><img src="/img/cross.svg" alt="" /></div>
                </div>
                <div className="cart__block">
                    <div className="cart__elem">
                        <img src='' alt="" />
                        <div>
                            <p>Заголовок</p>
                            <span>2000 руб.</span>
                            <div><img src="/img/cross.svg" alt="" /></div>
                        </div>
                    </div>
                </div>
                <div className="cart__order">
                    <div className="total">
                    <span>Итого:</span>
                    <span className="underline"></span>
                    <span className="total__price">12345 руб.</span>
                    </div>
                    <div className="cart__btn">
                    <span>Оформить заказ</span>
                    <img src="/img/arrow-right.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart