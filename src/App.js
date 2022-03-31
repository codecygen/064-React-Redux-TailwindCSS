import './App.css';

import Navbar from './components/Navbar';
import Login from './components/Login';
import Items from './components/Items';
import CartModal from './UI/CartModal';

const App = () => {
  return (
    <div>
      <Navbar />
      <Login />
      <Items />
      <CartModal />
    </div>
  );
};

export default App;
