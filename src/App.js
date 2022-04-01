// import { useState } from 'react';

import './App.css';

import Navbar from './components/Navbar';
import Login from './components/Login';
import Items from './components/Items';
// import CartModal from './UI/CartModal';

const clickCartHandler = () => {
  console.log('clicked!');
};

const App = () => {
  return (
    <div>
      <Navbar clickCartHandler={clickCartHandler} />
      <Login />
      <Items />
      {/* <CartModal /> */}
    </div>
  );
};

export default App;
