import React from 'react'
import styles from './NotFound.module.scss'

function App() {
  console.log(styles)
  return (
    <div className={styles.root}>
      <h1>Такая страница не найдена</h1>
      <p>К сожалению данная страница отсутствует в нашем интернет-магазине</p>
    </div>
  );
}

export default App;
