function Header(props) {
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
                <li onClick={props.onClickCart}>
                    <img src="/img/basket.svg" alt="" />
                    <span>1000 руб.</span>
                </li>
                <li><img src="/img/like.svg" alt="" /></li>
                <li><img src="/img/account.svg" alt="" /></li>
            </ul>
        </header>
    )
}
export default Header