import React from 'react'

const CartCard = props => {
    return (
        <div class="m-5 flex flex-row items-center bg-white rounded-xl">
            <div class="h-32 w-1/3">
                <img src={props.img} class="h-full mx-auto rounded-xl" />
            </div>

            <div class="w-1/3 flex flex-row">
                <p class="text-xl italic">{props.desc}</p>
                <button>hey</button>
            </div>

            <p class="p-5 pb-5 text-xl font-bold">${props.price}</p>
        </div>
    );
};

export default CartCard;