import { useState } from 'react';

import Navbar from './components/Navbar';
import Login from './components/Login';
import Items from './components/Items';
import CartModal from './UI/CartModal';

import { useSelector } from 'react-redux';

const App = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const [isCartShown, setIsCartShown] = useState(false);

  const clickCartHandler = () => {
    setIsCartShown(prevValue => !prevValue);
  };

  return (
    <div>
      <Navbar clickCartHandler={clickCartHandler} />
      {!isAuthenticated && <Login />}
      {isAuthenticated && <Items />}
      {isCartShown && <CartModal clickCartHandler={clickCartHandler} />}
    </div>
  );
};

export default App;
