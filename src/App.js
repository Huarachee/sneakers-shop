import './index.scss';
import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';

import { Home, Cart } from './pages/index';

function App() {
  const [itemsCard, setItemsCard] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://61e1efc43050a10017682058.mockapi.io/CardInfo').then(res => {
      setItemsCard(res.data);
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home itemsCard={itemsCard} />} exact />
        <Route path="/cart" element={<Cart/>} exact/>
      </Routes>
    </div>
  );
}

export default App;
