import React from 'react';

const ItemCard = props => {
    return (
        <div className="bg-violet-200 w-64 text-center p-5 rounded-lg shadow-2xl">
            <img src={props.img} className="rounded-xl h-32 mx-auto" alt="Display" />
            <p className="pt-5 text-xl italic">{props.desc}</p>

            <p className="pt-5 pb-5 text-xl font-bold">${props.price}</p>

            <button className="block mx-auto bg-transparent hover:bg-[rgba(62,42,109,0.95)] text-indigo-700 font-bold hover:text-white py-2 px-7 border border-indigo-500 hover:border-transparent rounded"
                onClick={() => {props.addItemHandler({desc: props.desc, id: props.id, price: props.price, quantity: 1})}}
            >
                Add Cart
            </button>
        </div>
    );
};

export default ItemCard;