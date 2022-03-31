import React from 'react';
import ReactDOM from 'react-dom';

const CartBackdrop = () => {
    return (
        <div class="fixed top-0 left-0 h-screen w-screen bg-[rgb(255,0,0,0.3)] z-10">
            {/* Backdrop */}
        </div>
    );
};

const CartOverlay = () => {
    return (
        <div class="fixed top-1/3 left-1/3 h-1/3 w-1/3 bg-blue z-50 overflow-hidden text-center bg-red-300 rounded-md">
            CartOverlay
        </div>
    );
};

const CartModal = () => {
  return (
    <>
        {ReactDOM.createPortal(<CartBackdrop />, document.getElementById("backdrop-root"))}
        {ReactDOM.createPortal(<CartOverlay />, document.getElementById("overlay-root"))}
    </>
  );
};

export default CartModal;