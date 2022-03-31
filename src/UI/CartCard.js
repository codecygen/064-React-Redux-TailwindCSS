import React from 'react'

import { ImBin } from "react-icons/im";

const CartCard = props => {
    return (
        <div class="my-2 flex flex-row bg-slate-100 rounded-xl shadow-xl">
            <div class="h-32 w-2/6">
                <img src={props.img} class="h-full mx-auto rounded-xl" alt="Item Display" />
            </div>

            <div class="w-3/6 inline-flex justify-center items-center">
                <p class="text-xl italic pr-8">{props.desc}</p>
                <div class="flex flex-row items-center">
                    <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                        -
                    </button>
                    <p class="px-2 py-2 bg-slate-200">5</p>
                    <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                        +
                    </button>
                </div>
            </div>

            <div class="w-1/6 flex flex-col items-center justify-center">
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                <ImBin />
                </button>
                <p class="text-xl font-bold pt-10">${props.price}</p>
            </div>
        </div>
    );
};

export default CartCard;