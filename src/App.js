import './index.scss';
import React from 'react';
import axios from 'axios';

import Home from './pages/Home';

function App() {
  const [itemsCard, setItemsCard] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://61e1efc43050a10017682058.mockapi.io/CardInfo').then(res => {
      setItemsCard(res.data);
    });
  }, []);

  return (
    <div className="App">
      <Home
        itemsCard={itemsCard}
      />
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
