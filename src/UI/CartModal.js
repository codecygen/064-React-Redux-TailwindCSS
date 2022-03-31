import React from 'react';
import ReactDOM from 'react-dom';

const CartBackdrop = () => {
    return (
        <div>Backdrop</div>
    );
};

const CartOverlay = () => {
    return (
        <div class="py-10">CartCard</div>
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