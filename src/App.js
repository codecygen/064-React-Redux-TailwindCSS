import { useState } from 'react';

import './App.css';

import Navbar from './components/Navbar';
import Login from './components/Login';
import Items from './components/Items';
import CartModal from './UI/CartModal';



const App = () => {
  const [isCartShown, setIsCartShown] = useState(false);

  const clickCartHandler = () => {
    console.log('clicked!');
    setIsCartShown(prevValue => !prevValue);
  };

  return (
    <div>
      <Navbar clickCartHandler={clickCartHandler} />
      <Login />
      <Items />
      {isCartShown && <CartModal clickCartHandler={clickCartHandler} />}
    </div>
  );
};

export default App;
