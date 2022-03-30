import React from 'react';

import laptop from '../assets/images/laptop.jpg';
import headset from '../assets/images/headset.jpg';
import ItemCard from './ItemCard';

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
];

const itemCards = itemList.map(item => (
    <ItemCard
        img={item.image}
        desc={item.description}
        price={item.price}
    />
));

const Items = () => {

    return (
        // <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 content-evenly py-36 col-span-7">
        <section class="flex flex-row flex-wrap justify-center py-36 gap-20">
            {itemCards}
        </section>
    );
};

export default Items;