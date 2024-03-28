function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLogo">
          <img src="/img/ico.png" alt="" />
          <div className="headerLogo__title">
            <h2>Apple React Store</h2>
            <p>Магазин apple техники</p>
          </div>
        </div>
        <ul className="headerList">
          <li><img src="/img/basket.svg" alt="" /></li>
          <li>1000 руб.</li>
          <li><img src="/img/like.svg" alt="" /></li>
          <li><img src="/img/account.svg" alt="" /></li>
        </ul>
      </header>
      <div className="content">
        <h1>Все смартфоны</h1>
        <div className="phones">
          <div className="phones__elem">
            <img src="/img/ip15proMaxBlackTitan.webp" alt="" />
            <p>Iphone 15 Pro Max</p>
            <div>ЦЕНА:</div>
            <b>12 999 руб.</b>
          </div>
          <div className="phones__elem">
            <img src="/img/ip15proWhite.webp" alt="" />
            <p>Iphone 15 Pro</p>
            <div>ЦЕНА:</div>
            <b>12 999 руб.</b>
          </div>
          <div className="phones__elem">
            <img src="/img/ip15proBlackTitan.webp" alt="" />
            <p>Iphone 15 Pro</p>
            <div>ЦЕНА:</div>
            <b>12 999 руб.</b>
          </div>
          <div className="phones__elem">
            <img src="/img/ip14blue.webp" alt="" />
            <p>Iphone 14 Iphone 14 Iphone 14</p>
            <div className="phones__elem-price">
              <div>
                <div>ЦЕНА:</div>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img src="/img/plus.svg" alt="" />
              </button>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
