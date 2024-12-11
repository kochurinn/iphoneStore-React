import React from 'react'

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <div className="title">
          <h1>Все смартфоны</h1>
          <div>
            <img src="/img/search.svg" alt="" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="phones">

        </div>
      </div>
    </div>
  );
}

export default App;
