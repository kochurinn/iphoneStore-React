function Card(props) {

  const onClickPlus = () => {
    alert('Вы нажали на плюсик')
  }

  return (
      <div className="phones__elem">
        <img className="phones__elem-productImg" src={props.img} alt="" />
        <p>{props.title}</p>
        <div className="phones__elem-price">
          <div>
            <span>ЦЕНА:</span>
            <b>{props.price} руб.</b>
          </div>
          <button onClick={onClickPlus}>
            <img src="/img/plus.svg" alt="" />
          </button>
        </div>
      </div>
  )
}
export default Card