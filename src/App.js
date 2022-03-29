import './App.css';

import Navbar from './components/Navbar';
import Login from './components/Login';

const App = () => {
  return (
    <div>
      {/* <div class="p-6 max-w-sm mx-auto bg-white dark:bg-black rounded-xl shadow-lg">
        <div class="text-center">
          <div class="text-xl font-medium text-black">ChitChat</div>
          <p class="text-slate-500">You have a new message!</p>
          <button class="bg-sky-600 hover:bg-sky-700 ...">Hit</button>
        </div>
      </div>

      <div class="mx-auto text-center columns-1 md:columns-3 gap-2 hover:columns-2">
        <p>Aras</p>
        <p>Aras</p>
        <p>Aras</p>
        <p>Aras</p>
        <p>Aras</p>
        <p>Aras</p>
      </div>

      <div class="mx-auto max-w-md text-center p-12">
        <p>Maybe we can live without...</p>
        <p class="break-after-column">Sure, go ahead, laugh...</p>
        <p class="break-inside-avoid-column">Maybe we can live without...Maybe we can live without...Maybe we can live without...Maybe we can live without...</p>
      </div>

      <div class="bg-yellow-300 w-32 text-center mx-auto rounded-xl">
        <p class="p-6 box-border">Aras Aras Aras Aras Aras Aras Aras</p>
        <p class="p-6 box-border">Aras Aras Aras Aras</p>
      </div>

      <div class="items-center h-20 max-auto mx-w-md bg-yellow-600">
        <div>Aras</div>
        <div>
          <strong>Aras Sen</strong>
          <span>Web Developer</span>
        </div>
      </div>

      <img src={reactLogo} /> */}

      <Navbar />

      {/* The top container allows tailwind to center the element */}
      <div class="flex h-screen">
        < Login />
      </div>
    </div>
  );
};

export default App;
