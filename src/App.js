import { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import Login from './components/Login';
import Items from './components/Items';
import CartModal from './UI/CartModal';

import { useSelector, useDispatch } from 'react-redux';

import { sendData, getData } from './Database/database';

import { cartActions } from './store/cart-slice';

let isInitial = true;

const App = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const isItemFetched = sessionStorage.getItem('isItemFetched') ? true : false;

  if (!sessionStorage.getItem('isItemFetched')) {
    sessionStorage.setItem('isItemFetched', true);
  }

  if (!isItemFetched) {
    console.log('Fetching Data!');
  }

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const [isCartShown, setIsCartShown] = useState(false);

  const clickCartHandler = () => {
    setIsCartShown(prevValue => !prevValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      const databaseData = await getData();
      dispatch(cartActions.loadPageWithCart(databaseData));
    };

    fetchData();
     
  }, []);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    sendData(cart);
  }, [cart]);

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
