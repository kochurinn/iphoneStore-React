function Card(props) {

  return (
      <div className="phones__elem">
        <img onClick={props.onLike} className="phones__elem-favorite" src="/img/like.svg" alt="" />
        <img className="phones__elem-productImg" src={props.imgCard} alt="" />
        <p>{props.title}</p>
        <div className="phones__elem-price">
          <div>
            <span>ЦЕНА:</span>
            <b>{props.price} руб.</b>
          </div>
          <button onClick={props.onAdd}>
            <img src="/img/plus.svg" alt="" />
          </button>
        </div>
      </div>
  )
}
export default Card