import React from 'react';

const ItemCard = props => {
    return (
        <div class="bg-violet-200 w-64 text-center p-5 rounded-lg shadow-2xl">
            <img src={props.img} class="rounded-xl h-32 mx-auto" alt="Display" />
            <p class="pt-5 text-xl italic">{props.desc}</p>

            <p class="pt-5 pb-5 text-xl font-bold">${props.price}</p>

            <button class="block mx-auto bg-transparent hover:bg-[rgba(62,42,109,0.95)] text-indigo-700 font-bold hover:text-white py-2 px-7 border border-indigo-500 hover:border-transparent rounded">
                Add Cart
            </button>
        </div>
    );
};

export default ItemCard;