import { Link } from "react-router-dom"
import Search from "./Search/Search"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"

function Header() {

    const basketProducts = useSelector(state => state.basketSlice.products)

    const [fullPrice, setFullPrice] = useState(0)

    useEffect(() => {
        if (basketProducts.length) {
            setFullPrice(basketProducts.reduce((sum, obj) => sum + (obj.price * obj.count), 0))
            return
        }
        setFullPrice(0)   
    }, [basketProducts])

    return (
        <header>
            <div className="headerLogo">
                <img src="/img/ico.png" alt="" />
                <div className="headerLogo__title">
                    <Link to='/'>
                        <h2>Apple React Store</h2>
                        <p>Магазин apple техники</p>
                    </Link>
                </div>
            </div>
            <div className="headerRight">
                <Search />
                <ul className="headerList">
                    <Link to='/basket'>
                        <li className="basket">
                            
                                <img src="/img/basket.svg" alt="" />
                                <span>{fullPrice} руб.</span>
                            
                        </li>
                    </Link>
                    <li><img src="/img/like.svg" alt="" /></li>
                    <li><img src="/img/account.svg" alt="" /></li>
                </ul>
            </div>
        </header>
    )
}
export default Header