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
        <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-32 bg-blue z-50 text-center bg-red-300 rounded-md">
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