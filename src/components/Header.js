import { Link } from "react-router-dom"
import Search from "./Search/Search"

function Header() {
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
                                <span>0 руб.</span>
                            
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