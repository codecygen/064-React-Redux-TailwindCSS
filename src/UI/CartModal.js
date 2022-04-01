import React from 'react';
import ReactDOM from 'react-dom';

import CartWindow from './CartWindow';

const CartBackdrop = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-screen bg-[rgba(22,51,50,0.5)] z-10">
            {/* Backdrop */}
        </div>
    );
};

const CartModal = () => {
  return (
    <>
        {ReactDOM.createPortal(<CartBackdrop />, document.getElementById("backdrop-root"))}
        {ReactDOM.createPortal(<CartWindow />, document.getElementById("overlay-root"))}
    </>
  );
};

export default CartModal;