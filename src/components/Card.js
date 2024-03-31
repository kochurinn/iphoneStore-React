function Card() {
    return (
        <div className="phones__elem">
            <img className="phones__elem-productImg" src="/img/ip15proMaxBlackTitan.webp" alt="" />
            <p>Iphone 15 Pro Max <br /> 128 гб Black</p>
            <div className="phones__elem-price">
              <div>
                <span>ЦЕНА:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
    )
}
export default Card