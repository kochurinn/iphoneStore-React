import { useState } from "react"
import Cart from "./Cart"

function Header(props) {

    const [openCart, setOpenCart] = useState(false)

    return (
        <header>
            <div className="headerLogo">
            <img src="/img/ico.png" alt="" />
            <div className="headerLogo__title">
                <h2>Apple React Store</h2>
                <p>Магазин apple техники</p>
            </div>
            </div>
            <ul className="headerList">
                <li className="basket" onClick={() => setOpenCart(!openCart)}>
                    <img src="/img/basket.svg" alt="" />
                    <span>0 руб.</span>
                </li>
                <li><img src="/img/like.svg" alt="" /></li>
                <li><img src="/img/account.svg" alt="" /></li>
            </ul>
            <Cart openCart={openCart} setOpenCart={setOpenCart}/>
        </header>
    )
}
export default Header