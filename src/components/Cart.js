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
                <img src="/img/ip15proMaxBlackTitan.webp" alt="" />
                <div>
                    <p>Iphone 15 Pro Max <br /> 128 гб Black</p>
                    <span>12 999 руб.</span>
                    <div><img src="/img/cross.svg" alt="" /></div>
                </div>
                </div>
                <div className="cart__elem">
                <img src="/img/ip15proWhite.webp" alt="" />
                <div>
                    <p>Iphone 15 Pro <br /> 128 гб White</p>
                    <span>12 999 руб.</span>
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