import Cart from './components/Cart'
import Header from './components/Header'
import Card from './components/Card'

const objCard = [
  {
    title: 'Iphone 15 Pro Max 128 гб Black',
    price: 109000,
    imgUrl: './img/ip15proMaxBlackTitan.webp'
  },
  {
    title: 'Iphone 15 Pro 128 гб Black',
    price: 101000,
    imgUrl: './img/ip15proBlackTitan.webp'
  },
  {
    title: 'Iphone 15 Pro 128 гб White',
    price: 102000,
    imgUrl: './img/ip15proWhite.webp'
  },
  {
    title: 'Iphone 14 128 гб Blue',
    price: 72000,
    imgUrl: './img/ip14blue.webp'
  },
]

function App() {
  return (
    <div className="wrapper">
      <Cart />
      <Header />
      <div className="content">
        <div className="title">
          <h1>Все смартфоны</h1>
          <div>
            <img src="/img/search.svg" alt="" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="phones">
          {objCard.map(card => {
            return <Card title={card.title} price={card.price} img={card.imgUrl} />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
