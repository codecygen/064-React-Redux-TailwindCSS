import { useState } from 'react';

import Navbar from './components/Navbar';
import Login from './components/Login';
import Items from './components/Items';
import CartModal from './UI/CartModal';



const App = () => {
  const [isCartShown, setIsCartShown] = useState(false);

  const clickCartHandler = () => {
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
