import React from 'react';

import CartCard from './CartCard';

import laptop from '../assets/images/laptop.jpg';
import headset from '../assets/images/headset.jpg';
// import keyboard from '../assets/images/keyboard.jpeg';
// import mouse from '../assets/images/mouse.jpeg';
// import monitor from '../assets/images/monitor.jpg';
// import vrHeadset from '../assets/images/vrHeadset.jpg';

const CartWindow = () => {
    return (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-128 bg-blue z-50 bg-[rgba(197,206,231,0.95)] rounded-md shadow-2xl px-16 text-right">
            <h1 className="text-3xl font-bold pt-10 pb-5 text-center">Shopping Cart</h1>

            <div className="overflow-y-scroll max-h-96 px-6 shadow-lg bg-slate-300">
                <CartCard img={headset} desc="Headset" price="499" />
                <CartCard img={laptop} desc="Laptop" price="2439" />
                <CartCard img={laptop} desc="Laptop" price="2439" />
                <CartCard img={laptop} desc="Laptop" price="2439" />
                <CartCard img={laptop} desc="Laptop" price="2439" />
                <CartCard img={laptop} desc="Laptop" price="2439" />
                <CartCard img={laptop} desc="Laptop" price="2439" />
                <CartCard img={laptop} desc="Laptop" price="2439" />
                <CartCard img={laptop} desc="Laptop" price="2439" />
            </div>

            <div className="flex flex-row text-right py-8 items-center pr-1">
                <h1 className="text-2xl font-bold w-5/6">Subtotal</h1>
                <p className="text-2xl font-semibold w-1/6">$3000</p>
            </div>

            <button className="bg-violet-800 hover:bg-violet-900 text-white font-bold rounded-xl p-3 mb-5 shadow-2xl">
                Checkout
            </button>
        </div>
    );
};

export default CartWindow;