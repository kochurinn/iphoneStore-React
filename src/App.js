import Cart from './components/Cart'
import Header from './components/Header'
import Card from './components/Card'

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
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
