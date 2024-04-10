import React from 'react'
import Cart from './components/Cart'
import Header from './components/Header'
import Card from './components/Card'

function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [openCart, setOpenCart] = React.useState(false)

  React.useEffect(() => {
    fetch('https://6616c60ced6b8fa434815662.mockapi.io/items')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch(() => {throw new Error('Ошибка')})
  }, [])

  return (
    <div className="wrapper">
      {openCart && <Cart items = {cartItems} onClose = {() => {setOpenCart(false)}}/>}
      <Header onClickCart = {() => {setOpenCart(true)}}/>
      <div className="content">
        <div className="title">
          <h1>Все смартфоны</h1>
          <div>
            <img src="/img/search.svg" alt="" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="phones">
          {items.map(card => (
            <Card 
              title = {card.title} 
              price = {card.price} 
              imgCard = {card.imgUrl}
              onLike = {() => {console.log('Кликнул на лайк')}}
              onAdd = {() => {console.log('Кликнул на добавление в карзину')}}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
