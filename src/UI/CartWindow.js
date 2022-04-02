import React from 'react';

import CartCard from './CartCard';

import laptop from '../assets/images/laptop.jpg';
import headset from '../assets/images/headset.jpg';
// import keyboard from '../assets/images/keyboard.jpeg';
// import mouse from '../assets/images/mouse.jpeg';
// import monitor from '../assets/images/monitor.jpg';
// import vrHeadset from '../assets/images/vrHeadset.jpg';

const CartWindow = props => {
    return (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 px-2 sm:w-100 lg:w-128 lg:px-16 bg-blue z-50 bg-[rgba(197,206,231,0.95)] rounded-md shadow-2xl text-right">
            <h1 className="text-3xl font-bold pt-10 pb-5 text-center">Cart</h1>

            <div className="overflow-y-scroll max-h-48 sm:max-h-72 lg:max-h-96 px-6 shadow-lg bg-slate-300">
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

            <div className="flex flex-row text-right py-8 pr-10 items-center">
                <h1 className="text-2xl font-bold w-5/6">Subtotal</h1>
                <p className="text-2xl font-semibold w-1/6">$3000</p>
            </div>

            <button className="bg-red-800 hover:bg-red-900 text-white font-bold rounded-xl p-3 mb-5 shadow-2xl mr-5 px-5"
                onClick={props.clickCartHandler}
            >
                Close
            </button>
            <button className="bg-violet-800 hover:bg-violet-900 text-white font-bold rounded-xl p-3 mb-5 shadow-2xl">
                Checkout
            </button>
        </div>
    );
};

export default CartWindow;