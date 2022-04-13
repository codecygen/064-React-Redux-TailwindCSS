import React from 'react';

import CartCard from './CartCard';

import { useSelector } from 'react-redux';

// import keyboard from '../assets/images/keyboard.jpeg';
// import mouse from '../assets/images/mouse.jpeg';
// import monitor from '../assets/images/monitor.jpg';
// import vrHeadset from '../assets/images/vrHeadset.jpg';

const CartWindow = props => {
    const sumPrice = useSelector(state => state.cart.sumPrice);
    const cartItems = useSelector(state => state.cart.cartItems);

    const cartCards = cartItems.map(item => (
        <CartCard
            key = {item.id}
            id = {item.id}
            desc={item.desc}
            price={item.price}
            quantity={item.quantity}
        />
    ));

    return (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 px-2 sm:w-100 lg:w-128 lg:px-16 bg-blue z-50 bg-[rgba(197,206,231,0.95)] rounded-md shadow-2xl text-right">
            <h1 className="text-3xl font-bold pt-10 pb-5 text-center">Cart</h1>

            <div className="overflow-y-scroll max-h-48 sm:max-h-72 lg:max-h-96 px-6 shadow-lg bg-slate-300">
                {cartCards}
            </div>

            <div className="flex flex-row justify-end py-5">
                <div className="flex flex-col text-right pr-10">
                    <h1 className="text-xl">Price:</h1>
                    <h1 className="text-xl">HST:</h1>
                    <h1 className="text-xl font-semibold">Subtotal:</h1>
                </div>

                <div className="flex flex-col text-right">
                    <p className="text-xl">${sumPrice.total}</p>
                    <p className="text-xl">${sumPrice.hst}</p>
                    <p className="text-xl font-semibold">${sumPrice.subTotal}</p>
                </div>
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