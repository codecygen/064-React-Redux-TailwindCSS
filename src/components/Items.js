import React from 'react';

import laptop from '../assets/images/laptop.jpg';
import headset from '../assets/images/headset.jpg';
import keyboard from '../assets/images/keyboard.jpeg';
import mouse from '../assets/images/mouse.jpeg';
import monitor from '../assets/images/monitor.jpg';
import vrHeadset from '../assets/images/vrHeadset.jpg';


import ItemCard from './ItemCard';

import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';

const itemList = [
    {
        id: 'a0',
        image: laptop,
        description: 'Laptop',
        price: 2439
    },

    {
        id: 'a1',
        image: headset,
        description: 'Headset',
        price: 499
    },

    {
        id: 'a2',
        image: keyboard,
        description: 'Keyboard',
        price: 89.99
    },

    {
        id: 'a3',
        image: mouse,
        description: 'Mouse',
        price: 45.99
    },

    {
        id: 'a4',
        image: monitor,
        description: 'Monitor',
        price: 158.89
    },

    {
        id: 'a5',
        image: vrHeadset,
        description: 'VR Headset',
        price: 739
    },
];

const Items = () => {

    const dispatch = useDispatch();

    const addItemHandler = itemObject => {
        dispatch(cartActions.addItem(itemObject));
    };

    const cartItems = useSelector(state => state.cart.cartItems);

    console.log(cartItems);

    const itemCards = itemList.map(item => (
        <ItemCard
            key={item.id}
            id={item.id}
            img={item.image}
            desc={item.description}
            price={item.price}
            addItemHandler={addItemHandler}
        />
    ));

    return (
        <section className="flex flex-row flex-wrap justify-center pb-16 gap-20 mx-10 md:mx-36 py-36">
            {itemCards}
        </section>
    );
};

export default Items;