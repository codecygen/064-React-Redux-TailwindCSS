import './App.css';

import Navbar from './components/Navbar';
import Login from './components/Login';
import Items from './components/Items';

const App = () => {
  return (
    <div>
      <Navbar />

      {/* The top container allows tailwind to center the element */}
      {/* <div class="flex h-screen">
        <Login />
      </div> */}

      <div class="mx-36">
        <Items />
      </div>
    </div>
  );
};

export default App;
