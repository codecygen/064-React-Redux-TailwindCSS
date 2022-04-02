import React from 'react';
import ReactDOM from 'react-dom';

import CartWindow from './CartWindow';

const CartBackdrop = props => {
    return (
        <div className="fixed top-0 left-0 h-screen w-screen bg-[rgba(22,51,50,0.5)] z-10"
          onClick={props.clickCartHandler} 
        >
            {/* Backdrop */}
        </div>
    );
};

const CartModal = props => {
  return (
    <>
        {ReactDOM.createPortal(<CartBackdrop clickCartHandler={props.clickCartHandler} />, document.getElementById("backdrop-root"))}
        {ReactDOM.createPortal(<CartWindow clickCartHandler={props.clickCartHandler} />, document.getElementById("overlay-root"))}
    </>
  );
};

export default CartModal;