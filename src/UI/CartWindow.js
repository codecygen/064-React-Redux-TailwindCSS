import React from 'react';

import CartCard from './CartCard';

import laptop from '../assets/images/laptop.jpg';
import headset from '../assets/images/headset.jpg';
import keyboard from '../assets/images/keyboard.jpeg';
import mouse from '../assets/images/mouse.jpeg';
import monitor from '../assets/images/monitor.jpg';
import vrHeadset from '../assets/images/vrHeadset.jpg';

const CartWindow = () => {
    return (
        <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-128 bg-blue z-50 text-center bg-red-300 rounded-md">
            <h1 class="text-3xl font-bold py-5">Shopping Cart</h1>
            <CartCard img={headset} desc="Headset" price="499" />
            <CartCard img={laptop} desc="Laptop" price="2439" />
        </div>
    );
};

export default CartWindow;