import React from 'react';

import ItemCard from './ItemCard';

import Laptop from '../assets/images/Laptop.jpg';
import Headset from '../assets/images/Headset.jpg';
import Keyboard from '../assets/images/Keyboard.jpg';
import Mouse from '../assets/images/Mouse.jpg';
import Monitor from '../assets/images/Monitor.jpg';
import VR from '../assets/images/VR.jpg';

import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';

const itemList = [
    {
        id: 'a0',
        image: Laptop,
        description: 'Laptop',
        price: 2439
    },

    {
        id: 'a1',
        image: Headset,
        description: 'Headset',
        price: 499
    },

    {
        id: 'a2',
        image: Keyboard,
        description: 'Keyboard',
        price: 89.99
    },

    {
        id: 'a3',
        image: Mouse,
        description: 'Mouse',
        price: 45.99
    },

    {
        id: 'a4',
        image: Monitor,
        description: 'Monitor',
        price: 158.89
    },

    {
        id: 'a5',
        image: VR,
        description: 'VR',
        price: 739
    },
];

itemList.forEach(item => console.log(item.image));

const Items = () => {

    const dispatch = useDispatch();

    const addItemHandler = itemObject => {
        dispatch(cartActions.addItem(itemObject));
    };

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